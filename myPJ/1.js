// function Family (name){
//     this.성 = 'kim';
//     this.name = name;
//     this.지역 = function(){
//         console.log('내가사는 곳은 인천');
//     }
// }

// let 할아버지 = new Family('하나');

// let 아버지 = new Family('둘');

// let 아들 = Object.create(아버지);

// console.log(아들.name);

class 동물 {
    constructor(type, color){
        this.type = type;
        this.color = color;
    }
    한살먹기(){
        console.log(this.age = this.age +1);    
    }
}

const 강아지1 = new 동물('말티즈', 'white');

class 고양이 extends 동물 {
    constructor(a,b,age){
        super(a,b);
        this.age = age;
    }
}

const 고양이1 = new 고양이('코숏','white',5);

console.log(고양이1.한살먹기());

/////// 4

class Unit {
    constructor(){
        this.공격력 = 5;
        this.체력 = 100;
    }
    battlePoint(){
        return (this.공격력 + this.체력);
    }
    set heal(hp){
        this.체력 = this.체력 + hp
    }
}

const 용사 = new Unit();
용사.heal = 50

console.log(용사.체력);
