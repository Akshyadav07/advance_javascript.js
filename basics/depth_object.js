//++++++++++++ aingleton ++++++++++

// +++++++++++ object literals ++++++++++++

const mySym = Symbol("key1")

const JsUser = {
    name: "akash",
    "full-name": "akash yadav", // we can not access this value with dot 
    mySym /* when we want to show this value as Symbol so we use this [] brackets otherwise not */: "myKey1",
    age: 20,
    location: "maharajpur",
    email: "mynk@gmail.com",
    isLoggIn: true,
}
console.log(JsUser.name)//take variable as a string
console.log(JsUser["email"]); 
console.log(JsUser["full-name"]);
console.log(typeof mySym);

JsUser.email = "aksh@gmail.com"
// Object.freeze(JsUser)
JsUser.email = "akshyadav@gmail.com"
console.log(JsUser);

//+++++++++ greetings +++++++++++++

JsUser.greetings = function(){
    console.log("hello JS user");
}

JsUser.greetings2 = function(){
    console.log(`hello JS user, ${this.name}`);
}

console.log(JsUser.greetings());
console.log(JsUser.greetings2());
