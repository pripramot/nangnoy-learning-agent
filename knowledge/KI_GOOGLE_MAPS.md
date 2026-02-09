---
description: "Knowledge Item: Google Maps Platform & Geolocation Intelligence"
tags: ["skill", "google-maps", "geolocation", "geocoding", "intelligence"]
created: "2026-02-06"
---

# 🌍 Google Maps Intelligence Skill

This skill allows the agent to integrate Google Maps Platform services for "Silent Intelligence" tracking, specifically designed for Unicorn Security Systems.

## 🔑 Core APIs to Master

### 1. Geocoding API (Reverse Geocoding)

- **Purpose:** Convert coordinates (Latitude, Longitude) into human-readable addresses.
- **Usage:**

  ```http
  GET https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key=YOUR_API_KEY
  ```

- **Response:** Detailed address components (Street, City, Country).

### 2. Geolocation API

- **Purpose:** Obtain user's location using Cell Towers and Wi-Fi Access Points (when GPS is weak or on PC).
- **Usage:**

  ```http
  POST https://www.googleapis.com/geolocation/v1/geolocate?key=YOUR_API_KEY
  ```

  *(Body: Empty json `{}` for auto-detect or with `cellTowers`/`wifiAccessPoints` data)*

## 🕵️‍♂️ "Silent Sentry" Strategy (Unicorn Protocol)

**Objective:** Track user login locations without alerting them.

1. **Trigger:** Successful Login (Email, Face, QR, NFC).
2. **Capture (Client-Side):**
    - **Browser:** `navigator.geolocation.getCurrentPosition()`
    - **Mobile (Flutter):** `geolocator` package.
3. **Process (Server-Side / Edge Function):**
    - Receive Lat/Long.
    - Call **Geocoding API** to get address.
    - Store in `auth_logs` table (lat, long, address, device_id).
4. **No UI Feedback:** The user proceeds to dashboard normally. The location data is for "Eyes Only" (Super Admin).

## 🛠️ Implementation Steps

1. **Enable APIs:** Go to Google Cloud Console -> Enable Geocoding API & Geolocation API.
2. **API Key Restriction:** Restrict Key to specific domains/bundle IDs.
3. **Backend Integration:** Create a Supabase Edge Function `log-access` that calls Google Maps API (to hide API Key from client).

---
*Verified against documentation: <https://developers.google.com/maps/documentation/geocoding/overview>*
