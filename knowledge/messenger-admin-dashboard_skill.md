---
name: messenger-admin-dashboard
description: Build Messenger-inspired admin dashboards with Supabase backend. Supports CRUD operations, real-time updates, authentication, and full Messenger chat features (auto-archive, typing indicators, reactions).
---

# Messenger-Style Admin Dashboard Skill

## Overview

This skill enables the creation of Facebook Messenger-inspired admin dashboards for managing data with Supabase backend.

## Features

- 💬 **Messenger UI**: Familiar Facebook Messenger interface
- 🔐 **Authentication**: Supabase Auth with admin roles
- 🚗 **CRUD Operations**: Create, Read, Update, Delete
- ⚡ **Real-time Updates**: Live data sync via Supabase Realtime
- 📊 **Statistics Cards**: Visual overview of data

## Tech Stack

- **Frontend**: React/Next.js + Docusaurus
- **Backend**: Supabase (Auth, Database, Realtime)
- **Styling**: CSS-in-JS (Messenger colors)

## Color Palette

```css
primary: '#0084FF',     /* Messenger Blue */
secondary: '#F0F2F5',   /* Background */
accent: '#E4E6EB',      /* Borders */
text: '#050505',        /* Main text */
textLight: '#65676B',   /* Secondary text */
success: '#31A24C',     /* Green */
warning: '#F7B928',     /* Yellow */
danger: '#FA383E',      /* Red */
```

## Quick Start

### 1. Create Admin Account

```python
# Use Supabase Admin API
response = requests.post(
    f"{SUPABASE_URL}/auth/v1/admin/users",
    headers={"apikey": SERVICE_KEY, "Authorization": f"Bearer {SERVICE_KEY}"},
    json={
        "email": "admin@yoursite.com",
        "password": "SecurePassword123!",
        "email_confirm": True,
        "user_metadata": {"role": "super_admin"}
    }
)
```

### 2. Create Dashboard Page

```tsx
// src/pages/admin.tsx
export default function AdminDashboard() {
  const [items, setItems] = useState([]);
  
  useEffect(() => {
    // Realtime subscription
    const channel = supabase
      .channel('admin-updates')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'your_table' }, () => {
        fetchItems();
      })
      .subscribe();
  }, []);
  
  return (
    <div className="messenger-admin">
      <div className="messenger-sidebar">
        {/* Item list */}
      </div>
      <div className="messenger-main">
        {/* Detail view + Edit forms */}
      </div>
    </div>
  );
}
```

### 3. RLS Policies

```sql
-- Admin only access
CREATE POLICY "Admin Full Access" ON your_table
FOR ALL USING (
    EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role IN ('admin', 'super_admin'))
);
```

## Key Components

### Sidebar (Chat List Style)

```tsx
<div className="chat-item">
  <img src={...} className="chat-avatar" />
  <div className="chat-info">
    <div className="chat-name">{item.name}</div>
    <div className="chat-preview">{item.description}</div>
  </div>
  <span className="status-badge status-{item.status}">{item.status}</span>
</div>
```

### Modal Form

```tsx
<div className="modal-overlay">
  <div className="modal">
    <h2>Edit Item</h2>
    <form>
      <div className="input-group">
        <label>Field Name</label>
        <input type="text" />
      </div>
      <button className="btn btn-primary">Save</button>
    </form>
  </div>
</div>
```

## Files Created

- `unicorn-docs/src/pages/admin.tsx` - Main dashboard
- `scripts/create_admin.py` - Admin account creator

## Related

- Supabase Auth Skill
- Supabase Flutter Skill
- Silent Sentry Schema
