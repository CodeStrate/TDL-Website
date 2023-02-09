const inputs = document.querySelectorAll(".input-field");
const toggle = document.querySelectorAll(".toggle");
const main = document.querySelector("main");
const themeToggle = document.querySelector(".toggle-btn");
const bullets = document.querySelectorAll(".bullets span");
const images = document.querySelectorAll(".image");
const textSlider = document.querySelector(".text-group");

inputs.forEach((input) => {
    input.addEventListener("focus", () => {
        input.classList.add("active");
    });
    input.addEventListener("blur", () => {
        if(input.value != "") return;
        input.classList.remove("active");
    }); 
});

toggle.forEach((btn) => {
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

function changeTheme(){
    if(!document.body.classList.contains("dark")) {
        document.body.classList.add("dark");
        themeToggle.classList.replace("bx-moon", "bx-sun");
    }else{
        document.body.classList.remove("dark");
        themeToggle.classList.replace("bx-sun", "bx-moon");   
    }
}

themeToggle.addEventListener("click", () => {
    changeTheme();
})