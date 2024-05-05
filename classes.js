
//CLASSES IN JS
class Vehicle{
    constructor(model,color)
    {
        this.model=model;
        this.color=color;
    }
}
const obj1= new Vehicle("sedane",7);
const obj2=new Vehicle("dsaw",2);
console.log(obj1);
console.log(obj2);

//JS CLASS METHODS
class Person{
    constructor(name)
    {
        this.name=name;
    }
    greet()
    {
        console.log(`hello ${this.name}`);
    }
}
let person1= new Person('wsa');
console.log(person1.name);
person1.greet();









/*const student ={
    name:'yuvraj singh',
    marks:23,
     greet:function(){
        console.log(`my name is${this.name} and my marks are ${this.marks}`);

    }
}
student.greet();*/


/*const age=23;
//console.log("age is"+age);
console.log(`age is ${age}`); */