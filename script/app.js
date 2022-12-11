const linksDropdown = document.querySelectorAll('.dropdown');
const menuBtn = document.querySelector('.menuhb');
const navMenu = document.querySelector('.header__nav')
const linksMenu = document.querySelectorAll('.header__wrapper a:not(.drop)')

function menuMobile() {
  navMenu.classList.toggle('menucliked')
  menuAppearance()
}

function closeMenu() {
  const isMenuOpened = navMenu.classList.contains("menucliked")
  if (isMenuOpened) {
    navMenu.classList.remove('menucliked')
    menuAppearance()
  }
}

function menuAppearance() {
  const isCliked = navMenu.classList.contains('menucliked')
  if (isCliked) {
    menuBtn.setAttribute('src', './images/icon-close-menu.svg')
    menuBtn.style.transform = 'rotate(180deg)'
    document.body.style.overflowY = 'hidden'
  } else {
    menuBtn.setAttribute('src', './images/icon-menu.svg')
    menuBtn.style.transform = 'rotate(-180deg)'
    document.body.style.overflowY = 'visible'
  }
}

//    Dropdown Click
const dropdownShow = (event) => {
  const dropdownElement = event.target.parentElement.children[1]
  const arrowIcon = event.target.children[0]
  const isDropElement = event.target.classList.contains('drop')

  if (isDropElement) {
    if (navMenu.classList.contains('menucliked')) {
      event.preventDefault();
      dropdownElement.classList.toggle('visible')
      arrowIcon.classList.toggle("arrowcliked")
    }
  }
}

// Close dropdown when the user click out of dropdown
window.onclick = (event) => {
  const dropdownsOpened = document.querySelectorAll('.visible')
  const isDropdown = event.target.matches('.drop');
  const isDropLink = event.target.matches('a'); // adicionado para impedir de minimizar o dropdown caso fosse clicado em alguns dos seus link internos
  if (!isDropdown) {
    dropdownsOpened.forEach(dropdown => {
      const arrowElement = dropdown.parentElement.children[0].children[0]
      dropdown.classList.remove('visible')
      arrowElement.classList.toggle("arrowcliked")
    })
  }
}

menuBtn.addEventListener('click', menuMobile)
linksDropdown.forEach((item) => {
  item.addEventListener('click', dropdownShow)
})

linksMenu.forEach(link => {
  link.addEventListener('click', closeMenu)
})