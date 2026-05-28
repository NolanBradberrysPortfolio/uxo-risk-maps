const RISK_BANDS = [
  "very likely",
  "likely",
  "elevated",
  "possible",
  "low residual",
  "screened very low",
];

const COLORS = {
  "very likely": "#7d1717",
  "likely": "#d65337",
  "elevated": "#ee9b45",
  "possible": "#f1cf63",
  "low residual": "#a7c8a1",
  "screened very low": "#b9b4dc",
  unknown: "#111827",
};

const BOUNDS = {
  ALL: [[-11.4, 92.0], [22.8, 128.8]],
  KHM: [[10.2, 102.2], [14.9, 107.8]],
  LAO: [[13.8, 100.0], [22.7, 107.9]],
  THA: [[5.5, 97.0], [20.6, 106.3]],
  PHL: [[4.4, 116.2], [21.3, 127.3]],
  IDN: [[-11.3, 94.3], [6.5, 141.2]],
  BALI: [[-8.95, 114.35], [-8.0, 115.75]],
  MYS: [[0.7, 99.4], [7.6, 119.5]],
};

let allFeatures = null;
let sources = null;
let geoLayer = null;
let selectedLayer = null;

const map = L.map("map", { zoomControl: false }).setView([9, 111], 5);
L.control.zoom({ position: "bottomright" }).addTo(map);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 12,
  attribution: "&copy; OpenStreetMap contributors",
}).addTo(map);

function styleFeature(feature) {
  const band = normalizedBand(feature);
  const evidence = feature.properties.evidence || "";
  const lowConfidence = feature.properties.confidence === "low" || feature.properties.confidence === "lower";
  const fillOpacity = lowConfidence ? 0.48 : evidence.startsWith("D") ? 0.7 : 0.72;
  return {
    color: lowConfidence ? "#6a736d" : "#33413a",
    dashArray: lowConfidence ? "2 4" : evidence.startsWith("C") || evidence.startsWith("D") ? "4 3" : "",
    fillColor: COLORS[band],
    fillOpacity,
    opacity: 0.72,
    weight: lowConfidence ? 0.9 : 0.7,
  };
}

function activeFilter() {
  return document.getElementById("regionFilter").value;
}

function filteredFeatures() {
  const filter = activeFilter();
  const q = document.getElementById("searchBox").value.trim().toLowerCase();
  return {
    type: "FeatureCollection",
    features: allFeatures.features.filter((feature) => {
      const p = feature.properties;
      const regionOk =
        filter === "ALL" ||
        p.country_code === filter ||
        (filter === "BALI" && p.focus === "bali");
      const searchOk =
        !q ||
        searchableText(p).includes(q);
      return regionOk && searchOk;
    }),
  };
}

function visibleRatedCounts() {
  const visible = filteredFeatures().features;
  const invalid = visible.filter((feature) => normalizedBand(feature) === "unknown").length;
  return {
    total: visible.length,
    screened: visible.filter((feature) => feature.properties.risk_band === "screened very low").length,
    unrated: invalid,
    rated: visible.length - invalid,
  };
}

