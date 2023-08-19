'use strict'

/// //////////////////////////////////////////////
/// //////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111
}

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222
}

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333
}

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444
}

const accounts = [account1, account2, account3, account4]

// Elements
const labelWelcome = document.querySelector('.welcome')
const labelDate = document.querySelector('.date')
const labelBalance = document.querySelector('.balance__value')
const labelSumIn = document.querySelector('.summary__value--in')
const labelSumOut = document.querySelector('.summary__value--out')
const labelSumInterest = document.querySelector('.summary__value--interest')
const labelTimer = document.querySelector('.timer')

const containerApp = document.querySelector('.app')
const containerMovements = document.querySelector('.movements')

const btnLogin = document.querySelector('.login__btn')
const btnTransfer = document.querySelector('.form__btn--transfer')
const btnLoan = document.querySelector('.form__btn--loan')
const btnClose = document.querySelector('.form__btn--close')
const btnSort = document.querySelector('.btn--sort')

const inputLoginUsername = document.querySelector('.login__input--user')
const inputLoginPin = document.querySelector('.login__input--pin')
const inputTransferTo = document.querySelector('.form__input--to')
const inputTransferAmount = document.querySelector('.form__input--amount')
const inputLoanAmount = document.querySelector('.form__input--loan-amount')
const inputCloseUsername = document.querySelector('.form__input--user')
const inputClosePin = document.querySelector('.form__input--pin')

const displayMovements = function (movements) {
  containerMovements.innerHTML = '' // cette ligne permet de vider le html avant
  // de rentrer nos données.
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal'
    const html = `
    <div class="movements">
      <div class="movements__row">
          <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
          <div class="movements__value">${mov}</div>
    </div>
    `

    containerMovements.insertAdjacentHTML('afterbegin', html)
    // ⚠️ c'est comme ça qu'on insere du js dans son html et vice versa
    // ici on definit une fonction mère dans laquelle on définit notre vraie fonction
    // notre fonction check chaque élement de l'array qu'on lui fournit et
    // renvoie son index, son type et sa valeur.
    // on crée une constant 'html' dans laquelle on insere notre html déja écrit
    // en template literal et on remplace les placeholders par les valeurs
    // renvoyées par la fonction.
    // puis containerMovements (qui est la requete de la class movements du html)
    // appelle inserAdjacentHTML avec comme attribut la position du js et
    // la string html que l'on veut insérer (ici la const html qu'on a créé.)
  })
}

displayMovements(account1.movements)

/// //////////////////////////////////////////////
/// //////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling']
])

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]

// /// //////////////////////////////////////////////

// // COURSE 142 simple methods

// // SLICE (crée un nouvel array avec les parametres qu'on lui donne)

// let arr = ['a', 'b', 'c', 'd', 'e']
// console.log(arr.slice(2)) // slice découpe un array a partir d'une position indiquée et retourne un nouvel array.
// console.log(arr.slice(2, 4)) // on peut indiquer une fin pour le nouvel array créé, ici en indiquant 2,4 on crée un array contenant 2 et 3 (comme en css)
// console.log(arr.slice(-2)) // avec une valeur negative on selectionne en partant de la fin (cette fois le nombre de valeurs indiqué)
// console.log(arr.slice(2, -1)) // ici c'est pareil que d'indiquer (2,4) mais ce qu'on demande precisement est de partir de 2 et de ne pas prendre le dernier.
// console.log(arr.slice()) // on peut aussi recopier exactement l'array si on ne donne pas d'argument

// // SPLICE (découpe des elements de l'array et les supprime de l'array de base)
// // console.log(arr.splice(2)) // on voit ce que splice a découpé de [2] à la fin
// console.log(arr) // le nouvel array ne contient plus que les valeurs [0, 1]
// arr.splice(-1) // découpe le dernier element de la liste.
// console.log(arr)
// arr.splice(1, 2) // ne fonctionne pas exactement pareil que pour slice, ici on indique la position de depart et le nombre de valeurs que l'on veut supprimer. (on part à 1 donc B, on supprime 2 donc B et C)
// console.log(arr)

// // REVERSE

// arr = ['a', 'b', 'c', 'd', 'e']
// const arr2 = ['j', 'i', 'h', 'g', 'f']
// console.log(arr2.reverse()) // returns la reverse version de l'array et le modifie.
// console.log(arr2) // on voit que l'array 2 est modifié.

// // CONCAT

// const letters = arr.concat(arr2) // concatenate les 2 arrays.
// console.log(letters)

// // JOIN

// console.log(letters.join('-')) // crée une string contenant les valeurs de l'array et insere le caractere spécifié entre chaque valeur.

// COURSE 143 the AT method

// const arr = [23, 11, 64]
// console.log(arr[0])
// console.log(arr.at(0)) // fait la meme chose.

// // getting the last element
// console.log(arr[arr.length - 1]) // déjà vu, vient chercher l'élement de l'array en position = longueur de l'array -1 car les array sont en base 0.
// console.log(arr.slice(-1)[0]) // crée un nouvel array contenant uniquement le dernier élément, avec [0] on vient chercher la valeur de cet élément (le nouvel array possède une seule valeur en position 0)
// console.log(arr.at(-1)) // methode la plus simple, on veut l'élément en -1 donc le premier en partant de la fin (permet de method chain)

// COURSE 144 Looping array forEach method

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]

// for (const actions of movements) { // actions fait réference à chque élement de movements,
//   if (actions > 0) { // comprendre que la boucle va vérifier chaque élement et lui appliquer sa condition.
//     console.log(`You deposited ${actions}`)
//   } else {
//     console.log(`You withdrew ${-actions}`)
//   }
// }

// movements.forEach(function (actions, index, array) { // ⚠️ syntax, l'argument de la fonction forEach est une fonction donc on ferme le bloc de code par la parenthèse ) de la fonction forEach.
//   if (actions > 0) {
//     console.log(`Movement ${index + 1}: You deposited ${actions}`) // l'argument de la function sera chaque élement de l'array un par un, pas besoin de spécifier.
//   } else {
//     console.log(`Movement ${index + 1}: You withdrew ${-actions}`) // on peut ajouter deux arguments à la fonction, index et array car la method forEach prend en compte automatiquement ces arguments, toujours dans l'ordre élement, index de l'élement, array en entier
//   }
// })

// movements.forEach(function (actions) { // ⚠️ syntax, l'argument de la fonction forEach est une fonction donc on ferme le bloc de code par la parenthèse ) de la fonction forEach.
//   console.log(actions)
// })

// COURSE 145 Maps and sets ⚠️⚠️⚠️ revenir ici plus tard

// COURSE 146
