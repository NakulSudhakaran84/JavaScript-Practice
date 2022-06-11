function Fun2(){
    var x= document.getElementsByTagName("div");
    x[0].style.fontFamily="Courier New";
    x[1].style.color="Blue";
    x[2].style.fontStyle="italic";
    x[3].style.backgroundColor="Red";
}
function Fun3(){
    var x=document.getElementsByTagName("div");
    for(var i=0;i<x.length;i++){
        x[i].style.fontWeight ="Bolder";
    }
   
}