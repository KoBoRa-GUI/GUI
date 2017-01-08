
<?php




$namearray = array ("Kalender", "Protokoll", "Aufgabe", "Webseite", "Word-Dokument"   );

$linkarray = array ("https://calendar.google.com/calendar/render??hl=de&pli=1#main_7%7Cmonth", "https://calendar.google.com/calendar/render??hl=de&pli=1#main_7%7Cmonth", "https://drive.google.com/drive/folders/0B67F-mC7FAMxeXJXTFJ2a1h3aVk", "https://ox.hdm-stuttgart.de/appsuite/#!!&app=io.ox/mail&folder=default0//NQGW%5D", "http://teaching.christian-rathke.de/lehre/lehrveranstaltungen/technologische-grundlagen-cloudbasierter-anwendungen"   );


$randomMumber= rand(1, 4);

$line_chart_data =  '{ "name":"'.$namearray[$randomMumber].'", "prio": '.rand(1, 10).', "link":"'.$linkarray[$randomMumber].' "}';
$line_chart_data = json_encode($line_chart_data);



echo $line_chart_data;


	

?>