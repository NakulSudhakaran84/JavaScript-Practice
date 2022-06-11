var rect={
    length:5,
    width:10,
    getarea:function(){
        return this.length*this.width;
    },
    getparameter:function(){
        return 2*this.length+2*this.width;
    }
};
document.write("<h2>"+"The length of the Rect"+rect.length+"</h2>");
document.write("<h2>"+"The width of the Rect"+rect.width+"</h2>");
document.write("<h2>"+"The area of the Rect"+rect.getarea()+"</h2>");
document.write("<h2>"+"The parameter of the Rect"+rect.getparameter()+"</h2>");
