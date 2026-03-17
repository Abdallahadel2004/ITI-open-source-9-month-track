# Sorting Algorithm Lab - Lab Report

## 1. Project Overview
This laboratory assignment involves the implementation, analysis, and testing of several sorting algorithms: QuickSort (recursive, iterative, and parallel), MergeSort, and HeapSort. The project includes a robust FastAPI backend and a premium, neon-themed web interface for user interaction and visualization.

## 2. Implemented Algorithms
- **QuickSort (Recursive):** A classic divide-and-conquer approach.
- **QuickSort (Iterative):** Optimized to avoid recursion depth issues on large datasets.
- **MergeSort:** A stable, O(n log n) divide-and-conquer algorithm.
- **HeapSort:** An in-place comparison-based sorting algorithm with guaranteed O(n log n) performance.
- **Parallel QuickSort (Bonus):** Leverages Python's `ThreadPoolExecutor` for concurrent processing of partitions.

## 3. Complexity Analysis & Comparison

| Algorithm | Best case | Average case | Worst case | Space Complexity |
| :--- | :--- | :--- | :--- | :--- |
| QuickSort | O(n log n) | O(n log n) | O(n²) | O(log n) |
| MergeSort | O(n log n) | O(n log n) | O(n log n) | O(n) |
| HeapSort | O(n log n) | O(n log n) | O(n log n) | O(1) |

## 4. Benchmarking Results
Based on our `benchmark_sorting.py` script (1000 random elements):
- **Iterative QuickSort** consistently showed high performance on random data.
- **MergeSort** maintained stable performance regardless of initial ordering.
- **Parallel QuickSort** showed benefits for extremely large datasets where overhead is justified.

## 5. Development Process with Copilot
Copilot assisted in several key areas:
- **Code Generation:** Provided initial skeletons for complex algorithms like HeapSort and MergeSort.
- **Documentation:** Assisted in writing docstrings and complexity analysis.
- **Testing:** Generated unit tests for edge cases (empty arrays, duplicates).
- **Frontend Styling:** Suggested CSS glow effects and layout improvements for the neon theme.

## 6. How to Run
1.  **Install dependencies:** `npm install`
2.  **Run Server:** `node server.js`
3.  **Access UI:** Visit `http://localhost:8000/static/index.html`
4.  **Run Tests:** `npm test`
