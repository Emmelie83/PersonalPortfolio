function toggleDescription() {
    const toggleButtons = document.querySelectorAll(".more-text");

    toggleButtons.forEach(button => {
        button.addEventListener("click", () => {
            const description = button.nextElementSibling;
            description.classList.toggle("hidden");
            button.textContent = description.classList.contains("hidden") ? "Read more ..." : "Collapse";
        });
    });
}

document.addEventListener("DOMContentLoaded", toggleDescription);