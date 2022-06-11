function Print(){
    var x=document.getElementById("uname").value;
    var y=document.getElementById("passwrd").value;

    if(y=="Simplicode"){
        alert("Login successful");
    }
    else{
        alert("wrong password");
    }
    alert("The name is :"+x+"\n"+"password is :"+y);
}