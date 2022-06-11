var x= document;
console.log(x);

var x= document.head;
console.log(x);

var x= document.body;
console.log(x);

var x= document.forms;
console.log(x);

var x=document.images;
console.log(x);

function OneS(){
    var y=document;
    y=document.querySelector('.left');
   // y=document.forms[0];
   var x=document.querySelector(".container");
   var z=x.querySelector(".right");
   var a=x.children;
   var b=x.childNodes;

    console.log(y);
    console.log(z);
    console.log(a);
    console.log(b);
    console.log(x.children[4]);
    console.log(x.firstChild);
    console.log(x.firstElementChild);
    console.log(x.lastChild);
    console.log(x.lastElementChild);
    console.log(x.childElementCount);
    
    console.log(x.parentElement);
    
}

function OneS(){
    var x=document.querySelector(".center");
    console.log(x.nextElementSibling);
    console.log(x.previousElementSibling);
}
