AOS.init({
    offset: 200,
    duration: 600,
    easing: 'linear',
    delay: 100,
    once: true
});

let menuOpen = document.querySelector(".menu-open");
let menuclose = document.querySelector(".burger-close-btn");
let menu = document.querySelector(".burger-menu");
let burgerOpen = document.querySelector(".burger-open");
let menuText = document.querySelectorAll("a");

menuOpen.onclick = () => {
    menu.style.display = "flex";
    burgerOpen.animate(
        [{ transform: "translateX(100%)" }, { transform: "translateX(0%)" }],
        {
            fill: "forwards",
            duration: 500,
        }
    );
    if (menu.style.background = "none") {
        menu.style.background = "rgba(0, 0, 0, 0.45)";
    }
}

menuclose.onclick = () => {
    menu.style.background = "none";
    burgerOpen.animate(
        [{ transform: "translateX(0%)" }, { transform: "translateX(100%)" }], {
        fill: "forwards",
        duration: 500,
    },
    );
    setTimeout(() => (menu.style.display = "none"), 1000);
}

for (let i = 0; i < menuText.length; i++) {
    menuText[i].onclick = () => {
        burgerOpen.animate(
            [{ transform: "translateX(0%)" }, { transform: "translateX(100%)" }], {
            fill: "forwards",
            duration: 500,
        },
        );
        setTimeout(() => (menu.style.display = "none"), 500);
    }
}

const swiper = new Swiper('.swiper', {
    slidesPerView: 'auto',
    speed: 1000,
});

gsap.registerPlugin(ScrollTrigger);

const boxes = gsap.utils.toArray('.box');

const sections = document.querySelectorAll('.slide-text')
const headings = document.querySelectorAll('.slide-content')

headings.forEach((heading, i) => {
    gsap.fromTo(heading,
        { opacity: 0 },
        {
            opacity: 1,
            scrollTrigger: {
                trigger: sections[i],
                scrub: 0.5,
                start: 'top center',
                end: 'center bottom',
            },
        })
})

boxes.forEach(box => {
    gsap.to(box, {
        x: -200,
        transition: 0.3,
        ease: "elastic",
        scrollTrigger: {
            trigger: box,
            scrub: 0.1,
        }
    })

    gsap.to(box, {
        x: 200,
        scale: 0.7,
        scrollTrigger: {
            trigger: box,
            start: 'center center',
            end: 'bottom top',
            scrub: 0.2,
        }
    });

    gsap.timeline({
        scrollTrigger: {
            trigger: ".scroll-animation",
            start: "top 50%",
            end: () =>
                "+=" + (window.innerHeight * boxes.length - window.innerHeight - window.innerHeight),
            pin: true,
            scrub: true,
        }
    });
});


let marqueeMail = document.querySelectorAll(".marquee-mail")
let marquee = document.querySelector(".marquee-inner")

for (let i = 0; i < marqueeMail.length; i++) {
    marqueeMail[i].onmouseover = () => {
        marquee.style.animationPlayState = 'paused';
    }
    marqueeMail[i].onmouseout = () => {
        marquee.style.animationPlayState = 'running';
    }
}

let follower = $(".cursor-follower");

let posX = 0,
    posY = 0;

let mouseX = 0,
    mouseY = 0;

TweenMax.to({}, 0.005, {
    repeat: -1,
    onRepeat: function () {
        posX += (mouseX - posX) / 9;
        posY += (mouseY - posY) / 9;

        TweenMax.set(follower, {
            css: {
                left: posX - 12,
                top: posY - 12
            }
        });
    }
});

document.addEventListener("mousemove", function (e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

$(".swiper-slide").hover(function () {
    $(".cursor-follower").addClass('drag');
});
$(".swiper-slide").mouseleave(function () {
    $(".cursor-follower").removeClass('drag')
});
$(".a-btn, .num-p, .exit, .active-slide, .logo-text-p, .img-hover, .slide-content2").hover(function () {
    $(".cursor-follower").removeClass('drag')
    $(".cursor-follower").addClass('active');
});
$(".a-btn, .num-p, .exit, .active-slide, .logo-text-p, .img-hover, .slide-content2").mouseleave(function () {
    $(".cursor-follower").addClass('drag')
    $(".cursor-follower").removeClass('active');
});