<?php
error_reporting(0);
$nombre = $_POST['nombre'];
$apellido = $_POST['apellido'];
$correo_electronico= $_POST['email'];
$asunto= $_POST['mensaje'];

$header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
$header .= "Mime-Version: 1.0 \r\n";
$header .= "Content-Type: text/plain";

$mensaje = "Este mensaje fue enviado por " . $nombre . $apellido ." \r\n";
$mensaje .= "Su e-mail es: " . $mail . " \r\n";
$mensaje .= "Mensaje: " . $_POST['mensaje'] . " \r\n";
;

$para = jonzapatab@gmail.com;
$asunto = 'PORFOLIO';

mail($para, $asunto, utf8_decode($mensaje), $header);

echo 'mensaje enviado correctamente';
