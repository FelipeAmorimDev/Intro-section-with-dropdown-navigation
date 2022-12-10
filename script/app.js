const linksDropdown = document.querySelectorAll('.dropdown');
const menuHb = document.querySelector('.menuhb');
const menu = document.querySelector('.header__nav')
const seta = document.querySelectorAll('.dropdown > a > img')

function menuMobile() {
  menu.classList.toggle('menucliked')
  const isCliked = menu.classList.contains('menucliked')
  if (isCliked) {
    menuHb.setAttribute('src', './images/icon-close-menu.svg')
    } else {
    menuHb.setAttribute('src', './images/icon-menu.svg')
  }
}

//    Dropdown Click
const dropdownShow = (event) => {
 
  const linkDrop = event.target.parentElement.children[1]
  const imgLinkDrop = event.target.children[0]
  const isDropElement = event.target.classList.contains('drop')

  if (isDropElement) {
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
}

window.onclick = (event) => {
  const dropsVisible = document.querySelectorAll('.visible')
  if (!(event.target.matches('.drop'))) {
    dropsVisible.forEach(element => {
      const isVisible = element.classList.contains('visible');
      if (isVisible) {
        const arrowElement = element.parentElement.children[0].children[0]
        element.classList.remove('visible')
        arrowElement.style.transform = 'rotate(0deg)'
      }
    })

  }
}

menuHb.addEventListener('click', menuMobile)

linksDropdown.forEach((item) => {
  item.addEventListener('click', dropdownShow)
})