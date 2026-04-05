<?php
session_start(); 
$all_chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
$captcha_code = substr(str_shuffle($all_chars), 0, 6);
$_SESSION['captcha_code'] = $captcha_code;
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registration | ITI Open Source</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600&display=swap" rel="stylesheet">
    <style>
        :root {
            --primary: #2563eb;
            --primary-hover: #1d4ed8;
            --bg-gradient: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
            --glass: rgba(255, 255, 255, 0.05);
            --glass-border: rgba(255, 255, 255, 0.1);
            --text-main: #f8fafc;
            --text-muted: #94a3b8;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Outfit', sans-serif;
        }

        body {
            background: var(--bg-gradient);
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 2rem;
            color: var(--text-main);
        }

        .container {
            width: 100%;
            max-width: 650px;
            background: var(--glass);
            backdrop-filter: blur(12px);
            border: 1px solid var(--glass-border);
            padding: 3rem;
            border-radius: 24px;
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
            animation: fadeIn 0.6s ease-out;
        }

        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }

        h1 {
            font-size: 2.25rem;
            font-weight: 600;
            margin-bottom: 0.5rem;
            background: linear-gradient(to right, #60a5fa, #a855f7);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            text-align: center;
        }

        p.subtitle {
            text-align: center;
            color: var(--text-muted);
            margin-bottom: 2.5rem;
            font-size: 1rem;
        }

        .form-group {
            margin-bottom: 1.5rem;
        }

        label {
            display: block;
            margin-bottom: 0.5rem;
            font-weight: 400;
            color: var(--text-main);
            font-size: 0.9rem;
        }

        input[type="text"],
        input[type="password"],
        textarea,
        select {
            width: 100%;
            padding: 0.75rem 1rem;
            background: rgba(0, 0, 0, 0.2);
            border: 1px solid var(--glass-border);
            border-radius: 12px;
            color: white;
            font-size: 1rem;
            transition: all 0.3s ease;
            outline: none;
        }

        input:focus, textarea:focus, select:focus {
            border-color: var(--primary);
            box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.2);
            background: rgba(0, 0, 0, 0.3);
        }

        .row {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1.5rem;
        }

        .radio-group, .checkbox-group {
            display: flex;
            gap: 1.5rem;
            margin-top: 0.5rem;
            flex-wrap: wrap;
        }

        .radio-item, .checkbox-item {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            cursor: pointer;
            font-size: 0.95rem;
        }

        input[type="radio"], input[type="checkbox"] {
            accent-color: var(--primary);
            width: 1.1rem;
            height: 1.1rem;
        }

        .captcha-box {
            display: flex;
            align-items: center;
            gap: 1rem;
            margin-top: 1rem;
            padding: 1rem;
            background: rgba(255, 255, 255, 0.03);
            border-radius: 12px;
        }

        .captcha-code {
            font-family: 'Courier New', Courier, monospace;
            background: #334155;
            padding: 0.5rem 1rem;
            border-radius: 8px;
            font-weight: bold;
            letter-spacing: 3px;
            color: #fbbf24;
            user-select: none;
        }

        .actions {
            display: flex;
            gap: 1rem;
            margin-top: 2.5rem;
        }

        button {
            flex: 1;
            padding: 1rem;
            border: none;
            border-radius: 12px;
            font-size: 1rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        button[type="submit"] {
            background: var(--primary);
            color: white;
            box-shadow: 0 4px 6px -1px rgba(37, 99, 235, 0.4);
        }

        button[type="submit"]:hover {
            background: var(--primary-hover);
            transform: translateY(-2px);
            box-shadow: 0 10px 15px -3px rgba(37, 99, 235, 0.4);
        }

        button[type="reset"] {
            background: rgba(255, 255, 255, 0.05);
            color: var(--text-main);
            border: 1px solid var(--glass-border);
        }

        button[type="reset"]:hover {
            background: rgba(255, 255, 255, 0.1);
        }

        @media (max-width: 640px) {
            .row { grid-template-columns: 1fr; }
            .container { padding: 1.5rem; }
        }
    </style>
</head>
<body>

    <div class="container">
        <h1>Registration</h1>
        <p class="subtitle">Join the ITI Open Source Community</p>

        <form action="done.php" method="POST">
            <div class="row">
                <div class="form-group">
                    <label for="first_name">First Name</label>
                    <input type="text" id="first_name" name="first_name" required placeholder="Ex: Abdallah">
                </div>
                <div class="form-group">
                    <label for="last_name">Last Name</label>
                    <input type="text" id="last_name" name="last_name" required placeholder="Ex: Adel">
                </div>
            </div>

            <div class="form-group">
                <label for="address">Address</label>
                <textarea id="address" name="address" rows="3" required placeholder="Enter your full address..."></textarea>
            </div>

            <div class="form-group">
                <label for="country">Country</label>
                <select id="country" name="country" required>
                    <option value="" disabled selected>Select your country</option>
                    <option value="Egypt">Egypt</option>
                    <option value="USA">USA</option>
                    <option value="UK">UK</option>
                    <option value="Germany">Germany</option>
                    <option value="Japan">Japan</option>
                </select>
            </div>

            <div class="form-group">
                <label>Gender</label>
                <div class="radio-group">
                    <label class="radio-item">
                        <input type="radio" name="gender" value="male" required> Male
                    </label>
                    <label class="radio-item">
                        <input type="radio" name="gender" value="female" required> Female
                    </label>
                </div>
            </div>

            <div class="form-group">
                <label>Skills</label>
                <div class="checkbox-group">
                    <label class="checkbox-item"><input type="checkbox" name="skills[]" value="PHP"> PHP</label>
                    <label class="checkbox-item"><input type="checkbox" name="skills[]" value="MySQL"> MySQL</label>
                    <label class="checkbox-item"><input type="checkbox" name="skills[]" value="J2SE"> J2SE</label>
                    <label class="checkbox-item"><input type="checkbox" name="skills[]" value="PostgreSQL"> PostgreSQL</label>
                </div>
            </div>

            <div class="row">
                <div class="form-group">
                    <label for="username">Username</label>
                    <input type="text" id="username" name="username" required placeholder="Choose a username">
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" id="password" name="password" required placeholder="********">
                </div>
            </div>

            <div class="form-group">
                <label for="department">Department</label>
                <input type="text" id="department" name="department" value="OpenSource" readonly>
            </div>

            <div class="form-group">
                <label>Verification Code</label>
                <div class="captcha-box">
                    <span class="captcha-code"><?php echo $captcha_code; ?></span>
                    <input type="text" name="captcha" placeholder="Enter code" required style="width: 150px;">
                </div>
                <p style="font-size: 0.75rem; color: var(--text-muted); margin-top: 0.5rem;">Please insert the code in the box above</p>
            </div>

            <div class="actions">
                <button type="submit">Submit Registration</button>
                <button type="reset">Reset Form</button>
            </div>
        </form>
    </div>

</body>
</html>
