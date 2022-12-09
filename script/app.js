const linksDropdown = document.querySelectorAll('.dropdown');

const dropdownShow = (event) => {


  const linkDrop = event.target.parentElement.children[1]
  const imgLinkDrop = event.target.children[0]
   
  linkDrop.classList.toggle('visible')
  
  const isVisible = linkDrop.classList.contains('visible');
  if (isVisible) {
    imgLinkDrop.style.transform = 'rotate(180deg)'
  } else {
    imgLinkDrop.style.transform = 'rotate(0deg)'
  }

}


linksDropdown.forEach((link, index) => {
  link.addEventListener('click', dropdownShow)
})