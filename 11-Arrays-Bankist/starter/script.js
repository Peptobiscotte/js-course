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

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '' // cette ligne permet de vider le html avant
  // de rentrer nos données.

  // sorting
  // eslint-disable-next-line max-len
  const movs = sort ? acc.movements.slice().sort((a, b) => a - b) : acc.movements

  movs.forEach(function (mov, i) {
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

// COURSE 151 Computing usernames

// const user = 'Steven Thomas Williams' // we want initials stw.

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('')
  })
}
createUsernames(accounts)
// console.log(accounts)

// createUsernames('Steven Thomas Williams')

// const userInitials = username.map(name => name[0]) //
// console.log(userInitials) // noter la syntax au dessus quand on utilise une arrow function en callback function.

// const userInitialsDef = userInitials.join('')
// console.log(userInitialsDef)
// ici on a le résultat voulu en plusieurs const pour comprendre
// mais le mieux serait de chain les methods sans redéclarer de variable
// a chaque fois.

const calcPrintBalance = function (acc) { // prend un array de movements.
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0)
  labelBalance.textContent = `${acc.balance} €` //
}
// on utilise l'array de mov stocké dans l'objet acc1

const calcDisplaySummary = function (acc) { // on veut calculer les incomes outcomes et interest (bas de la page)
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0)
  labelSumIn.textContent = `${incomes}€` // on va ensuite inspecter l'element html de la page à l'ndroit ou on veut inserer ce calcul(ici le query selector a été fait en amont)

  const outcomes = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0)
  labelSumOut.textContent = `${Math.abs(outcomes)}€` // Math.abs donne l'absolute value (pas de - ou de +)

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(mov => (mov * 1.2 / 100) >= 1 ? mov * acc.interestRate / 100 : 0) // calcule un interet de 1.2% mais exclut les interets inferieur a 1$ on aurait aussi pu rajouter une filter method
    .reduce((acc, mov) => acc + mov, 0)
  labelSumInterest.textContent = `${interest}€`
}

// // Event handler
// btnLogin.addEventListener('click', function (e) {
//   // prevents form from submitting
//   e.preventDefault()

//   accounts.find(acc => acc.owner === inputLoginUsername.value)
// })

// UPDATE UI

const updateUI = function (acc) {
  displayMovements(acc)

  calcPrintBalance(acc)

  calcDisplaySummary(acc)
}

// ✅ Event handlers ✅
let currentAccount =

btnLogin.addEventListener('click', function (e) {
  e.preventDefault() // on utilise ça dans les form HTML car elles reload la page sinon

  currentAccount = accounts.find(acc => acc.username ===
     inputLoginUsername.value)
  console.log(currentAccount)

  if (currentAccount?.pin === Number(inputLoginPin.value)) { // optionnal chaining with the ?, if currentAccount is undefined it will just not read the code after
    // Display UI and message
    labelWelcome.textContent =
    `Welcome back ${currentAccount.owner.split(' ')[0]}`
    containerApp.style.opacity = 100

    // Clearing input fields
    inputLoginUsername.value = inputLoginPin.value = ''
    inputLoginPin.blur()
    inputLoginUsername.blur() // enleve le curseur de selection de la boite

    updateUI(currentAccount)
  }
})

btnLoan.addEventListener('click', function (e) {
  e.preventDefault()

  const amount = Number(inputLoanAmount.value)

  if (amount > 0 && currentAccount.movements
    .some(mov => mov >= amount * 0.1)) {
    currentAccount.movements.push(amount)
    // update UI
    updateUI(currentAccount)
  }
  inputLoanAmount.value = ''
})

btnClose.addEventListener('click', function (e) {
  e.preventDefault()

  if (inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin) {
    const index = accounts.findIndex(acc => acc.username ===
        currentAccount.username)

    // Delete account
    accounts.splice(index, 1)

    // Hide UI
    containerApp.style.opacity = 0
  }
  // clear input
  inputClosePin.value = inputCloseUsername.value = ''
})

// 📈 Transfer Money 📈

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault()
  const amount = Number(inputTransferAmount.value)
  const receiverAcc =
  accounts.find(acc => acc.username === inputTransferTo.value)

  // clear input fields
  inputTransferAmount.value = inputTransferTo.value = ''
  inputTransferAmount.blur()

  if (amount > 0 &&
    receiverAcc &&
  amount <= currentAccount.balance &&
  receiverAcc?.username !== currentAccount.username) {
    // Doing the transfer
    currentAccount.movements.push(-amount)
    receiverAcc.movements.push(amount)
    // update ui
    updateUI(currentAccount)
  }
})

