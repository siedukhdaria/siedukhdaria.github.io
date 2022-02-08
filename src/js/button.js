const heroBTN = document.querySelector('.hero-btn');
const linkChange = document.getElementById('link-change');
const year = document.getElementById('year');
heroBTN.addEventListener('click', function () {
    heroBTN.classList.toggle('button-change');
    linkChange.innerHTML = "New text!";
});
window.addEventListener('DOMContentLoaded', function () {
    year.innerHTML = new Date().getFullYear();
});
