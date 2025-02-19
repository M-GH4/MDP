<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $firstName = htmlspecialchars($_POST['first name']);
    $lastName = htmlspecialchars($_POST['last name']);
    $email = htmlspecialchars($_POST['email']);
    $phone = htmlspecialchars($_POST['phone']);
    $enquiry = htmlspecialchars($_POST['enquiry']);

    // Set the recipient email address
    $to = "your-email@example.com"; // Change to your email address
    $subject = "New Enquiry from $firstName $lastName";
    $message = "First Name: $firstName\nLast Name: $lastName\nEmail: $email\nPhone: $phone\n\nEnquiry:\n$enquiry";
    $headers = "From: $email";

    // Send the email
    if (mail($to, $subject, $message, $headers)) {
        echo "Thank you for your enquiry!";
    } else {
        echo "There was a problem sending your enquiry.";
    }
}
?>