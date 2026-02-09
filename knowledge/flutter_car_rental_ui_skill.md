# 🍊 SKILL: Flutter Car Rental UI (The "Nam Som" Edition)

**Description:** Advanced UI patterns for a premium Car Rental application, focusing on Full-Screen Cards, Glassmorphism, and Smooth Scrolling (Slivers).
**Source Inspiration:** Codester, FlutterFlow, Dribbble ("Orange Juice" Theme)

## 🎨 1. Core Visual Concept: "Liquid Immersion"

The user shouldn't just "see" a list; they should *swipe through experiences*.

* **Primary Color:** Electric Orange (`#FF6D00`)
* **Secondary:** Deep Void (`#1A1A1A`) -> for contrast in Dark Mode
* **Card Style:** Edge-to-edge, Rounded corners (32px), High elevation shadows.

## 📱 2. The "Full Screen Card" Pattern (PageView)

Instead of a crowded `ListView`, use a `PageView` with `viewportFraction` to create a "Snapping Card" effect.

```dart
PageView.builder(
  controller: PageController(viewportFraction: 0.85),
  itemBuilder: (context, index) {
    return Transform.scale(
      scale: _currPageValue == index ? 1.0 : 0.9,
      child: CarPosterCard(vehicle: vehicles[index]),
    );
  },
)
```

## 💎 3. Glassmorphism (The "Wow" Factor)

Overlay floating information (Price/Name) on top of vehicle images using `BackdropFilter`.

```dart
ClipRRect(
  borderRadius: BorderRadius.circular(20),
  child: BackdropFilter(
    filter: ImageFilter.blur(sigmaX: 10, sigmaY: 10),
    child: Container(
      color: Colors.white.withOpacity(0.1), // Frosted Glass
      padding: EdgeInsets.all(16),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text("฿2,500/day", style: kPriceTextStyle),
          Text("BMW 3 Series", style: kTitleTextStyle),
        ],
      ),
    ),
  ),
)
```

## 🚀 4. Hero Animations (Seamless Transition)

When a user taps a card, the car image should *fly* to the next screen.

* **List Screen:** Wrap image in `Hero(tag: 'car_${id}', child: Image(...))`
* **Detail Screen:** Wrap header image in `Hero(tag: 'car_${id}', child: Image(...))`

## 📜 5. Syllabus Checklist (To Be Implemented)

- [ ] **SliverAppBar:** Collapsing header with "Nam Som" branding.
* [ ] **Interactive Map:** Bottom sheet map using the existing `Leaflet` knowledge (adapted for mobile).
* [ ] **Shimmer Loading:** Skeleton screens while fetching Supabase data.
