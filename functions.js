function callName(){
    console.log("A");
    console.log("k");
    console.log("a");
    console.log("s");
    console.log("h"); 
}

//callName()

function addTwoNumbers( num1, num2){
    // let result = num1 + num2
    // return result 

    return num1 + num2 // we can also take the result like this 

    console.log(num1 + num2); // after result any value is not print 
} 
const ans = addTwoNumbers(3 , 4) // under of quotes "" number javascript suppose as a string .

// console.log("result:", ans);


function loginuser(userName ){ //if you want to default set a value so (username = "sam")
    if(userName === undefined)/* we can aslo do this like (!username) both work same */{
        console.log("please enter a userName");    
    }
    return `${userName} just logged in`
}
// console.log(loginuser("akash"));
// console.log(loginuser());

function calculateCartPrice(val1, val2, ...num1){ //there are three ... is (rest operator)
    return num1
}
// console.log((calculateCartPrice(200, 400, 500, 2000)));

const user = {
    username: "Akash",
    price: 199
}

function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleobject(user)
handleobject({
    username: "mynk",
    price: 399
})

const myNewArray = [200, 300, 400 ,500]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));
