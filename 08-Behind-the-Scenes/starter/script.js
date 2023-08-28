'use strict'

// COURSE 89 Overview of JS

// High level : pas besoin de demander des ressources hardware, JS s'occuppe
// de le faire (contrairement au C par exemple ou on doit demander de la memoire
// pour store une variable)

// Garbage collecting : JS clean la memoire non utilisée en solo.

// Interpreted or Just-in-time compiled : la compilation (traduction du human code
// en machine code se fait depuis JS)

// Multi-paradigm : JS peut faire de l'OOP, de la Functional programing et de
// la procedural programming.

// Prototype based, object oriented : vu dans la section OOP

// First class functions : vu dans la section A closer look at fucntion

// Dynamic language : on a pas a declarer le type de data d'unne variable, JS le
// fait auto lorsqu'il compile

// Single Threaded

// COURSE 90 JS Engine and Runtime

// COURSE 92 ⚠️⚠️

// scope chain, il y a le global scope dans lequel tout ce qui est déclaré
// sera accessible partout ailleurs,

// les fontions et les blocks créent des scopes qui peuvent utiliser ce qui est
// contenu dans le glabal mais qui contiennent des variables non utilisables ailleurs

// excepté dans le cas ou on cree un scope dans un scope (exemple une fonction
// dans une fonction) dans ce cas la fonction child hérite des variables de
// son parent.

// un block scope (tout ce qui contient des {} ex un if/else) va stocker
// des variables qui seront accessibles uniquement dans son scope
// sauf si la variable est déclarée avec var (pré ES6)

// un parent n'a pas accès aux variables de ses childs mais les childs heritent
// des variables de son parent.

// function calcAge (birthYear) { // cette fonction est accessible dans le global
//   const age = 2023 - birthYear // cette variable est uiquement accessible dans la fonction

//   function printAge () {
//     const output = `${firstName} You are ${age}, born in ${birthYear}` // output est uniquement accessible dans son scope (sa fonction) mais a accès a tous les scopes parents.
//     console.log(output) // a acces a la variable firstName

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var millenial = true
//       const string = `You're a millenial ${firstName}`
//       console.log(string)

//       function add (a, b) {
//         return a + b
//       }
//     }
//     console.log(millenial) // on peut log la var millenial meme si en dehors de son scope car c'est une var dans un blockscope, elle n'est pas contenue ici mais dans son parent (si ce n'est pas un autre block)
//     // console.log(add(1, 2)) // on ne peut pas log la fonction add contenue dans le block a l'exterieur du bloc.
//   }
//   printAge() // on appelle la fonction a l'intérieur du scope car on ne peut pas l'appeler ailleurs
//   return age
// }

// const firstName = 'Max' // accessible dans le global donc dans la fonction calcAge
// calcAge(1995)

// const reel = true // ici on declare la var max dans un block lui meme dans un bloc
// if (reel) { // pourtant elle est accessible dans le global
//   if (reel) { // car les blocks ne contiennent pas les var.
//     var max = 'Paxit'
//   }
// }
// console.log(max)

// COURSE 94 Variable environment and Hoisting and the TDZ

// Hoisting : make some variables accessibles in the code before they are declared
// virtually "lifted to the top of their scope"

// Function declarations are hoisted

// let and const are not (they are but not their values which are put in a
// temporal dead zone TDZ)

// COURSE 95 Hoisting and TDZ in practice

// Variables case

// console.log(me)
// // console.log(job)
// // console.log(year)

// var me = 'Max'
// const job = 'musician'
// const year = 1991

// // Functions case

// console.log(addDecl(1, 2)) // addDecl est hoistée (tirée vers le haut de son scope)
// // console.log(affExpr(1, 2))
// // console.log(addArrow(1, 2)) // ces 2 la ne sont pas encore defined, retourne une erreur

// function addDecl (a, b) { // fonction declaration (peut etre hoistee)
//   return a + b
// }

// const addExpr = function (a, b) { // fonction expression ne hoist pas
//   return a + b
// }

// const addArrow = (a, b) => a + b // fontion arrow ne hoist pas

// // Exemple

// if (!numProducts) deleteShoppingCart()

// var numProducts = 10

// function deleteShoppingCart () {
//   console.log('all products deleted')
// }

// A RETENIR :
// - déclarer les variables en haut du scope (plus lisible moins de bugs)
// - déclarer une fonction avant de l'utiliser (même une f declaration)

// COURSE 96 the THIS keyword

// lorsqu'on appelle une method via un objet le this keyword est initialisé sur
// l'objet en question.

// lorsqu'on appelle une fonction sans objet, this est initialisé sur undefined

// les arrow functions n'ont pas de this keyword

//  dans le cas d'un eventListener (method) le THIS keyword sera rattaché à
// l'element HTML (ou elem du DOM)

// This ne pointera jamais sur la fonction dans laquelle il est utilisé ou sur
// l'environnement variable.

// COURSE 97