// SORT

let sorted = false

btnSort.addEventListener('click', function (e) {
  e.preventDefault()
  displayMovements(currentAccount, !sorted)
  sorted = !sorted
})

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

// movements.forEach(function (actions) {
//   console.log(actions)
// })

// COURSE 145 Maps and sets ⚠️⚠️⚠️ revenir ici plus tard

// COURSE 146

// COURSE 149 DATA transformations with map, filter, reduce

// MAP
// permet de loop comme un forEach mais crée un nouvel array avec les élements.

// FILTER
// loop mais permet de filtrer selon une condition donnée et retourne aussi
// un nouvel array (comme un if/else, si l'element passe le test et est true
// il va dans le nouvel array

// REDUCE
// réduit tous les élements d'un array en une valeur unique
// exemple: additionne toutes les valeurs de l'array et return le resultat
// on doit lui spécifier une opération (comme par exemple acc qui additionne)

// COURSE 150 The Map Method
// pour l'exemple on donne les movements en Euros et on veut convertir
// en $ avec 1 EUR = 1.1 $

// const eurToUsd = 1.1

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]

// // const movementsUSD = movements.map(function (mov) { // comme pour forEach on specifie une callback function.
// //   return mov * eurToUsd
// // })

// const movementsUSD = movements.map((mov) => mov * eurToUsd) // exemple en utilisant une function arrow, le symbole => remplace le keyword function, on spécifie seulement la variable et ce que la function doit return (ici variable * eurUSD)
// // avec une function arrow pas besoin du keyword return. ni des {}
// // certains trouvent ça moins bien lisible mais c'est plus concis
// console.log(movementsUSD)

// const movementsDescription = movements.map((mov, i) =>
// `Movement ${i + 1}: ${mov > 0 ? 'Deposit' : 'Withdrawal'}: ${mov}`

//   // if (mov > 0) {
//   //   return `Movement ${i + 1}: Deposit: ${mov}`
//   // } else {
//   //   return `Movement ${i + 1}: Withdrawal: ${-mov}`
//   // } // on utilise un ternary operator et une arrow function pour simplifier l'écriture mais les functions classiques et les if/else statements sont toujours valables.

// )// comme dans un forEach, on peut specifier la valeur, l'index et l'array intégral dans les variables de la callback function.

// console.log(movementsDescription)

// COURSE 152 The Filter Method

// ici on veut par ex créer un array avec uniquement les deposit.

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]

// const deposit = movements.filter(function (mov) {
//   return mov > 0 // on veut retrourner une boolean value, pas besoin de if else, seimplement la partie que l'on veut verifier comme etant true ou false.
// })

// console.log(deposit)

// const withdrawals = movements.filter(mov => mov < 0)
// console.log(withdrawals)

// COURSE 153 The Reduce method

// ici on veut connaitre la balance totale du compte

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]

// dans une reduce method, le premier argument de la callback function ne sera
// pas le current argument de l'array mais l'accumulator (souvent noté acc)
// penser à une boule de neige qui assimile les arguments un par un selon
// l'opération qu'on lui demande de faire

// const balance = movements.reduce(function (acc, mov, i, arr) {
//   return acc + mov
// }, 0) // le 0 ici est la valeur initiale de l'accumulator(snowball), pas obligé
// // que ce soit 0.

// const balance2 = movements.reduce((acc, mov) => acc + mov, 0) // method avec arrow function

// console.log(balance, balance2)

// get the max value of an array

// const maxValue = movements.reduce(function (acc, mov) {
//   if (mov > acc) {
//     acc = mov
//   }
//   return acc
// }, 0) // on peut aussi set la value de l'accumulator sur la premiere value de l'array (movements[0])

// const maxValueShort = movements.reduce((acc, mov) => acc > mov ? acc : mov, 0)
// // au dessus comprendre : si acc est supérieur à mov on return acc donc acc
// // est la max value si ce n'est pas le cas on return le mov en cours
// // qui devient la max value, dans ce cas la la value stockée sera un mov, pas l'acc
// console.log(maxValue)
// console.log(maxValueShort)

// COURSE 155 Chaining methods

// const eurToUsd = 1.1

