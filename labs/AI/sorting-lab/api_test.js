const http = require('http');

const data = JSON.stringify({
    array: [10, 5, 8, 1, 7],
    algorithm: 'quicksort_recursive'
});

const options = {
    hostname: 'localhost',
    port: 8000,
    path: '/sort',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length
    }
};

const req = http.request(options, (res) => {
    let body = '';
    res.on('data', (chunk) => body += chunk);
    res.on('end', () => {
        console.log('API Response:', body);
    });
});

req.on('error', (e) => {
    console.error('API Error:', e.message);
});

req.write(data);
req.end();
