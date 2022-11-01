function Test (name){
 this.name =name;
}

Test.prototype.sayHi = function(){
    console.log(this.name +'성공');
}

let a = new Test('성진');

a.sayHi();