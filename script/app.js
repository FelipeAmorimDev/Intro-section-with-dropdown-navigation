const linksDropdown = document.querySelectorAll('.dropdown');
const menuHb = document.querySelector('.menuhb');
const menu = document.querySelector('.header__nav')
const seta = document.querySelectorAll('.dropdown > a > img')

function menuMobile() {
  menu.classList.toggle('menucliked')
  const isCliked = menu.classList.contains('menucliked')

  if (isCliked) {
    menuHb.setAttribute('src', './images/icon-close-menu.svg')
    linksDropdown.forEach((item) => {
      item.addEventListener('click', dropdownShow)
    })
  } else {
    menuHb.setAttribute('src', './images/icon-menu.svg')
  }
}

//    Dropdown Click
const dropdownShow = (event) => {
  event.stopPropagation()
  const linkDrop = event.target.parentElement.children[1]
  const imgLinkDrop = event.target.children[0]

  if (menu.classList.contains('menucliked')) {
    linkDrop.classList.toggle('visible')
  }

  const isVisible = linkDrop.classList.contains('visible');
  if (isVisible) {
    imgLinkDrop.style.transform = 'rotate(180deg)'
  } else {
    imgLinkDrop.style.transform = 'rotate(0deg)'
  }
}

document.addEventListener('click', (event) => {
  if (!(event.target.parentElement.classList[0] === 'header__nav-item')) {
    linksDropdown.forEach(element => {
      element.children[1].classList.remove('visible')
    })
    seta.forEach(element => {
      element.style.transform = 'rotate(0deg)'
    })
  }
})

menuHb.addEventListener('click', menuMobile)