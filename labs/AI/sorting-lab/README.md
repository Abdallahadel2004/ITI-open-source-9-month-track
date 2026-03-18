# 🚀 Sorting Algorithm Lab (React + Node.js)

A premium, interactive web application to visualize and test various sorting algorithms. This project now features a cinematic **Animated Shader Hero** entry, a React-Vite frontend, and a high-performance Express backend with ES Module support.

## ✨ Features
- **Cinematic Hero Entry**: Real-time WebGL shader-backed hero section with interactive animations.
- **Real-time Visualization**: Watch algorithms in action with dynamic bar animations.
- **Performance Tracking**: Precise server-side execution time in milliseconds.
- **Modern Tech Stack**: Built with React 19, Vite 8, and Tailwind CSS v4.
- **Multiple Algorithms**:
  - QuickSort (Recursive & Iterative)
  - MergeSort
  - HeapSort
  - BubbleSort
  - SelectionSort
- **API Support**: Test algorithms directly via REST endpoints.
- **Interactive UI**: Custom neon design with adjustable animation speed.

---

## 🛠️ Tech Stack & MCP
- **Frontend**: React 19, Vite, Tailwind CSS v4, TypeScript.
- **Backend**: Node.js (Express) with ES Module support.
- **StitchMCP**: Used for AI-driven UI design and refinement of the Hero component.
- **Postman MCP**: Used for automated API collection management and endpoint verification.

---

## 🛠️ Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/)

### Installation
1. Clone the repository and navigate to the lab folder:
   ```bash
   cd labs/AI/sorting-lab
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Project

#### 1. Start the Frontend (Vite)
To see the new Animated Hero and the UI:
```bash
npx vite
```
Then open your browser at `http://localhost:5173/`.

#### 2. Start the Backend (Express)
To enable the sorting API:
```bash
npm start
```
The API will be available at `http://localhost:8000/`.

---

## 📡 API Reference

### Sort Array
Sort a numerical array using a specified algorithm.

- **Endpoint**: `POST /sort`
- **Headers**: `Content-Type: application/json`
- **Body**:
  ```json
  {
    "array": [64, 34, 25, 12, 22, 11, 90],
    "algorithm": "mergesort"
  }
  ```
- **Valid Algorithms**: `quicksort_recursive`, `quicksort_iterative`, `mergesort`, `heapsort`, `bubblesort`, `selectionsort`.

---

## 🧪 Testing
- **API Tests**: Run `npm test` to execute the automated server tests.
- **Type Checking**: Run `npx tsc --noEmit` to verify TypeScript integrity.

---

## 📁 Project Structure
- `index.html`: Main entry point (moved to root for Vite).
- `vite.config.ts`: Vite configuration with native Tailwind v4 support.
- `tsconfig.json`: TypeScript configuration for React and JSX.
- `server.js`: Express server using ES Module `import/export`.
- `sorting_logic.js`: Core algorithm implementations (ES Module).
- `src/`: React source code (Main entry and styles).
- `components/`: Reusable UI components (including the Shader Hero).
- `static/`: Original frontend assets (CSS, JS).
- `test_sorting.js`: Unit tests for the algorithms.
