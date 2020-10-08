const input = document.querySelector('.input')
const button = document.querySelector('.button')
const warning = document.querySelector('.warning')
const overlay = document.querySelector('.overlay')
const closeBtn = document.querySelector('.close')
var mediaquery = window.matchMedia('(max-width: 700px)')

let itsOk = () => {
  console.log('es válido')
  input.style.borderColor = '#c2d3ff'
  warning.style.display = 'none'
  input.value = ''
  overlay.style.display = 'flex'
}
let error = () => {
  console.log('es inválido')
  input.style.borderColor = '#ff5263'
  warning.style.display = 'block'
}

button.addEventListener('click', () => {
  console.log(input.value)
  let isValid = /\S+@\S+\.\S+/
  if (input.value.match(isValid)) {
    itsOk()
    if (mediaquery.matches) {
      button.style.marginTop = '0'
    }
  } else {
    error()
    if (mediaquery.matches) {
      // button.style.marginTop = '40px'
    }
  }
})

closeBtn.addEventListener('click', () => {
  overlay.style.display = 'none'
})


