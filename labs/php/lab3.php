<?php
$errors = [];
$success = "";
$userInfoFile = 'userInfo.txt';
$uploadDir = 'uploads/';



if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = trim($_POST['name']);
    $email = trim($_POST['email']);
    $password = $_POST['password'];
    $confirm_password = $_POST['confirm_password'];
    $room_number = $_POST['room_number'];
    $ext = trim($_POST['ext']);

    if (empty($name)) $errors['name'] = "Name is required.";

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors['email'] = "Invalid email format (filter_var).";
    }
    elseif (!preg_match("/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/", $email)) {
        $errors['email'] = "Invalid email format (Regex).";
    }

    if (empty($password)) $errors['password'] = "Password is required.";
    if ($password !== $confirm_password) {
        $errors['confirm_password'] = "Passwords do not match.";
    }

    $profile_picture = "";
    if (isset($_FILES['profile_picture']) && $_FILES['profile_picture']['error'] == 0) {
        $fileType = mime_content_type($_FILES['profile_picture']['tmp_name']);
        if (strpos($fileType, "image/") !== 0) {
            $errors['profile_picture'] = "File must be an image.";
        } else {
            $fileName = time() . "_" . basename($_FILES['profile_picture']['name']);
            $targetFilePath = $uploadDir . $fileName;
            if (move_uploaded_file($_FILES['profile_picture']['tmp_name'], $targetFilePath)) {
                $profile_picture = $fileName;
            } else {
                $errors['profile_picture'] = "Failed to upload image.";
            }
        }
    } else {
        $errors['profile_picture'] = "Profile picture is required.";
    }

    if (empty($errors)) {
        file_put_contents($userInfoFile, "$name|$email|$room_number|$ext|$profile_picture" . PHP_EOL, FILE_APPEND);
        $success = "User registered successfully!";
        $name = $email = $ext = "";
    }
}
$data = file_exists($userInfoFile) ? file_get_contents($userInfoFile) : "";
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registration Form - Lab 3</title>
    <style>
        body { font-family: Arial, sans-serif; background-color: #f4f4f9; margin: 20px; }
        .container { max-width: 600px; background: white; padding: 20px; border-radius: 8px; box-shadow: 0 0 10px rgba(0,0,0,0.1); margin: auto; }
        h1 { text-align: center; color: #333; }
        .form-group { margin-bottom: 15px; }
        label { display: block; margin-bottom: 5px; font-weight: bold; }
        input[type="text"], input[type="email"], input[type="password"], select {
            width: 100%; padding: 8px; box-sizing: border-box; border: 1px solid #ccc; border-radius: 4px;
        }
        .error { color: #d9534f; font-size: 0.85em; margin-top: 5px; }
        .success { background-color: #dff0d8; color: #3c763d; padding: 10px; border-radius: 4px; margin-bottom: 20px; text-align: center; }
        .btn-group { display: flex; gap: 10px; margin-top: 20px; }
        input[type="submit"], input[type="reset"] {
            padding: 10px 20px; border: none; border-radius: 4px; cursor: pointer; color: white;
        }
        input[type="submit"] { background-color: #337ab7; }
        input[type="reset"] { background-color: #777; }
        
        table { width: 100%; border-collapse: collapse; margin-top: 40px; background: white; }
        table, th, td { border: 1px solid #ddd; }
        th, td { padding: 12px; text-align: left; }
        th { background-color: #f8f8f8; }
        img { border-radius: 4px; }
    </style>
</head>
<body>

<div class="container">
    <h1>Add User</h1>
    
    <?php if ($success): ?>
        <div class="success"><?php echo $success; ?></div>
    <?php endif; ?>

    <form action="" method="POST" enctype="multipart/form-data">
        <div class="form-group">
            <label for="name">Name</label>
            <input type="text" name="name" id="name" value="<?php echo htmlspecialchars($name ?? ''); ?>">
            <?php if (isset($errors['name'])): ?>
                <div class="error"><?php echo $errors['name']; ?></div>
            <?php endif; ?>
        </div>

        <div class="form-group">
            <label for="email">Email</label>
            <input type="text" name="email" id="email" value="<?php echo htmlspecialchars($email ?? ''); ?>">
            <?php if (isset($errors['email'])): ?>
                <div class="error"><?php echo $errors['email']; ?></div>
            <?php endif; ?>
        </div>

        <div class="form-group">
            <label for="password">Password</label>
            <input type="password" name="password" id="password">
            <?php if (isset($errors['password'])): ?>
                <div class="error"><?php echo $errors['password']; ?></div>
            <?php endif; ?>
        </div>

        <div class="form-group">
            <label for="confirm_password">Confirm Password</label>
            <input type="password" name="confirm_password" id="confirm_password">
            <?php if (isset($errors['confirm_password'])): ?>
                <div class="error"><?php echo $errors['confirm_password']; ?></div>
            <?php endif; ?>
        </div>

        <div class="form-group">
            <label for="room_number">Room No.</label>
            <select name="room_number" id="room_number">
                <option value="Application1">Application1</option>
                <option value="Application2">Application2</option>
                <option value="cloud">cloud</option>
            </select>
        </div>

        <div class="form-group">
            <label for="ext">Ext.</label>
            <input type="text" name="ext" id="ext" value="<?php echo htmlspecialchars($ext ?? ''); ?>">
        </div>

        <div class="form-group">
            <label for="profile_picture">Profile Picture</label>
            <input type="file" name="profile_picture" id="profile_picture">
            <?php if (isset($errors['profile_picture'])): ?>
                <div class="error"><?php echo $errors['profile_picture']; ?></div>
            <?php endif; ?>
        </div>

        <div class="btn-group">
            <input type="submit" value="Save">
            <input type="reset" value="Reset">
        </div>
    </form>
</div>


</body>
</html>
