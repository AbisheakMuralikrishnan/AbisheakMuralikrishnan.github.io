document.addEventListener("DOMContentLoaded", function () {
    // Select elements
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-links li a");
    const skillBoxes = document.querySelectorAll(".skill-box");
    const projectCards = document.querySelectorAll(".project-card");
    const roleText = document.querySelector(".highlightrole");
    const educationGrid = document.querySelector(".education-grid");
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");

    // Highlight Active Link in Navbar
    function changeActiveLink() {
        let current = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href").includes(current)) {
                link.classList.add("active");
            }
        });
    }

    // Reveal Elements on Scroll
    function revealElements(elements) {
        elements.forEach((element, index) => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementTop < windowHeight - 100) {
                setTimeout(() => {
                    element.classList.add("visible");
                }, index * 150); // Staggered effect (150ms delay per item)
            }
        });
    }

    // Scroll Event for Animations
    function onScroll() {
        changeActiveLink();

        if (roleText && roleText.getBoundingClientRect().top < window.innerHeight - 100) {
            roleText.classList.add("visible");
        }
        if (educationGrid && educationGrid.getBoundingClientRect().top < window.innerHeight - 100) {
            educationGrid.classList.add("visible");
        }

        revealElements(skillBoxes);
        revealElements(projectCards);

        // Show Scroll-to-Top Button
        if (window.scrollY > 500) { // Adjust the threshold here
            scrollToTopBtn.style.display = "flex";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    }

    // Scroll-to-Top Button Functionality
    scrollToTopBtn.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    // Attach Scroll Event
    window.addEventListener("scroll", onScroll);
    onScroll(); // Run once on page load
});
