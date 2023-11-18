const myObject = {
    js : 'javascript',
    cpp : 'C++',
    rb : 'ruby',
    swift : 'swift by apple'
}

for (const key in myObject) {
 // console.log(`${key} shorcut is for ${myObject[key]}`);
}


const programming = ['js', 'rb', 'py', 'java', 'cpp']
for (const key in programming) {
   // console.log(programming[key]);
}

//map is not iterable
// const map = new Map()
// map.set('Np', "Nepal")
// map.set('US', "United State of America")
// map.set('Fr', "France")

// for (const key in map) {
//     console.log(map[key]);
// }

