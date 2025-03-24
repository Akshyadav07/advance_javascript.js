// const heros = ["thor","captain","spider-man"]
// const anime = ["goku","vegata","gohan"]

// // heros.push(anime)
// // console.log(heros);

// // console.log(heros);
// // console.log(heros[3][1]); this line is for access under the elements of anime array because this consider as string

// const allHeros = heros.concat(anime)
// console.log(allHeros);

// const all_new_Heros = [...heros, ...anime]
// //console.log(all_new_heros);

// const another_arr = [1, 2, 3, [4, 5, 6], 7, [5, 6,[ 4, 5]]]
// const real_arr = another_arr.flat(3)
// console.log(real_arr);



//+++++++++++ want to make array ++++++++++++++

console.log(Array.isArray("akash"));  //checking
console.log(Array.from("akash"));     //making
console.log(Array.from({name:"akash"}));

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));


