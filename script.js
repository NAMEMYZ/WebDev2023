document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("menu");

    // Add click event listener to the menu toggle
    menuToggle.addEventListener("click", function () {
        menu.classList.toggle("active");
    });

    // Add smooth scrolling to menu links
    const menuItems = document.querySelectorAll(".menu li a");

    menuItems.forEach(function (menuItem) {
        menuItem.addEventListener("click", function (event) {
            event.preventDefault();

            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: "smooth",
                });

                // Close the menu if it's open on smaller screens
                if (menu.classList.contains("active")) {
                    menu.classList.remove("active");
                }
            }
        });
    });
});

