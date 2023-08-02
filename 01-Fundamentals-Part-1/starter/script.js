// COURSE 11 values and variables

// let js = "cool";
// console.log(40 + 2 - 3);

// let firstName = "Paxit";
// console.log(firstName);

// let country = "France";
// let continent = "Europe";
// let population = "70m";

// console.log(country);
// console.log(continent);
// console.log(population);

// COURSE 12 data types

// let jssTest = true;
// console.log(jssTest);
// // console.log(typeof true);
// // console.log(typeof "MAX");
// // console.log(typeof 666);

// jssTest = "hello";
// console.log(jssTest);

// let testUndefined;
// console.log(testUndefined)
// console.log(typeof testUndefined)

// testUndefined = "Paxit"
// console.log(typeof testUndefined)

// console.log(typeof null) // devrait indiquer le type de value "null" mais indique objet dans la console c'est un bug non corrigé

// let isIsland = false;
// let language;
// console.log(typeof isIsland)
// console.log(typeof language)

// COURSE 13 let, const, var

// let age = 28;
// age = 27;

// const birthYear = 1995
// // const birthYear = 1994 ---- redeclarer une const crée un bug

// const language = "Français"
// console.log(language)

// COURSE 14 Basic Operators

// const yearFuture = 2050
// const ageMax = yearFuture - 1995;
// const ageIlan = yearFuture - 1994;
// console.log(ageMax, ageIlan);

// console.log(ageMax * 2, 2 ** 3);
// // 2 ** 3 = 2 puissance 3 = 2 * 2 * 2

// const firstName = "Max";
// const lastName = "Moons";
// console.log(firstName + " " + lastName);

// let x = 10 + 5; // x = 15
// x += 10; // x = x + 10
// x *= 4; // x = x * 4
// x++; // x = x + 1 // existe aussi avec -- ce qui fait -1
// console.log(x);

// console.log(ageMax > ageIlan); // compare les deux valeurs et renvoie une valeur true ou false
// console.log(ageMax >= 18); // demande si l'age de Max est supérieur ou égal à 18
// const isMaxAdult = ageMax >= 18; // c'est comme ça qu'on stocke des infos sous forme de variables plutot que de les tester dans la console

// console.log(yearFuture - 1995 > yearFuture - 1994) // exemple ou l'on fait la meme comparaison qu'a la ligne 73 mais sans avoir à declarer ageMax et ageIlan


// let population = 70000000;
// const languageFr = "Français"
// const country = "France"

// const popSplitOne = population / 2;
// const popSplitTwo = population / 2;
// console.log(popSplitOne, popSplitTwo)

// population++;
// console.log(population)

// const popFinland = 6000000
// console.log(population > popFinland)

// const popAverage = 33000000
// console.log(population < popAverage)

// const descriptionCountry = "La" + " " + country + " est en Europe et compte" + " " + population + " " + "habitants parlant le" + " " + languageFr
// console.log(descriptionCountry)

// COURSE 15 Operator Precedence
// l'idée ici est de comprendre dans quel ordre le code fait les opérations que ce soit de gauche à droite ou de multiplication avant les additions avant les comparaisons par exemple
// MDN operator precedence pour avoir le tableau

// const ageFuture = 2050;
// const ageMax = ageFuture - 1995;
// const ageBebe = ageFuture - 2023;
// console.log(ageFuture - 1995 > ageFuture - 2023);

// let x, y; // avec la virgule on peut déclarer plusieurs variables, ici deux variables vides (undefined)
// x = y = 25 - 10 - 5;
// console.log(x, y)

// const averageAge = (ageMax + ageBebe) / 2; // ici on considère que les parenthèses ont la plus haute priorité des operateurs meme si la division est au dessus de l'addition donc on calcule le resultat entre parentheses avant de diviser comme en math.
// console.log(averageAge)

// COURSE 16 Challenge # 1

// const markHeight = 1.69;
// const markMass = 78;
// const johnHeight = 1.95;
// const johnMass = 92;

// const markBmi = markMass / markHeight ** 2; // revérifier le calcul de BMI il a l'air faux dans l'exercice.
// console.log(markBmi);
// const johnBmi = johnMass / johnHeight ** 2;
// console.log(johnBmi);

// const markHigherBmi = markBmi > johnBmi;
// console.log(markHigherBmi)

