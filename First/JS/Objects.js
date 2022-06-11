/*var car={
    car_manufacture:"Audi",
    car_model:"Q7",
    price:"5000000",

    allwheeldrive: function(){
        document.write("This car comes with 4 wheel drive");
    }

}

//document.write("<h1>"+car.car_manufacture+"</h1>");
//document.write("<h1>"+car.allwheeldrive()+"</h1>");
//car.allwheeldrive();*/




function cars(car_manufacture,car_model,price){
    
    this.car_manufacture=car_manufacture;
    this.car_model=car_model;
    this.price=price;

    this.allwheeldrive=function(){
        document.write("This car comes with four wheel drive");
    }
}
    var c1=new cars("Audi","Q7",500000);
    c1.allwheeldrive();
    var c2=new cars("BMW","X7",400000);
    document.write(c2.car_model);

    
