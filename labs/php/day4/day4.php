<?php
$host = 'localhost';
$dbname = 'php_day4';
$username = 'root';
$password = '';
$errors = [];
$success = "";


try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $pdo->exec("ALTER TABLE users MODIFY COLUMN id VARCHAR(50)");
} catch (PDOException $e) {
    die("Database Connection Error: " . $e->getMessage());
}

if (isset($_GET['delete'])) {
    $id = $_GET['delete'];
    $stmt = $pdo->prepare("DELETE FROM users WHERE id = ?");
    $stmt->execute([$id]);
    header("Location: day4.php"); 
    exit();
}

$isEdit = false;
$id_to_update = "";
$name = $age = $gmail = "";

if (isset($_GET['edit'])) {
    $id = $_GET['edit'];
    $stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");
    $stmt->execute([$id]);
    $user = $stmt->fetch(PDO::FETCH_ASSOC);
    if ($user) {
        $isEdit = true;
        $id_to_update = $user['id'];
        $name = $user['name'];
        $age = $user['age'];
        $gmail = $user['gmail'];
    }
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = trim($_POST['name']);
    $age = trim($_POST['age']);
    $gmail = trim($_POST['gmail']);
    $id = $_POST['id'] ?? '';

    if (empty($name)) $errors['name'] = "Name is required.";
    if (empty($age) || !is_numeric($age)) $errors['age'] = "Valid age is required.";

    if (empty($errors)) {
        try {
            if ($id) {
                $stmt = $pdo->prepare("UPDATE users SET name = ?, age = ?, gmail = ? WHERE id = ?");
                $stmt->execute([$name, $age, $gmail, $id]);
                $success = "User updated successfully!";
            } else {
                $myuid = uniqid(); 
                $stmt = $pdo->prepare("INSERT INTO users (id, name, age, gmail) VALUES (?, ?, ?, ?)");
                $stmt->execute([$myuid, $name, $age, $gmail]);
                $success = "User added successfully ";
            }
            
            header("Location: day4.php?success=" . urlencode($success));
            exit();
        } catch (PDOException $e) {
            $errors['db'] = "Database error: " . $e->getMessage();
        }
    }
}

if (isset($_GET['success'])) {
    $success = $_GET['success'];
}
$stmt = $pdo->query("SELECT * FROM users");
$users = $stmt->fetchAll(PDO::FETCH_ASSOC);

?>




<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body { font-family: Arial, sans-serif; background-color: #f4f4f9; margin: 20px; }
        .container { max-width: 500px; background: white; padding: 20px; border-radius: 8px; box-shadow: 0 0 10px rgba(0,0,0,0.1); margin: auto; }
        h1 { text-align: center; color: #333; }
        .form-group { margin-bottom: 15px; }
        label { display: block; margin-bottom: 5px; font-weight: bold; }
        input[type="text"], input[type="number"], input[type="email"] {
            width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 4px;
        }
        .error { color: #d9534f; font-size: 0.85em; margin-top: 5px; }
        .success { background-color: #dff0d8; color: #3c763d; padding: 10px; border-radius: 4px; margin-bottom: 20px; text-align: center; }
        .btn-group { display: flex; gap: 10px; margin-top: 20px; }
        input[type="submit"], .btn-reset {
            padding: 10px 20px; border: none; border-radius: 4px; cursor: pointer; color: white; text-decoration: none;
        }
        input[type="submit"] { background-color: <?php echo $isEdit ? '#f0ad4e' : '#337ab7'; ?>; }
        .btn-reset { background-color: #777; display: inline-block; text-align: center; }
        
        table { width: 100%; border-collapse: collapse; margin-top: 40px; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 0 10px rgba(0,0,0,0.1); }
        th, td { border: 1px solid #ddd; padding: 12px; text-align: left; }
        th { background-color: #f8f8f8; }
        .action-links a { margin-right: 10px; text-decoration: none; }
        .edit-link { color: #f0ad4e; font-weight: bold; }
        .delete-link { color: #d9534f; font-weight: bold; }
    </style>
</head>
<body>

<div class="container">
    <h1><?php echo $isEdit ? "Update User" : "Add New User"; ?></h1>
    
    <?php if ($success): ?>
        <div class="success"><?php echo htmlspecialchars($success); ?></div>
    <?php endif; ?>

    <form action="day4.php" method="POST">
        <input type="hidden" name="id" value="<?php echo htmlspecialchars($id_to_update); ?>">

        <div class="form-group">
            <label for="name">Name</label>
            <input type="text" name="name" id="name" value="<?php echo htmlspecialchars($name); ?>">
            <?php if (isset($errors['name'])): ?>
                <div class="error"><?php echo $errors['name']; ?></div>
            <?php endif; ?>
        </div>

        <div class="form-group">
            <label for="age">Age</label>
            <input type="number" name="age" id="age" value="<?php echo htmlspecialchars($age); ?>">
            <?php if (isset($errors['age'])): ?>
                <div class="error"><?php echo $errors['age']; ?></div>
            <?php endif; ?>
        </div>

        <div class="form-group">
            <label for="gmail">Gmail</label>
            <input type="email" name="gmail" id="gmail" value="<?php echo htmlspecialchars($gmail); ?>">
            <?php if (isset($errors['gmail'])): ?>
                <div class="error"><?php echo $errors['gmail']; ?></div>
            <?php endif; ?>
        </div>

        <div class="btn-group">
            <input type="submit" value="<?php echo $isEdit ? "Update User" : "Save User"; ?>">
            <a href="day4.php" class="btn-reset">Reset</a>
        </div>
    </form>
</div>

<div class="container" style="max-width: 900px; margin-top: 30px;">
    <h2>Stored Users</h2>
    <table>
        <thead>
            <tr>
                <th>UID</th>
                <th>Name</th>
                <th>Age</th>
                <th>Gmail</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            <?php if (empty($users)): ?>
                <tr>
                    <td colspan="5" style="text-align: center;">No users in database.</td>
                </tr>
            <?php else: ?>
                <?php foreach ($users as $user): ?>
                    <tr>
                        <td style="font-size: 0.8em; color: #777;"><?php echo htmlspecialchars($user['id']); ?></td>
                        <td><?php echo htmlspecialchars($user['name']); ?></td>
                        <td><?php echo htmlspecialchars($user['age']); ?></td>
                        <td><?php echo htmlspecialchars($user['gmail']); ?></td>
                        <td class="action-links">
                            <a href="day4.php?edit=<?php echo urlencode($user['id']); ?>" class="edit-link">Edit</a>
                            <a href="day4.php?delete=<?php echo urlencode($user['id']); ?>" onclick="return confirm('Are you sure you want to delete this user?')" class="delete-link">Delete</a>
                        </td>
                    </tr>
                <?php endforeach; ?>
            <?php endif; ?>
        </tbody>
    </table>
</div>

</body>
</html>
