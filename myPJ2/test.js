function one(cb){
    console.log(1);
    cb();
}

function two(){
    console.log(3);
}

one(function(){
    console.log(2);
    two();
})