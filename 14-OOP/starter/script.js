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

// // const jerome = 'Jerome'

// // console.log(max instanceof Person)
// // console.log(jerome instanceof Person)

// // COURSE 209 Prototypes

// // tous les objets créés par instance vont hériter des propriétés du prototype
// Person.prototype.calcAge = function () {
//   console.log(2023 - this.birthYear)
// }
// // ici on définit la méthode calcAge comme faisant partie du proto Person.
// max.calcAge() // on voit que max a hérité de la method calcAge
// console.log(max.__proto__) // on peut voir dans la console les propriétés de l'objet max, héritées de Person.
// console.log(Person.prototype.isPrototypeOf(max)) // autre methode pour verifier

// Person.prototype.species = 'Homo Sapiens' // les objets heritent de la propriété species, elle est visible dans le deroulant prototype de l'objet.
// console.log(max.hasOwnProperty('species')) // on voit que la property species n'est pas store dans l'objet Jonas mais qu'elle est bien une partie du prototype.

// // COURSE 210
// // revisualiser si pas clair.
// // console.log(Object.prototype)// c'est le prototype de Person qui lui a été donné quand on l'a créé.

// // COURSE 211 Proto inheritance on built in objects

// console.log(max.__proto__) // le proto de max
// console.log(max.__proto__.__proto__) // le proto du proto => Objects
// console.log(max.__proto__.__proto__.__proto__) // le proto de Object est null, c'est le dernier maillon

// // les arrays ont un prototype
// const arr = [1, 2, 3, 4, 5, 6]
// console.log(arr.__proto__) // on peut voir le prototype et toutes les fonctions dont l'array a hérité(toutes les fonctions que l'on peut appliquer a un array)

// // comme ils ont un proto on peut ajouter des methodes a tous les arrays ex:
// // Array.prototype.unique = function () {
// //   return [...new Set(this)]
// // }
// // en revanche il faut pas le faire car ça change le comportement de tous les arrays du code.

// // Coding challenge # 1

// const Car = function (make, speed) {
//   this.make = make
//   this.speed = speed
// }

// Car.prototype.accelerate = function () {
//   console.log(this.speed += 10)
//   if (this.speed >= 140) console.log('\'🛑 au dela de la limite\'')
// }
// Car.prototype.brake = function () {
//   console.log(this.speed -= 5)
// }

// const car1 = new Car('BMW', 120)
// const car2 = new Car('Mercedes', 95)

// console.log(car1, car2)
// car1.accelerate()
// car2.brake()
// car1.accelerate()
// car1.accelerate()

// // COURSE 213 ES6 Classes

// class expression
// const PersonCl = class {}

// class declaration

// class PersonCl { // autre maniere de declarer une classe que par un constructor.
//   constructor (fullName, birthYear) {
//     this.fullName = fullName
//     this.birthYear = birthYear
//   }

//   calcAge () {
//     console.log(2023 - this.birthYear)
//   }

//   get age () {
//     return 2023 - this.birthYear
//   }

//   set fullName (name) {
//     if (name.includes(' ')) this._fullName = name
//     else alert(`${name} is not a full name`)
//   }

//   get fullName () {
//     return this._fullName
//   }
// }

// const jessica = new PersonCl('Jessica Davis', 1990)
// console.log(jessica)
// jessica.calcAge()
// console.log(jessica.age)

// // tout comme avec la methode constructor on peut ajouter des methodes au proto
// PersonCl.prototype.greet = function () {
//   console.log(`Hello ${this.firstName}`)
// }
// jessica.greet()

// COURSE 214 Setters and Getters

// const account = {
//   owner: 'Max',
//   movements: [200, 530, 120, 300],

//   get latest () {
//     return this.movements.slice(-1).pop() // slice permet de selectionner un element de l'array (-1 selectionne le premier en partant de la fin)
//   },
//   set latest (movement) {
//     this.movements.push(movement)
//   }
// }

// console.log(account.latest)
// account.latest = 50
// console.log(account.movements)

// comprendre que les getters et setters sont souvent utilisés
// pour modifier(set) et aller chercher(get) des valeurs privées
// d'un objet sans l'exposer directement.

// COURSE 215 Static Method

// class PersonCl { // autre maniere de declarer une classe que par un constructor.
//   constructor (fullName, birthYear) {
//     this.fullName = fullName
//     this.birthYear = birthYear
//   }

