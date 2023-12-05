// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Get the hamburger element that opens the modal
var menubar = document.getElementById("barmenu");

// When the user clicks on the button, open the modal
barmenu.onclick = function () {
  barmenu.classList.toggle("change");
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  barmenu.classList.toggle("change");
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    barmenu.classList.toggle("change");
    modal.style.display = "none";
  }
}
/* JAI REUSSI LE 5 DECEMBRE A 17h05 à écrire/modifier un code qui me permet de changer le hamburger menu en croix quand la modale s'ouvre et à le refermer si on clique sur la croix ou ailleurs ou a nouveau sur le bouton YOUPIIIIIIIIII */
