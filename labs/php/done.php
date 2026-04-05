<?php
session_start();
if ($_SERVER["REQUEST_METHOD"] != "POST") {
    echo "No direct access allowed. Redirecting...";
    header("Refresh: 5; URL=lab2part2.php");
    exit();
}

$first_name = $_POST['first_name'];
$last_name = $_POST['last_name'];
$address = $_POST['address'];
$gender = $_POST['gender'];
$skills = isset($_POST['skills']) ? implode(", ", $_POST['skills']) : "None";
$department = $_POST['department'];

$user_captcha = $_POST['captcha'];
$original_captcha = $_SESSION['captcha_code'];
$is_valid = (strtolower($user_captcha) == strtolower($original_captcha));

if (!$is_valid) {
    echo "<h1>Error: Captcha is incorrect!</h1>";
    echo "هو الكود دخلته غلط  ارجع تاني<br>";
    echo "<a href='lab2part2.php'>Try Again</a>";
    exit(); 
}

$title = ($gender == "male") ? "Mr." : "Miss";

echo "<h1>Thanks $title $first_name $last_name</h1>";
echo "<h3>Please Review Your Information:</h3>";
echo "<strong>Name:</strong> $first_name $last_name <br>";
echo "<strong>Address:</strong> $address <br>";
echo "<strong>Your Skills:</strong> $skills <br>";
echo "<strong>Department:</strong> $department <br>";

$file_path = "customers.txt";
$data_to_save = "Name: $first_name $last_name | Address: $address | Skills: $skills | Department: $department\n";
file_put_contents($file_path, $data_to_save, FILE_APPEND);

echo "<p><em>Data successfully saved to customers.txt</em></p>";
echo "<br><a href='lab2part2.php'>Register Another User</a>";
?>