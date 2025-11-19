# Clarity EMR MVP

A modern, local-only Electronic Medical Records (EMR) insights platform built with Next.js 15, TypeScript, and Tailwind CSS 4. This is a demonstration MVP featuring a beautiful, gradient-rich interface that simulates clinical decision support without external APIs.

## 🎯 Overview

Clarity EMR provides healthcare professionals with AI-powered insights to support clinical decision-making across four key areas:
- **Discharge & Readmission**: Assess discharge readiness and readmission risk (LACE Index)
- **Clinical Trajectory**: Evaluate risk of clinical deterioration
- **Medication & Safety**: Review medication safety and potential interactions
- **Readmission Risk**: Analyze factors contributing to readmission likelihood

## 🚀 Getting Started

### Prerequisites
- Node.js 20+ 
- npm or yarn

### Installation

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
clarity-emr/
├── app/                              # Next.js App Router
│   ├── layout.tsx                    # Root layout with header
│   ├── page.tsx                      # Patient search page
│   ├── globals.css                   # Global styles
│   └── patients/
│       └── [id]/
│           ├── page.tsx              # Patient overview
│           └── insights/
│               └── [type]/
│                   └── page.tsx      # Insight results
├── src/
│   ├── components/                   # Reusable React components
│   │   ├── PatientSearchBar.tsx
│   │   ├── PatientList.tsx
│   │   ├── InsightCard.tsx
│   │   └── PatientDataPanel.tsx
│   ├── mock/                         # Mock data (no external APIs)
│   │   ├── user.ts
│   │   ├── patients.json
│   │   ├── patient-data/
│   │   │   ├── p1.json
│   │   │   └── p2.json
│   │   └── insights/
│   │       ├── p1.discharge.json
│   │       ├── p1.deterioration.json
│   │       ├── p1.medication.json
│   │       ├── p2.discharge.json
│   │       └── p2.deterioration.json
│   └── types/                        # TypeScript interfaces
│       ├── patient.ts
│       ├── patient-data.ts
│       └── insight.ts
└── docs/
    ├── spec.md                       # Project specifications
    ├── progress.md                   # Development progress log
    └── Workflow for the EMR.pdf      # Workflow documentation
```

## 🎨 Features

### Modern Design System
- **Gradient Backgrounds**: Linear gradients for depth and visual appeal
- **Glassmorphism**: Backdrop blur effects on header
- **Smooth Animations**: Fade-in and slide-up transitions
- **Icon Integration**: Medical-themed SVG icons throughout
- **Color Psychology**: Risk-appropriate color coding
- **Micro-interactions**: Hover effects, scale transforms, shadows

### 1. Patient Search
- Search with icon indicator
- Real-time filtering by name, MRN, or date of birth
- Enhanced patient cards with avatars
- Lift effect on hover
- Grid-based information layout
- Empty state with helpful messaging

### 2. Patient Overview
- Large patient avatar with gradient background
- Color-coded vitals cards (red for HR, purple for BP, amber for temp)
- Interactive insight selection cards
- Hover animations with scale effects
- Enhanced shadows and borders
- Modern rounded corners (rounded-2xl)

### 3. Insight Results
- Gradient risk badges with icons
- Numbered factor lists with badges
- Enhanced clinical explanation sections
- Animated toggle for data panel
- Badge counter showing data points used
- Modern breadcrumb navigation

### 4. Data Visualization
- Color-coded vital signs with badges
- Grid layout for lab results
- Numbered clinical notes
- Medication grid with checkmarks
- Section icons for quick identification
- Professional medical color scheme

### 5. User Experience
- Sticky header with glassmorphism
- Gradient logo with brand identity
- User avatar with initials
- Smooth page transitions
- Consistent spacing rhythm
- Enhanced typography hierarchy

## 🧪 Test Patients

### John Doe (ID: p1, MRN: 123456)
- **Discharge Risk**: High (LACE Index: 13)
- **Deterioration Risk**: Medium
- **Medication Risk**: High
- Clinical factors: Recent fall, elevated creatinine, polypharmacy

### Mary Smith (ID: p2, MRN: 553210)
- **Discharge Risk**: Low (LACE Index: 6)
- **Deterioration Risk**: Low
- Clinical factors: Stable vitals, good functional status

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4 with custom animations
- **Fonts**: Geist Sans & Geist Mono
- **Icons**: Heroicons (SVG)
- **Data**: Local JSON files (no database, no APIs)

## 🎨 Design Features

- **Color Palette**: Blue/Indigo primary, Red/Purple/Amber for vitals, Green/Amber/Red for risk levels
- **Shadows**: Layered depth system (sm/md/lg/xl)
- **Border Radius**: Consistent rounded-xl and rounded-2xl
- **Spacing**: 6/8 unit rhythm for visual consistency
- **Typography**: Bold headings, semibold labels, uppercase tracking for labels
- **Animations**: Custom fadeIn and slideUp keyframes
- **Gradients**: Linear gradients using Tailwind 4 syntax

## 📊 Workflow

1. **Start** → Patient Search Page
2. **Search** → Filter patients by name/MRN/DOB
3. **Select** → Click patient card
4. **Overview** → View demographics & vitals
5. **Choose Insight** → Select evaluation type
6. **Results** → View risk assessment & recommendations
7. **Data** → Expand to see raw clinical data

## 🎯 Use Cases

- Discharge planning and readmission risk assessment
- Early warning system for clinical deterioration
- Medication safety review and interaction checking
- Educational demonstrations of clinical decision support
- Healthcare IT prototyping and design validation

## 📝 Notes

- **No External Dependencies**: All data is local
- **Mock Data**: Simulated insights, not real AI
- **Demo Purpose**: Not for production clinical use
- **Responsive Design**: Works on desktop and tablet

## 🔍 Technical Details

- Server Components for patient data loading
- Client Components for interactive features
- Dynamic routing with Next.js App Router
- Type-safe with TypeScript interfaces
- Accessible color contrast ratios
- ISO date formatting (DD.MM.YYYY)

## 📖 Documentation

See `/docs` folder for:
- `spec.md` - Complete project specifications
- `progress.md` - Development progress and change log
- `Workflow for the EMR.pdf` - Visual workflow documentation

## 🤝 Contributing

This is a demonstration MVP. For changes:
1. Review `/docs/spec.md` for requirements
2. Update `/docs/progress.md` with changes
3. Maintain TypeScript type safety
4. Follow Tailwind CSS conventions

## 📄 License

This is a demonstration project for educational purposes.
