let modal = document.querySelector('#myModal');

let btn = document.querySelector('.myBtn');

let span = document.getElementsByClassName("close")[0];

let btncancel = document.querySelector('#btn-cancel');

btncancel.onclick = function() {
    modal.style.display = "none";
}

let btnokey = document.querySelector('#btn-okey');
btnokey.onclick = function() {
    modal.style.display = "none";
    alert ('Thanks!')
}

btn.onclick = function() {
  modal.style.display = "block";
  }

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
