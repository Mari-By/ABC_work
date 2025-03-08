document.addEventListener("DOMContentLoaded", () => {
    const image = document.querySelector(".rotating-element");
    image.classList.add("rotate");

    setTimeout(() => {
        window.location.href = "page_13.html"; 
    }, 3000);
});
