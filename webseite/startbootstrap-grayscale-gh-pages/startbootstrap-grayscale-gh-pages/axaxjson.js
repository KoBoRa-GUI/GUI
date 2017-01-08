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
        daten = JSON.parse(resOb.responseText);
        document.getElementById("innerBubbleContainer").innerHTML = document.getElementById("innerBubbleContainer").innerHTML + daten;
    }
}

function out(){
    
    for(i = 0; i < 3 ; i++){
        document.getElementById("info"+i).innerHTML = "";
    }
    
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