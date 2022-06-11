console.log("Welcome to JavaScript");

var abc={
    Name:"Nakul",
    Subject:"Javascript",
    Address:"bangalore"   
}
console.log(abc);

function xyz(name,subject,address){
    this.name=name;
    this.subject=subject;
    this.address=address;
}

var x=new xyz("Nakul","java","Earth");
console.log(x);