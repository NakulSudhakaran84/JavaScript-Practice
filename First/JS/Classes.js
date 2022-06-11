class Student{
    constructor(name,age,roll){
        this.name=name;
        this.age=age;
        this.roll=roll;
    }
    org(){
        return ("I am "+this.name+" from siplicode");
    }
    dob(){
        return ("The date of birth of "+this.name+" is "+(2022-this.age));
    }
    static add(a,b){
        return a+b;
    }
}
    var Nakul=new Student("Nakul",38,45);
    console.log(Nakul);
    console.log(Student.add(4,5))


    class Student1 extends Student{
        constructor(name,age,roll,language,section){
            super(name,age,roll);
            this.language=language;
            this.section=section;
        }
    }

    var a=new Student1("nakul",34,67,"java","Tester");
    console.log(a);