//   static hey () {
//     console.log('Hey there 👋')
//   }
//   // PersonCl.hey = function () {
// //   console.log('Hey there 👋') // methode utilisée pour les constructors
// // }
// }

// // PersonCl.hey = function () {
// //   console.log('Hey there 👋') // methode utilisée pour les constructors
// // }

// const max = new PersonCl('Max', 1995)
// console.log(max)

// PersonCl.hey() // on a déclaré une static function liée à PersonCl mais pas au prototype donc on y a pas accès par inheritance avec 'max'
// max.hey() // ça renvoie une erreur car la fonction max.hey n'existe pas.

// COURSE 216 Objectcreate

// const PersonProto = {
//   calcAge () {
//     console.log(2023 - this.birthYear)
//   },
//   init (firstName, birthYear) {
//     this.firstName = firstName
//     this.birthYear = birthYear
//   }
// }

// const steven = Object.create(PersonProto) // ici on a créé un objet vide nommé steven dont le prototype est celui indiqué apres la method Object.create(ici PersonProto)
// console.log(steven) // on voit que l'objet est vide mais qu'il possede la methode calcAge

// steven.firstName = 'Steven'
// steven.birthYear = 2002 // pas terrible de rajouter les infos a la main comme ça
// steven.calcAge() // apres avoir defini birthYear, on peut invoquer calcAge.

// console.log(steven.__proto__) // c'est exactement le proto qu'on a defini au dessus

// const sarah = Object.create(PersonProto)
// sarah.init('Sarah', 1979)
// sarah.calcAge()

// Coding challenge # 2

// class CarCl { // autre maniere de declarer une classe que par un constructor.
//   constructor (make, speed) {
//     this.make = make
//     this.speed = speed
//   }

//   accelerate () {
//     console.log(this.speed += 10)
//   }

//   brake () {
//     console.log(this.speed -= 5)
//   }

//   get speedUS () {
//     return this.speed / 1.6
//   }

//   set speedUS (speed) {
//     this.speed = speed * 1.6
//   }
// }

// const car1 = new CarCl('Ford', 120)
// console.log(car1)
// console.log(car1.speedUS)
// car1.speedUS = 50 // on appelle la fonction set speedUS comme ça
// console.log(car1)

// COURSE 218 inheritance between classes / Constructor

// constructor function
// const Person = function (firstName, birthYear) {
//   this.firstName = firstName
//   this.birthYear = birthYear
// }
// Person.prototype.calcAge = function () {
//   console.log(2023 - this.birthYear)
// }

// const Student = function (firstName, birthYear, course) {
// //   this.firstName = firstName // on ne veut pas repeter ça car c'est deja dans Person
// //   this.birthYear = birthYear
//   Person.call(this, firstName, birthYear)
//   this.course = course
// }

// Student.prototype = Object.create(Person.prototype) // ⚠️ ici on link le proto Person a Student, Student.proto devient Person.proto, il faut le faire avant de declarer de nouvelles methodes car ça overwrite les autres.
// Student.prototype.constructor = Student // cette ligne permet de redéfinir le constructor de mike(par exemple) sur Student, sinon il le met sur Person directement ce qui peut avoir des incidences plus tard

// Student.prototype.introduce = function () {
//   console.log(`${this.firstName} is studying ${this.course}`)
// }

// const mike = new Student('Mike', 2010, 'Computer Science')
// console.log(mike)
// mike.introduce()
// mike.calcAge()

// Coding challenge # 3 🍭

// const Car = function (make, speed) {
//   this.make = make
//   this.speed = speed
// }

// Car.prototype.accelerate = function () {
//   console.log(this.speed += 10)
// }
// Car.prototype.brake = function () {
//   console.log(this.speed -= 5)
// }

// const EV = function (make, speed, charge) {
//   Car.call(this, make, speed)
//   this.charge = charge
// }

// EV.prototype = Object.create(Car.prototype)
// EV.prototype.constructor = EV

// EV.prototype.accelerate = function () {
//   this.speed += 20
//   this.charge -= 1 // on pourrait ecrire -- (opposé de ++)
//   // eslint-disable-next-line max-len
//   console.log(`${this.make} going at ${this.speed} km/h with ${this.charge} % charge`)
// }

// EV.prototype.chargeBattery = function (chargeTo) {
//   this.charge = chargeTo
// }

