# 🌧️ Hydrological Simulation Dashboard

A web-based tool that simulates surface runoff based on rainfall, land use, and soil type using the SCS-Curve Number (CN) method. Designed for urban planners, civil engineers, environmental scientists, and educators who need a fast, interactive way to visualise flood risk and surface runoff.

---

## 🧭 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Runoff Model](#runoff-model)
- [Screenshots](#screenshots)
- [Future Improvements](#future-improvements)
- [License](#license)

---

## 📌 Overview

The Hydrological Simulation Dashboard allows users to simulate surface runoff using simplified hydrological models. By adjusting rainfall and site parameters (such as land use and soil type), users can understand how different conditions impact runoff volumes and flood potential.

This tool is useful for:
- Rapid flood risk screening
- Educational demonstrations
- Urban development planning
- Environmental project assessments

---

## ✨ Features

✅ Input panel for rainfall depth, area, land use, and soil type  
✅ Calculation of surface runoff using the **SCS-Curve Number method**  
✅ Dynamic charts for visualising runoff volume and water balance  
✅ Optional GIS-style map overlay with Leaflet.js  
✅ Fully responsive frontend UI  
✅ REST API backend for simulation logic

---

## 🧰 Tech Stack

| Layer         | Technology                                |
|----------------|--------------------------------------------|
| Frontend       | React, TailwindCSS, Recharts              |
| Backend        | FastAPI (Python)                          |
| Runoff Logic   | Python (SCS-Curve Number method)          |
| Mapping        | Leaflet.js, GeoJSON (for spatial overlays)|
| Charting       | Recharts (dynamic runoff & flow plots)    |
| Data Export    | CSV (Papaparse), PDF (jsPDF)              |
| User State     | LocalStorage / Redux (optional)           |
| Database       | SQLite / PostgreSQL (scenario storage)    |
| Hosting/Deploy | Docker, Render, or Heroku                 |

---

## 🚀 Getting Started

### Prerequisites

- Python 3.10+
- Node.js + npm (for frontend)
- Docker (optional)

---

## Runoff Model
