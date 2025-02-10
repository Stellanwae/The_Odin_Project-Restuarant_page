import "./style.css";

const tabButtons = document.querySelectorAll('.tab-btn')
const tabContent = document.getElementById('content')

const home = document.createElement('div')
home.id="home"
home.classList.add('active')
home.classList.add('tab-page')
const menu = document.createElement('div')
menu.id = "menu"
menu.classList.add('tab-page')
const contact = document.createElement('div')
contact.id = "contact"
contact.classList.add('tab-page')

home.innerHTML = `
    <h1>Home</h1>
    <p>Welcome to our restaurant</p> `
menu.innerHTML = `
    <h1>Menu</h1>
    <p>Our menu is coming soon</p> `
contact.innerHTML = `
    <h1>Contact</h1>
    <p>You can contact us here </p>`

tabContent.appendChild(home)
tabContent.appendChild(menu)
tabContent.appendChild(contact)

let tabPage = document.querySelectorAll('.tab-page')
tabButtons.forEach((button) =>{
    button.addEventListener('click', function (){
        tabButtons.forEach(btn =>{
            btn.classList.remove('active')
        })
        tabPage.forEach(page =>{
            page.classList.remove('active')
        })
        this.classList.add('active')
        const activePage = document.getElementById(this.dataset.tab)
        activePage.classList.add('active')
    })
})