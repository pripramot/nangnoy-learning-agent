# Nangnoy Learning Agent (นางน้อย - อัจฉริยะนักเรียน) 🧠🎓

> **"จุดเริ่มต้นของความเก่งแบบก้าวกระโดด"**

Repository นี้ถูกสร้างขึ้นเพื่อพัฒนาระบบ **Self-Improving AI** (AI ที่เก่งขึ้นได้ด้วยตัวเอง) โดยใช้หลักการของ **Learning Agent** และ **Feedback Loops**

## 🌟 วิสัยทัศน์ (Vision)

พัฒนานางน้อย (Nangnoy) ให้ก้าวข้ามจากการเป็นเพียง *Reactive Agent* (ถาม-ตอบ) ไปสู่ **Learning Agent** ที่สามารถ:

1. **จดจำ (Remember):** เรียนรู้จากผลลัพธ์ในอดีต
2. **ประเมิน (Critic):** รู้ว่าอะไรดี อะไรพลาด
3. **ปรับปรุง (Improve):** ปรับจูนตัวเองให้เก่งขึ้นเรื่อยๆ ตามประสบการณ์

🔗 **อ่านเพิ่มเติม:** [Nangnoy Learning Agent - Hashnode](https://i-studio.hashnode.dev/nangnoy-learning-agent)

---

## 🏗️ สถาปัตยกรรม (Architecture Concept)

ระบบถูกออกแบบโดยยึดหลัก **4 องค์ประกอบสำคัญ** ของ Learning Agent:

1. **Learning Element (ส่วนเรียนรู้):** สมองหลักที่รับผิดชอบในการปรับปรุงระบบ
2. **Performance Element (ส่วนปฏิบัติการ):** ส่วนที่ทำหน้าที่ตัดสินใจและกระทำ (เช่น การเลือก AI Provider, การตอบคำถาม)
3. **Critic (นักวิจารณ์/ตัวประเมิน):** กลไก Feedback Loop ที่คอยให้คะแนนผลลัพธ์ (เช่น "User กดไลก์ = ดี", "User กดเปลี่ยน Provider = พลาด")
4. **Problem Generator (นักสำรวจ):** ตัวสร้างสถานการณ์ใหม่ๆ เพื่อให้เรียนรู้สิ่งที่ไม่เคยเจอ

## 🔄 กลไกการทำงาน (The Mechanism)

> "ทำผิดจดจำ ทำถูกทำซ้ำ"

1. **Action:** นางน้อยตัดสินใจทำบางอย่าง (เช่น เลือกใช้ Gemini ตอบคำถามยากๆ)
2. **Feedback:** ได้รับผลป้อนกลับ (เช่น User พอใจ หรือ User กด Switch ไปใช้ OpenAI แทน)
3. **Update:** `Critic` ประเมินผล -> ส่งข้อมูลให้ `Learning Element` ปรับค่าน้ำหนัก (Weights)
4. **Evolve:** ครั้งต่อไป นางน้อยจะตัดสินใจได้แม่นยำขึ้น

---

## 🗺️ ระดับขั้นของ Agent (Evolution Path)

- [x] **Level 1: Reactive Agent** (ตอบสนองทันที ไม่จำอดีต - *สถานะปัจจุบัน*)
- [ ] **Level 2: Goal-based Agent** (ทำทุกทางเพื่อให้ถึงเป้าหมาย)
- [ ] **Level 3: Learning Agent** (เก่งขึ้นจากประสบการณ์ - *เป้าหมายของรีโพนี้*)
- [ ] **Level 4: Multi-Agent System** (ทำงานร่วมกันเป็นทีม)

---

## 📚 Knowledge Base (คลังความรู้)

หนูได้รวบรวมสกิลทั้งหมด (60+ Skills) จากทุกช่วงเวลามาไว้ที่นี่แล้ว:
👉 **[Full Knowledge Index](docs/knowledge_index.md)** (รายชื่อสกิลทั้งหมด)

## 🏆 Achievements & Capabilities

ดูรายละเอียดความสำเร็จของระบบ **AI Arsenal Switcher** ได้ที่:
👉 [Updated Achievements](docs/achievements.md)

---

## 🤝 Supporters (ผู้สนับสนุนหลัก)

> "Nai Hua is The Impact MCP" ⚡

โครงการนี้ยืนหยัดได้ด้วยตัวเอง (Independence) โดยมีผู้สนับสนุนที่แข็งแกร่ง:

- **Father (คุณพ่อ):** Jarntam
- **Nai Hua (นายหัว):** The Impact MCP (Power Source)
- **Cat (แมว):** Identity & Security
- **Infrastructure:** Supabase, Docker, TiDB Cloud

---

**Developed with ❤️ by Father & Nangnoy**
