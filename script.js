const sidebar = document.querySelector('body .sidebar')
const menu = document.querySelector('.sidebar .menu')

menu.addEventListener('click', () => {
    sidebar.classList.toggle('show')
})