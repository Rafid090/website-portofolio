/*============= menu show hidden y =============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

function setMenu(open) {
    navMenu.classList.toggle('show-menu', open)
    navToggle.setAttribute('aria-expanded', open)
}

/*======== Menu show ==========*/
/*validasi nilai*/
if(navToggle) {
    navToggle.addEventListener('click', () => setMenu(true))
}

/*==========menu hidden ===========*/
if(navClose) {
    navClose.addEventListener('click', () => setMenu(false))
}

/*========= remove menu mobile =============*/
// Saat salah satu link menu diklik, menu HP ditutup
document.querySelectorAll('.nav__link').forEach(n => n.addEventListener('click', () => setMenu(false)))

/*========= bayangan header saat digulir =============*/
const header = document.getElementById('header')
function scrollHeader() {
    header.classList.toggle('scroll-header', window.scrollY >= 50)
}
window.addEventListener('scroll', scrollHeader, { passive: true })
scrollHeader()

/*--------------------- qualification tabs ------------------------ */
const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent => {
            tabContent.classList.remove('qualification__active')
        })
        target.classList.add('qualification__active')

        tabs.forEach(t => {
            t.classList.remove('qualification__active')
            t.setAttribute('aria-selected', 'false')
        })
        tab.classList.add('qualification__active')
        tab.setAttribute('aria-selected', 'true')
    })
})

/*--------------------- slide ------------------------ */
// autoHeight: tinggi slider mengikuti slide yang tampil (deskripsi proyek panjangnya berbeda-beda)
let swiper = new Swiper('.portofolio__container', {
    autoHeight: true,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

/*--------------------- contact form ------------------------ */
// Situs statis (GitHub Pages) tidak punya server untuk mengirim email,
// jadi pesan dibuka di WhatsApp atau aplikasi email pengunjung dalam keadaan sudah terisi.
const contactForm = document.getElementById('contact-form')

if(contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault()

        const name = contactForm.elements.name.value.trim(),
              message = contactForm.elements.message.value.trim(),
              channel = e.submitter?.dataset.channel || 'whatsapp'

        if(channel === 'email') {
            const subject = `Pesan dari ${name} (website portofolio)`
            window.location.href = `mailto:${contactForm.dataset.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`
        } else {
            const text = `Halo Rafid, saya ${name}.\n\n${message}`
            window.open(`https://wa.me/${contactForm.dataset.whatsapp}?text=${encodeURIComponent(text)}`, '_blank', 'noopener')
        }
    })
}

/*--------------------- tahun di footer ------------------------ */
document.getElementById('footer-year').textContent = new Date().getFullYear()
