// singleton literal declartion - no singleton
// contructer -- yes singleton
//object literals
//Object.create (constructer method)
const mySym = Symbol("key1")
const JsUser ={
    name:"Hitesh",
    [mySym]: "myKey1",
    aage: 18,
    location: "khaptad",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ['Monday', 'Saturday']

}

 //console.log(JsUser.email)
 //console.log(JsUser["email"])
 //console.log(JsUser.mySym)

 //JsUser.email= "hitesh@artboot@gmat.com";
 //Object.freeze(JsUser)
 //JsUser.email = "hitesh@lailai@huhu.com"
 //console.log(JsUser)



 JsUser.greeting = function(){
    console.log("Hello World");
 }

 JsUser.greetingTwo = function(){
    console.log(`Hello world, ${this.name}`);
 }
 console.log(JsUser.greeting());
 console.log(JsUser.greetingTwo());

 // objects last discussion



 //destructuring

 const course = {
    name: "js in hindi",
    price: 999,
    courseInstructor: "satish"
 }

//console.log(course.courseInstructor)

const {courseInstructor: instructor} = course
//console.log(instructor);

{
    name: "hitesh",
    coursename
}








