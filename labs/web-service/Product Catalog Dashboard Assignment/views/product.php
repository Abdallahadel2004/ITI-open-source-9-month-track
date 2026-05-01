<?php
$response = file_get_contents('https://dummyjson.com/products/' . $product_id);
$product = json_decode($response, true);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title><?= $product['title'] ?> - Details</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: #f0f2f5;
            margin: 0;
            padding: 20px;
            color: #1c1e21;
        }
        .container {
            max-width: 800px;
            margin: 0 auto;
            background: #fff;
            border-radius: 8px;
            padding: 30px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .nav-link {
            display: inline-block;
            margin-bottom: 20px;
            color: #1a0dab;
            text-decoration: none;
            font-size: 1rem;
        }
        .nav-link:hover {
            text-decoration: underline;
        }
        .product-thumbnail {
            max-width: 150px;
            height: auto;
            margin-bottom: 20px;
        }
        h1 {
            margin-top: 0;
            font-size: 2rem;
            margin-bottom: 20px;
        }
        p.description {
            line-height: 1.6;
            margin-bottom: 20px;
        }
        .details p {
            margin: 15px 0;
            font-size: 1.05rem;
        }
        .details strong {
            font-weight: normal;
        }
    </style>
</head>
<body>
    <div style="max-width: 800px; margin: 0 auto;">
        <a href="/" class="nav-link"> Back to Products</a>
    </div>
    <div class="container">
        <img src="<?= $product['thumbnail'] ?>" alt="<?= $product['title'] ?>" class="product-thumbnail">
        
        <h1><?= $product['title'] ?></h1>
        
        <p class="description"><?= $product['description'] ?></p>
        
        <div class="details">
            <p>Price: $<?= number_format($product['price'], 2) ?></p>
            <p>Discount: <?= $product['discountPercentage'] ?>%</p>
            <p>Rating: <?= $product['rating'] ?>/5</p>
            <p>Stock: <?= $product['stock'] ?></p>
            <p>Brand: <?= $product['brand'] ?? 'N/A' ?></p>
            <p>Category: <?= $product['category'] ?></p>
        </div>
    </div>
</body>
</html>
