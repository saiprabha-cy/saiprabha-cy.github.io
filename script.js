/* =========================================
   MOBILE NAVIGATION
========================================= */

const navToggle =
    document.getElementById("navToggle");

const navLinks =
    document.getElementById("navLinks");


if (navToggle && navLinks) {

    navToggle.addEventListener(
        "click",
        () => {

            const isOpen =
                navLinks.classList.toggle("active");

            navToggle.setAttribute(
                "aria-expanded",
                String(isOpen)
            );

            navToggle.setAttribute(
                "aria-label",
                isOpen
                    ? "Close navigation menu"
                    : "Open navigation menu"
            );

        }
    );


    const links =
        navLinks.querySelectorAll("a");


    links.forEach(
        (link) => {

            link.addEventListener(
                "click",
                () => {

                    navLinks.classList.remove(
                        "active"
                    );

                    navToggle.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                    navToggle.setAttribute(
                        "aria-label",
                        "Open navigation menu"
                    );

                }
            );

        }
    );

}


/* =========================================
   CURRENT YEAR
========================================= */

const currentYear =
    document.getElementById(
        "currentYear"
    );


if (currentYear) {

    currentYear.textContent =
        new Date().getFullYear();

}