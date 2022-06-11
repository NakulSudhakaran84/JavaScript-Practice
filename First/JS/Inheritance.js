const Employee={
    Post: function(){
    return "A software developer";
    },
    ChangeName: function(name){
        this.name=name;
    }

};
var E1=Object.create(Employee);
console.log(E1);
E1.name="Nakul";
E1.role="Writer";
E1.ChangeName("Ram");
console.log(E1);

var E2=Object.create(Employee,{
    name:{value:"Nakul",writable:true},
    role:{value:"Programmer"},
})

E2.ChangeName("Ram");
console.log(E2);