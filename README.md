# DROP 001 — Naara Gentha Shypra Wardana Portfolio

Personal portfolio and interactive lookbook for **Naara Gentha Shypra Wardana**, a software engineering (RPL) vocational student in Indonesia, social media manager, and web developer.

Built as a streetwear apparel catalogue where projects are released merchandise items with SKUs and interactive hang tags, skills are sewn clothing care specs, and contact is a shipping manifest.

---

## ⚡ Tech Stack & Architecture
- **Pure Static Web:** Plain HTML5, Modern Vanilla CSS, Vanilla JavaScript.
- **Zero Build Step:** Runs directly in any modern browser without npm build, bundlers, or frameworks.
- **Strict Visual Design:** Based on the "DROP 001" design system (see [DESIGN.md](file:///d:/portofolio/DESIGN.md)).
- **Dual Language (i18n):** Indonesian (default) and Simple B1 English, persisted via `localStorage`.
- **Target Deployment:** [Vercel](https://vercel.com) (Frontend static edge network).

---

## 📁 Directory Structure

```text
portofolio/
├── index.html              # Main semantic HTML5 document
├── css/
│   └── style.css           # Design system tokens, layout, and components
├── js/
│   ├── i18n.js             # Dual-language translations dictionary (ID & EN)
│   └── main.js             # Interactive logic (drag, flips, copy-to-clipboard)
├── assets/
│   ├── img/                # Optimized WebP assets (< 200KB each)
│   │   ├── portrait.webp   # Formal portrait hero die-cut sticker (18.3 KB)
│   │   ├── gurupro.webp    # GuruPro dashboard screenshot (40.0 KB)
│   │   ├── mirror.webp     # Mirror selfie polaroid, tightly cropped (62.0 KB)
│   │   ├── blur.webp       # Blurry candid in ink+signal duotone (13.5 KB)
│   │   ├── working.webp    # Working on laptop, screen blurred (113.7 KB)
│   │   ├── favicon.svg     # Streetwear die-cut sticker SVG favicon
│   │   ├── favicon.png     # PNG favicon fallback
│   │   └── og-image.png    # 1200x630 social preview graphic
│   └── originals/          # Unedited originals (excluded from Vercel deploy)
├── .vercelignore           # Excludes originals and reference files from production
├── DESIGN.md               # Visual system documentation
└── README.md               # Deployment instructions & project documentation
```

---

## 🚀 Deployment to Vercel

Since this is a static project with no build commands, deploying to Vercel takes under 1 minute.

### Option 1: Deploy via Vercel CLI
1. Open PowerShell or Terminal in this folder (`d:\portofolio`).
2. Run:
   ```bash
   npx vercel
   ```
3. Follow the prompt:
   - **Set up and deploy?** `yes`
   - **Which scope?** (Select your account)
   - **Link to existing project?** `no`
   - **What's your project's name?** `naaragentha-drop001`
   - **In which directory is your code located?** `./`
   - **Want to modify these settings?** `no`
4. For production deployment:
   ```bash
   npx vercel --prod
   ```

### Option 2: Deploy via GitHub (Recommended)
1. Initialize git and commit your files:
   ```bash
   git init
   git add .
   git commit -m "feat: initial DROP 001 streetwear portfolio"
   ```
2. Create a repository on GitHub (e.g. `n4ragentf/portfolio`) and push:
   ```bash
   git remote add origin https://github.com/n4ragentf/portfolio.git
   git branch -M main
   git push -u origin main
   ```
3. Open [Vercel Dashboard](https://vercel.com/dashboard) and click **"Add New..."** > **"Project"**.
4. Import your `portfolio` repository.
5. In **Build and Output Settings**, leave everything default (Framework Preset: **Other**, Build Command: empty, Output Directory: `./`).
6. Click **Deploy**. Vercel will deploy instantly with global edge CDN and automatic HTTPS.

---

## ✅ Resolved TODOs (100% Factual Integrity)
All initial placeholders have now been populated with Naara's direct authentic data:
- **ABOUT Section — "WEIRD THINGS I LIKE":** Resolved with Naara's confirmed quirks:
  1. *Glazer harum manis & Frank Ocean*
  2. *Mempunyai banyak obsesi*
  3. *Freaky*
- **SIZES Section — English Proficiency:** Clarified as **B1** based on Naara's official TOEIC score of **670**.
- **Remaining TODO count:** **0** (Zero pending TODOs on the live site).
