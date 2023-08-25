'use strict'

// SELECTING ELEMENTS

const player0El = document.querySelector('.player--0')
const player1El = document.querySelector('.player--1')
const score0El = document.querySelector('#score--0')
const score1El = document.getElementById('score--1') // pareil que le premier mais pour les ID (supposé etre plus rapide que le premier // bonne pratique)
const curScore0El = document.getElementById('current--0')
const curScore1El = document.getElementById('current--1')
const diceEl = document.querySelector('.dice')
const btnNew = document.querySelector('.btn--new')
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')

const setCurrentScore = function () {
  document.getElementById(`current--${activePlayer}`).textContent = curScore
}

const switchPlayers = function () {
  player0El.classList.toggle('player--active') // player active contient le css qui fait changer l'apparence du coté du player.
  player1El.classList.toggle('player--active') // voir notion pour explication sur toggle.
  activePlayer = activePlayer === 0 ? 1 : 0 // si le player est 0 le nouveau est 1 et vice versa.
}

// SETTING START

score0El.textContent = 0
score1El.textContent = 0
diceEl.classList.add('hidden')

const scores = [0, 0]
let curScore = 0
let activePlayer = 0
let playing = true // pour s'assurer qu'on ne peut plus toucher le jeu a la fin.

// ROLLING DICE

btnRoll.addEventListener('click', function () {
  if (playing) {
  // 1) Generate Dice Roll
    const dice = Math.trunc(Math.random() * 6) + 1

    // 2) Display Dice
    diceEl.classList.remove('hidden')
    diceEl.src = `dice-${dice}.png`

    // 3) check for a 1 if true switch to next else add roll to score

    if (dice !== 1) {
      curScore += dice
      setCurrentScore()
    } else { // change player
      curScore = 0
      setCurrentScore()
      switchPlayers()
    }
  }
})

// HOLDING SCORE

btnHold.addEventListener('click', function () {
  if (playing) {
  // 1) add current score to total
    scores[activePlayer] += curScore
    document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer]

    // 2) check if score >= 100 if yes win else switch

    if (scores[activePlayer] >= 20) {
      playing = false
      document.querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner')
      document.querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active')
      diceEl.classList.add('hidden')
    } else {
      curScore = 0
      setCurrentScore()
      switchPlayers()
    }
  }
})
