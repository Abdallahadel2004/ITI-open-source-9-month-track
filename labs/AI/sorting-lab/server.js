const express = require('express');
const cors = require('cors');
const path = require('path');
const SortingAlgorithms = require('./sorting_logic');

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());
app.use('/static', express.static(path.join(__dirname, 'static')));

app.get('/', (req, res) => {
    res.json({ message: "Welcome to the Sorting Algorithm Lab API (Node.js). Access UI at /static/index.html" });
});

app.post('/sort', (req, res) => {
    const { array, algorithm } = req.body;
    
    if (!array || !Array.isArray(array)) {
        return res.status(400).json({ error: "Invalid array" });
    }
    
    let arr = [...array];
    const algo = algorithm?.toLowerCase();
    let result;

    const startTime = performance.now();
    try {
        switch (algo) {
            case 'quicksort_recursive':
                result = SortingAlgorithms.quicksortRecursive(arr);
                break;
            case 'quicksort_iterative':
                result = SortingAlgorithms.quicksortIterative(arr);
                break;
            case 'mergesort':
                result = SortingAlgorithms.mergesort(arr);
                break;
            case 'heapsort':
                result = SortingAlgorithms.heapsort(arr);
                break;
            case 'bubblesort':
                result = SortingAlgorithms.bubblesort(arr);
                break;
            case 'selectionsort':
                result = SortingAlgorithms.selectionsort(arr);
                break;
            default:
                return res.status(400).json({ error: "Invalid algorithm selection" });
        }

        const endTime = performance.now();
        const duration = (endTime - startTime).toFixed(3);

        res.json({
            original: array,
            sorted: result,
            algorithm: algorithm,
            execution_time_ms: duration
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
