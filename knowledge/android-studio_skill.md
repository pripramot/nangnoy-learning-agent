---
name: android-studio
description: Build Android apps with Android Studio IDE. Use when creating Android projects, working with Jetpack Compose, configuring Gradle builds, using Android Emulator, or leveraging Gemini AI for code assistance.
---

# Android Studio Skill

Official IDE for Android app development with Gemini AI assistant.

## Advanced References

- **Jetpack Compose Guide**: See [jetpack-compose.md](references/jetpack-compose.md)
- **Gradle Build System**: See [gradle-build.md](references/gradle-build.md)

## Quick Start

```bash
# Download from https://developer.android.com/studio
# Or use Android Studio Cloud (browser-based)
```

## Project Structure

```text
MyApp/
├── app/
│   ├── src/main/
│   │   ├── java/           # Kotlin/Java code
│   │   ├── res/            # Resources (layouts, strings)
│   │   └── AndroidManifest.xml
│   └── build.gradle.kts    # App-level build config
├── gradle/
└── build.gradle.kts        # Project-level config
```

## Gemini in Android Studio

AI-powered coding assistant:

- Generate code from descriptions
- Fix errors and bugs
- Answer Android development questions
- Explain existing code

## Jetpack Compose

Modern declarative UI toolkit:

```kotlin
@Composable
fun Greeting(name: String) {
    Text(text = "Hello $name!")
}

@Preview
@Composable
fun PreviewGreeting() {
    Greeting("Android")
}
```

## Gradle Build System

### Build Variants

```kotlin
android {
    buildTypes {
        release {
            isMinifyEnabled = true
            proguardFiles(getDefaultProguardFile("proguard-android.txt"))
        }
        debug {
            isDebuggable = true
        }
    }
    flavorDimensions += "version"
    productFlavors {
        create("free") { dimension = "version" }
        create("paid") { dimension = "version" }
    }
}
```

### Common Commands

```bash
./gradlew assembleDebug    # Build debug APK
./gradlew assembleRelease  # Build release APK
./gradlew bundleRelease    # Build App Bundle
./gradlew test             # Run unit tests
```

## Android Emulator

Test on virtual devices:

- Phones, tablets, foldables
- Wear OS, TV, Auto
- Multiple API levels
- Location simulation
- Network conditions

## APK Analyzer

Inspect APK contents:

- View DEX files
- Check resources
- Compare APK sizes
- Analyze ProGuard mappings
