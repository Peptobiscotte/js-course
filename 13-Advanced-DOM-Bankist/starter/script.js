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

// console.log(getComputedStyle(message).height) // cette methode permet d'accéder a la valeur
// d'un attribut css telle qu'elle est représentée sur la page sans qu'elle ait été forcément
// été écrite manuellement (ici on a jamais défini manuellement la height mais il y a focement
// une hauteur à l'élem et on peut la voir comme ça)

message.style.height = Number
  .parseFloat(getComputedStyle(message).height, 10) + 30 + 'px'
// ici on ajoute 40 px à la height de base de l'elem, le parseFloat permet de faire l'opération
// sachant que l'on a une string et qu'on veut extraire le number (parse)

document.documentElement.style
  .setProperty('--color-primary', 'rgba(235, 200, 52, 0.8)') // dans le CSS on a un root element qui contient
  // des variables de style qu'on peut réutiliser, ici on le selectionne puis dans setProperty
  // en 1er arg on selectionne la variable a modifier puis en 2 la modification

// Attributes
// src, alt, class, id sont des attributes

const logo = document.querySelector('.nav__logo')
// console.log(logo.src) // donne la source absolue
// console.log(logo.getAttribute('src')) // donne la source relative interne
// console.log(logo.className) // on utilise className et pas juste class

// Non-standard attributes
// pour les non standard on utilise logo.getAttribute

// set un attribute
logo.alt = 'Nice logo'
logo.setAttribute('company', 'Bankist') // non standard, on utilise setAttribute

const link = document.querySelector('.twitter-link')
// console.log(link.href)

// data attributes
// console.log(logo.dataset.versionNumber) // quand on a un attribut de type data on utilise dataset
// et ce qui suit en camelCase meme si on utilisait un - en css

// Classes
// logo.classList.add(), remove, toggle, contains

// COURSE 188 smooth scrolling

const btnScrollTo = document.querySelector('.btn--scroll-to')
const section1 = document.getElementById('section--1')

btnScrollTo.addEventListener('click', function (e) {
  // on commence par trouver la position de l'elem section1 dans la page, .getBoundingClientRect()
  // donne toutes les infos qu'on pourra utiliser. (x,y,width,height,...) sous forme d'objet.
  const s1coords = section1.getBoundingClientRect()
  // mais ces info sont relatives au viewport pas a la taille reelle de la page

  // scrolling
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset) // comme c'est un objet on utilise s1coords.left
  // et .top, les deux premiers arguments a rentrer sont la pos left et top, comme on a
  // uniquement la position relative au viewport on rajoute aussi de combien on a scroll
  // (s1coords.top (= du début de la section au haut du viewport) + window.pageYOffSet
  // (= du top du viewport au top de la page))

  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth'
  // })

  section1.scrollIntoView({
    behavior: 'smooth'
  })
})

// COURSE 189 types of event and event handlers

// const h1 = document.querySelector('h1')
// const alertH1 = function (e) { // mouseHover pour JS
//   alert('addEventListener: TITRE')

//   h1.removeEventListener('mouseenter', alertH1) // quand l'event a eu lieu 1 fois, il ne peut plus
//   // se declencher car la fonction remove l'event a la fin.
// }

// h1.addEventListener('mouseenter', alertH1)

// h1.onmouseenter = function (e) {
//   alert('addEventListener: TITRE')
// } // old school way

// on peut ajouter plusieurs arguments d'écoute a addeventlistener.

// on peut aussi remove l'eventListener apres un timer ex :
// setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 5000)

// COURSE 190 Bubbling and capturing
// revoir la vidéo // mais comprendre qu'un event a lieu dans un elem précis mais bubble depuis
// cet elem vers tout ses parents

// COURSE 191 Propagation(bubbling) in practice
// create random color

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min)

// eslint-disable-next-line max-len
const randomColor = () => `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`

document.querySelector('.nav__link').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor()

  // Stop propagation
  // e.stopPropagation() // empeche simplement la propagation
})

document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor()
})

document.querySelector('.nav').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor()
}) // si on rajoute tue en troisième argument de l'event listener, l'event attend les event dans
// l'ordre opposé (plus du bubbling mais la capturing phase cette fois) rarement utilisé.
