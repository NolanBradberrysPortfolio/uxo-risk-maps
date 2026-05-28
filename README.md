# Southeast Asia UXO Risk Gradients

Interactive public-source risk map for leftover ordnance likelihood in the Philippines, Laos, Cambodia, Thailand, Bali, Indonesia, all Indonesia, and Malaysia.

Open locally through a web server:

```powershell
python -m http.server 8787
```

Then visit `http://localhost:8787`.

This is an administrative-area probability model. It is not a clearance map, not a route safety tool, and not guidance for excavation or handling ordnance.

Key files:

- `index.html` - Leaflet viewer.
- `app.js` and `styles.css` - frontend code.
- `scripts/build_risk_map.py` - builds the GeoJSON layer from source tables and boundaries.
- `data/risk_features.geojson` - generated map features.
- `data/sources.json` - source inventory with URLs.
- `docs/methodology.md` - scoring method and limitations.
