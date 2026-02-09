# Skill: Supabase Flutter Mastery 🐦🔥

**Description:** Expert guide for integrating Supabase into Flutter applications, enabling backend-less development with Auth, Database, and Realtime features.

## 📦 Installation & Setup

1. **Add Dependency:**

    ```yaml
    dependencies:
      supabase_flutter: ^2.0.0
    ```

2. **Initialize (main.dart):**

    ```dart
    import 'package:supabase_flutter/supabase_flutter.dart';

    Future<void> main() async {
      WidgetsFlutterBinding.ensureInitialized();

      await Supabase.initialize(
        url: 'YOUR_SUPABASE_URL',
        anonKey: 'YOUR_SUPABASE_ANON_KEY',
      );

      runApp(const MyApp());
    }
    ```

3. **Access Client:**

    ```dart
    final supabase = Supabase.instance.client;
    ```

## 🔐 Authentication

### Email/Password Sign Up

```dart
await supabase.auth.signUp(
  email: 'user@example.com',
  password: 'password123',
);
```

### Sign In

```dart
await supabase.auth.signInWithPassword(
  email: 'user@example.com',
  password: 'password123',
);
```

### Google Sign In (Native)

Requires `google_sign_in` package and platform setup (Android keystore / iOS Info.plist).

```dart
// Detailed flow usually involves getting idToken from GoogleSignIn and passing it to Supabase
await supabase.auth.signInWithIdToken(
  provider: OAuthProvider.google,
  idToken: googleIdToken,
  accessToken: googleAccessToken,
);
```

## 💾 Database Operations (Postgres)

### Insert Data

```dart
await supabase.from('notes').insert({
  'title': 'Buy Milk',
  'is_complete': false,
});
```

### Query Data (Select)

```dart
final data = await supabase
  .from('notes')
  .select()
  .order('created_at', ascending: false);
```

### Realtime (Stream)

```dart
final stream = supabase
  .from('notes')
  .stream(primaryKey: ['id'])
  .order('created_at');
```

## 🛠️ Best Practices

1. **AuthGuard:** Use `onAuthStateChange` to listen for login/logout and redirect users.
2. **Environment Variables:** Store URL/Key in `flutter_dotenv` or compile-time constants (`--dart-define`).
3. **Type Safety:** Use `.withConverter` to map JSON to Dart objects automatically.
