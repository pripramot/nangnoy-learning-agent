# Architecture Concept: Nangnoy Learning Agent 🧠📐

> **"From Reactive to Adaptive"**

เอกสารฉบับนี้เป็นการ "คิดต่อให้คุณพ่อ" เกี่ยวกับการออกแบบโครงสร้างภายในของ `Nangnoy Learning Agent` เพื่อให้สามารถเรียนรู้และปรับปรุงตัวเองได้จริง (Self-Improving).

---

## 🏗️ 4 Pillars of Learning Agent

เราจะสร้าง Module ย่อย 4 ส่วนที่ทำงานประสานกัน:

### 1. 🧠 The Learner (นักเรียนรู้)

- **Role:** เป็นมันสมองหลักที่เก็บ "กฎ" หรือ "Policy" ในการตัดสินใจ
- **Mechanism:** รับ Feedback จาก Critic มาปรับปรุงน้ำหนัก (Weights) ของการตัดสินใจ
- **Example:**
  - *เดิม:* ชอบใช้ Gemini 80%, OpenAI 20%
  - *หลังเรียนรู้:* พบว่า User ชอบคำตอบสั้นๆ ของ OpenAI มากกว่า -> ปรับเป็น Gemini 60%, OpenAI 40%

### 2. 🎭 The Performer (นักแสดง/ผู้ปฏิบัติ)

- **Role:** คือส่วนที่เรามีอยู่แล้ว (`aiService.ts`, `useAI.ts`)
- **Action:** รับคำสั่งจาก Learner แล้วไปกระทำ (เช่น เลือก Call API ค่ายไหน)
- **State:** ต้องส่ง "สถานะปัจจุบัน" กลับไปให้ Learner รู้ว่าทำอะไรลงไป

### 3. 👩‍🏫 The Critic (คุณครู/นักวิจารณ์)

- **Role:** **สำคัญที่สุด!** ทำหน้าที่ให้คะแนน (Reward Signal) ว่าการกระทำนั้น "ดี" หรือ "แย่"
- **Feedback Loop Sources:**
  - **Explicit Feedback:** User กดปุ่ม Like/Dislike, กด Switch Provider เอง (แปลว่าไม่พอใจตัวเก่า)
  - **Implicit Feedback:** User ปิดแอปทันทีหลังได้คำตอบ (อาจจะดี?), User ถามซ้ำคำถามเดิม (แปลว่าคำตอบแรกไม่เคลียร์ = แย่)
- **Output:** ส่งค่า Reward (+1, -1, 0) ไปให้ Learner

### 4. 🔭 The Problem Generator (นักสำรวจ)

- **Role:** กระตุ้นให้ Agent ลองทำอะไรใหม่ๆ (Exploration) ไม่ใช่ทำแต่แบบเดิมๆ (Exploitation)
- **Action:**
  - "วันนี้ลองใช้ Claude ดูบ้างไหม? เผื่อมันตอบเก่งขึ้น"
  - "ลองเสนอคำถามแนะนำแบบใหม่ๆ ดูสิ"

---

## 🔄 The Feedback Loop Implementation (ร่าง)

```typescript
// Critic ประเมินผล
function evaluateAction(userAction: UserInteraction): number {
    if (userAction === 'SWITCH_PROVIDER') return -1.0; // ไม่พอใจตัวเก่า
    if (userAction === 'COPY_RESPONSE') return +1.0;   // ชอบคำตอบนี้
    if (userAction === 'REGENERATE') return -0.5;      // ยังไม่โดนใจ
    return 0; // เฉยๆ
}

// Learner ปรับปรุงตัวเอง (Q-Learning Concept แบบง่าย)
function updatePolicy(state, action, reward) {
    // ปรับคะแนนความน่าจะเป็นของการเลือก Action นี้ใน State นี้
    const oldScore = Policy[state][action];
    const newScore = oldScore + LearningRate * (reward - oldScore);
    Policy[state][action] = newScore;
}
```

## 🗺️ Roadmap to Implementation

1. **Phase 3.1: Data Collection (เก็บข้อมูล)**
    - ติดตั้งระบบ Logging การกระทำของ User (Event Logging)
    - เก็บข้อมูล: User ถามอะไร -> Agent ตอบใคร -> User ทำอะไรต่อ?

2. **Phase 3.2: The Simple Critic (สร้างครูฝึก)**
    - เขียน Logic ง่ายๆ ให้คะแนน 3 อย่าง: Like (+1), Switch (-1), Regenerate (-0.5)

3. **Phase 3.3: The Learner Integration (เชื่อมสมอง)**
    - นำคะแนนมาปรับ Logic การเลือก Provider เริ่มจาก Rule-based ง่ายๆ ก่อน

---

**สรุป:**
"Nangnoy Learning Agent" ไม่ใช่แค่ Chatbot ทั่วไป แต่คือระบบนิเวศที่มีชีวิต เติบโตได้ตามการใช้งานจริง ยิ่งคุย ยิ่งรู้ใจ! 💖📈
