'use strict'

// on commence par store dans des variables les requetes HTML
const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const btnCloseModal = document.querySelector('.close-modal')
const btnShowModal = document.querySelectorAll('.show-modal') // on a plusieurs
// elements avec la meme classe donc on utilise qSelectorAll sinon JS n'en
// sélectionne qu'un seul.
// on voit que c'est une sorte d'array donc pour les modifier on va utiliser des loop

const closeModal = function () {
  modal.classList.add('hidden')
  overlay.classList.add('hidden') // plutot que de repeter 3 fois l'operation de cacher la modal window et l'overlay, on crée une fonction qui fait ça et on la met en argument de addEventListener.
}

const openModal = function () {
  modal.classList.remove('hidden')
  overlay.classList.remove('hidden')
}

for (let i = 0; i < btnShowModal.length; i++) {
  btnShowModal[i].addEventListener('click', openModal)
}

btnCloseModal.addEventListener('click', closeModal) // pas de () apres la function
overlay.addEventListener('click', closeModal) // a le meme effet de masquer quand on clique autour de la fenetre

// savoir qu'on fait beaucoup de manipulation de classes en JS pour modifier
// l'apparence d'une page web.

document.addEventListener('keydown', function (e) { // (e) est l'event de pressage de key
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) { // si on console.log(e) on voit l'objet créé lors de l'event
    closeModal() // on peut alors accéder a toutes ses propriétés notamment ici son nom
  }
})