// COURSE 17 string and template liberals

// const firstName = "Max";
// const job = "musician";
// const birthYear = 1995;
// const year = 2023;

// const mySelf = "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "."
// console.log(mySelf);

// // maintenant en utilisant la methode template liberals :

// const mySelfNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}.`;
// console.log(mySelfNew);

// // exemple de multiline strings (\n\ permet de revenir a la ligne)
// console.log("String with \n\multiple \n\lines.")
// // maintenant en utilisant la methode template liberals :
// console.log(`String with
// multiple
// lines.`)
// // le résultat est le même mais plus simple à mettre en place *sera utile pour créer du HTML.

// const country = "France"
// const continent = "Europe"
// const population = "70 million"
// const language = "french"
// const descriptionCountry = `${country} is in ${continent} and its ${population} people speak ${language}.`;
// console.log(descriptionCountry)

// COURSE 18 Taking decisions if/else statements

// const age = 17;
// const isOldEnough = age >= 18;

// if (isOldEnough) {
//     console.log(`Max can drive 🐷`)
// } else {
//     const yearsLeft = 18 - age;
//     console.log(`Max needs ${yearsLeft} more year.`)
// }

// // const a = 1
// // if (a) {
// //     console.log("alex est considéré comme True")
// // } else { console.log("unhe string vide est considérée fausse") }

// // console.log(isOldEnough ? "Max est gay" : "alex a les crampter") // ecrire un booleen de maniere concise

// const birthYear = 1995;
// let century; // si on veut créer une nouvelle variable dans un controle block if/else on ne pourra l'utilier que dans ce block donc ici on déclare la variable "century" hors du block et on la modifie dedans pour pouvoir l'utiliser a tout moment dans notre code.
// if (birthYear <= 2000) {
//     century = 20;
// } else {
//     century = 21;
// }
// console.log(century)

// const popAverage = 33000000
// const popFrance = 70000000
// if (popFrance > popAverage) {
//     console.log(`France's population is above average`)
// } else {
//     console.log(`France's population is ${popAverage - popFrance} below average.`)
// }

// COURSE 19 Coding challenge # 2

// const markHeight = 1.69;
// const markMass = 78;
// const johnHeight = 1.95;
// const johnMass = 92;

// const markBmi = markMass / markHeight ** 2;
// console.log(markBmi);
// const johnBmi = johnMass / johnHeight ** 2;
// console.log(johnBmi);

// if (markBmi > johnBmi) {
//     console.log(`Mark's BMI (${markBmi}) is higher than John's (${johnBmi}) 🗿`)
// } else {
//     console.log(`John's BMI (${johnBmi}) is higher than Mark's (${markBmi}) ❤️`)
// }

// COURSE 20 type coercion and conversion

// tyoe conversion
// const inputYear = "1995"
// console.log(inputYear + 18) // ici on essaie d'additionner un nombre avec une valeur de type string ça fout la deums

// console.log(Number(inputYear) + 18); // ici on convertit la value string en nombre avant de faire l'addition, ça fonctionne


// console.log(Number("Max")); // la console renvoie NaN (Not a Number) pour signifier que l'on essaie de convertir autre chose qu'un nombre en nombre.

// console.log(String(1995)); // on convertit ici le nombre 1995 en string (texte) 1995.

// // type coercion

// console.log("I'm " + 28 + " years old.") // le console.log renvoie ici une string, il a donc fait lui meme la conversion de 28
// console.log("23" - "10" - 3) // ici JS convertit automatiquement les strings en number
// console.log("23" + "10" + 3) // ici il convertit les numbers en string
// // recap : le + transforme les number en string et le - fait l'inverse.
// console.log("23" * "2")
// console.log("23" / "2") // meme cas que pour les "-"

// console.log("9" - "5")
// console.log("19" - "13" + "17")
// console.log("19" - "13" + 17)
// console.log("123" < 57) // < et > renvoient des true/false et convertissent les string en number
// console.log(5 + 6 + "4" + 9 - 4 - 2) // ici on fait les calculs des deux cotés du "4" qui est une string avant de concatener

// COURSE 21 truthy and falsy values

