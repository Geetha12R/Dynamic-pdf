# PDF Form Viewer & Dynamic Form Sync

A React/Next.js application that renders a bank-style PDF form and dynamically generates an interactive form UI from a JSON schema.  
The application synchronizes user interaction between the PDF viewer and the form panel for a seamless document editing experience.

---

## 🚀 Live Demo

Deployed on Vercel:  
[Add Your Vercel Link Here]

---

## 📌 Features

### 📄 PDF Viewer
- Rendered PDF using `react-pdf`
- Overlay highlights for detected fields
- Active field highlighting synced with form interaction
- Dynamic overlay rendering for:
  - Text fields (First Name and Last Name)
  - Number field (Account Number)
  - Checkbox fields (Terms and Conditions)
  - Toggle/Radio fields (Account Type)
  - Date fields (Date of Birth)

### 📝 Dynamic Form
- JSON schema-driven form rendering
- Supports 5 field types:
  - Text
  - Number
  - Checkbox
  - Toggle / Radio
  - Date
- Real-time synchronization with PDF overlays
- Validation handling for user inputs
- Name validation:
  - Minimum 2 chars
  - Maximum 15 chars
- DOB validation:
  - Minimum age: 18 years
  - Maximum age range: 100 years
- Account Number validation:
  - Number only
  - 7 digit mandatory
  - Does not accept 0000000 as a valid account number


### 🎨 UI/UX
- Responsive split-panel layout
- Smooth animations using Framer Motion
- Active field highlighting
- Visual validation effects on input fields
- Interactive and clean user experience

### 🧠 State Management
- Global state managed using Redux library
- Shared focus state between:
  - PDF overlays
  - Dynamic form inputs

---

# 🛠️ Tech Stack

- Next.js
- React
- Redux
- TailwindCSS
- Framer Motion
- react-pdf

---

# 📂 Project Structure

```bash
src/
│
├── components/
│   ├── PDF/overlays/
│   ├── form/InputFields/
│
├── data/
│
├── store/
│
├── utils/
│
└── app/
```

---

# ⚙️ Setup Instructions

## 1. Clone the repository

```bash
git clone https://github.com/Geetha12R/Dynamic-pdf.git
```

## 2. Navigate into the project

```bash
cd dynamic-pdf
```

## 3. Install dependencies

```bash
npm install
```

## 4. Run the development server

```bash
npm run dev
```

## 5. Open in browser

```bash
http://localhost:3000
```

---

# 🧩 Approach

## PDF Rendering
The PDF is rendered using `react-pdf`.  
Field overlays are positioned dynamically using coordinate-based helper utilities.

## Dynamic Form Rendering
The form UI is generated dynamically from a JSON schema representing extracted PDF fields.

Each field type maps to a reusable React component:
- `TextField`
- `CheckboxField`
- `ToggleField`
- `DateField`

## State Management Strategy
Redux is used to maintain:
- Form values
- Active/focused field state
- Synchronization between PDF overlays and form inputs

This allows:
- Shared focus handling
- Dynamic updates across both panels
- Scalable state architecture

---

# 🤖 AI-Based Field Extraction (Approach)

In a production environment, AI/OCR services could be used to extract fields from scanned PDFs.

Possible approaches:
- OCR using Tesseract.js or cloud OCR APIs
- LLM-based schema extraction
- PDF parsing libraries for structured forms

The extracted data could then be transformed into a normalized JSON schema such as:

```json
{
  "id": "name",
  "type": "text",
  "label": "Full Name",
  "value": "",
  "rect": { "x": 180, "y": 315, "width": 138, "height": 21 }
}
```

The frontend dynamically renders the form from this schema.

---

# ✨ Performance Optimizations

- Component memoization using `React.memo`
- Reusable helper utilities
- Dynamic rendering based on field schema
- Optimized overlay rendering
- Controlled re-renders for form fields

---

# 📦 Deliverables

- Dynamic PDF viewer
- Schema-driven form rendering
- Synced form ↔ PDF interactions
- Global state management
- Validation support
- Inline comments for readability
- Vercel deployment

---

# 👩‍💻 Author

Geetha Ranganathan