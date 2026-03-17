const SortingAlgorithms = require('./sorting_logic');

function test() {
    const testArr = [5, 3, 8, 1, 2, 7, 4, 6];
    const expected = [1, 2, 3, 4, 5, 6, 7, 8];

    console.log("Running Sorting Algorithm Tests...");

    // Test QuickSort Recursive
    const qsRec = SortingAlgorithms.quicksortRecursive([...testArr]);
    console.log("QuickSort Recursive:", JSON.stringify(qsRec) === JSON.stringify(expected) ? "PASS" : "FAIL");

    // Test QuickSort Iterative
    const qsIter = SortingAlgorithms.quicksortIterative([...testArr]);
    console.log("QuickSort Iterative:", JSON.stringify(qsIter) === JSON.stringify(expected) ? "PASS" : "FAIL");

    // Test MergeSort
    const ms = SortingAlgorithms.mergesort([...testArr]);
    console.log("MergeSort:", JSON.stringify(ms) === JSON.stringify(expected) ? "PASS" : "FAIL");

    // Test HeapSort
    const hs = SortingAlgorithms.heapsort([...testArr]);
    console.log("HeapSort:", JSON.stringify(hs) === JSON.stringify(expected) ? "PASS" : "FAIL");
}

try {
    test();
} catch (err) {
    console.error("Test execution failed:", err);
}
