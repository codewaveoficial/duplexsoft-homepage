const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("show");
});

const header = document.getElementById("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav a[href^='#']");

function setActiveLink() {
  let scrollY = window.pageYOffset + 120;

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute("id");

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${sectionId}`) {
          link.classList.add("active");
        }
      });
    }
  });
}

window.addEventListener("scroll", setActiveLink);

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
  });
});

document.querySelectorAll('[data-cta="whatsapp-float"]').forEach(btn => {
    btn.addEventListener('click', () => {

      // Log básico (debug)
      console.log('CTA WhatsApp clicado');

      // Google Analytics 4
      if (typeof gtag === 'function') {
        gtag('event', 'click_whatsapp', {
          event_category: 'CTA',
          event_label: 'WhatsApp Flutuante'
        });
      }

      // Meta Pixel (Facebook)
      if (typeof fbq === 'function') {
        fbq('track', 'Contact', {
          content_name: 'WhatsApp Flutuante'
        });
      }

    });
  });


