'use strict'
// COURSE 32 activating strict mode

// const private = 1; // le strict mode nous previent que private est reserved donc il faut pas l'utiliser comme nom de variable

// // COURSE 33 Functions

// function logger() {
//     console.log("My name Jeff")
// }
// // pour appeler la fonction on ecrit :
// logger();

// function fruitProcessor(pommes, oranges) {
//     console.log(pommes, oranges)
//     const juice = `Jus de ${pommes} pommes et ${oranges} oranges. 🧃`;
//     return juice;
// }

// const jusPomme = fruitProcessor(5, 0);
// console.log(jusPomme)
// const jusOrange = fruitProcessor(0, 5);
// console.log(jusOrange)
// const jusMix = fruitProcessor(2, 2);
// console.log(jusMix)

//
// function describeCountry(country, population, capitalCity) {
//     const countryData =
//         `${country} has ${population} people and its capital is ${capitalCity}`
//     return countryData;
// }

// const countryFr = describeCountry("France", 70000000, "Paris")
// console.log(countryFr)
// const countryDe = describeCountry("Germany", 80000000, "Berlin")
// console.log(countryDe)

// COURSE 34 Functions Declarations vs Functions expressions

// function calculAge(birthyear) {
//     // const age = 2023 - 1995;
//     // return age; // pas besoin de store la const age on peut simplement ecrire:
//     return 2023 - birthyear;
// } // ceci est une fonction declaration une des particularites est qu'lle peut etre appelee avant d'etre declaree

// const age1 = calculAge(1995);
// console.log(age1);

// // en dessous une fonction expression on ne donne pas de nom a la fonction mais on la store dans une const - on est obliges de la declarer avant de l'appeler ce qui peut rendre le code plus propre si on declare toutes les fonctions au top du code avant le reste.
// const calcAge2 = function (birthyear) {
//     return 2023 - birthyear;
// }

// const age2 = calcAge2(1995);
// console.log(age2)

//
// // assignement declaration :
// function percentageOfWorld1(population) {
//     return (population / 7900000000) * 100;
// }
// const china = percentageOfWorld1(1412000000)
// const india = percentageOfWorld1(1408000000)
// const france = percentageOfWorld1(67000000)

// console.log(china, india, france)

//
// //assignement expression :
// const percentageOfWorld2 = function (population) {
//     return (population / 79000000000) * 100;
// }
// const china2 = percentageOfWorld2(14120000000)
// const india2 = percentageOfWorld2(14080000000)
// const france2 = percentageOfWorld2(67000000)

// console.log(china2, india2, france2)

// COURSE 35 arrow functions

// //arrow function :
// const calcAge3 = birthYear => 2023 - birthYear; // fomre la plus concise on a pas besoin de {} ni de return, le return est implicite
// //utile pour les functions courtes avec une seule variable
// const age3 = calcAge3(1995)
// console.log(age3)

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2023 - birthYear;
//     const retirement = 65 - age;
//     return `${firstName} retires in ${retirement} years. 😭`; // ici on utilise {} et return car on a plusieurs lignes de code.
// }
// const maxRetirement = yearsUntilRetirement(1995, "Paxit")
// const dadRetirement = yearsUntilRetirement(1967, "Eric")
// console.log(maxRetirement, dadRetirement)

// //asignement

// const percentageOfWorld3 = population => (population / 7900000000) * 100
// console.log(percentageOfWorld3(1412000000)) // on aurait aussi pu store la variable china dans laquelle on rentre la function avec la valeur population associee a la chine :
// const chinaPercentagePop = percentageOfWorld3(1412000000)
// console.log(chinaPercentagePop);

// COURSE 36 Functions calling others
// function cutFruitPieces (fruit) {
//   return fruit * 4
// }

// const fruitProcessor = function (pommes, oranges) {
//   const pommesPieces = cutFruitPieces(pommes)
//   const orangesPieces = cutFruitPieces(oranges)// ici on appelle la fonction du dessus dans la seconde fonction.

//   const juice = `Jus de ${pommesPieces} morceaux de pommes et ${orangesPieces} morceaux d'oranges. 🧃 uh uh\
//  uh uh uh uh uh uh uh uh uh uh uh uh uh uh uh uh uh uh uh uh uh uh uh uh uh `
//   return juice
// }
// console.log(fruitProcessor(2, 3))

//
// // assignement

