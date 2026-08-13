# 🌌 Jagruthi Jetti — Space Portfolio

A state-of-the-art, production-ready **Space-Themed Personal Portfolio Website** built with **React, JavaScript, Vite, CSS, React Icons, and Framer Motion**.

The core theme concept: **"MY CAREER IS A JOURNEY THROUGH THE UNIVERSE."** Visitors travel through different sections of space discovering profile details, skill constellations, orbital timelines, project galaxies, and cosmic achievements.

---

## 🛠️ Tech Stack & Architecture

- **Frontend Framework**: React 18 + JavaScript
- **Build Tool**: Vite 5
- **Animations**: Framer Motion & HTML5 Canvas Particle Engine
- **Icons**: React Icons (FontAwesome & SimpleIcons)
- **Styling**: Modern Vanilla CSS (Deep Space Dark & Cosmic Dawn Light themes)

---

## 📁 Project Directory Structure

```
MY PORTFOLIO PROJECTS/
├── opening-page/                   # Independent Hub Landing Page
│   ├── src/
│   │   ├── App.jsx                 # Configures SPACE_PORTFOLIO_URL link
│   │   └── index.css
│   └── package.json
│
└── space-portfolio/                # SEPARATE SPACE PORTFOLIO PROJECT
    ├── public/
    │   ├── profile.jpg             # Profile Avatar Image
    │   ├── resume.pdf              # Verified Resume PDF File
    │   └── favicon.svg             # Cosmic SVG Favicon
    ├── src/
    │   ├── components/
    │   │   ├── SpaceBackground.jsx # HTML5 Canvas twinkling starfield & shooting stars
    │   │   ├── Navbar.jsx          # Glassmorphism navbar & Theme switcher
    │   │   ├── ScrollProgress.jsx  # Vertical cosmic section indicator
    │   │   ├── Hero.jsx            # 3D planet object & scanned holographic frame
    │   │   ├── About.jsx           # Profile summary & statistic cards
    │   │   ├── Skills.jsx          # Interactive constellation skill map
    │   │   ├── Education.jsx       # Orbital vertical timeline
    │   │   ├── Projects.jsx        # Project galaxy with category filters
    │   │   ├── ProjectModal.jsx    # Full-screen cosmic project detail modal
    │   │   ├── Certifications.jsx  # Cosmic achievements grid
    │   │   ├── Resume.jsx          # Professional file view & download
    │   │   ├── Contact.jsx         # Communication panel & mailto form
    │   │   ├── Footer.jsx          # Cosmic footer & Return to Orbit button
    │   │   └── CustomCursor.jsx    # Cosmic glowing ring cursor for desktop
    │   ├── data/
    │   │   └── portfolioData.js    # CENTRAL DATA CONFIGURATION FILE
    │   ├── App.jsx
    │   ├── main.jsx
    │   └── index.css               # Deep Space & Cosmic Dawn design tokens
    ├── package.json
    ├── vite.config.js
    └── README.md
```

---

## 🚀 Running Locally

1. Open terminal and navigate into the `space-portfolio` directory:
   ```bash
   cd space-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Launch local Vite development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

---

## ✏️ How to Customize Personal Content (`portfolioData.js`)

All personal information, skills, project links, certificates, and social profiles are configured from a single central file:

📌 **Path**: `src/data/portfolioData.js`

### 1. Adding Profile Image
Place your high-resolution profile picture inside `space-portfolio/public/profile.jpg`.
Ensure `profileImage` in `portfolioData.js` points to `"/profile.jpg"`.

### 2. Adding Resume PDF
Place your resume document inside `space-portfolio/public/resume.pdf`.
Ensure `resume.url` points to `"/resume.pdf"`.

### 3. Updating GitHub & Social Links
In `portfolioData.js`, replace placeholder strings:
```javascript
social: {
  github: "https://github.com/your-github-username",
  linkedin: "https://linkedin.com/in/your-linkedin-handle",
  instagram: "https://instagram.com/your-handle"
}
```
*Note: If any link string is left empty (`""`) or contains `PASTE_`, the website automatically hides the corresponding button.*

### 4. Updating Projects & Live Demos
Modify or add project objects in `portfolioData.js`:
```javascript
{
  id: "my-project-1",
  title: "My Custom Project",
  category: "WEB",
  shortDesc: "A brief summary of what the project does.",
  overview: "Detailed technical architecture and overview.",
  technologies: ["React", "Node.js", "MongoDB"],
  github: "https://github.com/yourusername/repo-name",
  live: "https://my-live-demo.vercel.app",
  planetColor: "#39C6FF"
}
```

### 5. Adding Certifications
Update `certifications` array in `portfolioData.js`:
```javascript
{
  name: "AWS Certified Developer",
  issuer: "Amazon Web Services",
  date: "2026",
  credentialId: "AWS-123456",
  credentialLink: "https://aws.amazon.com/verification"
}
```

---

## 🌐 Deploying Space Portfolio & Connecting to Opening Page

### Step A: Deploy `space-portfolio` to Vercel
1. Push `space-portfolio` to your GitHub repository or deploy directly via Vercel CLI.
2. In Vercel, select the `space-portfolio` root folder as the project directory.
3. Deploy the project.
4. Copy your live Vercel URL (e.g., `https://jagruthi-space-portfolio.vercel.app`).

### Step B: Connect URL to Opening Page
1. Open the `opening-page` project:
   📌 **Path**: `opening-page/src/App.jsx`

2. Update the `SPACE_PORTFOLIO_URL` constant:
   ```javascript
   const SPACE_PORTFOLIO_URL = "https://jagruthi-space-portfolio.vercel.app";
   ```

3. Save `App.jsx`. Now, clicking the **Space Portfolio** card on the opening page will redirect visitors to your newly deployed Space Portfolio!

---

## ⚡ License & Credits
Built for **Jagruthi Jetti** — Designed with deep-space aesthetics, accessibility, and high performance in mind.
