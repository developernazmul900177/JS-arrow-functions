function myFunction() {
    console.log("Testing function");
}
myFunction();

var sameWork = () => {
    console.log("Testing function in arrow");
}
sameWork();

var myNew = (name, city, age) => {
    console.log(name, city, age);
}
myNew("Nazmul", "Rangpur", 21);


let saySomething = num => num * num;


console.log(saySomething(5));