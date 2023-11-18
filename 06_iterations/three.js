// for of loop

const arr = [1,2,3,4,5]

for (const num of arr) {
    console.log(num);
}


const greetings = "Hello World"
for (const gret of greetings) {
    console.log(`Each char is ${gret}`);
}


//Maps --- Objects hold key value


const map = new Map()
map.set('Np', "Nepal")
map.set('US', "United State of America")
map.set('Fr', "France")

console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-', value);
}

const myObject = {
    'game1' : 'NFS',
    'game2' : 'Spiderman'
}
// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
// }