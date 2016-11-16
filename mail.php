<?php
$data = $_POST['dat'];
$params = array();
parse_str($data, $params);

$client = htmlspecialchars($params['name']);
$email = htmlspecialchars($params['email']);
$phone = htmlspecialchars($params['phone']);
$otkuda = htmlspecialchars($params['usl']);
$txt = htmlspecialchars($params['txt']);
$search = htmlspecialchars($params['search']);
$medium = htmlspecialchars($params['medium']);
$keyword = htmlspecialchars($params['keyword']);
$campaign = htmlspecialchars($params['campaign']);

$today = date("Y-m-d H:i:s");
$sendto = "webbender@yandex.ru";
$files_txt = fopen('counter.txt', 'a+'); 
$count_elm = fgets($files_txt); 
fclose($files_txt);
$count_elm++;
$a = (string)$count_elm;
$f = fopen("counter.txt", "w");
fwrite($f, $a); 
fclose($f);
$subject  = "Заявка #".$count_elm." ".$otkuda;
$msg  = " ";
$msg .= "<b>Клиент: </b>".$client."<br>";
$msg .= "<b>Телефон: </b>".$phone."<br>";
$msg .= "<b>Email: </b>".$email."<br>";
$msg .= "<b>Комментарий: </b>".$txt."<br>";
$msg .= "<b>Услуга (форма на сайте): </b>".$otkuda."<br>";
$msg .= "<b>Рекламная система: </b>".$search."<br>";
$msg .= "<b>Тип трафика: </b>".$medium."<br>";
$msg .= "<b>Кампания: </b>".$campaign."<br>";
$msg .= "<b>Ключевое: </b>".$keyword."<br>";
$msg .= "<b>Дата и время заявки: </b>".$today."<br>";
$headers  = "Content-type: text/html; charset=utf-8 \r\n"; 
$headers .= "From: me <mail@mail.com>\r\n";
@mail($sendto, $subject, $msg, $headers);
?>