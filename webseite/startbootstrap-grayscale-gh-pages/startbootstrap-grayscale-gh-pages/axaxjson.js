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
    var link = datenBubble[2].substring(9,datenBubble[2].length -1);

    var size = 100 * prio;

    var bubble= '<div style="width: '+size+'; heigh: '+size+'; background-color:red;  border-radius: 360px; margin: 1%; "> <a href="'+link+'" target="_blank">'+ name +' </a> </div>';


    document.getElementById("innerBubbleContainer").innerHTML = document.getElementById("innerBubbleContainer").innerHTML + bubble;


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