

// Navigation Bar on small screens
const showMenu = () => {
    const toggle = document.getElementById('nav-toggle');
    const nav = document.getElementById('nav_menu');

        toggle.addEventListener('click', () => {
            nav.classList.toggle('show-menu')
        })
}
showMenu()


// Remove the mobile view when a nav link is clicked
const navLink = document.querySelectorAll('.nav_link')

const linkAction = () => {
    const nav = document.getElementById('nav_menu')

    nav.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))




const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset
    // console.log(scrollY)

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight
        const sectionTop = section.offsetTop - 50
        sectionId = section.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else{
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}

window.addEventListener('scroll', scrollActive)



// Change the background Header

function scrollHeader(){
    const nav = document.getElementById('header')

    if(this.scrollY >= 200) nav.classList.add('scroll-header');
    else nav.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);


// Show scroll top

function scrollTop(){
    const scrollTop = document.getElementById('scroll-top')

    if(this.scrollY >= 560) scrollTop.classList.add('show-scroll');
    else scrollTop.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollTop)


// Dark Mode

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'

themeButton.addEventListener('click', () => {

    document.body.classList.toggle(darkTheme)

})


// // 

const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 1000,
    reset: true
});

sr.reveal(`.home_data, .home_img,
           .about_data, .about_img,
           .services_content, .menu_content,
           .app_data, .app_img,
           .contact_data, .contact_button,
           .footer_content`, {
    interval: 200
})