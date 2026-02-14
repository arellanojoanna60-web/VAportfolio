// Initialize AOS
AOS.init();

// Typing Effect
const words = ["a Virtual Assistant", "a Social Media Manager", "a Web Support Specialist"];
let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;

function type() {
    currentWord = words[i];
    const typingElement = document.querySelector(".typing");

    if (!isDeleting) {
        typingElement.textContent = currentWord.slice(0, ++j);
        if (j === currentWord.length) {
            isDeleting = true;
            setTimeout(type, 1500);
            return;
        }
    } else {
        typingElement.textContent = currentWord.slice(0, --j);
        if (j === 0) {
            isDeleting = false;
            i = (i + 1) % words.length;
        }
    }

    setTimeout(type, isDeleting ? 50 : 100);
}

type();

// Testimonials Auto Slide
let testimonialIndex = 0;
const testimonials = document.querySelectorAll(".testimonial");

setInterval(() => {
    testimonials[testimonialIndex].classList.remove("active");
    testimonialIndex = (testimonialIndex + 1) % testimonials.length;
    testimonials[testimonialIndex].classList.add("active");
}, 4000);

// Dark Mode
document.getElementById("darkModeToggle").addEventListener("click", () => {
    document.body.classList.toggle("dark-section");
});
