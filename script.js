// DARK MODE
const toggle = document.getElementById("toggle");
toggle.addEventListener("change", () => {
    document.body.classList.toggle("light");
});

// SMOOTH SCROLLING
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        document.querySelector(link.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});
