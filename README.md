# 🎓 CGPA Calculator — Turn Academic Stress into Strategy

![HTML](https://img.shields.io/badge/HTML5-orange?logo=html5)
![CSS](https://img.shields.io/badge/CSS3-blue?logo=css3)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow?logo=javascript)
![License](https://img.shields.io/badge/License-MIT-green)
![Contributions](https://img.shields.io/badge/Contributions-Welcome-brightgreen)

> **Calculate your GPA instantly, track academic progress, and predict the GPA required to achieve your target CGPA.**

> 🚀 **Live Demo:** *Coming Soon*

---

# 📖 Table of Contents

- About the Project
- The Idea
- Problem Statement
- Solution
- Features
- Screenshots
- How It Works
- Tech Stack
- Mathematical Formulation
- Project Structure
- Usage
- Future Roadmap
---

# 💡 About the Project

CGPA Calculator is a lightweight web application built using **HTML, CSS and  JavaScript** that helps students calculate their GPA accurately while also planning future academic performance using a **What-If CGPA Simulator**.

Unlike many basic GPA calculators, this project allows students to estimate the GPA they must maintain in their remaining semesters to graduate with their desired CGPA.

---

# 🧠 The Idea

Students often calculate GPA manually using notebooks, calculators or spreadsheets.

This project simplifies the process by providing a clean interface where students can:

- Add subjects
- Assign credits
- Select grades
- Instantly calculate GPA
- Predict future GPA requirements

---

# 🎯 Challenges Faced by Students

Many students encounter these common challenges while tracking their academic performance:

- 📚 Calculating GPA manually after every semester.
- 📊 Managing subjects with different credit values.
- 🎯 Estimating the GPA needed to achieve a target CGPA.
- ⏳ Repeating the same calculations whenever grades change.
- ❌ Making calculation mistakes that lead to inaccurate results.

---

# ✅ Solution

The application automates the complete process.

```text
User Input
    ↓
Validation
    ↓
Store Subject
    ↓
Calculate GPA
    ↓
Update Dashboard
    ↓
Run What-If Simulator
```

---

# ✨ Features

## 📚 Subject Management

- Add/Delete subjects
- Duplicate validation
- Letter grade mapping
- Real-time updates

## 📊 Dashboard

- Current GPA
- Total Credits
- Instant calculation

## 🔮 What-If Simulator

- Target CGPA prediction
- Remaining credits analysis
- Required future GPA calculation

## 💾 Storage

- Auto-save using Local Storage

## 📁 Export

- Export academic record as CSV

## 📱 Responsive Design

- Desktop
- Tablet
- Mobile

---

# 📷 Screenshots

>🏠 Home Page
<img width="1016" height="821" alt="image" src="https://github.com/user-attachments/assets/f65c2808-1687-482b-9813-3fdb87c14f4b" />

📊 Dashboard
<img width="1697" height="868" alt="image" src="https://github.com/user-attachments/assets/826f552b-686a-4b1d-9fc4-af1d1faef989" />

## 🔮 What-If CGPA Simulator
<img width="1197" height="452" alt="image" src="https://github.com/user-attachments/assets/a04cafa6-eda1-4c17-ade7-1d70e3848dd9" />


# ⚙️ How It Works

```text
Add Subject
      ↓
Validate Input
      ↓
Store in JavaScript Array
      ↓
Generate Table
      ↓
Calculate GPA
      ↓
Display Dashboard
      ↓
Run Simulation
```

---

# 🛠 Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | HTML5 |
| Styling | CSS3 |
| Programming |  JavaScript |
| Storage | Browser Local Storage |

---

# 🧮 Mathematical Formulation

**Current GPA**

```
Current GPA = Σ(Grade × Credits) / Total Credits
```

**Required Future GPA**

```
((Target CGPA × Total Credits) − Current Grade Points)
/ Remaining Credits
```

---
# 📁 Project Structure

```text
CGPA-Calculator/
│
├── index.html
├── style.css
├── script.js
├── README.md
└── assets/
    ├── home.png
    ├── dashboard.png
    └── simulator.png
```
---

# 🚀 Installation

```bash
git clone https://github.com/your-username/cgpa-calculator.git
cd cgpa-calculator
```

Open **index.html** in your browser.

---

# ▶️ Usage

1. Enter Subject Name
2. Enter Credits
3. Select Grade
4. Click **Add Subject**
5. View Current GPA
6. Use the **What-If Simulator**
7. Export data as CSV

---

# 🚀 Future Roadmap

- 🌙 Dark Mode
- 📈 GPA Analytics Charts
- 📄 PDF Export
- 📚 Semester-wise GPA
- ✏️ Edit Subject
- 🔍 Search Subjects

---
# 🤝 Contributing

Contributions are always welcome!

If you'd like to improve this project:

1. Fork the repository.
2. Create a new feature or bug-fix branch.
3. Commit your changes with clear commit messages.
4. Push your branch to GitHub.
5. Open a Pull Request describing your changes.

Thank you for helping improve this project! 🚀
