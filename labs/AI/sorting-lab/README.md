# 🚀 Sorting Algorithm Lab (Node.js)

A premium, interactive web application to visualize and test various sorting algorithms. This project features a high-performance Express backend, a neon-themed real-time visualizer, and an integrated Postman testing suite.

## ✨ Features
- **Real-time Visualization**: Watch algorithms in action with dynamic bar animations.
- **Performance Tracking**: Precise server-side execution time in milliseconds.
- **Multiple Algorithms**:
  - QuickSort (Recursive & Iterative)
  - MergeSort
  - HeapSort
  - BubbleSort
  - SelectionSort
- **API Support**: Test algorithms directly via REST endpoints.
- **Interactive UI**: Custom neon design with adjustable animation speed.

---

## 🛠️ MCP (Model Context Protocol)
This project leverages specialized MCP servers to enhance the development and testing experience:
- **StitchMCP**: Used for AI-driven UI design and refinement, ensuring a high-quality, neon-themed user interface.
- **Postman MCP**: Used for automated API collection management, request generation, and endpoint verification directly from the AI environment.

---

## 🛠️ Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) (installed with Node.js)

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
1. Start the server:
   ```bash
   npm start
   ```
2. Open your browser and go to:
   ```
   http://localhost:8000/static/index.html
   ```

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

#### Example Response
```json
{
  "original": [64, 34, 25, 12, 22, 11, 90],
  "sorted": [11, 12, 22, 25, 34, 64, 90],
  "algorithm": "mergesort",
  "execution_time_ms": "0.015"
}
```

---

## 🧪 Testing
- **API Tests**: Run `npm test` to execute the automated server tests.
- **Postman**: Import the "Sorting Lab JS API" collection from your Postman workspace to test interactively.

---

## 📁 Project Structure
- `server.js`: Express server handle routing and CORS.
- `sorting_logic.js`: Core algorithm implementations.
- `static/`: Frontend assets (HTML, CSS, JS).
- `test_sorting.js`: Unit tests for the algorithms.
