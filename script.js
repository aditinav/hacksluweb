
// Scroll to sections smoothly
document.querySelectorAll("nav a").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        target.scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Alert when a project is clicked
document.querySelectorAll(".project a").forEach(link => {
    link.addEventListener("click", () => {
        alert("You are about to view this project!");
    });
});

