# Adversarial Review Log

Purpose: coordinate repeated adversarial audits of the UXO risk map without re-finding the same issue.

Rules for reviewers:

- Read this log before reviewing.
- Do not repeat a finding already listed here unless the current files still show it unresolved.
- A finding needs a concrete area, source conflict, missing source, overbroad inference, UI ambiguity, or scoring inconsistency.
- Prefer primary or strong public sources. Distinguish evidence from inference.
- Do not ask for impossible proof of no ordnance. Challenge "screened very low" only when there is retained or discoverable evidence that contradicts the low rating, or when the screening basis is materially misleading.
- Report file path, feature name, current score/band, source URL or local evidence, and recommended correction.

Cycle status key:

- `open`: finding needs triage.
- `accepted`: valid and should be fixed.
- `fixed`: incorporated into source/model/UI and regenerated.
- `rejected`: reviewed and not incorporated, with reason.

## Fixed Prior Findings Before This Log

- Cambodia name aliases for Siem Reap, Preah Sihanouk, and others.
- Cambodia SHA-heavy CMR confidence caveats.
- C-only evidence capped below elevated band.
- Thailand Surin 2025 incident source split.
- Malaysia Sabah sources split by incident.
- Unsupported broad Sabah/Sarawak, Papua, and Mindanao inferences downgraded.
- Low-end band changed from ambiguous background/no-public-evidence to visible `screened very low`.
- Coverage counter added: all mapped areas rated, zero unrated.
- Popup/source/caveat visibility improved.

## Cycle Findings

### Cycle 1 - Agents Carver/Nash/Fermat/Socrates

- `fixed` Philippines Cebu: screened-low contradicted by 2025 Cebu City 1,000-pound vintage GP bomb and Talisay City UXO reports. Raised to `possible` with retained Cebu sources.
- `fixed` Philippines Nueva Vizcaya: screened-low contradicted by 2025 Santa Fe large WWII-era UXO report. Raised to `low residual`.
- `fixed` Philippines Rizal: screened-low contradicted by 2025 Antipolo 1,500+ vintage munitions report. Raised to `possible`.
- `fixed` Philippines Manila: current note relied on inference only and missed 2025 UP College of Medicine vintage bombs/Japanese grenade report. Raised to `possible` and sourced.
- `fixed` Bali Buleleng and Jembrana: screened-low contradicted by district-level grenade/ordnance reports. Raised to `low residual` with caveats.
- `fixed` Bali Badung/Kota Denpasar: Denpasar/Ngurah Rai airfield evidence was assigned to Kota Denpasar even though the airport is in Badung. Airfield basis moved to Badung; Kota Denpasar downgraded to screened-low.
- `fixed` Indonesia Maluku: Kota Ambon and Maluku Tengah C-grade inferences lacked retained external source IDs; added Laha/Liang/Ambon sources. Seram Bagian Barat and Seram Bagian Timur lacked retained regency-specific evidence and were downgraded to screened-low.
- `fixed` Malaysia Timur Laut, Jasin, and Kota Belud: screened-low contradicted by confirmed public WWII UXO reports. Raised to `possible` or `low residual` based on incident strength.
- `fixed` Malaysia Kota Bharu, Muar, Segamat, Tampin, Batu Pahat, Mersing, and Kluang: screened-low missed WWII Malaya/Johore campaign-route evidence. Raised to low residual C-grade inferences, not area baselines.
- `fixed` Laos AP mine under-attribution: Mine Action Review CMR 2025 reports AP mines destroyed during 2024 operations in multiple provinces. Added province-specific AP mine contamination type and notes; no band changes.
- `fixed` Cambodia Oddar Meanchey/Preah Vihear/current border CMR: added 2026 incident and CMAC survey-claim caveats without merging unvalidated survey claims into area metrics.
- `fixed` Thailand Sa Kaeo and Surin: added Sa Kaeo 2025 PMN-2/current mine incident sources and Surin 2026 BM-21 UXO clearance note; Sa Kaeo raised to recent-incident floor.
- `fixed` UI coverage counter: it now computes rated/total instead of total/total.
- `fixed` UI unknown-band rendering: invalid/missing risk bands now render as `unknown`, count as unrated/invalid, and no longer fall back to screened-low.
- `fixed` Build validation: generation now fails if a feature has an invalid risk band or references a missing source ID.

### Cycle 2 - Agents Huygens/Erdos/Confucius/Mill

