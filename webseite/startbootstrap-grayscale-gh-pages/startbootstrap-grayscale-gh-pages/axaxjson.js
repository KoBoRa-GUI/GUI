var resOb = erzXHRObject();

function sndReq(){
    resOb.open('get', 'jsonDeliverer.php', true);
    resOb.onreadystatechange = function(){
        handleResponse();
    }
        
        
    resOb.send(null);
}

function handleResponse(){
    var daten = null;
    if(resOb.readyState == 4){
        drawBubble(daten);
    }
}

function out(){
    
    for(i = 0; i < 3 ; i++){
        document.getElementById("info"+i).innerHTML = "";
    }
    
}

function drawBubble(daten){

    daten = JSON.parse(resOb.responseText);
    var datenString= daten.substring(1,daten.length -1);

    var datenBubble = datenString.split(",");    

    var name = datenBubble[0].substring(9,datenBubble[0].length -1);
   
   var prio = datenBubble[1].substring(8);

    var color = datenBubble[2].substring(10);

     var link = datenBubble[3].substring(9,datenBubble[3].length -1);

//alert(link);
    var size = 15 * prio +20;

var date = new Date();
    var Stunden = date.getHours();
  var Minuten = date.getMinutes();
  var Sekunden = date.getSeconds();
   var Vorsek = (Sekunden < 10) ? ":0" : ":";

    //erstelle bubble
    var bubble= '<div class="coloredBubble" style="width: '+size+'; height: '+size+'; background-color:'+color+'; "> <a class="bubbleLink"  href="'+link+'" target="_blank">'+ name +" " + Stunden+":"+Minuten+""+Vorsek + Sekunden +' </a> </div>';
        //verlängere den Container
     document.getElementById("innerBubbleContainer").style.width =  document.getElementById("innerBubbleContainer").offsetWidth + size+ 150 +"px";
 
    // füge Bubble Container hinzu
    document.getElementById("innerBubbleContainer").innerHTML = document.getElementById("innerBubbleContainer").innerHTML + bubble;
    // füge Link zu Liste hinzu
    document.getElementById("linkliste").innerHTML =  document.getElementById("linkliste").innerHTML + '<h4><a class="linkinLinklist" href="'+link+'" target="_blank">'+ name +" " + Stunden+":"+Minuten+""+Vorsek + Sekunden +' </a></h4>';




}





var myInterval;

function starteAnwenderung(){


      myInterval=     setInterval(  sndReq, 300);
     //      setInterval(  alert("test"), 300);
}

function stoppeAnwenderung(){


           clearInterval( myInterval);
     //      setInterval(  alert("test"), 300);
}


function init(){
    
      window.document.getElementById("startButton").onclick = function(){
          starteAnwenderung();
      }
       window.document.getElementById("stopButton").onclick = function(){
          stoppeAnwenderung();
      }
      /* getElementById("innerBubbleContainer").onmouseover = function(){
            sndReq(0);
        }   
     */
        
    
  
}

window.onload = init;