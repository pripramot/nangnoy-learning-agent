---
name: apple-developer
description: Build apps for Apple platforms using Swift, SwiftUI, and Xcode. Use when developing for iOS, iPadOS, macOS, tvOS, visionOS, or watchOS, implementing Apple Intelligence features, or distributing via TestFlight and App Store.
---

# Apple Developer Skill

Build apps for all Apple platforms.

## Advanced References

- **SwiftUI Concepts**: See [swiftui-concepts.md](references/swiftui-concepts.md)

## Platforms

| Platform | Use Case |
| :--- | :--- |
| iOS | iPhone apps |
| iPadOS | iPad apps |
| macOS | Mac desktop apps |
| tvOS | Apple TV apps |
| visionOS | Vision Pro spatial apps |
| watchOS | Apple Watch apps |

## Tools

- **Xcode** - Primary IDE
- **Swift** - Programming language
- **SwiftUI** - Declarative UI framework
- **TestFlight** - Beta testing
- **Xcode Cloud** - CI/CD

## SwiftUI Basics

```swift
import SwiftUI

struct ContentView: View {
    @State private var count = 0
    
    var body: some View {
        VStack {
            Text("Count: \(count)")
                .font(.largeTitle)
            
            Button("Increment") {
                count += 1
            }
            .buttonStyle(.borderedProminent)
        }
        .padding()
    }
}

#Preview {
    ContentView()
}
```

## Project Structure

```text
MyApp/
├── MyApp.xcodeproj
├── MyApp/
│   ├── MyAppApp.swift      # App entry point
│   ├── ContentView.swift   # Main view
│   ├── Assets.xcassets     # Images, colors
│   └── Info.plist          # App configuration
└── MyAppTests/
```

## Apple Intelligence

Integrate on-device AI:

- Siri integration
- App Intents
- Natural language processing
- Image analysis

## App Distribution

### TestFlight

1. Archive app in Xcode
2. Upload to App Store Connect
3. Add testers (internal/external)
4. Distribute beta builds

### App Store

1. Create app in App Store Connect
2. Configure metadata, screenshots
3. Submit for review
4. Release to users

## Common Commands

```bash
# Build from command line
xcodebuild -scheme MyApp -configuration Release

# Run tests
xcodebuild test -scheme MyApp -destination 'platform=iOS Simulator,name=iPhone 15'

# Archive for distribution
xcodebuild archive -scheme MyApp -archivePath ./build/MyApp.xcarchive
```
