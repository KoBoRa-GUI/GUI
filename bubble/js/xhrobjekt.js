<<<<<<< HEAD
function erzXHRObject(){
    var resObjekt = null;
    
    try{
        resObjekt = new ActiveXObject("Microsoft.XMLHTTP");
    } catch(Error){
        try{
            resObjekt = new ActiveXObject("MSXML2.XMLHTTP");
        } catch(Error){
            try{
            	
                resObjekt = new XMLHttpRequest();
            } catch(Error){
            alert("Steinzeit Browser!!!");
        }
        }
    }
return resObjekt;
=======
function erzXHRObject(){
    var resObjekt = null;
    
    try{
        resObjekt = new ActiveXObject("Microsoft.XMLHTTP");
    } catch(Error){
        try{
            resObjekt = new ActiveXObject("MSXML2.XMLHTTP");
        } catch(Error){
            try{
            	
                resObjekt = new XMLHttpRequest();
            } catch(Error){
            alert("Steinzeit Browser!!!");
        }
        }
    }
return resObjekt;
>>>>>>> branch 'bubble' of https://github.com/KoBoRa-GUI/GUI.git
}