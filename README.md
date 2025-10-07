# RasaAi 🌿

**AI-Enabled Rasa & Quality Assessment for Ayurvedic Herbs**

[![Build Status](https://img.shields.io/github/actions/workflow/status/MahendraVMahale/RasaAi/ci.yml?branch=main)](https://github.com/MahendraVMahale/RasaAi/actions)
[![Deploy](https://img.shields.io/badge/deploy-vercel-black)](https://vercel.com)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

> **Transforming subjective taste into objective quality metrics**  
> A software-first prototype for AI-driven Rasa (taste) profiling and quality assessment of Ayurvedic herbs—sensor-ready for hardware integration.

---

## Table of Contents

- [Overview](#overview)
- [Live Demo](#live-demo)
- [Features ✨](#features-)
- [Architecture 🧱](#architecture-)
- [Tech Stack ⚙️](#tech-stack-️)
- [Getting Started 🏁](#getting-started-)
- [Project Structure 📁](#project-structure-)
- [Usage Guide ▶️](#usage-guide-️)
- [API Contracts (Mock) 🔌](#api-contracts-mock-)
- [Sample Data 📦](#sample-data-)
- [Screenshots / GIFs 🖼️](#screenshots--gifs-️)
- [Roadmap 🗺️](#roadmap-️)
- [Contributing 🤝](#contributing-)
- [License 📄](#license-)
- [Acknowledgements 🙏](#acknowledgements-)

---

## Overview

**RasaAi** bridges ancient Ayurvedic wisdom with modern AI and chemometrics. It simulates an **e-tongue sensor workflow** to profile the six Rasas (sweet, sour, salty, bitter, pungent, astringent) and identify herb authenticity—all through a clean web interface.

### Why It Matters

> **From Subjectivity to Standardization**  
> Traditional taste assessment relies on expert sensory panels. RasaAi translates Rasa profiles into reproducible, data-driven quality scores—linking chemistry (pH, TDS, spectral fingerprints) with AI classification and adulteration detection.

**Key Values:**
- **Objectivity:** Replace sensory variability with quantified Rasa intensities.
- **Speed:** Instant analysis vs. hours of lab work.
- **Explainability:** PCA biplots, confusion matrices, calibration curves.
- **Adulteration Flagging:** Outlier detection (Isolation Forest) with reasoning.

**Current State:** Software-only prototype with simulated sensor data. Hardware-ready API design for pH, TDS, EC, turbidity, and MQ gas sensor integration.

---

## Live Demo

🔗 **[Try the v0 Preview](https://v0.app/chat/rasa-ai-website-build-jLloNAaUefi?b=b_caVeSTRVokW&path=%2F)**  
_(Interactive prototype; no hardware required)_

📦 **[GitHub Repository](https://github.com/MahendraVMahale/RasaAi)**

🚀 **Hosted Demo:** _(placeholder: deploy.rasaai.example.com)_

---

## Features ✨

- **📤 Upload or Simulator Mode**  
  Upload CSV/JSON spectra or generate synthetic e-tongue data (pH: 3–9, TDS: 50–1500 ppm, 6 MQ sensors).

- **🔬 Preprocessing Pipeline**  
  - Savitzky–Golay smoothing  
  - Standard Normal Variate (SNV)  
  - Baseline correction (AsLS)  
  Toggle on/off; live preview.

- **🤖 Multi-Model Analysis**  
  - **PCA:** 2D/3D score plots with variance explained  
  - **PLS-DA:** Classification with cross-validation  
  - **SVM/Random Forest:** Ensemble predictions  
  - **Isolation Forest:** Adulteration flagging

- **📊 Rasa Radar Chart**  
  Six-axis visualization (0–100%) of taste intensities with reference overlays.

- **🏷️ Dravya Identification**  
  Top-k herb matches with confidence scores and Ayurvedic properties (Guna, Virya, Vipaka).

- **⚠️ Adulteration Detection**  
  Binary flag + explainable reasons (outlier score, cluster distance, spectral anomalies).

- **📄 PDF + QR Code Reports**  
  Export summary with plots, metadata, and traceable QR links.

- **📚 Library Compare**  
  Side-by-side Rasa profiles, acceptance ranges, and spectral overlays vs. reference database.

- **🧪 Model Studio (Mock)**  
  Upload training data, select algorithms, view accuracy/F1/AUC, manage versions.

---

## Architecture 🧱

```
┌─────────────────┐
│   React UI      │  (Next.js + Tailwind + shadcn/ui)
│ Upload/Simulator│
└────────┬────────┘
         │ HTTP/WS
         ▼
┌─────────────────┐
│   API Layer     │  (Node/Express or Mock Routes)
│  /api/analyze   │
│  /api/train     │
│  /api/reference │
└────────┬────────┘
         │
    ┌────┴────┬──────────┬──────────┐
    ▼         ▼          ▼          ▼
┌────────┐ ┌──────┐ ┌────────┐ ┌──────────┐
│Preproc │ │Feats │ │ Models │ │ Decision │
│SG/SNV  │ │PCA   │ │PLS/SVM │ │Adulterate│
└────────┘ └──────┘ └────────┘ └──────────┘
                                      │
                    ┌─────────────────┴────────┐
                    ▼                          ▼
              ┌──────────┐              ┌──────────┐
              │  Report  │              │    DB    │
              │ PDF + QR │              │PostgreSQL│
              └──────────┘              └──────────┘
```

**Note:** Sensors (pH, TDS, EC, turbidity, MQ-series) are **simulated** in this prototype. The API contract is designed for seamless hardware integration—same endpoints, real sensor payloads later.

---

## Tech Stack ⚙️

### Frontend
- **Framework:** React 18 + Next.js 14 (App Router)
- **Styling:** Tailwind CSS 3.x, shadcn/ui components
- **Charts:** Recharts, Chart.js, Plotly.js (3D PCA)
- **Exports:** jsPDF, html2canvas, qrcode

### Backend _(placeholder routes in /api)_
- **Runtime:** Node.js 20+ / Express or Next.js API routes
- **API:** REST + WebSocket (real-time analysis)
- **Docs:** OpenAPI 3.0 / Swagger UI _(placeholder)_

### Data & Storage
- **Database:** PostgreSQL 15 (production) / SQLite (dev)
- **Object Store:** AWS S3 / MinIO (spectra files)
- **Cache:** Redis (optional, for session state)

### ML & Chemometrics
- **Core:** scikit-learn (PCA, PLS-DA, SVM, RandomForest, IsolationForest)
- **Numerical:** NumPy, Pandas, SciPy (signal processing)
- **Vision:** OpenCV (optional HPTLC analysis)
- **MLOps:** MLflow (experiment tracking, placeholder)

### DevOps
- **Containers:** Docker + docker-compose
- **CI/CD:** GitHub Actions
- **Hosting:**  
  - Frontend: Vercel / Netlify  
  - Backend: Render / Fly.io / AWS Lambda  
- **Monitoring:** Sentry, OpenTelemetry, Grafana _(placeholder)_

---

## Getting Started 🏁

### Prerequisites
- Node.js 20+ and npm/pnpm
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/MahendraVMahale/RasaAi.git
cd RasaAi

# Install dependencies
npm install
# or
pnpm install
```

### Development

```bash
# Start dev server (usually localhost:3000)
npm run dev

# Open browser
# Navigate to http://localhost:3000
```

### Build for Production

```bash
npm run build
npm start
```

### Environment Variables

Create a `.env.local` file in the root:

```bash
# Example placeholders
DATABASE_URL=postgresql://user:pass@localhost:5432/rasaai
S3_BUCKET=rasaai-spectra
S3_ACCESS_KEY=your_access_key  # (placeholder)
S3_SECRET_KEY=your_secret_key  # (placeholder)
NEXT_PUBLIC_API_URL=http://localhost:3000/api
SENTRY_DSN=https://example@sentry.io/123456  # (placeholder)
```

**Note:** The current prototype uses **static mock data** in `/data` and **API mocks** in `/api`. No real credentials required yet.

---

## Project Structure 📁

```
RasaAi/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Home (upload/simulator)
│   ├── analyze/           # Results dashboard
│   ├── library/           # Reference database UI
│   └── studio/            # Model training mockup
├── components/            # Reusable React components (shadcn/ui)
├── public/                # Static assets (images, icons)
├── data/                  # Mock JSON files
│   ├── reference.json     # Herb reference database
│   ├── demo-spectrum.json # Example e-tongue data
│   └── demo-results.json  # Precomputed analysis
├── api/                   # API route handlers (Next.js)
│   ├── analyze.ts         # POST /api/analyze
│   ├── train.ts           # POST /api/train
│   └── reference.ts       # GET /api/reference/:dravya
├── lib/                   # Utilities (preprocessing, ML wrappers)
├── models/                # Serialized scikit-learn models (placeholder)
├── scripts/               # Python scripts (data generation, training)
├── styles/                # Global CSS
└── tests/                 # Unit/integration tests
```

---

## Usage Guide ▶️

### 2-Minute Demo Script

1. **Run Test**  
   - Click **"Upload Spectrum"** or **"Simulate E-Tongue Data"**  
   - If simulating: select herb type (e.g., Ashwagandha), batch ID, click Generate

2. **Preprocess**  
   - Toggle **Savitzky–Golay**, **SNV**, **Baseline Correction**  
   - Preview smoothed/normalized curves

3. **Analyze**  
   - Click **"Analyze"** → processing animation (PCA → PLS-DA → SVM)  
   - View results:
     - **Rasa Radar:** Six-taste intensities vs. reference  
     - **Dravya ID:** Top 3 matches (e.g., Ashwagandha 92%, Shatavari 6%)  
     - **PCA Plot:** 2D scores with cluster labels  
     - **Adulteration Flag:** ✅ Authentic or ⚠️ Suspicious (with reason: "Outlier score: 0.87, cluster distance: 3.2σ")

4. **Report**  
   - Click **"Generate PDF"** → download with QR code (links to batch record)

5. **Library Compare**  
   - Navigate to **Library** tab  
   - Select reference herb → side-by-side Rasa chart + acceptance ranges  
   - Overlay current spectrum

6. **Model Studio** _(mock)_  
   - Upload `training_data.csv`  
   - Select algorithm (PLS-DA, SVM, Random Forest)  
   - View metrics: Accuracy 94.2%, Macro-F1 0.91, AUC 0.98  
   - Save as `model_v2.pkl`

---

## API Contracts (Mock) 🔌

### POST `/api/analyze`

**Request:**
```json
{
  "mode": "simulator",
  "herbType": "Ashwagandha",
  "batchId": "ASH-2025-001",
  "data": {
    "pH": 6.2,
    "TDS": 340,
    "EC": 680,
    "turbidity": 12.5,
    "MQ135": 1023,
    "MQ136": 890,
    "MQ137": 756,
    "MQ138": 612,
    "MQ3": 445,
    "MQ4": 523
  },
  "preprocessing": {
    "savitzkyGolay": true,
    "SNV": true,
    "baselineCorrection": false
  }
}
```

**Response:**
```json
{
  "status": "success",
  "results": {
    "rasaProfile": {
      "Madhura": 65,
      "Amla": 12,
      "Lavana": 8,
      "Katu": 22,
      "Tikta": 45,
      "Kashaya": 78
    },
    "dravyaIdentification": [
      { "name": "Ashwagandha", "confidence": 0.92, "properties": { "guna": "Laghu, Snigdha", "virya": "Ushna", "vipaka": "Madhura" } },
      { "name": "Shatavari", "confidence": 0.06 },
      { "name": "Yashtimadhu", "confidence": 0.02 }
    ],
    "adulteration": {
      "flag": false,
      "reason": null,
      "outlierScore": 0.23
    },
    "pca": {
      "variance": [0.68, 0.21],
      "scores": [[-2.1, 0.8], [1.3, -0.5], ...]
    }
  },
  "timestamp": "2025-10-08T14:32:00Z"
}
```

### POST `/api/train`

**Request:**
```json
{
  "datasetUrl": "s3://rasaai-training/batch_2025_Q3.csv",
  "algorithm": "PLS-DA",
  "hyperparameters": {
    "n_components": 5,
    "cv_folds": 10
  }
}
```

**Response:**
```json
{
  "status": "success",
  "metrics": {
    "accuracy": 0.942,
    "macroF1": 0.91,
    "auc": 0.98
  },
  "modelVersion": "v2.1.0",
  "artifactUrl": "s3://rasaai-models/plsda_v2.1.0.pkl"
}
```

### GET `/api/reference/:dravya`

**Response for `/api/reference/Ashwagandha`:**
```json
{
  "name": "Ashwagandha",
  "botanicalName": "Withania somnifera",
  "rasaProfile": { "Madhura": 70, "Tikta": 50, "Kashaya": 80, ... },
  "acceptanceRanges": {
    "pH": [5.8, 6.8],
    "TDS": [300, 400],
    "Madhura": [60, 80]
  },
  "referenceSpectrum": [0.12, 0.34, 0.56, ...],
  "properties": {
    "guna": "Laghu, Snigdha",
    "virya": "Ushna",
    "vipaka": "Madhura"
  }
}
```

---

## Sample Data 📦

All mock data lives in `/data`:

- **`reference.json`**  
  Database of 20+ herbs with Rasa profiles, botanical names, Ayurvedic properties, and acceptance ranges.

- **`demo-spectrum.json`**  
  Synthetic e-tongue sensor readings (10 features × 200 samples) for testing.

- **`demo-results.json`**  
  Precomputed PCA scores, confusion matrix, and classification results.

- **`confusion-matrix.json`**  
  5×5 matrix for PLS-DA model (herbs: Ashwagandha, Brahmi, Tulsi, Shatavari, Triphala).

- **`calibration.json`**  
  pH/TDS sensor calibration curves and drift logs.

- **`alerts.json`**  
  Adulteration case studies with outlier scores and spectral anomalies.

**Placeholders:** Real lab FTIR/e-tongue spectra and field-validated acceptance ranges are pending hardware integration.

---

## Screenshots / GIFs 🖼️

### Home: Upload & Simulator
![Home Screen](docs/screenshots/home.png) _(placeholder: screenshot pending)_

### Run Test: Preprocessing
![Preprocessing](docs/screenshots/preprocess.gif) _(placeholder: GIF of toggle effects)_

### Results: Rasa Radar & Dravya ID
![Results Dashboard](docs/screenshots/results.png) _(placeholder: Radar + top-k cards)_

### Library: Reference Compare
![Library Compare](docs/screenshots/library.png) _(placeholder: side-by-side Rasa + spectra)_

### Reports: PDF + QR
![PDF Report](docs/screenshots/report.png) _(placeholder: sample PDF with QR)_

### Model Studio: Training UI
![Model Studio](docs/screenshots/studio.png) _(placeholder: upload → train → metrics)_

---

## Roadmap 🗺️

### ✅ Now (Software-Only Prototype)
- Mock e-tongue data generator
- PCA/PLS-DA/SVM pipeline
- Rasa radar + adulteration detection
- PDF reports with QR codes
- Library comparison UI
- Model Studio mockup

### 🔬 Phase 1: Bench E-Tongue Calibration
- Integrate pH/TDS/EC/turbidity sensors (Arduino/Raspberry Pi)
- MQ-series gas sensor array (MQ135–138, MQ3, MQ4)
- Real-time WebSocket data streaming
- Lab validation with 50+ herb samples

### 🚀 Phase 2: Rugged Field Device
- Weatherproof enclosure (IP67)
- Battery + solar charging
- Edge ML inference (TensorFlow Lite)
- Offline mode with sync

### 🧪 Phase 3: Advanced Features
- Drift correction (Orthogonal Signal Correction)
- Acceptance range auto-tuning
- Transfer learning for new herbs
- Multi-lab dataset federation
- Blockchain provenance (optional)

---

## Contributing 🤝

We welcome contributions! To get started:

1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feature/your-feature`
3. **Commit** changes: `git commit -m 'Add Rasa prediction explainability'`
4. **Push** to your fork: `git push origin feature/your-feature`
5. **Open** a Pull Request

### Coding Style
- Use **Tailwind utility classes** (no custom CSS unless necessary)
- Follow **shadcn/ui** component patterns
- Run `npm run lint` before committing
- Add JSDoc comments for complex functions

### UX Changes
If your PR affects the user interface, please include:
- **Screenshots** or **Loom video** (< 2 min) showing before/after
- Rationale for design decisions

See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines.

---

## License 📄

This project is licensed under the **MIT License**. See [LICENSE](LICENSE) for details.

```
MIT License

Copyright (c) 2025 Mahendra V Mahale

Permission is hereby granted, free of charge, to any person obtaining a copy...
```

---

## Acknowledgements 🙏

- **[v0 by Vercel](https://v0.dev)** – AI-powered UI generation (initial prototype)
- **[shadcn/ui](https://ui.shadcn.com)** – Beautiful, accessible components
- **[scikit-learn](https://scikit-learn.org)** – ML/chemometrics backbone
- **[Recharts](https://recharts.org)** & **[Plotly](https://plotly.com/javascript/)** – Interactive visualizations
- **Open-source community** – NumPy, Pandas, React, Next.js, Tailwind CSS
- **Rasa Open Source** _(optional future integration for conversational QA workflows)_

---

**Built with 🌿 for the future of Ayurvedic quality assurance.**

Questions? Open an issue or reach out: [mahendramahale@example.com](mailto:mahendramahale@example.com) _(placeholder email)_
