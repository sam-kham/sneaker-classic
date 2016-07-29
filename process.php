<?php 
  $to = "sam.kham12@gmail.com";  
  $from = $_POST["email"]; //sender's Email address
  $name = $_POST["name"];
  $subject = $_POST["subject"];
  $message = $name . " wrote the following:" . "\n\n" . $_POST["message"];
  $headers = 'From:' . $from;
  mail($to,$subject,$message,$headers);

  header('Location: contact_success.html');
?>
