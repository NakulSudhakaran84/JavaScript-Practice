function Fun1(){
    var x= document.getElementById("rad1");
    var y= document.getElementById("rad2");
    if(x.checked == true){
        alert("Wrong Answer. The correct answer is :"+y.value);
    }
    else if(y.checked == true){
        alert("Right Answer");
    }
    else{
        alert("No option selected");
    }
}