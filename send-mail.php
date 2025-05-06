<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

header('Content-Type: application/json');

// Form verilerini al
$name = $_POST['name'] ?? '';
$phone = $_POST['phone'] ?? '';
$email = $_POST['email'] ?? '';
$message = $_POST['message'] ?? '';

try {
    $mail = new PHPMailer(true);

    // SMTP ayarları
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com'; // Gmail için
    $mail->SMTPAuth = true;
    $mail->Username = 'your-email@gmail.com'; // Gmail adresiniz
    $mail->Password = 'your-app-password'; // Gmail uygulama şifreniz
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = 587;
    $mail->CharSet = 'UTF-8';

    // Gönderici ve alıcı
    $mail->setFrom('your-email@gmail.com', 'İletişim Formu');
    $mail->addAddress('your-email@gmail.com'); // Mesajların geleceği e-posta

    // E-posta içeriği
    $mail->isHTML(true);
    $mail->Subject = 'Yeni İletişim Formu Mesajı';
    $mail->Body = "
        <h2>Yeni İletişim Formu Mesajı</h2>
        <p><strong>Ad Soyad:</strong> {$name}</p>
        <p><strong>Telefon:</strong> {$phone}</p>
        <p><strong>E-posta:</strong> {$email}</p>
        <p><strong>Mesaj:</strong></p>
        <p>{$message}</p>
    ";

    $mail->send();
    echo json_encode(['success' => true, 'message' => 'Mesajınız başarıyla gönderildi.']);
} catch (Exception $e) {
    echo json_encode(['success' => false, 'message' => 'Mesaj gönderilirken bir hata oluştu: ' . $mail->ErrorInfo]);
}
?> 