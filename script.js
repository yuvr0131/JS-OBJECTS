const y={
    name:'yuvraj',
    age:22,
    hobbies:['coding','studying core','walking'],
    foods: {
        sunday:'burger',
        moday:'rice'
    },
    greet: ()=>{
        console.log("hello kaun hum baban")
    }
}
y.name="bhola";
y.ishuman=true;
//console.log(y);

for(const key in y)
{
  //  console.log(y[key]);
}

function getvehicle(){
    return{
        type:'car',
        wheels:4
    }
}
const vehicle1=getvehicle();
const vehicle2=getvehicle();
vehicle2.wheels=5;
//console.log(vehicle2);
//console.log(typeof vehicle1);


//OBJECT DESTRUCTURING ES6
/*console.log(y)
const {name,age,hobbies,foods,greet}=y;
//console.log(greet());
y.walk=function(){
    console.log("i am walking");
}
console.log(y.walk( ));*/
shouting=()=>
{
    console.log("i am shouting");
}
talking=()=>
{
    console.log("i am talking nonsense");
    shouting();
}
talking();