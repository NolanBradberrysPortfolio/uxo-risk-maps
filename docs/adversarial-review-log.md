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
