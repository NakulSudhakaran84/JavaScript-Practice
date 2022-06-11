function person(friend,person2){
    setTimeout(function(){
        console.log("My friend's name is "+friend);
        person2();},3000);
}

function person2(){
    console.log("My name is Nakul");
}
person("JavaScript",person2)