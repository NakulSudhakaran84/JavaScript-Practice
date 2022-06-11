/*function something(){
    document.write("Welcome to Surabhi");
}
setInterval("something()",2000);

var now=new Date();
var now=new Date(2022,5,9,7,46);
var now=new Date("June 9 2022 7:48:36");
document.write(now);*/


function clock(){
    var cd=new Date();
    var hours=cd.getHours();
    var minutes=cd.getMinutes();
    var seconds=cd.getSeconds();
    
    document.write("</h2>",hours,":",minutes,":",seconds,"</h2>");
}

clock();
//setInterval("clock()",1000);