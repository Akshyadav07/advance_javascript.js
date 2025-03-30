// +++++++++++++ {} this brackets is known as scopes +++++++++++++++++

let a=100
if (true){
    let a=10
    const b=20
    //console.log("inner:", a); // when we are inner of if we use the value of inner a
}
//console.log("outer:", a); // when we are out of if we use the value of outer a

// console.log(a);
// console.log(b);
// console.log(c);

// +++++++++++++ scope level in mini hoisting +++++++++++++++

function one(){
    const username = "akash"

    function two(){
        const website = "youtube"
        console.log(username);   
    }
    // console.log(website);
    
    two()
}
one()

if (true){
    const userName = "mynk"
    if (userName === "mynk"){
        const website = "youtube"
        console.log(userName + website);
    }
    // console.log(website);
}
// console.log(userName);

// +++++++++++ interesting +++++++++++++++++

console.log(addone(5))

function addone(num){
    return num + 1
}

const addtwo = function(num){
    return num + 2    
}
