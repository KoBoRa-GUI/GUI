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

    daten = JSON.parse(resOb.responseText);
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
    countBubbles++;

    //erstelle bubbleRoom

    var bubbleRoom = '<div class="bubbleRoom" id="bubbleRoom' + countBubbles + '" "> </div>';
    //  var bubbleRoom = '<p> test </p>';


    //erstelle bubble
    var bubble = '<div class="coloredBubble" id="coloredBubble' + countBubbles + '" style="width: ' + size + '; height: ' + size + '; background-color:' + color + '; "> <a id="bubble' + countBubbles + '" class="bubbleLink"  href="' + link + '" target="_blank">' + name + " " + Stunden + ":" + Minuten + "" + Vorsek + Sekunden + ' </a> </div>';
    //verlängere den Container
    document.getElementById("innerBubbleContainer").style.width = document.getElementById("innerBubbleContainer").offsetWidth + size + 150 + "px";

    //füge bubbleRoom hinzu 
    document.getElementById("innerBubbleContainer").innerHTML = document.getElementById("innerBubbleContainer").innerHTML + bubbleRoom;
    // füge Bubble dem Container hinzu
    document.getElementById('bubbleRoom' + countBubbles).innerHTML = bubble;
    // füge Link zu Liste hinzu
    document.getElementById("linkliste").innerHTML = document.getElementById("linkliste").innerHTML + '<h4 id=link' + countBubbles + '><a class="linkinLinklist" href="' + link + '" target="_blank">' + name + " " + Stunden + ":" + Minuten + "" + Vorsek + Sekunden + ' </a></h4>';

    //autoscroll des Bubblecontainers
    var elemBubble = document.getElementById("bubble" + countBubbles);
    elemBubble.scrollIntoView(true);

    //autoscroll der Liste

    var elemList = document.getElementById("link" + countBubbles);
    elemList.scrollIntoView(true);

    //background color der Links ergänzen
    var randomPadding = Math.random(1, 50) * 100 + '%';
    document.getElementById('link' + countBubbles).style.color = "white";
    document.getElementById('link' + countBubbles).style.backgroundColor = color;
    document.getElementById('bubble' + countBubbles).style.backgroundColor = color;
    document.getElementById('coloredBubble' + countBubbles).style.marginTop = randomPadding;






}







var myInterval;
var setMousoverInterval;

function starteAnwenderung() {


    myInterval = setInterval(sndReq, 3000);

}

function stoppeAnwenderung() {


    clearInterval(myInterval);
    clearInterval(setMousoverInterval);
}


function init() {


    window.document.getElementById("content").onmouseover = function () {
        stoppeAnwenderung();
    }
    window.document.getElementById("content").onmouseleave = function () {
        starteAnwenderung();
    }



    /* getElementById("innerBubbleContainer").onmouseover = function(){
          sndReq(0);
      }   
   */



}

window.onload = init;