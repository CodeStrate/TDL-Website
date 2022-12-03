const inputs = document.querySelectorAll(".input-field");
const toggle_btn = document.querySelectorAll(".toggle");
const main = document.querySelector("main");
const bullets = document.querySelectorAll(".bullets span");
const images = document.querySelectorAll(".image");
const textSlider = document.querySelector(".text-group");
const themeToggle = document.querySelector(".theme-toggle");

inputs.forEach((input) => {
    input.addEventListener("focus", () => {
        input.classList.add("active");
    });
    input.addEventListener("blur", () => {
        if(input.value != "") return;
        input.classList.remove("active");
    }); 
});

toggle_btn.forEach((btn) => {
    btn.addEventListener("click", () => {
        main.classList.toggle("sign-up-mode");
    });
});

function moveSlider(){
    let index = this.dataset.value; // data-value of bullets

    let currentImage = document.querySelector(`.img-${index}`);

    images.forEach((image) => image.classList.remove("show"));
    currentImage.classList.add("show");

    textSlider.style.transform = `translateY(${-(index - 1) * 2.2}rem)` // `` is for interpolation

    bullets.forEach((bullet) => bullet.classList.remove("active"));
    this.classList.add("active");
}

bullets.forEach((bullet) => {
    bullet.addEventListener("click", moveSlider);
});

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle('dark');
    themeToggle.querySelector('i:nth-child(1)').classList.toggle('active');
    themeToggle.querySelector('i:nth-child(2)').classList.toggle('active');
});