<?php 

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$name = $_POST['mfname'];
$email = $_POST['mfemail'];
$phone = $_POST['mfphone'];
$budget = $_POST['mfbudget'];

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.yandex.ru';  																							// Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'vebinarbotfaqtor@yandex.ru'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = 'ffmgvpyygrdjhimv'; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров

$mail->setFrom('vebinarbotfaqtor@yandex.ru'); // от кого будет уходить письмо?
$mail->addAddress('alavr@botfaqtor.ru');     // Кому будет уходить письмо 
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Заявка на вебинар 11.06';
$mail->Body = 'Имя - ' . $name . '<br> Email - ' . $email . '<br> Телефон - ' . $phone . '<br> Бюджет - ' . $budget;
$mail->AltBody = '';


if(!$mail->send()) {
    echo 'Error';
} else {
    header('location: index.html?submitted=true');
}
?>