- `fixed` Philippines Albay, Pangasinan, Benguet, Nueva Ecija, Cagayan, and Pampanga: screened-low contradicted by retained public WWII/vintage UXO reports. Raised to `low residual` or `possible` based on incident strength.
- `fixed` Philippines Davao del Sur: prior score used a Davao City/Lanang Monitor item that is outside the Davao del Sur polygon and did not support WWII-era wording. Davao del Sur downgraded to screened-low with an explicit boundary caveat.
- `fixed` Malaysia Kinta, Sandakan, Kuala Lumpur, and Kudat: screened-low contradicted by direct public WWII UXO or fatal blast reports. Raised to `possible` or `low residual`.
- `fixed` Malaysia Kampar, Kubang Pasu, Muallim, and Beaufort: screened-low missed retained AWM battle/campaign evidence. Raised to low residual C-grade inferences.
- `fixed` Indonesia Jayapura, Sarmi, Teluk Bintuni, Halmahera Utara, Kota Surabaya, Semarang, Deli Serdang, and Simalungun: screened-low contradicted by retained public UXO reports or WWII airfield/battle evidence. Raised to `low residual` or `possible`.
- `fixed` Bali Karang Asem and Tabanan: screened-low contradicted by retained active/suspected grenade reports. Raised to `low residual` with caveats.
- `fixed` Thailand Sa Kaeo, Surin, and Si Sa Ket: added 2026 mine-clearance and casualty sources/notes without changing already-likely bands except where current evidence supports the existing floor.
- `fixed` Methodology: Bali paragraph updated after Denpasar reassignment and Buleleng/Jembrana/Karang Asem/Tabanan additions.
- `fixed` Mobile UI: screened-low caveat moved directly under coverage so the dominant class caveat is visible before the map on phone viewports.

### Cycle 3 - Agents Plato/Hegel/Lorentz/Herschel

- `fixed` Indonesia Kota Kendari, Konawe Selatan, Manokwari, Kota Manado, Kota Kupang, Seram Bagian Barat, Seram Bagian Timur, Bantul, Bone, Kota Banda Aceh, Belitung, and Kota Balikpapan: screened-low or inference-only records contradicted by retained public EOD/UXO reports or misplaced airfield evidence. Raised where warranted and sourced.
- `fixed` Indonesia Jayapura/Kota Jayapura integrity: removed duplicate `Jayapura` rule key and downgraded/reworded Kota Jayapura because the retained ANTARA source is underwater WWII heritage evidence, not direct UXO/ERW evidence.
- `fixed` Philippines Iloilo, Bohol, Negros Occidental, Antique, Batangas, Bulacan, La Union, NCR Second/Third/Fourth Districts, and Palawan: screened-low missed direct public vintage-bomb reports or Palawan campaign/airfield exposure. Raised to `low residual` or `possible` as evidence strength allowed.
- `fixed` Malaysia Tawau, Perak Tengah, Jempol, Tampin, Segamat, Batu Pahat, and Kuching: added direct UXO/EOD reports. Tampin, Segamat, Batu Pahat, and Jempol moved to `possible`; Kuching remains screened-low because the retained item is police-described training UXO, not area contamination.
- `fixed` Cambodia border-province wording: 2026 CMAC border CMR reporting is now labeled as incomplete survey evidence linked to past border conflicts, not a validated 2025-conflict area metric.
- `fixed` Cambodia Kep/baseline-only typing: baseline-only provinces now show ODC/CMAA baseline mine/ERW records as unspecified/not MAR area-scored, with baseline survey-date context.
- `fixed` Laos AP mine tags: AP references now say "mines destroyed during 2024 CMR operations, not an AP mined-area estimate" and cite Mine Action Review mines caveats where used.
- `fixed` Thailand Buri Ram and Trat: added 2025 current clearance/find notes and sources. Buri Ram remains `elevated`; Trat remains `likely` with AP/UXO find details.
- `fixed` Thailand disputed-claim caveat: 2025 alleged new mine-emplacement wording now notes Cambodia's denial and MAR's unverified-at-publication caveat, while preserving later province-specific incident notes.
- `fixed` UI stale details bug: changing map focus or search now clears the prior selected-area details and popup so the side panel cannot show a hidden area's sources.
- `fixed` Source traceability: generated features now cite exact geoBoundaries API layer IDs by country/admin level rather than only the geoBoundaries homepage.
- `fixed` Build integrity: generator now parses its own rule dictionaries and fails on duplicate literal keys before silent Python overwrites can reach the published data.

### Cycle 4 - Agents Ampere/Heisenberg/Sagan/Chandrasekhar

