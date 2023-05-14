<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // Get form data
  $name = $_POST["name"];
  $email = $_POST["email"];
  $phone = $_POST["phone"];
  $message = $_POST["message"];

  // Email content
  $to = "emieldewaele@gmail.com";
  $subject = "Nieuw bericht van $name";
  $body = "Naam: $name\nEmail: $email\nGSM: $phone\nBericht:\n$message";

  // Send email
  if (mail($to, $subject, $body)) {
    echo "Bericht succesvol verzonden.";
  } else {
    echo "Error: Verzenden mislukt";
  }
}
?>