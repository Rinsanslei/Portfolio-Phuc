const navLinks = ["Page d'accueil", "À propos de moi", "Projets"];


burgerMenu.addEventListener("click", () => {
    if (navbar.classList.contains("visible")) {
        navbar.classList.remove("visible")
        burgerMenu.src = "./medias/burger menu.svg"
    } else {
        navbar.classList.add("visible")
        burgerMenu.src = "./medias/burger menu X.svg"
    }
});

navbar.addEventListener('click', (e) => {
    if (navLinks.includes(e.target.innerText)) {
        navbar.classList.remove("visible")
        burgerMenu.src = "./medias/burger menu.svg"
    }
})