// const tinderUser = new Objects()

tinderUser = {} // singolton object  

tinderUser.id = "123abs"
tinderUser.name = "Rajat"
tinderUser.isLoggedIn = false

// console.log(tinderUser); // non singolton object 

const regularUser = {
    email : "Rajat@gmail.com",
    fullname : {
        UserFullname : {
            firstname : "Rajat",
            Lastname : "sharma",

            otherName : {
                nickName : "puppy",
                PetName : "doggy"
            }
        }
    }
}

console.log(regularUser.fullname.UserFullname.otherName.PetName);


const obj1 = { 1:"a" , 2:"b" , 3:"c" }
const obj2 = { 5:"x" , 6:"y" , 7:"z" }

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign( {} ,obj1,obj2)
const obj3 = {...obj1 , ...obj2 }
console.log(obj3);

const user = [
    {
    },
    {
        id: 1,
    email: "a@gmail.com"
    },
    {
        id: 1,
    email: "a@gmail.com"
    },{
        id: 1,
    email: "a@gmail.com"
    },
    {
    },
    {
    },
]

user[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));
