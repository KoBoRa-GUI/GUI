var resOb = erzXHRObject();

function sndReq() {
    resOb.open('get', 'jsonDeliverer.php', true);
    resOb.onreadystatechange = function () {
        handleResponse();
    }
    resOb.send(null);
}

function handleResponse() {
    var daten = null;
    if (resOb.readyState == 4) {
        drawBubble(daten);
    }
}

function out() {
    for (i = 0; i < 3; i++) {
        document.getElementById("info" + i).innerHTML = "";
    }
}

var countBubbles = 0;
var bubbleIDarray = new Array();


function drawBubble(daten) {

	
	
	try {
		daten = JSON.parse(resOb.responseText);
	} catch (e) {
		//alert("problem");
	//	alert(resOb.responseText);
	//	stoppeAnwendung();
	}
    
    var datenString = daten.substring(1, daten.length - 1);
    var datenBubble = datenString.split(",");
    var name = datenBubble[0].substring(9, datenBubble[0].length - 1);
    var prio = datenBubble[1].substring(8);
    var color = datenBubble[2].substring(10);
    var link = datenBubble[3].substring(9, datenBubble[3].length - 1);

    //alert(link);
    var size = 15 * prio + 20;
    var date = new Date();
    var Stunden = date.getHours();
    var Minuten = date.getMinutes();
    var Sekunden = date.getSeconds();
    var Vorsek = (Sekunden < 10) ? ":0" : ":";
    var Vormin = (Minuten < 10) ? ":0" : ":";

    countBubbles++;
    
    //zufälliges margin für bubbles
    var randomMargin = Math.random(1, 50) * 100 + '%';

    //erstelle bubbleRoom
    var bubbleRoom = '<div class="bubbleRoom" id="bubbleRoom' + countBubbles + '" " "> </div>';
    //  var bubbleRoom = '<p> test </p>';
    
    //erstelle bubble
    var bubble = '<div class="coloredBubble" id="coloredBubble' + countBubbles + '" style=" margin-top:'+randomMargin+'; width: ' + size + 'px; height: ' + size + 'px; background-color:' + color + '; "> <a id="bubble' + countBubbles + '" class="bubbleLink"  href="' + link + '" target="_blank">' + name + ' </a> </div>';

    //verlängere den Container
    document.getElementById("innerBubbleContainer").style.width = document.getElementById("innerBubbleContainer").offsetWidth + size + 150 + "px";

    //füge bubbleRoom hinzu 
    document.getElementById("innerBubbleContainer").innerHTML = document.getElementById("innerBubbleContainer").innerHTML + bubbleRoom;

    //füge Bubble dem Container hinzu
    document.getElementById('bubbleRoom' + countBubbles).innerHTML = bubble;

    //füge Link zu Liste hinzu
    //document.getElementById("linkliste").innerHTML = document.getElementById("linkliste").innerHTML + '<h4 id=link' + countBubbles + '><a class="linkinLinklist" href="' + link + '" target="_blank">' + name + " " + Stunden + Vormin + Minuten + "" + Vorsek + Sekunden + ' </a></h4>';

    
    //Autoscroll
	if(doScroll == 1){
	    //autoscroll des Bubblecontainers
	    var elemBubble = document.getElementById("bubble" + countBubbles);
	    elemBubble.scrollIntoView(true);
	
	    //autoscroll der Liste
	    //var elemList = document.getElementById("link" + countBubbles);
	    //elemList.scrollIntoView(true);
    }

    //background color der Links ergänzen war nur für die linklist wichtig 
//	document.getElementById('link' + countBubbles).style.color = "white";
//    document.getElementById('link' + countBubbles).style.backgroundColor = color;
//    document.getElementById('bubble' + countBubbles).style.backgroundColor = color;
//    document.getElementById('bubbleRoom' + countBubbles).style.paddingTop = randomPadding;
//  
    //document.getElementById('bubbleRoom3').style.paddingTop = randomPadding;
}

var doScroll = 1; 

var myInterval;


function starteAnwendung() {
    myInterval = setInterval(sndReq, 2500);
}

function stoppeAnwendung() {
    clearInterval(myInterval);
}


function init() {
	window.document.getElementById("content").onmouseover = function () {
        doScroll = 0;
    }
    window.document.getElementById("content").onmouseleave = function () {
        doScroll = 1;
    }
    window.document.getElementById("stopButton").onclick = function () {
    	stoppeAnwendung();
    }
    window.document.getElementById("startButton").onclick = function () {
        starteAnwendung();
        doScroll = 1;
     }
}


window.onload = init;