// const percentageTotalPop = function (populationSpe) {
//     return (populationSpe / 7900000000) * 100
// }
// const describePopulation = function (country, population) {
//     const percentagePop = percentageTotalPop(population)
//     const resultPop = `${country} has ${population} people which is about ${percentagePop} of the world`
//     return resultPop;
// }
// console.log(describePopulation("China", 1441000000))

// COURSE 37 reviewing functions

// const calcAgeMan = function (birthYear) {
//     return 2023 - birthYear;
// }
// const AlexIsPd = function (firstName) {
//     if (firstName === "Alex") {
//         const resultAlex = `${firstName}("nom d'oiseau")`
//         return resultAlex;
//     } else {
//         return firstName;
//     }
// }

// const yearsUntilRetirement = function (birthYear, firstName) {
//     const age = calcAgeMan(birthYear);
//     const alexVar = AlexIsPd(firstName);
//     const retirement = 65 - age;

//     if (retirement > 0) {
//         console.log(retirement)
//         return `${firstName, alexVar} retires in ${retirement} years. 😭`;
//     } else {
//         console.log(retirement)
//         return `${firstName} is already retired`
//     }

//
// }
// console.log(yearsUntilRetirement(1995, "Alex"))

// COURSE 38 Coding challenge # 1

// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// let scoreDolphins = calcAverage(44, 23, 71)
// let scoreKoalas = calcAverage(65, 54, 49)
// console.log(scoreDolphins, scoreKoalas)

// const checkWinner = function (avgDolphins, avgKoalas) {
//     if (avgDolphins >= 2 * avgKoalas) {
//         console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`)
//     } else if (avgKoalas >= 2 * avgDolphins) {
//         console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`)
//     } else {
//         console.log("no winner")
//     }
// }
// checkWinner(scoreDolphins, scoreKoalas)
// checkWinner(100, 200)

// scoreDolphins = calcAverage(85, 54, 41)
// scoreKoalas = calcAverage(23, 34, 27)
// console.log(scoreDolphins, scoreKoalas)

// checkWinner(scoreDolphins, scoreKoalas)

// COURSE 39 intro to arrays

// const friend1 = 'Jeff'
// const friend2 = 'Peter'
// const friend3 = 'Steven'
// chiant de les rentrer un par un donc on utilise un type de data storage qui s'appelle Array:

// const friends = ['Jeff', 'Peter', 'Steven']
// console.log(friends)
// // autre manière de decla un array:

// const y = new Array(1991, 1995, 1999, 2000)
// console.log(y)

// console.log(friends[0])// permet d'utiliser un element de la liste(0 est le premier)
// console.log(friends.length)// shows nb of elements in the array
// console.log(friends[friends.length - 1])// comme c'est en base zero le nombre d'elem -1 ressort le dernier de la liste

// friends[1] = 'Pilat' // remplace le deuxieme ami de la liste, meme si friends est store dans une const on peut changer les values car un array n'est pas une primitive value.(seules les primitives peuvent pas etre changées)
// console.log(friends)
// // friends = ['Max', 'Josh'] ça cree une erreur, on ne peut pas changer entierement la const.

// const firstName = 'Max'
// const me = [firstName, 'Moons', 2023 - 1995, friends] // on peut store des expressions à l'intérieur.
// console.log(me)

// // exercise

// const calcAge = function (birthyear) {
//   return 2023 - birthyear
// }
// const years = [1995, 1991, 1994, 2000]
// console.log(calcAge(years)) // retourne un NaN car la fonction attend une seule value

// const age = calcAge(years[0])
// const age2 = calcAge(years[1])
// const age3 = calcAge(years[2])
// const ageLast = calcAge(years[years.length - 1])
// console.log(age, age2, age3, ageLast)
// // pour store les values dans un nouvel array on peut y metter les nouvelles const ou directement les function calls car elles return une value

// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[2])] // etc, etc...
// console.log(ages)

// assignment

// const populations = [60000000, 50000000, 40000000, 70000000]
// console.log(populations.length === 4)

// const percentageTotalPop = function (populationSpe) {
//   return (populationSpe / 7900000000) * 100
// }
// const percentagesPop = [
//   percentageTotalPop(populations[0]),
//   percentageTotalPop(populations[1]),
//   percentageTotalPop(populations[2]),
//   percentageTotalPop(populations[populations.length - 1])]

// console.log(percentagesPop)

// COURSE Basic Array operations
