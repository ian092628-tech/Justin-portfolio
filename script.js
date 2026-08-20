// ===============================
// MOBILE MENU
// ===============================

const menuBtn = document.getElementById("menuBtn");

const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});


// ===============================
// CLOSE MENU AFTER CLICKING LINK
// ===============================

document.querySelectorAll(".nav-links a").forEach(function(link) {

    link.addEventListener("click", function() {

        navLinks.classList.remove("active");

    });

});


// ===============================
// NAVBAR SCROLL EFFECT
// ===============================

const header = document.querySelector("header");

window.addEventListener("scroll", function() {

    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});


// ===============================
// SCROLL ANIMATION
// ===============================

const observer = new IntersectionObserver(

    function(entries) {

        entries.forEach(function(entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.15
    }

);


// Add reveal animation to cards

document
    .querySelectorAll(
        ".skill-card, .project-card, .timeline-item, .experience-card"
    )
    .forEach(function(element) {

        element.classList.add("reveal");

        observer.observe(element);

    });


// ===============================
// CURRENT YEAR
// ===============================

document.getElementById("year").textContent =
    new Date().getFullYear();