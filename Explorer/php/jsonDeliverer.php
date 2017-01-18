
<?php




$ExplorerArray = array ('[{"title":"TGCA - User Experience","expanded":true,"folder":true,"children":[{"title":"<a href=\'https://drive.google.com/drive/folders/0B8cdzV78DhAdOWlfTEFTaWsyd1U\' target=\'_blank\'> Explorer dummy</a>","expanded":true,"folder":true,"children":[{"title":"<a href=\'https://drive.google.com/drive/folders/0B8cdzV78DhAddU5mWmdnZkZSTTA\' target=\'_blank\'> Tools</a>","folder":true,"children":[{"title":"<a href=\'https://docs.google.com/document/d/1zXOVsU6pjd8VKlFv6CeSACDmgL7EyAcV-91JV8dBJKA/edit\' target=\'_blank\'> Beschreibung</a>"}]},{"title":"<a href=\'https://drive.google.com/drive/folders/0B8cdzV78DhAdRzhWSHlubU5oU0E\'  target=\'_blank\'> Protokolle</a>","expanded":true,"folder":true,"children":[{"title":"<a href=\'https://docs.google.com/document/d/1GjML6sIJUQL_6AqiyWTCyT9-s8za4H7n0FYnmn38kVs/edit\' class=\'hilite\' target=\'_blank\'> protokoll</a>"}]},{"title":"<a href=\'https://drive.google.com/drive/folders/0B8cdzV78DhAdUmVjcU5xNzZWR1U\' target=\'_blank\'> Admin</a>","folder":true,"children":[{"title":"<a href=\'https://docs.google.com/document/d/1M12wYEOv4Z_6nlicGR6gMrEWvczxFfsAVS8WsVTq1iY/edit\' target=\'_blank\'> Anleitung</a>"}]}]}]}]' );
	

$randomMumber= rand(1, 9);
$line_chart_data =  $ExplorerArray[0];
$line_chart_data = json_encode($line_chart_data);
echo $line_chart_data;

	

?>