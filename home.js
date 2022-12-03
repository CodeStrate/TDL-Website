const header = document.querySelector("header");

const ml_section = document.querySelector(".milestones");
const ml_counters = document.querySelectorAll(".number span");

window.addEventListener("scroll", () => {
   if(!mlPlayed) mlCounter(); 
});

function updateCount(num, maxNum){
    let currentNum = +num.innerText;

    if(currentNum < maxNum){
        num.innerText = currentNum + 1;
        setTimeout(() => {
            updateCount(num, maxNum);
        }, 6);
    }
}

// --------------------- Sticky Navbar --------------------------

function stickyNavbar(){
    header.classList.toggle("scrolled", window.pageYOffset > 0);
}

stickyNavbar();

window.addEventListener("scroll", stickyNavbar);



// --------------------- Scroll Reveal --------------------------

let sr = ScrollReveal({
    duration: 2500,
    distance: "60px",
});

sr.reveal(".showcase-info", {delay: 600});
sr.reveal(".showcase-image", {origin:"top", delay: 700});

// --------------------------- Progress Counter Animation ------------------------------

let mlPlayed = false;

function hasReached(el){
    let topPosition = el.getBoundingClientRect().top;

    if(window.innerHeight >= topPosition + el.offsetHeight) return true;
    return false;
}

function mlCounter(){
    if(!hasReached(ml_section)) return;
    mlPlayed = true;
    ml_counters.forEach((ctr) => {
        let target = +ctr.dataset.target;

        setTimeout(() => {
            updateCount(ctr, target);
        }, 1000);
    });
}