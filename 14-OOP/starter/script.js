'use strict'

// COURSE 206 What is OOP

// principes fondamentaux de creation de classe
// Abstraction
// uniquement garder les détails importants
// Encapsulation
// garder certains élements d'une classe privés(dans l'objet) et certains publics(qui communiqueront avec le reste du code via une API)
// Inheritance
// permet de transmettre les propriétés et méthodes d'une classe(parent) à une autre(child)
// Polymorphism
// permet a une classe héritée d'une autre d'overwrite des methodes heritées, d'en faire les leurs.

// COURSE 207 OOP in JS

// la classe est le blueprint et l'instance est l'objet créé à partir du blueprint.
// tous les objets en JS sont liés à des prototypes qui contiennent des methodes, les objets peuvent acceder a ces methodes.
// un objet hérite des propriétés de son proto (on peut aussi dire qu'un objet délègue à son proto)
// pour créer un proto on peut utiliser constructor function, ES6 classes, object.create

// COURSE 208 Constructor functions & new operator

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName
//   this.birthYear = birthYear

//   // never declare a method inside a constructor, bad performance.
// //   this.calcAge = function () {
// //     console.log(2023 - this.birthYear)
// //   }
// }

// const max = new Person('Max', 1995)
// console.log(max)

// // 1) new empty object {} is created
// // 2) function is called, this fait réference au nouvel empty object {}
// // 3) {} is linked to a prototype
// // 4) function automatically returns {}

// const vic = new Person('Vic', 2000)
// console.log(vic)

// // vic et max sont des instances de Person pour le verifier:

// const jerome = 'Jerome'

// console.log(max instanceof Person)
// console.log(jerome instanceof Person)
