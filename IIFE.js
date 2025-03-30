// imediately invoked function expressions (IIFE)

(function chai (){
    console.log(`DB CONNECTED`); 
})(); // SEMICOLON is there for the seperation of both functions 

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);    
})('akash')


