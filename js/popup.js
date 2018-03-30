var button = document.querySelector(".modal-search-button");

var popup = document.querySelector(".modal-search");

var form = popup.querySelector("form");

var modal = popup.querySelector("[type=text]");

var arrival = popup.querySelector("[type=text]");
var departure = popup.querySelector("[type=text]");
var adults = popup.querySelector("[type=number]");
var children = popup.querySelector("[type=number]");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("arrival");
  localStorage.getItem("departure");
  localStorage.getItem("adults");
  localStorage.getItem("children");
} catch (err) {
  isStorageSupport = false;
}

popup.classList.add('modal-hide');

button.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.toggle("modal-hide");
  popup.classList.remove("modal-error");
  modal.focus();

});

form.addEventListener("submit", function (evt) {
  if (!arrival.value || !departure.value || !adults.value || !children.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  }
  else {
    if (isStorageSupport) {
      localStorage.setItem("arrival", arrival.value);
      localStorage.setItem("departure", departure.value);
      localStorage.setItem("adults", adults.value);
      localStorage.setItem("children", children.value);
    }
  }
});
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();


    popup.classList.remove("modal-show");
    popup.classList.add("modal-hide");
  }
});
