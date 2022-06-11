/*var rect=new Object();
rect.length=5;
rect.width=10;
rect.getarea=function(){
    return this.length*this.width;
}
rect.getperimeter=function(){
    return 2*this.length+2*this.width;
}
document.write("<h2>"+"The length of the Rect"+rect.length+"</h2>");
document.write("<h2>"+"The width of the Rect"+rect.width+"</h2>");
document.write("<h2>"+"The area of the Rect"+rect.getarea()+"</h2>");
document.write("<h2>"+"The parameter of the Rect"+rect.getperimeter()+"</h2>");*/


function rect(length,width){
    this.length=length;
    this.width=width;
    this.getarea=function(){
        return length*width;
    }
    this.getperimeter=function(){
        return 2*length+2*width;
    }
}
var r=new rect(5,10);
document.write("<h2>"+"The area of the Rect"+r.getarea()+"</h2>");
document.write("<h2>"+"The parameter of the Rect"+r.getperimeter()+"</h2>");
