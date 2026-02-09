---
name: Geo-Forensic Intelligence
description: Advanced skill for geospatial tracking, reverse geocoding, and AI-driven forensic analysis using SHAP.
---

# Geo-Forensic Intelligence (GeoForensics)

This skill empowers "Nangnoy" with capabilities to analyze vehicle movements, reconstruct timelines from geospatial data, and provide explainable AI insights for anomaly detection.

## 1. Core Capabilities

### 📍 Geospatial Tracking & Reverse Geocoding

- **Objective:** Convert raw GPS coordinates into human-readable locations for timeline reconstruction.
- **Tools:** Google Maps Geocoding API (via SerpApi/MCP).
- **Key Functions:**
  - `reverse_geocode(lat, lng)`: Identifies the exact address or place ID of a vehicle ping.
  - `route_reconstruction(points)`: Interpolates paths between sparse data points.
  - **Privacy Mode:** Auto-redact sensitive locations (e.g., home addresses) unless a warrant is active.

### 🔍 AI-Driven Anomaly Detection (Forensic)

- **Objective:** Identify suspicious vehicle behavior (e.g., deviation from assigned routes, after-hours usage).
- **Tools:** Python `shap` library, `scikit-learn` (Isolation Forest/XGBoost).
- **Explainability:** Use SHAP (SHapley Additive exPlanations) to explain *why* a trip was flagged.
  - *Example:* "Flagged as anomalous because `distance_from_base` > 500km AND `time` = 03:00 AM."

### 📜 Digital Chain of Custody

- **Objective:** Ensure all data accessed is logged for audit.
- **Implementation:**
  - Every API call to Google Maps is logged in `security_actions` table.
  - Hash verification for exported reports to prevent tampering.

## 2. Technical Implementation Guidelines

### A. Environment Setup

- Ensure `.env` contains `SERPAPI_KEY`.
- Use `mcp_config.json` to route SerpApi requests securely.

### B. Python Scripting Pattern (Forensic Analysis)

```python
import shap
import pandas as pd
from sklearn.ensemble import IsolationForest

def explain_anomaly(data, model, instance):
    """
    Generates a SHAP force plot to explain a specific anomaly.
    """
    explainer = shap.Explainer(model)
    shap_values = explainer(data)
    # Visualizing the specific instance
    shap.plots.force(shap_values[instance])
```

### C. Google Maps Integration (via MCP/SerpApi)

- Prefer `Google Maps Places API` for semantic location understanding (e.g., "Parked at Casino" vs "Parked at 123 Main St").
- Rate Limit Strategy: Cache known locations for 30 days (compliant with ToS).

## 3. Ethical & Legal Guardrails

- **Warrant Requirement:** Deep history analysis (>24 hours) typically requires a system-logged warrant ID.
- **Data Minimization:** Only query the timeframes specified in the investigation scope.
- **Transparency:** All AI findings must be accompanied by a SHAP explanation chart—never a "black box" accusation.
