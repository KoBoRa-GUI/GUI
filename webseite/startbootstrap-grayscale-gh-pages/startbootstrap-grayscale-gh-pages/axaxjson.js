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
    //  document.getElementById('coloredBubble'+countBubbles).style.backgroundColor = "black";
    document.getElementById('coloredBubble' + countBubbles).style.marginTop = randomPadding;



  /*  IDarray.push(countBubbles);
    nameArray.push(name);
    linkArray.push(link);
*/
    // bubbleIDarray.push([countBubbles, name, link] );

       setMousoverToBubble(  countBubbles , name, link );

//setMousoverToBubble2();
}

/*
function testFunction(){

    alert(nameArray[nameArray.length]);
}

function setMousoverToBubble2() {

//window.document.getElementById("coloredBubble1").onmouseover =   testFunction;


//    alert("id array length: "+ IDarray.length );

    for (var i = 1; i < IDarray.length; i++) {
       
window.document.getElementById("coloredBubble"+i ).onmouseover =   testFunction;
      /*  alert(nameArray[i-1]);
        window.document.getElementById('coloredBubble' + i).onmouseover = function () {

            alert(nameArray[i-1]);
        }


    }


}

*/




var IDarray = new Array();
var nameArray = new Array();
var linkArray = new Array();

function setMousoverToBubble(id, name,link) {

//alert(id);
     IDarray.push(id);
    nameArray.push(name);
   linkArray.push(link);

 //  alert("länge IDarray: " +IDarray.length);
   

window.document.getElementById('coloredBubble'+ id).onmouseover = function(){

    alert(name +" und "+link);
}


for(var i = 0; i < nameArray.length; IDarray++){

  

    window.document.getElementById('coloredBubble'+ IDarray[i]).onmouseover = function(){

    alert(nameArray[i] +" ****und**** "+linkArray[i]);
}
}






    /* alert("erstes: " +bubbleIDarray[0][0]);
     alert("zweites: " +bubbleIDarray[0][1]);
      alert("drittes: " +bubbleIDarray[0][2]);
    
    
    alert(bubbleIDarray.length);
    
    for (var i = 0; i < bubbleIDarray.length; i++) {

        //  alert(bubbleIDarray[i]);

        var countBubbles = bubbleIDarray[i][0];
        var name = bubbleIDarray[i][1];

        var link = bubbleIDarray[i][2];

        //    alert("vor 2. for länge: " + bubbleIDarray.length);

        for (var x = 0; x < bubbleIDarray.length; x++) {

            //        alert('coloredBubble'+ bubbleIDarray[i][0]);
            window.document.getElementById('coloredBubble' + bubbleIDarray[i][0]).onmouseover = function () {

                alert(bubbleIDarray[i][1]);
            }
            /*  window.document.getElementById('coloredBubble'+bubbleIDarray[i][0]).onmouseover = function(){
              //alert( name );// bubbleIDarray[i][1]);
             var number = bubbleIDarray[i].indexOf(bubbleIDarray[i][0]);
             alert(number);
           }
         }
     
       //   window.document.getElementById(bubbleName).onmouseover = function(){
         //    alert(name);
         //  }
     /*
     alert("in set mousseover");
         for (var i = 0; i < bubbleIDarray.length; i++) {
         var index = bubbleIDarray[0].indexOf(bubbleIDarray[i][0]);
         alert("in set mousseover*************** index: "+ index );
         if (index > -1) {
           alert [i, index];
         }
       }
     alert("in set mousseoverxxxxxxxxxxxxxxxxxxxxxxxxx");
   
        }

    }  */
}


var myInterval;
var setMousoverInterval;

function starteAnwenderung() {


    myInterval = setInterval(sndReq, 3000);
  //  setMousoverInterval= setInterval(setMousoverToBubble2, 3000);
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