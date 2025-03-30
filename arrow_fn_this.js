// const user = {
//     username: "akash",
//     price: 999,

//     welcomeMessage: function(){
//         console.log(`${this.username}, welcome to website`);
//     }
// }
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     console.log(this);    
// }
// chai()

// const chai = () => {
//     let username = "akash"
//     console.log(this.username);
// }
// chai()

// const addtwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addtwo(3,5))

// ++++++++++++ this function is also use like this ++++++++++++++++++

const addtwo = (num1, num2) => (num1 + num2);
console.log(addtwo(3, 5));

const addtoo = (num1, num2) => ({username: "Akash"})

