 //array

 const myArr = [9,5,2,7,1,0]
 //console.log(myArr[4]);

 //array methods : push pop shift unshift

//console.log(myArr.includes(9));
//console.log(myArr.indexOf(9));

 //myArr.push(4)
 //console.log(myArr);

 //slice and splice differences check by running terminal

 console.log("A", myArr);

 const myn1 = myArr.slice(1, 3)
 //console.log(myn1);
 //console.log("B", myArr);

 const myn2 = myArr.splice(1,3)
 //console.log("C",myArr);
 //console.log(myn2);


 // concat and spread operator

 const nepaliHeros = ["rajesh", "nischal", "daya"]
 const nepaliHeroine = ["swostima", "barsha", "surakshya"]

 //const allCelebrity = nepaliHeros.concat(nepaliHeroine)
 //console.log(allCelebrity);

 const allCelebrity = [...nepaliHeros, ...nepaliHeroine]
 console.log(allCelebrity);

 const arr = [1,2,3,[4,5,6],7,8,[9,3,[2,4]]]
 const newArr = arr.flat(Infinity)

 console.log(newArr);

 // from changes any object,string,node and else to array
 // to convert into array

 console.log(Array.isArray("satish")); //to check is it array or not
 console.log(Array.from("satish")) // to convert array
 console.log(Array.from({name: "satish"})) // interesting case

 let score1 = 100
 let score2 = 200
 let score3 = 300

 console.log(Array.of(score1, score2, score3));







