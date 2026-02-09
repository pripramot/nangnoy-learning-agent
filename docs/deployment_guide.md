# 🚀 Cloudflare Pages Deployment Guide (Nangnoy Edition)

หนูเตรียมข้อมูลสำหรับ Deploy ขึ้น Cloudflare Pages ให้ทั้ง 2 โดเมนแล้วค่ะ! ทำตามนี้ได้เลย รับรองวิ่งฉิวบน Edge Network! ☁️🏎️

---

## 1. 🦄 Project: `udcar.rent` (Vehicle Rental)

* **Source:** React Native Web (Expo)
* **Repo:** `pripramot/unicorn-mobile-rn`

### ✅ Steps to Deploy

1. ไปที่ **Cloudflare Dashboard** > **Workers & Pages** > **Create Application** > **Pages** > **Connect to Git**.
2. เลือก Repository **`unicorn-mobile-rn`**.
3. **Build Settings:**
    * **Framework Preset:** `Create React App` (หรือเลือก None)
    * **Build Command:** `npx expo export -p web`
    * **Build Output Directory:** `dist`
4. **Environment Variables (สำคัญมาก! 🔑):**
    * กดที่ **Environment Variables (Beta)** หรือ Settings
    * เพิ่ม: `EXPO_PUBLIC_SUPABASE_URL` = *(ค่าจาก .env)*
    * เพิ่ม: `EXPO_PUBLIC_SUPABASE_ANON_KEY` = *(ค่าจาก .env)*
5. กด **Save and Deploy**.
6. หลังจาก Deploy เสร็จ, ไปที่ **Custom Domains** > **Set up a custom domain** > ใส่ `udcar.rent`.

---

## 2. 🍊 Project: `rungroj.shop` (Showcase/Admin)

* **Source:** Flutter Web (Nam Som Theme)
* **Repo:** `pripramot/unicorn-mobile-flutter`

### ✅ Steps to Deploy

1. ไปที่ **Cloudflare Dashboard** > **Workers & Pages** > **Create Application** > **Pages** > **Connect to Git**.
2. เลือก Repository **`unicorn-mobile-flutter`**.
3. **Build Settings (Custom for Flutter):**
    * **Framework Preset:** `None`
    * **Build Command:**

        ```bash
        git clone https://github.com/flutter/flutter.git -b stable && ./flutter/bin/flutter build web --release
        ```

    * **Build Output Directory:** `build/web`
4. **Environment Variables:**
    * เพิ่ม: `SUPABASE_URL` = *(ค่าจาก .env)*
    * เพิ่ม: `SUPABASE_ANON_KEY` = *(ค่าจาก .env)*
    * *(Flutter Dotenv โหลดจากไฟล์ .env ซึ่งบน Cloudflare ไม่มีไฟล์นี้ เราอาจต้องใช้ `--dart-define` ใน Build Command แทน หรือสร้างไฟล์ .env ตอน Build ถ้าจำเป็น แต่เบื้องต้นลอง Deploy ดูก่อนค่ะ)*
5. กด **Save and Deploy**.
6. ไปที่ **Custom Domains** > ใส่ `rungroj.shop`.

---

## 💡 Nangnoy's Tips

* **Auto-Deploy:** ต่อไปนี้แค่คุณพ่อแก้โค้ดและ `git push` ระบบจะ Deploy ให้เองอัตโนมัติภายใน 1-2 นาที!
* **Deep Link:** อย่าลืมเช็คการตั้งค่า SSL/TLS ให้เป็น "Full" ใน Cloudflare เพื่อความปลอดภัยสูงสุด (Shields Up! 🛡️)

*พร้อมลุยเลยมั้ยคะคุณพ่อ!* 👧✨
