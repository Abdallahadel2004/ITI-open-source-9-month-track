<?php

$url = $_SERVER['REQUEST_URI'];
$parts = explode('/', $url);

if ($url == '/' || $url == '/index.php') {
    require 'views/catalog.php';
} 
else if ($parts[1] == 'products' && isset($parts[2])) {
    $product_id = $parts[2];
    require 'views/product.php';
} 
else {
    echo "404 Not Found";
}
