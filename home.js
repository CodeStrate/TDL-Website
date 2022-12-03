const header = document.querySelector("header");

const ml_section = document.querySelector(".milestones");
const ml_counters = document.querySelectorAll(".number span");

const links = document.querySelectorAll(".nav-link");
const toggle_btn = document.querySelector(".toggle-btn");

window.addEventListener("scroll", () => {
    // activeLink();
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

// --------------------- Course Filter MixItUp Animation --------------------------

let mixer = mixitup(".course-gallery", {
    selectors: {
        target: '.course-card'
    },
    animation: {
        duration: 500
    }
});

// --------------------- Testimonial Swiper Animation --------------------------

const swiper = new Swiper('.swiper', {
    loop: true,
    speed: 500,
    autoplay: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

// --------------------- Change Active link --------------------------

// function activeLink(){
//     let sections = document.querySelectorAll("section[id]");
//     let passedSections = Array.from(sections).map((sct, i) => {
    //         return {
//             y: sct.getBoundingClientRect().top - header.offsetHeight,
//             id: i,
//         };
//     }).filter(sct => sct <= 0);

//     let currentSectionID = passedSections.at(-1).id;

//     links.forEach((link) => link.classList.remove("active"));
//     links[currentSectionID].classList.add("active");
// }


// --------------------- Change Page Theme --------------------------

function changeTheme(){
    if(!document.body.classList.contains("dark")) {
        document.body.classList.add("dark");
        toggle_btn.classList.replace("bx-moon", "bx-sun");
    }else{
        document.body.classList.remove("dark");
        toggle_btn.classList.replace("bx-sun", "bx-moon");   
    }
}

toggle_btn.addEventListener("click", () => {
    changeTheme();
})