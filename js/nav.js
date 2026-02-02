function openNav() {
  document.querySelector('#mySidenav').style.width = "250px"; 
  document.querySelector('.all-over-bkg').classList.add('is-visible');
}

function closeNav() {
  document.querySelector('#mySidenav').style.width = "0"; 
  document.querySelector('.all-over-bkg').classList.remove('is-visible');
}
function openPopup(id) {
    document.getElementById(id).style.display = "flex";
}

function closePopup(id) {
    document.getElementById(id).style.display = "none";
}

document.querySelector('.openbtn').addEventListener('click', openNav);
document.querySelector('.closebtn').addEventListener('click', closeNav);