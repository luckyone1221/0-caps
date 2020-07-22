<?php
//отвечаем только на AJAX запросы
if ($_SERVER['HTTP_X_REQUESTED_WITH'] != 'XMLHttpRequest') {return;}
//фильтруем остальные данные получаемые в запросе
$type  = filter_input(INPUT_POST, 'type');
$headers  = "Content-type: text/html; charset=utf8  \r\n"; 
$headers .= "From:Крышкаоптом";
$to  = "steelot@mail.ru";
$fio1  = filter_input(INPUT_POST, 'fio');
$fon  = filter_input(INPUT_POST, 'fon');
$obl  = "Новая заявка на звонок";
mail($to, "Новая заявка на звонок", "<html> 
    <head> 
	<meta http-equiv=«Content-Type» content=«text/html; charset=utf-8»>
	<meta name='format-detection'/>
	<meta name='format-detection' content='telephone=yes'/>
    </head> 
    <body> 
    <table border='2' cellpadding='0' cellspacing='0' style='width: 600px; padding: 20px; background: #FFFFFF; color: #000000; margin: auto; text-align: center; font-size: 20px; line-height: 25px;'>
   <tr style='padding: 10px;  border: 2px solid #000000; '>
    <td style='padding: 10px;'> Тема сообщения: </td>
    <td style='padding: 10px;'> Новая заявка </td>
  </tr>
  <tr style='padding: 10px;  border: 2px solid #000000; '>
    <td style='padding: 10px;'> Имя: </td>
    <td style='padding: 10px;'> $fio1 </td>
  </tr>
  <tr style='padding: 10px; border: 2px solid #000000; '>
    <td style='padding: 10px;'>Телефон: </td>
    <td style='padding: 10px;'> $fon</td>
  </tr>
</table>
</body> 
</html>", $headers); // сообщение на ваш email о новом отзыве
?>