// const car1 = new EV('Tesla', 120, 23)
// console.log(car1)
// car1.brake()
// car1.accelerate() // ici on voit que la fonction accelerate de EV a overwrite la fonction accelerate de Car, cf Polymorphism
// car1.chargeBattery(90)
// console.log(car1)

// COURSE 220 Inheritance between classes / Classes

// class PersonCl { // autre maniere de declarer une classe que par un constructor.
//   constructor (fullName, birthYear) {
//     this.fullName = fullName
//     this.birthYear = birthYear
//   }

//   calcAge () {
//     console.log(2023 - this.birthYear)
//   }

//   greet () {
//     console.log(`Hey ${this.fullName}`)
//   }

//   get age () {
//     return 2023 - this.birthYear
//   }

//   set fullName (name) {
//     if (name.includes(' ')) this._fullName = name
//     else alert(`${name} is not a full name`)
//   }

//   get fullName () {
//     return this._fullName
//   }
// }

// class StudentCl extends PersonCl {
//   constructor (fullName, birthYear, course) {
//     super(fullName, birthYear)
//     this.course = course // c'est l'équivalent de la premiere ligne ou on fait (Objet).call avec la methode constructor
//   } // pas besoin de spécifier (this) en arguments, la fonction super le fait auto (c'est pour ça qu'on doit la mettre en premier).

//   introduce () {
//     // eslint-disable-next-line max-len
//     console.log(`Hi, my name is ${this.fullName} and i want to become a ${this.course}`)
//   }

//   calcAge () {
//     console.log(`${this.fullName} is ${2023 - this.birthYear}`)
//   }
// }

// const paxit = new StudentCl('Paxit Moons', 1969, 'Blacksmith')
// console.log(paxit)
// paxit.introduce() // method dans le proto
// paxit.calcAge() // method héritée du proto parent (Person) mais overwrite (Polymorphism)
// paxit.greet() // method héritée du proto parent (PersonCl)

// COURSE 221 Inheritance between classes / Objectcreate

// const PersonProto = {
//   calcAge () {
//     console.log(2023 - this.birthYear)
//   },

//   init (firstName, birthYear) {
//     this.firstName = firstName
//     this.birthYear = birthYear
//   },
//   fart () {
//     console.log(`${this.firstName} farts!`)
//   }
// }

// const StudentProto = Object.create(PersonProto)

// StudentProto.init = function (firstName, birthYear, course) {
//   PersonProto.init.call(this, firstName, birthYear)
//   this.course = course
// }
// StudentProto.introduce = function () {
//   console.log(`${this.firstName} studies ${this.course}`)
// }
// StudentProto.fart = function () {
//   console.log(`${this.firstName} farts! What a Joker.`)
// }

// const paxit = Object.create(StudentProto)
// paxit.init('Paxit', 1969, 'Babies')
// console.log(paxit)
// paxit.introduce() // method écrite dans StudentProto
// paxit.calcAge() // method héritée
// paxit.fart() // method overwrite (Polymorphism)

// COURSE 222 Another Class Example

// class Account {
//   constructor (owner, currency, pin) {
//     this.owner = owner
//     this.currency = currency
//     this.pin = pin
//     this.movements = []
//     this.locale = navigator.language
//   }

//   // en dessous le Public interface: (API)
//   deposit (val) {
//     this.movements.push(val) // cette fonction quand invoquée va remplir l'array movements.
//   }

//   withdraw (val) {
//     this.deposit(-val) // on invoque la method dans la method.
//   }

//   approveLoan (val) {
//     return false
//   }

//   requestLoan (val) {
//     if (this.approveLoan(val)) {
//       this.deposit(val)
//       console.log('Loan approved')
//     } else {
//       console.log('Loan disapproved')
//     }
//   }
// }

// const acc1 = new Account('Max', 'EUR', 1234)
// acc1.deposit(200)
// acc1.withdraw(150)
// console.log(acc1)

// acc1.requestLoan(1000) // ici on demande 1000$ de pret et on nous les verse si la condition approveLoan est true.
// mais on voit que la methode approveLoan est utilisable a la main
// meme si sa seule utilité devrait etre au sein d'une demande requestLoan
// c'est pour ça qu'il y a la data encapsulation et data privacy

// COURSE 223 Encapsulation protect properties and methods

// l'idée est qu'on protege des methodes et des propriétés
// ces methodes et propriétés ne pourront pas etre touchées par le public
// en revanche le public pourra acceder a certaines methodes

