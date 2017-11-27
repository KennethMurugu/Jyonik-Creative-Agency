<?php 

	$contact_name = $_POST['contact_name'];
	$contact_number = $_POST['contact_number'];
	$contact_email = $_POST['contact_email'];
	$contact_msg = $_POST['contact_msg'];

	$email_subject = "Jyonik Home Contact Submit";
	$to = "kennethmurugu@gmail.com";
	$headers = "From: kennethmurugu@gmail.com \r\n";
	$headers .= "Reply-To: $contact_email\r\n";
	
	mail($to, "TEST SUBJECT", "TEST BODY", $headers);
 ?>