// const totalDepositDollars = movements
//   .filter(mov => mov > 0) // on garde uniquement les positifs (deposits) se souvenir que la method filter necessite une returned value et une arrow function return auto.
//   .map(mov => mov * eurToUsd)
//   .reduce((acc, mov) => acc + mov, 0)
// // on peut inspecter l'array en cours en utilisant le 3eme parametre de la
// // callback function(value, i, array) pour etre sur de pas avoir fait d'erreur.
// console.log(totalDepositDollars)

// ici on filtre les positifs pour avoir only les deposits
// puis on map les deposits pour les convertir en $
// puis on fait la somme des deposits
// on obtient la somme des deposits en $

// COURSE 157 the FIND method

// la method permet de trouver le premier élement qui renvoie true
// similaire a filter mais renvoie un seul element pas un array.

// const firstDeposit = movements.find(mov => mov > 0)
// console.log(firstDeposit) // on voit que le premier deposit (valeur positive) est 200

// const accountFind = accounts.find(acc => acc.owner === 'Jessica Davis')
// console.log(accountFind) // find est utilisé ici sur la liste d'accounts
// et il va chercher un element d'un objet de la liste. (owner est un element de account)

// for (const account of accounts) {
//   if (account.owner === 'Jessica Davis') {
//     console.log(account) // // pareil en utilisant une for of loop
//   }
// }

// COURSE 158 Implementing login

// COURSE 159 ⚠️⚠️⚠️

// COURSE 160 findIndex method

// fermer un account revient a delet l'objet de l'array account

// COURSE 161 some and every

// console.log(movements)
// console.log(movements.includes(-130)) // includes teste uniquement l'égalite =
// // pour tester une condition on utilise some

// const anyDeposits = movements.some(mov => mov > 1500) // teste si il y a au moins une valeur
// // supérieure à 0 (deposit) (any value)
// console.log(anyDeposits)

// every

// only returns true when all elements pass the test.

// console.log(movements.every(mov => mov > 0)) // returns true si tous les movements sont
// // des déposits (>0)
// console.log(account4.movements.every(mov => mov > 0)) // l'acc 4 a que des depo

// // separate callback

// const deposit = mov => mov > 0

// console.log(movements.some(deposit))
// console.log(movements.every(deposit))
// console.log(movements.filter(deposit))

// COURSE 162 flat and flatmap

// const arr = [[1, 2, 3], [4, 5, 6], 7, 8]
// console.log(arr.flat())

// const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8]
// console.log(arrDeep.flat()) // removes only one level of nest
// console.log(arrDeep.flat(2)) // removes 2 levels of nest

// // on veut connaitre les movements de tous les comptes et la balance totale:

// const accountMovements = accounts.map(acc => acc.movements)
// console.log(accountMovements) // on a un array avec tous les movements nested

// const allMovements = accountMovements.flat()
// console.log(allMovements)

// const overallBalance = allMovements.reduce((acc, value) => acc + value, 0)
// console.log(overallBalance)

// // on aurait pu chain les methods plutot que de réutiliser differrentes const
// // comme ça arrive souvent de map puis de flat il y a une method qui fait les 2
// // Flatmap

// const overallBalance2 = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((acc, value) => acc + value, 0)

// console.log(overallBalance2)

// // mais cette method ne fonctionne que sur un level de nesting si il y en a plus il faut
// // utiliser .flat et .map separemment

// COURSE 163 sorting arrays

// COURSE 164 ways of creating arrays

// const arr = [1, 2, 3, 4, 5, 6, 7]
// // console.log(new Array(1, 2, 3, 4, 5))

// const x = new Array(7)
// console.log(x) // crée un array avec 7 elements vides si on donne un seul argument
// // avec cette methode on ne peut pas utiliser la methode map par ex
// // mais on peut  utiliser la methode fill

// // x.fill(1)
// // console.log(x) // remplit l'array de l'argument et modifie l'array (pas besoin de store un nouvel array)

// x.fill(1, 3, 5) // on peut spécifier en second un parametre de depart, ici on commence a remplir
// // l'array de 1 a partir de la position 3 (le 4eme slot) et un 3eme parametre pour spécifier
// // ou doit s'arreter le remplissage
// console.log(x)

// arr.fill(23, 2, 6)
// console.log(arr) // fonctionne aussi sur les arrays qui ne sont pas vides.

// // Array from
// const y = Array.from({ length: 7 }, () => 1)
// console.log(y)

