/* =========================================
   MOBILE NAVIGATION
========================================= */

const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");


if (navToggle && navLinks) {

    navToggle.addEventListener("click", () => {

        const isOpen =
            navLinks.classList.toggle("active");

        navToggle.setAttribute(
            "aria-expanded",
            isOpen
        );

    });


    const links =
        navLinks.querySelectorAll("a");


    links.forEach((link) => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

            navToggle.setAttribute(
                "aria-expanded",
                "false"
            );

        });

    });

}


/* =========================================
   CURRENT YEAR
========================================= */

const currentYear =
    document.getElementById("currentYear");


if (currentYear) {

    currentYear.textContent =
        new Date().getFullYear();

}