// show menu
const navMenu = document.getElementById("nav-menu");
const closeBtn = document.getElementById("nav-close");
const toggleBtn = document.getElementById("nav-toggle");


if (closeBtn) {
    closeBtn.addEventListener("click", ()=> {
        navMenu.classList.remove("show-menu")
    })
}
if (toggleBtn) {
    toggleBtn.addEventListener("click", ()=> {
        navMenu.classList.add("show-menu")
    })
}

// ===== nav link =====
const navLink = document.querySelectorAll(".nav-link")
const activeLink = ()=> {
    navMenu.classList.remove("show-menu")
}

navLink.forEach(e=> e.addEventListener("click", activeLink))

// ======header shadow=======
const shadowheader = ()=> {
    const header = document.getElementById("header");
    this.scrollY >= 50 ? header.classList.add("shadow-header") : header.classList.remove("shadow-header")
}
window.addEventListener("scroll", shadowheader)
// ===== swiper =====
const swiperPopular = new Swiper('.swiper', {
    loop: true,
    grabCursor: true,
    slidesPerView: 'auto',
    centeredSlides: 'auto',
  });

//===== scroll active =====

const scrollActive = ()=> {
    const sections = document.querySelectorAll("section[id]")
    const scrollDown = window.scrollY;

    sections.forEach(section=> {
        const sectionHeight = section.offsetHeight,
        sectionTop = section.offsetTop - 58,
        sectionId = section.id,
        sectionClass = document.querySelector(`.nav-menu a[href='#${sectionId}']`)

        if (scrollDown > sectionTop && scrollDown <= sectionHeight + sectionTop) {
            sectionClass.classList.add("active-link")
        } else {
            sectionClass.classList.remove("active-link")
        }
    })

}

window.addEventListener("scroll", scrollActive)

// ============= scroll reveal ===============
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 300,
})

sr.reveal(".home-data, .popular-container, .footer")
sr.reveal(".home-board", {delay: 700, distance: '100px', origin: 'right'})
sr.reveal(".home-pizza", {delay: 1400, distance: '100px', origin: 'bottom', rotate: {z:-90}})
sr.reveal(".home-ingredient", {interval: 250, delay: 2000})
sr.reveal(".about-data, .recipe-list, .contact-data", {origin: "right"})
sr.reveal(".about-image, .recipe-image, .contact-image", {origin: "left"})
sr.reveal(".products-card", {interval: 200})