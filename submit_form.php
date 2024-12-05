<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    $data = "Name: $name\nEmail: $email\nMessage: $message\n---\n";

    // Save the data to a file
    $file = 'messages.txt';
    file_put_contents($file, $data, FILE_APPEND);

    echo "Thank you for your message! I'll get back to you soon.";
} else {
    echo "Form submission failed. Please try again.";
}
?>
