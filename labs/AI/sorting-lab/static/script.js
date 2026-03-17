const container = document.getElementById('visualizer-container');
const speedInput = document.getElementById('speed-range');
let isSorting = false;

// Helper to sleep/delay
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

function renderBars(array, activeIndices = [], sortedIndices = []) {
    container.innerHTML = '';
    const maxVal = Math.max(...array);
    array.forEach((val, idx) => {
        const bar = document.createElement('div');
        bar.className = 'bar';
        if (activeIndices.includes(idx)) bar.classList.add('active');
        if (sortedIndices.includes(idx)) bar.classList.add('sorted');
        
        // Scale height (max height 280px)
        const height = (val / maxVal) * 280;
        bar.style.height = `${height}px`;
        bar.style.width = `${Math.floor(900 / array.length) - 4}px`;
        container.appendChild(bar);
    });
}

// Optimization: Bubblesort for simple animation demo or use full algos
async function quickSort(arr, low, high) {
    if (low < high) {
        let pivotIdx = await partition(arr, low, high);
        await quickSort(arr, low, pivotIdx - 1);
        await quickSort(arr, pivotIdx + 1, high);
    }
    if (low === 0 && high === arr.length - 1) {
        renderBars(arr, [], Array.from({length: arr.length}, (_, i) => i));
    }
}

async function partition(arr, low, high) {
    let pivot = arr[high];
    let i = low - 1;
    for (let j = low; j < high; j++) {
        if (!isSorting) return;
        renderBars(arr, [j, high]);
        await sleep(1010 - speedInput.value);
        if (arr[j] < pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
            renderBars(arr, [i, j]);
        }
    }
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    renderBars(arr, [i + 1]);
    return i + 1;
}

async function mergeSort(arr, start = 0, end = arr.length - 1) {
    if (start >= end) return;
    const mid = Math.floor((start + end) / 2);
    await mergeSort(arr, start, mid);
    await mergeSort(arr, mid + 1, end);
    await merge(arr, start, mid, end);
    
    if (start === 0 && end === arr.length - 1) {
        renderBars(arr, [], Array.from({length: arr.length}, (_, i) => i));
    }
}

async function merge(arr, start, mid, end) {
    let left = arr.slice(start, mid + 1);
    let right = arr.slice(mid + 1, end + 1);
    let i = 0, j = 0, k = start;

    while (i < left.length && j < right.length) {
        if (!isSorting) return;
        renderBars(arr, [k]);
        await sleep(1010 - speedInput.value);
        if (left[i] <= right[j]) {
            arr[k] = left[i];
            i++;
        } else {
            arr[k] = right[j];
            j++;
        }
        k++;
    }
    while (i < left.length) {
        arr[k] = left[i];
        i++; k++;
        renderBars(arr, [k]);
        await sleep(1010 - speedInput.value);
    }
    while (j < right.length) {
        arr[k] = right[j];
        j++; k++;
        renderBars(arr, [k]);
        await sleep(1010 - speedInput.value);
    }
}

async function heapSort(arr) {
    const n = arr.length;
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        await heapify(arr, n, i);
    }
    for (let i = n - 1; i > 0; i--) {
        if (!isSorting) return;
        [arr[0], arr[i]] = [arr[i], arr[0]];
        renderBars(arr, [0, i]);
        await sleep(1010 - speedInput.value);
        await heapify(arr, i, 0);
    }
    renderBars(arr, [], Array.from({length: arr.length}, (_, i) => i));
}

async function heapify(arr, n, i) {
    let largest = i;
    let l = 2 * i + 1;
    let r = 2 * i + 2;

    if (l < n && arr[l] > arr[largest]) largest = l;
    if (r < n && arr[r] > arr[largest]) largest = r;

    if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        renderBars(arr, [i, largest]);
        await sleep(1010 - speedInput.value);
        await heapify(arr, n, largest);
    }
}

async function bubbleSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (!isSorting) return;
            renderBars(arr, [j, j + 1]);
            await sleep(1010 - speedInput.value);
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                renderBars(arr, [j, j + 1]);
            }
        }
    }
    renderBars(arr, [], Array.from({length: arr.length}, (_, i) => i));
}

async function selectionSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let minIdx = i;
        for (let j = i + 1; j < n; j++) {
            if (!isSorting) return;
            renderBars(arr, [j, minIdx]);
            await sleep(1010 - speedInput.value);
            if (arr[j] < arr[minIdx]) minIdx = j;
        }
        [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
        renderBars(arr, [i, minIdx]);
    }
    renderBars(arr, [], Array.from({length: arr.length}, (_, i) => i));
}

document.getElementById('sort-btn').addEventListener('click', async () => {
    if (isSorting) {
        isSorting = false;
        await sleep(500);
    }
    
    const arrayInput = document.getElementById('array-input').value;
    const algoSelect = document.getElementById('algo-select').value;
    const statusMsg = document.getElementById('status-message');
    const sortedDisplay = document.getElementById('sorted-display');
    const originalDisplay = document.getElementById('original-display');
    const timeDisplay = document.getElementById('time-display');

    const array = arrayInput.split(',').map(n => parseInt(n.trim())).filter(n => !isNaN(n));
    if (array.length === 0) {
        statusMsg.textContent = "Status: Error - Invalid array";
        statusMsg.className = "error";
        return;
    }

    isSorting = true;
    originalDisplay.textContent = array.join(', ');
    statusMsg.textContent = "Status: Visualizing...";
    statusMsg.className = "";
    sortedDisplay.textContent = "In progress...";
    timeDisplay.textContent = "Time: Calculating...";
    
    renderBars(array);

    try {
        let visualArray = [...array];
        const startTime = performance.now();
        
        if (algoSelect === 'quicksort') {
            await quickSort(visualArray, 0, visualArray.length - 1);
        } else if (algoSelect === 'mergesort') {
            await mergeSort(visualArray);
        } else if (algoSelect === 'heapsort') {
            await heapSort(visualArray);
        } else if (algoSelect === 'bubblesort') {
            await bubbleSort(visualArray);
        } else if (algoSelect === 'selectionsort') {
            await selectionSort(visualArray);
        }

        const endTime = performance.now();
        const duration = (endTime - startTime).toFixed(2);

        if (isSorting) {
            sortedDisplay.textContent = visualArray.join(', ');
            statusMsg.textContent = `Status: Success!`;
            statusMsg.className = "success";
            timeDisplay.textContent = `Time: ${duration}ms`;
        }
    } catch (error) {
        console.error('Error:', error);
        statusMsg.textContent = "Status: Error";
        statusMsg.className = "error";
        timeDisplay.textContent = "Time: N/A";
    } finally {
        isSorting = false;
    }
});
