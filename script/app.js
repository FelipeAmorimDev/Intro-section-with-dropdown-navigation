const linksDropdown = document.querySelectorAll('.dropdown');
const menuBtn = document.querySelector('.menuhb');
const navMenu = document.querySelector('.header__nav')

function menuMobile() {
  const isCliked = navMenu.classList.toggle('menucliked')
  if (isCliked) {
    menuBtn.setAttribute('src', './images/icon-close-menu.svg')
  } else {
    menuBtn.setAttribute('src', './images/icon-menu.svg')
  }
}

//    Dropdown Click
const dropdownShow = ({ target }) => {
  console.log(target)
  const dropdownElement = target.parentElement.children[1]
  const arrowIcon = target.children[0]
  const isDropElement = target.classList.contains('drop')

  if (isDropElement) {
    if (navMenu.classList.contains('menucliked')) {
      dropdownElement.classList.toggle('visible')
    }
    const isVisible = dropdownElement.classList.contains('visible');

    arrowIcon.classList.toggle("arrowcliked")
  }
}

// Close dropdown when the user click out of dropdown
window.onclick = (event) => {
  const dropdownsOpened = document.querySelectorAll('.visible')
  const isDropdown = event.target.matches('.drop');
  const isDropLink = event.target.matches('a');
  if (!isDropdown) {
    if(!isDropLink){
      dropdownsOpened.forEach(dropdown => {
        const arrowElement = dropdown.parentElement.children[0].children[0]
        dropdown.classList.remove('visible')
        arrowElement.classList.toggle("arrowcliked")
      })
    }
   
  }
}

menuBtn.addEventListener('click', menuMobile)
linksDropdown.forEach((item) => {
  item.addEventListener('click', dropdownShow)
})