// console.log(this) // ici on voit le window object (y'a tout dedans)

// const calcAge = function (birthYear) {
//   console.log(2023 - birthYear)
//   console.log(this) // ici on voit undefined
// }
// calcAge(1995)

// const calcAge2 = () => console.log(this) // this est le window object car les arrow functions n'ont pas de this keyword
// calcAge2()

// const max = {
//   year: 1995,
//   calcAge: function () {
//     console.log(this) // this pointe ici sur l'objet max (this = max)
//     console.log(2023 - this.year) // on peut utiliser this.year pour trouver l'age
//     // comme on aurait pu utiliser max.year mais des qu'on change le nom
//     // de la const le code casse.
//   }
// }

// max.calcAge()

// const matilda = {
//   year: 2017
// }

// matilda.calcAge = max.calcAge // en faisant ça on copie la method dans l'objet matilda (on utilisera plutot des prototypes a l'avenir)
// matilda.calcAge() // on voit que meme si la fonction calcAge a été definie a la base
// // dans l'objet max, le keyword this pointe ici vers l'objet qui l'appelle
// // donc matilda et pas max.

// const f = max.calcAge // on copie la fonction dans une nouvelle variable (f est desormais une fonction)
// f() // ici renvoie une erreur ou this est undefined car il s'agit d'une simple
// // function call ou il n'y a pas d'objet. (il ne peut pas faire le calcul car
// // this.year pointe sur undefined.year)

// COURSE 98 Regular functions vs Arrow

// const max = {
//   year: 1995,
//   firstName: 'Max',
//   calcAge: function () {
//     console.log(this)
//     console.log(2023 - this.year)
//     const self = this
//     // const isMillenial = function () {
//     // //   console.log(this.year >= 1981 && this.year <= 1996) // version qui montre l'absence de this keyword
//     //   console.log(this.year >= 1981 && this.year <= 1996) // soluce 1 avec self constant = this
//     // }
//     const isMillenial = () => console.log
//     (this.year >= 1981 && this.year <= 1996) // 2eme soluce en utilisant une arrow function comme son this keyword est reporté au scope précédent ici la method calcAge.
//     isMillenial()
//   },
//   greet: () => console.log(`Hey ${this.firstName}`)
// }
// // une valeur contenue dans un objet sera contenue dans le global scope, l'objet ne cree pas de scope.
// max.greet() // donc la arrow function n'ayant pas de this keyword, il sera associé au scope précedent donc au global scope.

// // Jamais utiliser une arrow function en tant que method.

// max.calcAge() // ici on voit que this est undefined dans la function isMillenial
// // c'est du au comportement du this keyword, lors d'un simple appel de fonction,
// // le this keyword ne pointe sur rien il a besoin d'un objet meme si il est a
// // l'intérieur d'une methode car on a du appeler la fonction dans la methode
// // une solution a ça est de déclarer une constant = this et d'utiliser le nom
// // de la constante.

// // Arguments keyword

// const addExpr = function (a, b) {
//   console.log(arguments)
//   return a + b
// }

// addExpr(2, 5)
// addExpr()

// const addArrow = (a, b) => a + b

// COURSE 99 Primitives, Objects primitives, reference types.

// Primitive value examples (les number, strings, boolean, undefined, null...)
// let age = 27
// const oldage = age
// age = 28

// console.log(age)
// console.log(oldage)

// // Reference types examples (tout ce qui n'est pas primitive est un objet aussi appelé reference type)
// const me = {
//   name: 'Max',
//   age: 28
// }

// const friend = me

// friend.age = 27

// console.log('Friend: ', friend)
// console.log('Me: ', me) // ici on voit que me.age est 27, il a pris la valeur de friend.age

// COURSE 100 Primitives vs Objects in practice (voir 99 pour explication)

let lastName = 'Williams'
const oldLastName = lastName
lastName = 'Davis'

const jess = {
  firstName: 'Jess',
  lastName: 'Williams',
  age: 27
}

const marriedJess = jess
marriedJess.lastName = 'Davis'

console.log('before marriage:', jess)
console.log('after marriage:', marriedJess) // on voit que le nom a changé pour les deux objets.
// on ne peut pas changer l'un sans changer l'autre car la reference pointe
// sur le meme objet dans le heap ce qu'on peut faire en revanche :

// Copying objects

const jess2 = {
  firstName: 'Jess',
  lastName: 'Williams',
  age: 27,
  family: ['Max', 'Jacob']
}

const jess2Copy = Object.assign({}, jess2) // la method Object.assign merge 2 objets en un nouveau, l'objet crée ne sera donc pas au meme referencement que jess2
jess2Copy.lastName = 'Davis' // mais cette method crée une shallow copy de l'objet, seule la 1ere couche est copiée et la seconde
jess2Copy.family.push('Vic') // exemple objet dans l'objet pointera toujours sur l'objet de base

console.log(jess2)
console.log(jess2Copy)