// falsy values = 0, '', undefined, null, NaN. renvoient "false" quand converties en boolean, tout le reste renvoie "true"
// console.log(Boolean(0))
// console.log(Boolean(undefined))
// console.log(Boolean("Max")) // renvoie true car pas une des falsy values
// console.log(Boolean({})) //pareil


// let money = 0 // JS convertit automatiquement les number en booleans
// if (money) {
//     console.log("Cool 😎")
// } else {
//     console.log("not cool 😭")
// }

// let height;
// if (height) {
//     console.log("DEFINED")
// } else {
//     console.log("UNDEFINED")
// height is undefined

// COURSE 22 Equality Operators

// const age = 18
// if (age === 18) console.log("Adulte strict")

// const ageLoose = "18"
// if (ageLoose == 18) console.log("Adulte loose") // la diff entre === (strict equality operator) et == (loose quality opertaor) est que le second applique la coercion donc JS convertit la string "18" en number 18 le resultat est donc true.
// // si on met === à la place de == le resultat est false, la console ne renvoie rien.
// // il vaut mieux éviter au maximum le loose operator == et convertir manuellement les values.
// const ageNumbStrict = "18"
// if (Number(ageNumbStrict) === 18) console.log("Adulte strict number conversion manually")

// //prompt

// // const favorite = prompt("Favorite Number?")
// const favorite = Number(prompt("Favorite Number?")) //convertit le resultat du prompt en number donc plus besoin du loose operator ==, on peut utiliser ===
// console.log(favorite)
// console.log(typeof favorite) // ici on voit que le prompt renvoie une valeur string et pas number sauf si on a fait la conversion avant comme au dessus.

// if (favorite === 5) {
//     console.log("5 is cool") // comme le print est une string on utilise le loose operator pour faire la conversion en nombre sauf si on a fait la conversion avant comme au dessus.
// } else if (favorite === 6) {
//     console.log("6 is also cool")
// } else {
//     console.log("type 5 or 6")
// }

// // if (Number(favorite) === 5) {
// //     console.log("5 is cool strict")
// // } fonctionne aussi en changeant le type en number dans le block if/else

// // !== est l'operator pour pas égal à et != est la loose version du premier

// if (favorite !== 5) console.log("why not 5?")

// const numVoisin = prompt("Combien de pays frontaliers au votre?") // Number(prompt("Combien de pays frontaliers au votre?")) permet d'utiliser le ===.
// if (numVoisin == 1) { // le === ne renvoie rien car le resultat du prompt n'est pas un number
//     console.log("Un seul pays.")
// } else if (numVoisin > 1) {
//     console.log("Plus qu'un pays")
// } else if (numVoisin < 1) {
//     console.log("Pas de pays frontalier")
// }
// if (numVoisin != 0) {
//     console.log("votre pays n'est pas une île")
// } else {
//     console.log("votre pays est une île")}
//

// COURSE 23 Boolean logic rewatch si besoin d'aide sur AND OR et NOT
// COURSE 24 Logical Operators

// const hasDriverLicense = true // A
// const hasGoodVision = true // B

// console.log(hasDriverLicense && hasGoodVision) // AND
// // le résultat est true si A et B sont true
// // le résultat est false si au moins l'un des deux est false
// console.log(hasDriverLicense || hasGoodVision) // OR
// // le résultat est true si au moins l'un des deux est true
// // le résultat est fals esi les deux sont false
// console.log(!hasDriverLicense) // NOT
// // convertit la valeur boolean en son opposé

// const shouldDrive = hasDriverLicense && hasGoodVision;
// if (shouldDrive) {
//     console.log("I can drive")
// } else {
//     console.log("I can't drive")
// }

// const isTired = false

// const shouldDriveSecond = hasDriverLicense && hasGoodVision && !isTired;
// if (shouldDriveSecond) {
//     console.log("can drive")
// } else {
//     console.log("can not drive")
// }
// le résultat renvoyé est "can drive" car toutes lese valeurs de la const shoulddrivesecond sont true

// COURSE 25 Coding challenge # 3

// const dolScore1 = 100
// const dolScore2 = 100
// const dolScore3 = 99

// const KoaScore1 = 100
// const KoaScore2 = 100
// const KoaScore3 = 99

// const minimumScore = 100

// const dolAverageScore = (dolScore1 + dolScore2 + dolScore3) / 3;
// const KoaAverageScore = (KoaScore1 + KoaScore2 + KoaScore3) / 3;
// console.log(dolAverageScore, KoaAverageScore)

