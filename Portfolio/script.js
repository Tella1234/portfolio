function myFunction(x) {
    x.classList.toggle("change");
}
document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelector('.nav-menu').addEventListener('click', () => {
        document.querySelector('body').classList.toggle('toggled');
    })
})