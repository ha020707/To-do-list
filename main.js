const navItems = document.querySelectorAll(".nav-link");

navItems.forEach((navItem) => {
    navItem.addEventListener("mouseover", function () {
        if (!this.classList.contains("active")) {
            this.classList.add("active");
        }
    });

    navItem.addEventListener("mouseout", function () {
        if (!this.classList.contains("current-page")) {
            this.classList.remove("active");
        }
    });
});

const currentPageLink = document.querySelector(".nav-link.active");
if (currentPageLink) {
    currentPageLink.classList.add("current-page");
}