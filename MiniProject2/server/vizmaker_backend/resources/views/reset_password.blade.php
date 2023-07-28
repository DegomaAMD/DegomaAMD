<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Password Reset</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
        }

        .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            border: 1px solid #ccc;
            border-radius: 5px;
            background-color: #f9f9f9;
        }

        .button {
            display: inline-block;
            padding: 10px 20px;
            background-color: #007bff;
            color: #fff;
            text-decoration: none;
            border-radius: 5px;
        }

        .button:hover {
            background-color: #0056b3;
        }

        .footer {
            margin-top: 20px;
            text-align: center;
        }
    </style>
</head>
<body>
    <div class="container">
        <h2>Password Reset</h2>
        <p>Hello,</p>
        <p>You have requested to reset your password. Click the button below to proceed:</p>
        <a class="button" href="{{ route('password.reset', ['token' => $token]) }}">Reset Password</a>
        <p>If you didn't request this password reset, you can safely ignore this email.</p>
        <div class="footer">
            <p>Thank you,</p>
            <p>Your Vizmaker Team</p>
        </div>
    </div>
</body>
</html>
