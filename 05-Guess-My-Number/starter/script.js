'use strict'

// COURSE 70 Project 1 guess my number.

// console.log(document.querySelector('.message')) // method pour selectionner un element html
// on utilisera . pour les classes et # pour les id comme en css

// pour selectionner le contenu textuel d'un element on utilise .textContent apres l'élement:

// console.log(document.querySelector('.message').textContent)

// COURSE 71 Whats the Dom + manipulations

// le DOM est une connection entre HTML CSS et JS

// représenter le contenu HTML sous forme d'arbre génealogique
// le plus en haut est HTML il a deux heritiers Head et Body qui eux memes
// ont des heritiers (sections, div, <p>...)

// le DOM et son langage ne font pas partie de JS mais des API des navigateurs,
// on peut simplement intéragir avec en utilisant js.

// COURSE 72 selecting and manipulating elements

// document.querySelector('.message').textContent = '🐕 Correct Number!'
// // on modifie le textContent en utiliant =

// document.querySelector('.number').textContent = 14
// document.querySelector('.score').textContent = 9

// document.querySelector('.guess').value = 666 // on utilise .value pour modifier les input elements.
// console.log(document.querySelector('.guess').value) // la classe guess est de type input

// COURSE 73 Handling click events

// document.querySelector('.check').addEventListener('click', function () { // addEventListener est une method qui prend comme argument en premier ce que la method doit 'écouter' puis une callback function qui définit ce qui sera fait à l'input.
//   console.log(document.querySelector('.guess').value) // pour l'instant on log dans la console la box guess quand on clique sur check.
// })
// pas besoin d'appeler la callback function(event handler), JS la call auto
// quand l'event a lieu (ici un click sur la box check)

let secretNumber = Math.trunc(Math.random() * 20) + 1
// MAth random prend un chiffre entre 0 et 1
// avec *20 on va de 0 à 19.9999, comme on enleve les decimales avec.trunc
// on va de 0 à 19 donc on ajoute + 1 a la fin pour aller de 1 à 20

let score = 20 // on met une variable let car on va la modifier en cliquant
let highscore = 0

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value) // on se souvient que la plupart des user inputs sont convertis en strings, comme on voudra comparer ce chiffre on va le transformer direct en Number()
  //   console.log(guess) // on voit que le resultat est un number

  // on commence à implementer des fonctionnalités, ici ce qui se passe quand
  // il n'y a pas de valeur a check.

  if (!guess) { // if check si la condition est true, quand on ne rentre rien
    // guess est égal à 0, 0 etant 'falsy' on veut l'inverse donc !0 (ici !guess)
    // pour pouvoir appliquer la condition de if (qui doit etre true)
    document.querySelector('.message').textContent = '😤 No Number!'

    //     // banane
    //   } else if (guess === 'banane') {
    //     document.querySelector('.message').textContent = '🍌 BANANE 🍌'
    //     document.querySelector('body').style.backgroundColor = '#f1eb3f'
    // When Player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Winner Winner 🐔 🍽️'
    document.querySelector('body').style.backgroundColor = '#60b347'
    document.querySelector('.number').style.width = '30rem'
    document.querySelector('.number').textContent = secretNumber
    document.querySelector('.score').textContent = score
    if (score > highscore) {
      highscore = score
      document.querySelector('.highscore').textContent = highscore
    }
    // When too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too Low!'
      document.querySelector('.score').textContent = score = score - 1
    } else {
      document.querySelector('.message').textContent = '😭 LOSER!'
      document.querySelector('.score').textContent = 0
      document.querySelector('body').style.backgroundColor = '#c91c1c'
    }
    // When too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too High!'
      document.querySelector('.score').textContent = score--
    } else {
      document.querySelector('.message').textContent = '😭 LOSER!'
      document.querySelector('.score').textContent = 0
      document.querySelector('body').style.backgroundColor = '#c91c1c'
    }
  }
})

// COURSE 74

// on doit definir le secret number voir au dessus.

// COURSE 75 Manipulating CSS styles (voir au dessus)

// CODING CHALLENGE # 1

// implementing the Reset functionnality

document.querySelector('.again').addEventListener('click', function () {
  score = 20
  secretNumber = Math.trunc(Math.random() * 20) + 1
  document.querySelector('.message').textContent = 'Start guessing...'
  document.querySelector('.number').textContent = '?'
  document.querySelector('.score').textContent = score
  document.querySelector('.guess').value = ''
  document.querySelector('body').style.backgroundColor = '#222'
  document.querySelector('.number').style.width = '15rem'
})
