---
name: supabase-auth
description: Comprehensive guide for Supabase Authentication including Google OAuth, CLI, and client integration.
---
# Supabase Auth & Google OAuth Skill 🔐

This skill provides step-by-step guidance for implementing Supabase Authentication with Google OAuth.

## 🧠 Core Concepts

### Authentication vs Authorization

- **Authentication**: Verify WHO the user is (login)
- **Authorization**: Verify WHAT the user can access (permissions via RLS)

### Key Components

| Component | Purpose |
|-----------|---------|
| **Supabase Auth** | Manages users, sessions, JWTs |
| **RLS (Row Level Security)** | Database-level access control |
| **Anon Key** | Public client-side access (used in frontend) |
| **Service Role Key** | Server-side admin access (NEVER expose!) |
| **Personal Access Token** | CLI/Management API access |

---

## 🔑 Google OAuth Setup (Step-by-Step)

### Step 1: Google Cloud Console Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create or select a project
3. Navigate to **APIs & Services > Credentials**
4. Click **Create Credentials > OAuth Client ID**
5. Select **Web Application**

### Step 2: Configure OAuth Client

Add these URLs:

**Authorized JavaScript Origins:**

```
https://your-domain.com
http://localhost:3000  (for development)
```

**Authorized Redirect URIs:**

```
https://<PROJECT_REF>.supabase.co/auth/v1/callback
http://127.0.0.1:54321/auth/v1/callback  (for local Supabase)
```

> **TIP**: Get the callback URL from Supabase Dashboard > Authentication > Providers > Google

### Step 3: Configure Supabase Dashboard

1. Go to [Supabase Dashboard](https://supabase.com/dashboard)
2. Select your project
3. Navigate to **Authentication > Providers > Google**
4. Enable Google provider
5. Paste **Client ID** and **Client Secret** from Google

### Step 4: Set Redirect URLs

1. Go to **Authentication > URL Configuration**
2. Set **Site URL**: `https://your-domain.com`
3. Add **Redirect URLs**:
   - `https://your-domain.com/auth/callback`
   - `https://your-domain.com/docs/intro`

---

## 💻 Client-Side Implementation

### JavaScript/React Example

```typescript
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://<PROJECT_REF>.supabase.co',
  '<ANON_KEY>'
);

// Sign in with Google (Implicit Flow)
async function signInWithGoogle() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
  });
}

// Sign in with Redirect (PKCE Flow - for SSR)
async function signInWithGooglePKCE() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: 'https://your-domain.com/auth/callback',
    },
  });
}

// Sign out
async function signOut() {
  await supabase.auth.signOut();
}

// Get current user
const { data: { user } } = await supabase.auth.getUser();

// Listen for auth changes
supabase.auth.onAuthStateChange((event, session) => {
  console.log('Auth event:', event);
  console.log('Session:', session);
});
```

### Callback Handler (Next.js/SSR)

```typescript
// app/auth/callback/route.ts
import { NextResponse } from 'next/server';
import { createClient } from '@/utils/supabase/server';

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get('code');
  const next = searchParams.get('next') ?? '/';

  if (code) {
    const supabase = await createClient();
    const { error } = await supabase.auth.exchangeCodeForSession(code);
    if (!error) {
      return NextResponse.redirect(`${origin}${next}`);
    }
  }
  return NextResponse.redirect(`${origin}/auth/auth-code-error`);
}
```

---

## 🖥️ Supabase CLI Commands

### Installation

```bash
# npm
npm install -g supabase

# or Homebrew (macOS)
brew install supabase/tap/supabase
```

### Essential Commands

```bash
# Login to Supabase (uses Personal Access Token)
supabase login

# Initialize local project
supabase init

# Link to remote project
supabase link --project-ref <PROJECT_REF>

# Start local Supabase stack (Docker required)
supabase start

# Check local status
supabase status

# Stop local stack
supabase stop

# Generate TypeScript types from DB schema
supabase gen types typescript --project-id <PROJECT_REF> > types/supabase.ts

# Database commands
supabase db push         # Push local migrations to remote
supabase db pull         # Pull remote schema to local
supabase db reset        # Reset local database
supabase db diff         # Show diff between local and remote
```

### Environment Variables (for CI/CD)

```bash
export SUPABASE_ACCESS_TOKEN="sbp_xxxxx"    # Personal Access Token
export SUPABASE_DB_PASSWORD="your-db-password"
```

---

## 🔒 Security Best Practices

1. **NEVER expose Service Role Key** in client-side code
2. **Always use RLS** for database tables
3. **Validate redirect URLs** in Supabase Dashboard
4. **Use HTTPS** in production

---

## 📚 References

- [Supabase Auth Docs](https://supabase.com/docs/guides/auth)
- [Google OAuth Guide](https://supabase.com/docs/guides/auth/social-login/auth-google)
- [Supabase CLI Reference](https://supabase.com/docs/reference/cli/introduction)
- [Google Cloud Console](https://console.cloud.google.com/apis/credentials)
