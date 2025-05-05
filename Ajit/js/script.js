// Scroll effects to smooth scroll to sections from navbar
document.querySelectorAll('nav ul li a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});


// Scroll effects to smooth scroll 'Learn More'
document.querySelectorAll('a').forEach(anchor => {
  if (anchor.getAttribute('href') === 'https://www.linkedin.com/in/ajit-yadav-48a8151b2' || anchor.getAttribute('href') === 'ajity3584@gmail.com') return;

  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});


// Dropdown Feature
document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".accordion-btn");

  buttons.forEach((btn) => {
    btn.addEventListener("click", function () {
      const content = this.nextElementSibling;
      const isOpen = content.style.maxHeight;

      // Close all others
      document.querySelectorAll(".accordion-content").forEach((el) => {
        el.style.maxHeight = null;
      });

      // Toggle current
      if (!isOpen) {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  });
});


// Active links
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

const options = {
  threshold: 0.6
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${id}`) {
          link.classList.add('active');
        }
      });
    }
  });
}, options);

sections.forEach(section => {
  observer.observe(section);
});


// Dynamic Header opacity on scroll
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});


// Toggle Dropdown Rotation
document.querySelectorAll('.accordion-btn').forEach(button => {
    button.addEventListener('click', () => {
        button.classList.toggle('active');
    });
});
