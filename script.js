document.addEventListener("DOMContentLoaded", () => {

    const navToggle = document.getElementById("navToggle");
    const primaryNav = document.getElementById("primaryNav");

    /*
     * Mobile navigation
     */
    if (navToggle && primaryNav) {

        navToggle.addEventListener("click", () => {

            const isOpen =
                primaryNav.classList.toggle("open");

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

        });


        /*
         * Close mobile menu after selecting a section
         */
        primaryNav
            .querySelectorAll("a")
            .forEach((link) => {

                link.addEventListener("click", () => {

                    primaryNav.classList.remove("open");

                    navToggle.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                    navToggle.setAttribute(
                        "aria-label",
                        "Open navigation menu"
                    );

                });

            });


        /*
         * Close menu when Escape is pressed
         */
        document.addEventListener("keydown", (event) => {

            if (
                event.key === "Escape" &&
                primaryNav.classList.contains("open")
            ) {

                primaryNav.classList.remove("open");

                navToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

                navToggle.setAttribute(
                    "aria-label",
                    "Open navigation menu"
                );

                navToggle.focus();

            }

        });

    }


    /*
     * Current year
     */
    const currentYear =
        document.getElementById("currentYear");

    if (currentYear) {
        currentYear.textContent =
            new Date().getFullYear();
    }


    /*
     * External links:
     * mark links that leave the portfolio.
     *
     * The visible arrow is already present where
     * appropriate, so this only adds semantic metadata.
     */
    document
        .querySelectorAll('a[target="_blank"]')
        .forEach((link) => {

            link.setAttribute(
                "rel",
                "noopener noreferrer"
            );

            link.setAttribute(
                "data-external",
                "true"
            );

        });

});