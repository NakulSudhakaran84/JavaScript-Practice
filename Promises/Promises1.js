var functions=function(){
    return new Promise(function(resolve,reject){
        resolve("  Learnt functions ");
    });
};

var callback=function(message){
    return new Promise(function(resolve,reject){
        resolve(message+" Learnt callback functions ");
    });
};

var promises= function(message){
    return new Promise(function(resolve,reject){
        resolve(message+" Good to go for Promises in JavaScript.")
    });
};


functions().then(function(result){
    return callback(result);
}).then(function(result){
    return promises(result);
}).then(function(result){
    console.log("Good to go : "+result);
});