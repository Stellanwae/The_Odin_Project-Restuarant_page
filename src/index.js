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
    <div class="opacity-bg">
        <h1>Welcome to Flavor Haven</h1>
        <p>Experience the best cuisine in town, made with fresh ingredients and passion.</p>
        <p>Join us for a delightful dining experience that satisfies your taste buds.</p>
    </div>`
menu.innerHTML = `
    <div class="opacity-bg">
        <h1>Our Menu</h1>
        <h2>Starters</h2>
        <ul>
        <li>Garlic Bread - $5.99</li>
        <li>Bruschetta - $7.99</li>
        <li>Caesar Salad - $6.99</li>
        </ul>
        <h2>Main Courses</h2>
        <ul>
        <li>Grilled Steak - $19.99</li>
        <li>Seafood Pasta - $17.99</li>
        <li>Vegetable Stir Fry - $14.99</li>
        </ul>
        <h2>Desserts</h2>
        <ul>
        <li>Chocolate Lava Cake - $8.99</li>
        <li>Cheesecake - $7.99</li>
        <li>Ice Cream Sundae - $6.99</li>
        </ul>
    </div>`
contact.innerHTML = `
    <div class="opacity-bg">
        <h1>Contact Us</h1>
        <p>We’d love to hear from you! Get in touch with us for reservations or inquiries.</p>
        <h2>📍 Location</h2>
        <p>123 Flavor Street, Foodie City, FC 45678</p>
        <h2>☎️ Phone</h2>
        <p>(123) 456-7890</p>
        <h2>📧 Email</h2>
        <p>contact@flavorhaven.com</p>
        <h2>🕒 Opening Hours</h2>
        <ul>
        <li>Monday - Friday: 10:00 AM - 10:00 PM</li>
        <li>Saturday - Sunday: 11:00 AM - 11:00 PM</li>
        </ul>
    </div>  `

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