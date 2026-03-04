// ===== MENU TOGGLE =====
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

if(menuIcon){
    menuIcon.onclick = () => {
        navbar.classList.toggle("active");
    };
}

// ===== CLOSE MENU WHEN LINK CLICK =====
document.querySelectorAll(".navbar a").forEach(link => {
    link.addEventListener("click", () => {
        navbar.classList.remove("active");
    });
});


// ===== ACTIVE NAV LINK ON SCROLL =====
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll(".navbar a");

window.onscroll = () => {

    let top = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if(top >= offset && top < offset + height){
            navLinks.forEach(link => {
                link.classList.remove("active");
                document.querySelector(".navbar a[href*=" + id + "]")
                .classList.add("active");
            });
        }
    });

    // ===== HEADER SHADOW ON SCROLL =====
    let header = document.querySelector(".header");
    header.classList.toggle("sticky", window.scrollY > 100);
};
