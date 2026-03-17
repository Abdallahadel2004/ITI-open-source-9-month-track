class SortingAlgorithms {
    /**
     * QuickSort (Recursive)
     * Time Complexity: Average O(n log n), Worst O(n^2)
     * Space Complexity: O(log n)
     */
    static quicksortRecursive(arr) {
        if (arr.length <= 1) return arr;
        
        const pivot = arr[Math.floor(arr.length / 2)];
        const left = arr.filter(x => x < pivot);
        const middle = arr.filter(x => x === pivot);
        const right = arr.filter(x => x > pivot);
        
        return [
            ...SortingAlgorithms.quicksortRecursive(left),
            ...middle,
            ...SortingAlgorithms.quicksortRecursive(right)
        ];
    }

    /**
     * QuickSort (Iterative)
     */
    static quicksortIterative(arr) {
        if (arr.length <= 1) return arr;
        
        const stack = [];
        stack.push(0);
        stack.push(arr.length - 1);
        
        while (stack.length > 0) {
            const high = stack.pop();
            const low = stack.pop();
            
            if (low < high) {
                const p = SortingAlgorithms._partition(arr, low, high);
                
                stack.push(low);
                stack.push(p - 1);
                
                stack.push(p + 1);
                stack.push(high);
            }
        }
        return arr;
    }

    static _partition(arr, low, high) {
        const pivot = arr[high];
        let i = low - 1;
        
        for (let j = low; j < high; j++) {
            if (arr[j] <= pivot) {
                i++;
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
        }
        [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
        return i + 1;
    }

    /**
     * MergeSort
     */
    static mergesort(arr) {
        if (arr.length <= 1) return arr;
        
        const mid = Math.floor(arr.length / 2);
        const left = SortingAlgorithms.mergesort(arr.slice(0, mid));
        const right = SortingAlgorithms.mergesort(arr.slice(mid));
        
        return SortingAlgorithms._merge(left, right);
    }

    static _merge(left, right) {
        const result = [];
        let i = 0, j = 0;
        
        while (i < left.length && j < right.length) {
            if (left[i] < right[j]) {
                result.push(left[i]);
                i++;
            } else {
                result.push(right[j]);
                j++;
            }
        }
        return [...result, ...left.slice(i), ...right.slice(j)];
    }

    /**
     * HeapSort
     */
    static heapsort(arr) {
        const n = arr.length;
        
        for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
            SortingAlgorithms._heapify(arr, n, i);
        }
        
        for (let i = n - 1; i > 0; i--) {
            [arr[0], arr[i]] = [arr[i], arr[0]];
            SortingAlgorithms._heapify(arr, i, 0);
        }
        return arr;
    }

    static _heapify(arr, n, i) {
        let largest = i;
        const l = 2 * i + 1;
        const r = 2 * i + 2;
        
        if (l < n && arr[l] > arr[largest]) largest = l;
        if (r < n && arr[r] > arr[largest]) largest = r;
        
        if (largest !== i) {
            [arr[i], arr[largest]] = [arr[largest], arr[i]];
            SortingAlgorithms._heapify(arr, n, largest);
        }
    }

    /**
     * BubbleSort
     */
    static bubblesort(arr) {
        const n = arr.length;
        for (let i = 0; i < n - 1; i++) {
            for (let j = 0; j < n - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                }
            }
        }
        return arr;
    }

    /**
     * SelectionSort
     */
    static selectionsort(arr) {
        const n = arr.length;
        for (let i = 0; i < n - 1; i++) {
            let minIdx = i;
            for (let j = i + 1; j < n; j++) {
                if (arr[j] < arr[minIdx]) minIdx = j;
            }
            [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
        }
        return arr;
    }
}

module.exports = SortingAlgorithms;
