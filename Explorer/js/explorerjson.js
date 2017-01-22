       function starteTree(){
                            
            var min = 1;
          	var max = 3;
          	
          	var random = Math.floor(Math.random() * (max - min + 1)) + min;
            $("#tree").fancytree({
            
                checkbox: false,
                source: {
                    url: "exp/test"+random+".json",
                    cache: false
                }
            })
            }
      
        function starteNewTree(){
            $("#tree").remove();
            $("#tree_container").append('<div id="tree" data-source="ajax" class="showDivs"></div>');
            starteTree();
        }


        var countList = 0;
        var doScroll = 1;

     function fillList(){

    var date = new Date();
    var Stunden = date.getHours();
    var Minuten = date.getMinutes();
    var Sekunden = date.getSeconds();
    var Vorsek = (Sekunden < 10) ? ":0" : ":";
    var Vormin = (Minuten < 10) ? ":0" : ":";
    
        var linkArray = document.getElementsByClassName("highlight");
     
           for(var i = 0; i < linkArray.length; i++ ){

             
               var link = linkArray[i];
               var linkName =   linkArray[i].innerHTML; 
               document.getElementById("dataList").innerHTML = document.getElementById("dataList").innerHTML + "<a  id='listPoint"+countList+"' href="+ link +" target='_blank'> "+ linkName +" " + Stunden + Vormin + Minuten + Vorsek + Sekunden + " Uhr </a><br>";

           

               
            if(doScroll == 1){
	       //autoscroll der Liste
	       var elemListPoint = document.getElementById('listPoint'+countList);
	       elemListPoint.scrollIntoView(true);
           }

           countList++;
           }
        }


        var myInterval;
        var myInterval2;
        function starteAnwendung(){
           // fillList();
            myInterval = setInterval(fillList, 3000);
            myInterval2 = setInterval(starteNewTree, 3000);
        }
        
function stoppeAnwendung() {
  
    
    clearInterval(myInterval);
    clearInterval(myInterval2);
}
            function init(){
                   
                    window.document.getElementById("startButton").onclick = function () {
                        starteAnwendung();
                    }
                    window.document.getElementById("stopButton").onclick = function () {
                        stoppeAnwendung();
                    }
                    window.document.getElementById("dataList").onmouseover = function () {
                        doScroll = 0;
                    }
                    window.document.getElementById("dataList").onmouseleave = function () {
                        doScroll = 1;
                    }


            }
        window.onload = init;