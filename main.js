// let involvesThousand = false

// function add(x, y) {
//     if (x + y == 1000) {
//         involvesThousand = true
//     } else if (x == 1000) {
//         involvesThousand = true
//     } else if (y == 1000) {
//         involvesThousand = true
//     }
    
//     console.log(involvesThousand);
// }
// add (-200, 1200)



//____________________________________________________________________________________________________________

// function readExt(fileName) {
//     let extJS = '.js';
//     let extHTM = '.html';
//     let extCSS = '.css';

//     if (fileName.includes(extJS)) {
//         console.log(extJS);
//     } else if (fileName.includes(extHTM)) {
//         console.log(extHTM);
//     } else if (fileName.includes(extCSS)) {
//         console.log(extCSS);
//     } ;
// };

// readExt ('styles.css');
// readExt ('main.js');
// readExt ('index.html');

//________________________________________________________________________________________

// function calFahrenheit(c) {
//     let f = (c * 1.8) + 32;
//     console.log(f);
// }

// calFahrenheit(17);
//_____________________________________________________________________________________________

// function calcDogAge(y) {
//     let d = y * 7;
//     console.log('your pupper is ' + d + ' years old in dog years');
// }

// calcDogAge(1);
// calcDogAge(5);
// calcDogAge(7);
// calcDogAge(17);
// __________________________________________________________________________

function lifetimeSupplyCalc(need, age) {
    const maxAge = 82
    sup = (need * 365.25) * (maxAge - age)
    console.log('You will need ' + sup + ' to last you from your current age of ' + age + ' to the ripe old age of ' + maxAge + '.')
}

lifetimeSupplyCalc(1, 23)

lifetimeSupplyCalc(2, 24)

lifetimeSupplyCalc(0.5, 57)