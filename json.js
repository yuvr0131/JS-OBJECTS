const student=`{
    "name":"yuvraj",
    "age":23,
    "marks":9
}`
const obj=JSON.parse(student);
const backtostring=JSON.stringify(obj);
console.log(backtostring);