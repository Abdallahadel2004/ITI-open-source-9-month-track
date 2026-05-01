<?php
$response = file_get_contents('https://dummyjson.com/products');
$data = json_decode($response, true);
$products = $data['products'] ?? [];
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Product Catalog Dashboard</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: #f0f2f5;
            margin: 0;
            padding: 20px;
            color: #1c1e21;
        }
        h1 {
            margin-bottom: 20px;
        }
        .grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            gap: 20px;
            max-width: 1200px;
            margin: 0 auto;
        }
        .card {
            background: #fff;
            border-radius: 8px;
            padding: 20px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            display: flex;
            flex-direction: column;
        }
        .image-container {
            height: 250px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 15px;
        }
        .card img {
            max-width: 100%;
            max-height: 100%;
            object-fit: contain;
            cursor: pointer;
        }
        .card h2 {
            font-size: 1.2rem;
            margin: 0 0 10px;
        }
        .card h2 a {
            text-decoration: none;
            color: #1a0dab;
        }
        .card h2 a:hover {
            text-decoration: underline;
        }
        .card p.desc {
            font-size: 0.95rem;
            color: #4a4a4a;
            flex-grow: 1;
            line-height: 1.4;
        }
        .card p.price {
            font-weight: 600;
            margin: 10px 0;
            font-size: 1.1rem;
        }
        .card p.rating {
            font-size: 0.95rem;
            color: #333;
            margin: 0;
        }
    </style>
</head>
<body>
    <div style="max-width: 1200px; margin: 0 auto;">
        <h1>Product Catalog Dashboard</h1>
        <div class="grid">
            <?php foreach ($products as $product): ?>
                <div class="card">
                    <div class="image-container">
                        <a href="/products/<?= $product['id'] ?>">
                            <img src="<?= $product['thumbnail'] ?>" alt="<?= $product['title'] ?>">
                        </a>
                    </div>
                    <h2>
                        <a href="/products/<?= $product['id'] ?>">
                            <?= $product['title'] ?>
                        </a>
                    </h2>
                    <p class="desc"><?= $product['description'] ?></p>
                    <p class="price">$<?= number_format($product['price'], 2) ?></p>
                    <p class="rating">Rating: <?= $product['rating'] ?></p>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
</body>
</html>
