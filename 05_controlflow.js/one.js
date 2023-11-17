// const temperature = 45
// if (temperature > 45){
//     console.log("Temperatue is greater than 45");
// }
// else{
//     console.log("Temperature is less than 45");
// }


// const score = 200

// if (score>100){
//     const power = "fly"
//     console.log(`User power : ${power}`);
// }


//const balance = 1000

//if (balance > 500) console.log("test"); //this is called implicient scope.


//*********** Nesting ************//

// if (balance < 500){
// console.log("less than");
// }
// else if(balance < 750){
//     console.log("less than 750");
// }
// else {
//     console.log("less than 1200");
// }


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true
if ( userLoggedIn && debitCard){
    console.log("Allow to buy product");
}
if (loggedInFromGoogle || loggedInFromEmail){
    console.log("User logged in");
}


//Nullish Coalescing Operator (??): null undefined

let val1;
val1 = 5 ?? 10


console.log(val1);



//Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("less than 80") : console.log("more than 80");