// class Account {
//   constructor (owner, currency, pin) {
//     this.owner = owner
//     this.currency = currency
//     this.pin = pin
//     // protected property (this._) ça n'empeche pas de l'utiliser mais c'est une convention qui dit aux autres dev de ne pas utiliser cet element en dehors de l'API
//     this._movements = []
//     this.locale = navigator.language
//   }

//   // en dessous le Public interface: (API)
//   deposit (val) {
//     this._movements.push(val)
//   }

//   withdraw (val) {
//     this.deposit(-val)
//   }

//   approveLoan (val) {
//     return true
//   }

//   requestLoan (val) {
//     if (this.approveLoan(val)) {
//       this.deposit(val)
//       console.log('Loan approved')
//     } else {
//       console.log('Loan disapproved')
//     }
//   }
// }

// const acc1 = new Account('Max', 'EUR', 1234)
// console.log(acc1)
// acc1.requestLoan(1000)
// en gros on ecrit _nomdelapropriété pour signifier aux dev de faire gaffe.

// COURSE 224 Encapsulation Private class fields and methods

// les 4 types de fields
// 1) Public fields
// 2) Private fields
// 3) Public methods
// 4) Private methods

// class Account {
//   // 1) Public Fields ils sont rajoutés a toutes les instances mais pas au proto
//   locale = navigator.language

//   // 2) Private Fields
//   #movements = []
//   #pin // vu que pin est une des variables du constructor on ne declare rien ici.

//   constructor (owner, currency, pin) {
//     this.owner = owner
//     this.currency = currency
//     this.#pin = pin
//     // this._movements = []
//     // this.locale = navigator.language
//   }

//   // 3) Public methods
//   // en dessous le Public interface: (API)
//   getMovements () {
//     return this.#movements
//   }

//   deposit (val) {
//     this.#movements.push(val)
//   }

//   withdraw (val) {
//     this.deposit(-val)
//   }

//   requestLoan (val) {
//     if (this.approveLoan(val)) {
//       this.deposit(val)
//       console.log('Loan approved')
//     } else {
//       console.log('Loan disapproved')
//     }
//   }

//   approveLoan (val) {
//     return true
//   }

//   // 4) Private methods
// //   #approveLoan (val) {
// //     return true
// //   }
// }

// const acc1 = new Account('Max', 'EUR', 1234)
// acc1.deposit(200)
// acc1.requestLoan(1000)
// console.log(acc1)

// // console.log(acc1.#movements) // ici on voit qu'on ne peut pas utiliser movements en dehors de la classe car il est privé
// console.log(acc1.getMovements()) // mais on peut les visualiser grace a cette methode publique.
// // console.log(acc1.#pin) // le pin non plus n'est pas accessible.

// COURSE 225 Chaining Methods

// class Account {
//   locale = navigator.language

//   #movements = []
//   #pin

//   constructor (owner, currency, pin) {
//     this.owner = owner
//     this.currency = currency
//     this.#pin = pin
//   }

//   getMovements () {
//     return this.#movements
//   }

//   deposit (val) {
//     this.#movements.push(val)
//     return this // le fait de return this permet de chain les methods
//   }

//   withdraw (val) {
//     this.deposit(-val)
//     return this
//   }

//   requestLoan (val) {
//     if (this.approveLoan(val)) {
//       this.deposit(val)
//       console.log('Loan approved')
//     } else {
//       console.log('Loan disapproved')
//     }
//     return this
//   }

//   approveLoan (val) {
//     return true
//   }
// }

// const acc1 = new Account('Max', 'EUR', 1234)

// // Chaining
// acc1.deposit(100).deposit(200).withdraw(200).requestLoan(1000)
// console.log(acc1.getMovements()) // on voit que le chain a fonctionné

// Coding challenge # 4

class CarCl {
  constructor (make, speed) {
    this.make = make
    this.speed = speed
  }

  accelerate () {
    this.speed += 10
  }

  brake () {
    this.speed -= 5
    return this
  }
}

class EVCl extends CarCl {
  #charge
  constructor (make, speed, charge) {
    super(make, speed)
    this.#charge = charge
  }

  accelerate () {
    this.speed += 20
    this.#charge -= 1
    return this
  }

  chargeBattery (chargeTo) {
    this.#charge = chargeTo
    return this
  }
}

const car1 = new EVCl('Tesla', 120, 23)
console.log(car1)
car1.accelerate().accelerate().accelerate().chargeBattery(90).brake()
console.log(car1)
// console.log(car1.#charge)
