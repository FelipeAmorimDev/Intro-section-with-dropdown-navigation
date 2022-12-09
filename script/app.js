const linksDropdown = document.querySelectorAll('.dropdown');

const dropdownShow = (event) => {
  const linkDrop = event.target.parentElement.children[1]
  const imgLinkDrop = event.target.children[0]
  linkDrop.classList.toggle('visible')
  if (linkDrop.classList.contains('visible')) {
    imgLinkDrop.style.transform = 'rotate(180deg)'
  } else {
    imgLinkDrop.style.transform = 'rotate(0deg)'
  }

}


linksDropdown.forEach((link, index) => {
  link.addEventListener('click', dropdownShow)
})