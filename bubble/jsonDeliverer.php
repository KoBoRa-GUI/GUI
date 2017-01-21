<?php


$namearray = array (
"Kalender", 
"User Stories Explorer.docx",
"Notizen.docx",
"Projektdokumentation UX.docx",
"ToDo-Liste.xlsx",
"Präsentation User Experience.pptx",
"Explorer Prototyp",											//exp link
"Explorer",
"Beispiele",
"Anforderungskatalog.xlsx",
);



$linkarray = array (
"https://calendar.google.com/calendar/render??hl=de&pli=1#main_7%7Cmonth", 
"https://docs.google.com/document/d/1GpQvmQHQxT2JunSAgikVFhw7dcFlLMmCgbikWV6Vvf0/edit",
"https://docs.google.com/document/d/1bkLCvEBX56OBrECe89SFxpaqhlfQfZtOUNHNxM2Rlmc/edit",
"https://docs.google.com/document/d/1R1VkvcuNqAgvH4NpReUMAcaNfdp92sxxK7GkR1rTMYc/edit#heading=h.gjdgxs",
"https://docs.google.com/spreadsheets/d/1yvQaaoON5RaQHP-X64vRi5NHW7eZgXBm07IGbOvp1hU/edit#gid=0",
"https://docs.google.com/presentation/d/15D33bCUltMJGjnlo2bmLP2YpY5zoJFtELeUf5qVLnxM/edit#slide=id.p4",
"https://facebook.com",																						//exp link
"https://drive.google.com/drive/folders/0B5DLVTqFPj3ZTjU0STcxX3c5RFE",		
"https://drive.google.com/drive/folders/0B5DLVTqFPj3ZOHBNcmpYUjBhWGc",
"https://docs.google.com/spreadsheets/d/14QGK4LAcajOP0HBXqT4_k7ArSibyWg0u_Gy0p7RbgHQ/edit"

		
);



$colorArray = array ("#F7CC0B",
                     "#0404B4",
                     "#0404B4", 
                     "#0404B4",
                     "#0B610B",
                     "#FF8000",
					 "#F7CC0B",  //exp link
                     "#F7CC0B",
                     "#F7CC0B",
                     "#0B610B"
					 
);



$randomNumber= rand(0, 8);




$line_chart_data =  '{ "name":"'.$namearray[$randomNumber].'", "prio": '.rand(5, 10).', "color: "'.  $colorArray[$randomNumber].', "link":"'.$linkarray[$randomNumber].' "}';


$line_chart_data = json_encode($line_chart_data);





echo $line_chart_data;



?>