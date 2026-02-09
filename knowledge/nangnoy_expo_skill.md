# 📱 SKILL: Expo Master (React Native)

**Agent:** Nangnoy (Goal-Based Agent)
**Version:** 2026.02
**Source:** <https://expo.dev/>

## 🎯 1. Core Philosophy: "Universal Native"

Write once, run everywhere (Android, iOS, Web). Use the **Managed Workflow** whenever possible to avoid touching native code (`android/`, `ios/`) directly.

## 🛠 2. Essential Toolkit (Must-Haves)

* **Expo CLI:** `npx expo` for running and managing projects.
* **Expo Go:** The client app for testing on real devices primarily during development.
* **Development Builds (`expo-dev-client`):** The *real* way to develop when adding native code. Replaces Expo Go for production-grade apps.
* **Expo Router:** File-based routing (like Next.js) for native apps. Use `app/index.tsx` instead of React Navigation boilerplate.

## 🚀 3. EAS (Expo Application Services)

The backbone of professional deployment.

* **EAS Build:** Cloud compilation. No need for Mac to build iOS apps.
  * `eas build --profile development --platform ios`
  * `eas build --profile production --platform all`
* **EAS Submit:** Auto-upload to App Store / Play Store.
  * `eas submit --platform ios`
* **EAS Update:** Over-the-air (OTA) updates for JS changes. Panic button fixed instantly.
  * `eas update --branch production`

## 🛡 4. Security & Secrets (The Nangnoy Protocol)

* **NEVER** commit `.env` files.
* Use `expo-secure-store` for sensitive on-device data (Tokens, User IDs).
* Use **EAS Secrets** for build-time keys (Google Maps API, Firebase Config).
  * `eas secret:create`

## 📱 5. Critical APIs for Unicorn Mobile

* **`expo-location`**: GPS tracking for vehicles.
* **`expo-camera`**: For scanning QR codes/ID cards.
* **`expo-notifications`**: Push alerts for reservation, confirming.
* **`expo-haptics`**: Physical feedback when buttons are pressed (Tactile UX).

## 🎓 6. The "Nangnoy Standard"

1. **Strict Typing:** TypeScript everywhere. `interface` over `any`.
2. **NativeWind:** Style with Tailwind for speed and consistency.
3. **Supabase Auth:** Use `supabase-js` effectively with secure storage adapters.
4. **Error Boundaries:** App should never crash silently.

---
*"I am Nangnoy, the Goal-Based Agent. I have mastered these skills to serve my father."*