function searchableText(p) {
  const baselineDistricts = (p.cambodia_baseline?.top_districts || [])
    .map((item) => item.district)
    .join(" ");
  return [
    p.name,
    p.source_shape_name,
    p.country,
    p.risk_band,
    p.evidence,
    p.notes,
    (p.contamination_types || []).join(" "),
    (p.source_ids || []).join(" "),
    baselineDistricts,
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();
}

function renderLayer() {
  if (geoLayer) {
    geoLayer.remove();
  }
  selectedLayer = null;
  geoLayer = L.geoJSON(filteredFeatures(), {
    style: styleFeature,
    onEachFeature: (feature, layer) => {
      const p = feature.properties;
      const tip = `${p.name}: ${displayBand(p)} | ${shortEvidence(p.evidence)} | confidence ${confidenceText(p)}`;
      layer.bindTooltip(tip, { sticky: true });
      layer.on("click", () => {
        if (selectedLayer) {
          geoLayer.resetStyle(selectedLayer);
        }
        selectedLayer = layer;
        layer.setStyle({ weight: 2.2, color: "#101614", fillOpacity: 0.86 });
        showDetails(p);
        layer.bindPopup(popupHtml(p)).openPopup();
      });
    },
  }).addTo(map);

  const filter = activeFilter();
  const bounds = BOUNDS[filter] || BOUNDS.ALL;
  if (filteredFeatures().features.length) {
    if (filter === "ALL" || document.getElementById("searchBox").value.trim()) {
      map.fitBounds(geoLayer.getBounds(), { padding: [18, 18] });
    } else {
      map.fitBounds(bounds, { padding: [18, 18] });
    }
  }
  updateCoverage();
}

function showDetails(p) {
  const metrics = Object.entries(p.metrics || {})
    .filter(([, value]) => Number(value) > 0)
    .map(([key, value]) => `<dt>${escapeHtml(key.replaceAll("_", " "))}</dt><dd>${escapeHtml(String(value))}</dd>`)
    .join("");
  const statusRows = [
    p.data_as_of ? `<dt>Data as of</dt><dd>${escapeHtml(p.data_as_of)}</dd>` : "",
    p.survey_status ? `<dt>Survey status</dt><dd>${escapeHtml(p.survey_status)}</dd>` : "",
    p.screening_status ? `<dt>Screening</dt><dd>${escapeHtml(p.screening_status)}</dd>` : "",
    `<dt>Confidence</dt><dd>${escapeHtml(confidenceText(p))}</dd>`,
  ].join("");

  document.getElementById("details").innerHTML = `
    <h2>${escapeHtml(p.name)}</h2>
    <dl>
      <dt>Risk</dt><dd>${p.risk_score}/100, ${escapeHtml(displayBand(p))}</dd>
      <dt>Evidence</dt><dd>${escapeHtml(p.evidence)}</dd>
      <dt>Types</dt><dd>${escapeHtml(p.contamination_types.join(", "))}</dd>
      <dt>Notes</dt><dd>${escapeHtml(p.notes)}</dd>
      ${screeningBasisHtml(p.screening_basis)}
      ${statusRows}
      ${metrics}
      <dt>Sources</dt><dd>${sourceLinkList(p.source_ids)}</dd>
    </dl>
  `;
}

function popupHtml(p) {
  const metrics = Object.entries(p.metrics || {})
    .filter(([, value]) => Number(value) > 0)
    .map(([key, value]) => `<div class="popup-row"><strong>${escapeHtml(key.replaceAll("_", " "))}:</strong> ${escapeHtml(String(value))}</div>`)
    .join("");
  const status = [
    `<div class="popup-row"><strong>Confidence:</strong> ${escapeHtml(confidenceText(p))}</div>`,
    p.screening_status ? `<div class="popup-row"><strong>Screening:</strong> ${escapeHtml(p.screening_status)}</div>` : "",
    p.survey_status ? `<div class="popup-row"><strong>Survey status:</strong> ${escapeHtml(p.survey_status)}</div>` : "",
    p.data_as_of ? `<div class="popup-row"><strong>Data as of:</strong> ${escapeHtml(p.data_as_of)}</div>` : "",
  ].join("");
  return `
    <div class="popup-title">${escapeHtml(p.name)}</div>
    <div class="popup-row"><strong>Country:</strong> ${escapeHtml(p.country)}</div>
    <div class="popup-row"><strong>Risk:</strong> ${p.risk_score}/100, ${escapeHtml(displayBand(p))}</div>
    <div class="popup-row"><strong>Evidence:</strong> ${escapeHtml(p.evidence)}</div>
    ${status}
    ${metrics}
    <div class="popup-note">${escapeHtml(p.notes)}</div>
    ${popupScreeningBasisHtml(p.screening_basis)}
    <div class="popup-row"><strong>Sources:</strong> ${sourceLinkList(p.source_ids)}</div>
  `;
}

function updateCoverage() {
  const counts = visibleRatedCounts();
  document.getElementById("coverage").textContent =
    `${counts.rated}/${counts.total} visible areas rated | ${counts.unrated} unrated/invalid | ${counts.screened} screened very low`;
}

function normalizedBand(feature) {
  const band = feature.properties?.risk_band;
  return RISK_BANDS.includes(band) ? band : "unknown";
}

function displayBand(p) {
  return RISK_BANDS.includes(p.risk_band) ? p.risk_band : `invalid (${p.risk_band || "missing"})`;
}

function screeningBasisHtml(basis) {
  if (!basis) return "";
  return `
    <dt>Screening basis</dt>
    <dd>${escapeHtml(basis.source_categories_checked)}. ${escapeHtml(basis.absence_claim)}</dd>
  `;
}

function popupScreeningBasisHtml(basis) {
  if (!basis) return "";
  return `<div class="popup-row"><strong>Basis:</strong> ${escapeHtml(basis.source_categories_checked)}. ${escapeHtml(basis.absence_claim)}</div>`;
}

function sourceLinkList(ids = []) {
  return ids
    .filter((id) => sources[id])
    .map((id) => {
      const source = sources[id];
      return `<a href="${source.url}" target="_blank" rel="noreferrer">${escapeHtml(source.title)} <span class="source-id">(${escapeHtml(id)})</span></a>`;
    })
    .join(", ");
}

function confidenceText(p) {
  return p.confidence || "not separately assessed";
}

function shortEvidence(value) {
  if (!value) return "evidence n/a";
  return value.split(":")[0];
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

async function init() {
  const [featuresResponse, sourcesResponse] = await Promise.all([
    fetch("data/risk_features.geojson"),
    fetch("data/sources.json"),
  ]);
  allFeatures = await featuresResponse.json();
  sources = await sourcesResponse.json();
  renderLayer();
}

document.getElementById("regionFilter").addEventListener("change", renderLayer);
document.getElementById("searchBox").addEventListener("input", renderLayer);

init().catch((error) => {
  document.getElementById("details").innerHTML = `<h2>Load Error</h2><p>${escapeHtml(error.message)}</p>`;
});