// const z = Array.from({ length: 7 }, (_, i) => i + 1) // fonctionne comme une callback
// // function .map par exemple. on spécifie d'abord la longueur sous forme de key d'un objet
// // puis la callback function pour remplir l'array.
// // on a uniquement besoin de l'index (i) ici mais on doit spécifier un premier argument quand meme
// // donc on utilise _ pour dire que l'argument n'est pas utilisé dans la fonction.
// console.log(z)

// const dice = Array.from({ length: 100 }, () =>
//   Math.trunc(Math.random() * 6) + 1)
// console.log(dice)

// labelBalance.addEventListener('click', function () {
//   const movementsUI = Array.from(document.querySelectorAll('.movements__value'),
//     el => Number(el.textContent.replace('€', '')))
//   console.log(movementsUI)
// })
// on voit ici qu'en premier arg de array.from on peut spécifier une origine complexe comme un
// query selectorAll, et en second arg on passe une fonction qui nous permet d'extraire les data
// que l'on veut obtenir (ici un nombre, sans le symbole €)
// on l'a attaché à un event handler pour pouvoir justifier son utilisation dans l'exemple

// COURSE 165 which method to use
// ✅✅✅✅✅✅✅✅✅✅✅ revoir la vidéo pour + d'infos

// COURSE 166 Practice

// on veut le sum des deposits de la banque
// const bankDepositSum = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov > 0)
//   .reduce((acc, mov) => acc + mov, 0)

// console.log(bankDepositSum)

// // on veut le nombre de deposit d'au moins 1000
// // const numDeposit1000 = accounts
// //   .flatMap(acc => acc.movements)
// //   .filter(mov => mov >= 1000).length

// const numDeposit1000 = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((count, current) => current >= 1000 ? count + 1 : count, 0)
// // on peut utiliser reduce a la place
// console.log(numDeposit1000)

// // let a = 10
// // console.log(a++) // le ++ augmente la value mais return la value avant augmentation
// // console.log(a)
// // console.log(++a) // si on met ++ avant ça renvoie direct la valeur augmentée

// // créer un objet contenant tous les deposits et tous les withdrawals
// const sums = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((sums, cur) => {
//     cur > 0 ? sums.deposits += cur : sums.withdrawals += cur
//     return sums
//   }, { deposits: 0, withdrawals: 0 })

// console.log(sums)

// // convertir n'importe quelle string en Title Case (première lettre en maj sauf exceptions
// const convertTitle = function (title) {
//   const capitalize = str => str[0].toUpperCase() + str.slice(1)

//   const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with']

//   const titleCase = title
//     .toLowerCase()
//     .split(' ')
//     .map(word => exceptions.includes(word)
//       ? word
//       : capitalize(word))
//     .join(' ')
//   return capitalize(titleCase)
// }

// console.log(convertTitle('this is a nice title'))
// console.log(convertTitle('this is a LONG title but not too long'))
// console.log(convertTitle('and here is another title with an EXAMPLE'))

// CODING CHALLENGE #4

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
]

// 1

const reco = function (dogObj) {
  dogObj.recommendedFood = dogObj.weight ** 0.75 * 28
}

dogs.forEach(reco)
console.log(dogs)

// 2
const indexSarahDog = dogs.findIndex(dog =>
  dog.owners.includes('Sarah'))

if (dogs[indexSarahDog].curFood > (dogs[indexSarahDog].recommendedFood)) {
  console.log(`${dogs[indexSarahDog].owners}'s dog is eating too much`)
  // eslint-disable-next-line max-len
} else if (dogs[indexSarahDog].curFood > (dogs[indexSarahDog].recommendedFood)) {
  console.log((`${dogs[indexSarahDog].owners}'s dog is eating too little`))
}

// 3
const keyFind = 'owners'

const tooMuch = dogs
  .filter(el => el.curFood > el.recommendedFood)
  .flatMap(obj => obj[keyFind])

const tooLittle = dogs
  .filter(el => el.curFood < el.recommendedFood)
  .flatMap(obj => obj[keyFind])

// 4

console.log(`${tooMuch.join(' and ')}'s dogs eat too much`)

console.log(`${tooLittle.join(' and ')}'s dogs eat too little`)

// 5

dogs.forEach(function (elem) {
  console.log(elem.curFood === elem.recommendedFood)
})

dogs.forEach(function (elem) {
  // eslint-disable-next-line max-len
  console.log(elem.curFood > (elem.recommendedFood * 0.90) && elem.curFood < (elem.recommendedFood * 1.10))
})
