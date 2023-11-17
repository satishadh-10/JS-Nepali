const user = {
      username : "satish",
      price : 999,

      welcomeMessage : function(){
        //console.log(`${this.username}, welcome to the website`);
      }
}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()


//*******imp********/
//this can't be used inside the function
//this can be used only inside the object


// function chai (){
//     const username = "satish"
//     console.log(this);
// }
// chai()


// ************ arrow fucntion

// const chai = () => {
//     let username = "satish"
//     console.log(username);
// }
// chai()

// const chai = () => {
//     let username = "satish"
//     console.log(username);
// }
// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwo(3,4))

//if curly braces are used then we should write return
//if not then we shouldn't write return
//to return object we must wrap in paranthesis

const addTwo = (num1,num2) => (num1 + num2)
console.log(addTwo(3,4));