// const isDolAdmissible = dolAverageScore >= minimumScore
// const isKoaAdmissible = KoaAverageScore >= minimumScore

// if (dolAverageScore === KoaAverageScore && isDolAdmissible && isKoaAdmissible) {
//     console.log("Draw")
// } else if (dolAverageScore > KoaAverageScore && isDolAdmissible) {
//     console.log("Dolphins win 🐬")
// } else if (KoaAverageScore > dolAverageScore && isKoaAdmissible) {
//     console.log("Koalas win 🐨")
// } else {
//     console.log("No Winner 😭")
// }

// COURSE 26 The switch variable

// const day = "thursday";

// switch (day) {
//     case "monday": // means day === monday, if true, executes the code under it.
//         console.log("Pizza")
//         console.log("Nap")
//         break;
//     case "tuesday":
//         console.log("Borgir")
//         break;
//     case "wednesday":
//     case "thursday":
//         console.log("Pasta")
//         break;
//     case "friday":
//         console.log("Turkey")
//         break
//     case "saturday":
//     case "sunday":
//         console.log("Sleep")
//         break;
//     default: // si aucune value n'a été choisie jusque la (comme le else)
//         console.log("not a valid day")
// }
// // l'exemple du dessous montre qu'on peut faire la meme chose avec un if/else block mais e switch sera préferé car plus lisible
// if (day === "monday") {
//     console.log("Pizza")
//     console.log("Nap")
// } else if (day === "tuesday") {
//     console.log("Borgir")
// } else if (day === "wednesday" || "thursday") {
//     console.log("Pasta")
// } // etc...

// const language = "english"
// switch (language) {
//     case "mandarin":
//     case "chinese":
//         console.log("Most speakers")
//         break
//     case "spanish":
//         console.log("2nd most speakers")
//         break
//     case "english":
//         console.log("3rd place")
//         break
//     default:
//         console.log("you suck")
// }

// COURSE 27 statements and expressions

// //une expression est qqchose qui produit une value exemple:
// 1595 // le number 1595 est une value, cette partie du code est une expression
// 1 + 2 // ici aussi
// true && false || !true // là aussi

// // un statement est un block de code qui lorsqu'il est executé ne produit pas de value :
// if (20 > 10) {
//     const str = "20 est plus grand que 10";
// } // ici le if/else statement ne produit pas de value mais declare une variable.
// // l'idée est de savoir différencier car JS peut ne pas accapeter de statements par exemple dans certains cas:

// console.log(`je suis ${667 - 1} le sheitan ${if (20 > 10) {
//     const str = "20 est plus grand que 10");
// } // ici la console renvoie une erreur car on ne peut pas mettre de statement(ici if) à l'interieur d'une déclaration en template litteral (``)

// COURSE 28 The conditional (ternary) operator

// une autre sorte de comparison statement en une seule ligne
// const age = 23;
// age >= 18 ? console.log("Yay Adult!") : console.log("Oh no je suis petit")
// // ici on compare la variable age avec 18 suivie d'un ? les ":" ont le meme usage que "else"
// // le ternary operator est considéré comme un operator (renvoie une value) et pas comme un statement (voir leçon précedente)

// // plutot utilisé& comme ça : 
// age >= 18 ? "Yay" : "Nay";
// //on peut donc déclarer une variable à condition
// const adult = age >= 18 ? "Yay" : "Nay";
// console.log(adult)
// // plus facile à declarer qu'avec un if/else par exemple:
// let adult2;
// if (age >= 18) {
//     adult2 = "Yay"
// } else {
//     adult2 = "Nay"
// }
// console.log(adult2)
// console.log(`Suis-je adulte? : ${age >= 18 ? "Yay" : "Nay"} !`)

//COURSE 29 Coding challenge # 4

const bill = 275;
// const tip = bill > 50 && bill < 300 ? bill * 0.15 : bill * 0.2;
// console.log(`The bill is ${bill}, the tip is ${tip} and the total is ${tip + bill}.`)

let tip;
if (bill > 50 && bill < 300) {
    tip = bill * 0.15;
} else {
    tip = bill * 0.2;
}
console.log(`The bill is ${bill}, the tip is ${tip} and the total is ${tip + bill}.`)