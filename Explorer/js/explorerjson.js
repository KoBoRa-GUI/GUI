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
        function fillList(){
    
       var link = document.getElementById("highlight");
        var linkName =    document.getElementById("highlight").innerHTML;
        document.getElementById("dataList").innerHTML = document.getElementById("dataList").innerHTML + "<a  href="+ link +" target='_blank'> "+ linkName +" </a><br>";
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
            }
        window.onload = init;