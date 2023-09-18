'use strict'

/// ////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const btnCloseModal = document.querySelector('.btn--close-modal')
const btnsOpenModal = document.querySelectorAll('.btn--show-modal')

const openModal = function (e) {
  e.preventDefault()
  modal.classList.remove('hidden')
  overlay.classList.remove('hidden')
}

const closeModal = function () {
  modal.classList.add('hidden')
  overlay.classList.add('hidden')
}

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal))

// eslint-disable-next-line max-len
for (let i = 0; i < btnsOpenModal.length; i++) { btnsOpenModal[i].addEventListener('click', openModal) }

btnCloseModal.addEventListener('click', closeModal)
overlay.addEventListener('click', closeModal)

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal()
  }
})

// COURSE 186 selecting and deleting elements

// console.log(document.documentElement)
// console.log(document.head)
// console.log(document.body)

const header = document.querySelector('.header')

const allSection = document.querySelectorAll('.section')
// console.log(allSection)

document.getElementById('section--1')

const allButtons = document.getElementsByTagName('button')
// console.log(allButtons)

// console.log(document.getElementsByClassName('btn'))

// Creating and Inserting elements
// .insertAdjacentHTML

const message = document.createElement('div')
message.classList.add('cookie-message')
// message.textContent =
// 'We use cookies for improved functionalities and analytics'
message.innerHTML =
// eslint-disable-next-line max-len
'We use cookies for improved functionalities and analytics. <button class="btn btn--close-cookie">Got it!</button> '

header.prepend(message) // rajoute l'elem en premier element du header
header.append(message) // rajoute en dernier elem

// header.append(message.cloneNode(true)) // permet de rajouter l'elem aux deux positions en
// clonant l'elem

// header.before(message) // place l'elem avant ou apres le header
// header.after(message)

// Delete Elements
document.querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove() // quand on clique sur l'elem on le remove
  })

// COURSE 187 Styles attributes and Classes

// Style
message.style.backgroundColor = '#37383d'
message.style.width = '110%'

console.log(getComputedStyle(message).height) // cette methode permet d'accéder a la valeur
// d'un attribut css telle qu'elle est représentée sur la page sans qu'elle ait été forcément
// été écrite manuellement (ici on a jamais défini manuellement la height mais il y a focement
// une hauteur à l'élem et on peut la voir comme ça)

message.style.height = Number
  .parseFloat(getComputedStyle(message).height, 10) + 30 + 'px'
// ici on ajoute 40 px à la height de base de l'elem, le parseFloat permet de faire l'opération
// sachant que l'on a une string et qu'on veut extraire le number (parse)

document.documentElement.style
  .setProperty('--color-primary', 'orangered') // dans le CSS on a un root element qui contient
  // des variables de style qu'on peut réutiliser, ici on le selectionne puis dans setProperty
  // en 1er arg on selectionne la variable a modifier puis en 2 la modification

// Attributes
// src, alt, class, id sont des attributes

const logo = document.querySelector('.nav__logo')
console.log(logo.src) // donne la source absolue
console.log(logo.getAttribute('src')) // donne la source relative interne
console.log(logo.className) // on utilise className et pas juste class

// Non-standard attributes
// pour les non standard on utilise logo.getAttribute

// set un attribute
logo.alt = 'Nice logo'
logo.setAttribute('company', 'Bankist') // non standard, on utilise setAttribute

const link = document.querySelector('.twitter-link')
console.log(link.href)

// data attributes
console.log(logo.dataset.versionNumber) // quand on a un attribut de type data on utilise dataset
// et ce qui suit en camelCase meme si on utilisait un - en css

// Classes
// logo.classList.add(), remove, toggle, contains
