document.querySelector('.burger').addEventListener('click', () => {
    const navLinks = document.querySelector('.nav-bar-links');
    const burger = document.querySelector('.burger');
    navLinks.classList.toggle('show');
    burger.classList.toggle('toggle');
});
