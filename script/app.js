const linksDropdown = document.querySelectorAll('.dropdown');
const menuHb = document.querySelector('.menuhb');
const menu = document.querySelector('.header__nav')

function menuMobile () {
  menu.classList.toggle('menucliked')
  const isCliked = menu.classList.contains('menucliked')
  
  if(isCliked){
    menuHb.setAttribute('src','./images/icon-close-menu.svg')
  }else{
    menuHb.setAttribute('src','./images/icon-menu.svg')
  }
}

menuHb.addEventListener('click', menuMobile)

//    Dropdown Click
// const dropdownShow = (event) => {
//   const linkDrop = event.target.parentElement.children[1]
//   const imgLinkDrop = event.target.children[0]
   
//   linkDrop.classList.toggle('visible')

//   const isVisible = linkDrop.classList.contains('visible');
//   if (isVisible) {
//     imgLinkDrop.style.transform = 'rotate(180deg)'
//   } else {
//     imgLinkDrop.style.transform = 'rotate(0deg)'
//   }
// }


// linksDropdown.forEach((link, index) => {
//   link.addEventListener('click', dropdownShow)
// })