- `fixed` Philippines Ifugao, Mountain Province, and Leyte: screened-low or low residual ratings missed grouped/repeated vintage bomb reports. Raised Ifugao, Mountain Province, and Leyte to `possible` with direct sources.
- `fixed` Philippines Compostela Valley: boundary layer retained the stale pre-2019 name. Display now reads `Davao de Oro (formerly Compostela Valley)` with PSGC caveat while preserving the original source shape name.
- `fixed` Indonesia Kota Bekasi, Kota Yogyakarta, Sleman, Timor Tengah Utara, Pinrang, Bandung, Kota Tanjung Pinang, Kota Banjarmasin, and Kota Tangerang Selatan: screened-low missed direct 2025 grenade/mortar/UXO reports. Raised to `low residual` or `possible` with source caveats.
- `fixed` Indonesia Keerom: possible score relied on aircraft-wreckage heritage evidence, not UXO/EOD evidence. Downgraded to `low residual` heritage-context wording.
- `fixed` Bali Tabanan: replaced mutable BaliPost tag-page source with the exact article URL.
- `fixed` Malaysia Lahad Datu source: replaced fragile Bernama link with a working Malay Mail/Bernama republication URL.
- `fixed` Malaysia Kota Kinabalu, Sarikei, Beaufort, Labuan, Miri, and Jasin: added direct public WWII bomb/UXO reports; raised Kota Kinabalu and Sarikei to `low residual`, and Beaufort, Labuan, Miri, and Jasin to `possible` or stronger notes.
- `fixed` Malaysia default screened-low sources: removed `awm_malaya_invasion` from default Malaysia screened-low features and kept it only on route-supported rules.
- `fixed` Thailand Bangkok: screened-low missed the 2014 buried WWII bomb fatal explosion. Raised Bangkok to `possible` as non-AP UXO evidence.
- `fixed` Thailand Buri Ram, Si Sa Ket, Ubon Ratchathani, and Surin: added a caveated RTA-attributed 2025 unexploded-bomb/shelling warning source.
- `fixed` Laos Khammouane: added November 2025 BLU-26 accident evidence and updated `data_as_of`.
- `fixed` Cambodia Oddar Meanchey, Siem Reap, and Kratie: added 2025 anti-tank mine deminer fatalities, 2025 RPG child fatalities, and Kratie school ERW cache evidence.
- `fixed` Cambodia baseline date ranges: impossible ODC/CMAA survey-date outliers, including an Oddar Meanchey 1913 row, are excluded from displayed min/max dates and counted in the baseline summary.
- `fixed` Boundary traceability: every generated feature now carries `source_shape_name`, and generation fails if it is missing.

### Cycle 5 - Agents Halley/Bacon/Wegener/Planck

- `fixed` Thailand Ubon Ratchathani: likely score was over-supported by disputed 2025 new-emplacement allegations plus only 0.587 km2 AP area. Downgraded to `elevated` while retaining the caveated current note.
- `fixed` Indonesia Kota Tarakan and Pulau Morotai: possible scores relied only on generic WWII campaign/base history without direct UXO/EOD reports. Downgraded to high `low residual` with explicit no-direct-report caveats.
- `fixed` Philippines Lanao del Norte, Zamboanga del Sur, Samar, Eastern Samar, and Northern Samar: possible scores relied on adjacency or national/general conflict context rather than retained province-specific evidence. Downgraded to `low residual`.
- `fixed` Philippines Tarlac, Camarines Norte, Bukidnon, South Cotabato, Surigao del Norte, Agusan del Norte, Sultan Kudarat, and Oriental Mindoro: screened-low missed public vintage bomb/UXO reports or Monitor-cited evidence. Raised to `low residual` or `possible` with caveats.
- `fixed` Indonesia Cirebon, Kota Bandung, Malang, Langkat, Bandung Barat, Pasuruan, Bogor, Gowa, Ciamis, Garut, Ponorogo, Labuhan Batu, Maros, Enrekang, Dompu, and Bali/Bangli: screened-low missed public mortar, landmine, or grouped UXO reports. Raised to `low residual` or `possible`.
- `fixed` Malaysia Kota Tinggi, Johor Bahru, Kulaijaya/Kulai, Besut, Kuala Pilah, Seremban, Rembau, and Jelebu: screened-low missed district UXO reports or aggregate district counts. Raised to `low residual` or `possible`.
- `fixed` Malaysia Kulaijaya and Ledang stale names: displays now read `Kulai (formerly Kulaijaya)` and `Tangkak (formerly Ledang)` while preserving the source boundary names.
- `fixed` Philippines/Indonesia/Malaysia data currency: all ADM2 rule-based features now carry a `data_as_of` review cutoff through 2026-05-28.
- `reviewed` Philippines Albay source brittleness: direct PNA URL remains retained because search and current retrieval expose the article text; no replacement source was added this cycle.
