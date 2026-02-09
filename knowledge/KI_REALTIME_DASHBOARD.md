# Knowledge Item: Real-time Car Rental Dashboard (Big Brother) 🚗👁️

**Objective:** Create a centralized dashboard to monitor vehicle status and rentals in real-time, leveraging Supabase's "Realtime" capabilities.

## 1. Database Schema (Supabase) 💾

> **Note:** These tables must be created in the "Big Brother" (Supabase) database.

### `public.vehicles` (ทะเบียนรถ)

| Column | Type | Description |
| :--- | :--- | :--- |
| `id` | uuid | Primary Key |
| `plate` | text | License Plate (e.g., "1กก-9999") |
| `model` | text | Vehicle Model (e.g., "Toyota Camry") |
| `status` | text | 'available', 'rented', 'maintenance', 'stolen' |
| `current_location` | jsonb | `{ "lat": 13.7563, "lng": 100.5018 }` |
| `last_updated` | timestamp | Last GPS ping time |

### `public.rentals` (การเช่า)

| Column | Type | Description |
| :--- | :--- | :--- |
| `id` | uuid | Primary Key |
| `vehicle_id` | uuid | FK -> vehicles.id |
| `user_id` | uuid | FK -> auth.users.id (Renter) |
| `start_time` | timestamp | Start of rental |
| `end_time` | timestamp | Expected return |
| `status` | text | 'active', 'completed', 'overdue' |

### ⚡ Realtime Configuration

- **Replica Identity:** FULL (on both tables)
- **Publication:** `supabase_realtime` must include `vehicles` and `rentals`.

## 2. Dashboard UI (React/Docusaurus) 🖥️

**Path:** `/dashboard/car-rental`

### Components

1. **`MapOverview`**:
    - Uses Google Maps API.
    - Renders Markers for all vehicles.
    - Color-coded Markers:
        - 🟢 Available
        - 🔴 Rented
        - 🟡 Maintenance
    - Updates position live via `supabase.channel('vehicles').on(...)`

2. **`LiveFeed`**:
    - Sidebar showing recent events (Rent start, Return, Status change).

3. **`StatsPanel`**:
    - Summary Layout: "Total Fleet: 50", "Active Rentals: 12", "Revenue Today: ฿2,000"

## 3. Implementation Steps 🛠️

1. **Schema Execution:** Run SQL to create tables.
2. **Seeding:** Insert dummy data for 5-10 cars.
3. **Frontend:** Build `src/pages/dashboard/car-rental.tsx`.
4. **Integration:** Connect `SupabaseClient` to listen for Postgres Changes.
