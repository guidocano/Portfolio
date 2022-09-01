// NEW HOME

// TITLE

const btn_title = document.getElementById('title-name');

btn_title.addEventListener('click', changeTitle)

function changeTitle() {
    let title_content = btn_title.innerHTML
    if (title_content === `<span id="title-guido">Guido Calciano</span>`) {
        btn_title.innerHTML = `<span id="new-title">Go to <i class="fa-brands fa-linkedin"></i>? <a href="https://www.linkedin.com/in/guidocalciano/" target=”_blank”>Yes</a>/<span class="btn-no">No</span></span>`
    } else {
        btn_title.innerHTML = `<span id="title-guido">Guido Calciano</span>`
    }
}

// WEB DEVELOPER SECTION

const btn_web_dev = document.getElementById('web-title');
btn_web_dev.addEventListener('click', changeWebDev);

function changeWebDev() {
    let web_content = btn_web_dev.innerHTML
    if (web_content === `<span id="web-title-content">Web Developer.</span>`) {
        btn_web_dev.innerHTML = `<span id="new-title">Go to Projects? <a href="#services">Yes</a>/<span class="btn-no">No.</span></span>`
        btn_crea.innerHTML = ""
    } else {
        btn_web_dev.innerHTML = `<span id="web-title-content">Web Developer.</span>`
        btn_crea.innerHTML = "Creative."
    }
}


// BULB BUTTON

const btn = document.getElementById('bulb-button');
const bulb = document.getElementById('bulb')

btn.addEventListener('click', changeColor)

function changeColor() {
presentColor = bulb.style.color

    if (presentColor === 'rgb(255, 252, 87)') {
        bulb.style.color = "unset"
    } else {
        bulb.style.color = "rgb(255, 252, 87)"
    }
}

// ENGLISH BUTTON

const btn_eng = document.getElementById('english-button');
let counter = 0

btn_eng.addEventListener('click', changeText)

function changeText () {
    switch (counter){
        case 0:
            btn_eng.innerHTML = "Really?"
            counter++
            break;
        case 1:
            btn_eng.innerHTML = "Yes!"
            counter++
            break;
        case 2:
            btn_eng.innerHTML = "C2 English Level"
            counter++
            break;
        default:
    }
}

// CREATIVE BUTTON
const btn_crea = document.getElementById('creative-button');
const btn_inno_text = document.getElementById('bulb-button-text');
const title = document.getElementById('title')
const cat = document.getElementById('cat-loader')
let counter_creative = 0

btn_crea.addEventListener('click', changeCreativeText)

function changeCreativeText () {


    switch (counter_creative){
        case 0:
            btn_crea.innerHTML = "Click to load ░░░░░0%"
            btn_inno_text.innerText = ""
            counter_creative++
            break;
        case 1:
            btn_crea.innerHTML = "Loading ▓░░░░20%"
            counter_creative++
            break;
        case 2:
            btn_crea.innerHTML = "Loading ▓▓░░░40%"
            counter_creative++
            break;
        case 3:
            btn_crea.innerHTML = "Loading ▓▓▓░░60%"
            counter_creative++
            break;
        case 4:
            btn_crea.innerHTML = "Loading ▓▓▓▓░80%"
            counter_creative++
            break;
        case 5:
            btn_crea.innerHTML = "Done! ▓▓▓▓▓100%"
            counter_creative++
            break;
        case 6:
            btn_crea.innerHTML = "Cat Loaded."
            cat.innerHTML = ` <i class="fa-solid fa-cat cat"></i>`
            btn_inno_text.innerText = "Innovative "
            counter_creative++
            break;
        case 7:
            btn_crea.innerHTML = "Again?"
            counter_creative++
            break;
        case 8:
            btn_crea.innerHTML = "Really?"
            counter_creative++
            break;    
        case 9:
            btn_crea.innerHTML = "Here we go."
            counter_creative++
            break;    
        case 10:
            btn_crea.innerHTML = "Cat Loaded."
            cat.innerHTML += `<i class="fa-solid fa-cat cat"></i>`
            counter_creative++
            break;
        case 11:
            btn_crea.innerHTML = "One more?"
            counter_creative++
            break;
        case 12:
            btn_crea.innerHTML = "Cat Loaded."
            cat.innerHTML += `<i class="fa-solid fa-cat cat"></i>`
            counter_creative++
            break;
        case 13:
            btn_crea.innerHTML = "Seriously?"
            counter_creative++
            break;
        case 14:
            btn_crea.innerHTML = "Cat Loaded."
            cat.innerHTML += `<i class="fa-solid fa-cat cat"></i>`
            counter_creative++
            break;
        case 15:
            btn_crea.innerHTML = "If you say so."
            counter_creative++
            break;
        case 16:
            btn_crea.innerHTML = "Cat Loaded."
            cat.innerHTML += `<i class="fa-solid fa-cat cat"></i>`
            counter_creative=16
            break;
            break;
        default:
    }
}

// ICON REACT

let btn_react = document.getElementById('icon-react');
btn_react.addEventListener('click', changeReact);

function changeReact () {
    let checkIcon = btn_react.innerHTML;
    console.log(checkIcon)
    if (checkIcon === "React.js") {
        btn_react.innerHTML = `<i class="fa-brands fa-react react"></i>`
    } else {
        btn_react.innerHTML = "React.js"
    }
}

// ICON jQuery

let btn_jquery = document.getElementById('icon-jquery');
btn_jquery.addEventListener('click', changejquery);

function changejquery () {
    let checkIcon = btn_jquery.innerHTML;
    console.log(checkIcon)
    if (checkIcon === " jQuery") {
        btn_jquery.innerHTML = ` <i class="fa-solid fa-hand-holding-dollar jquery"></i>`
    } else {
        btn_jquery.innerHTML = " jQuery"
    }
}

// ICON CSS

let btn_css = document.getElementById('icon-css');
btn_css.addEventListener('click', changecss);

function changecss () {
    let checkIcon = btn_css.innerHTML;
    console.log(checkIcon)
    if (checkIcon === " CSS") {
        btn_css.innerHTML = ` <i class="fa-brands fa-css3-alt css"></i>`
    } else {
        btn_css.innerHTML = " CSS"
    }
}

// ICON JS

let btn_js = document.getElementById('icon-js');
btn_js.addEventListener('click', changejs);

function changejs () {
    let checkIcon = btn_js.innerHTML;
    if (checkIcon === " Js") {
        btn_js.innerHTML = ` <i class="fa-brands fa-square-js js"></i>`
    } else {
        btn_js.innerHTML = " Js"
    }
}

// // ICON Python

let btn_python = document.getElementById('icon-python');
btn_python.addEventListener('click', changepython);

function changepython () {
    let checkIcon = btn_python.innerHTML;
    console.log(checkIcon)
    if (checkIcon === " Python") {
        btn_python.innerHTML = ` <i class="fa-brands fa-python python"></i>`
    } else {
        btn_python.innerHTML = " Python"
    }
}

// // ICON SQL

let btn_sql = document.getElementById('icon-sql');
btn_sql.addEventListener('click', changesql);

function changesql () {
    let checkIcon = btn_sql.innerHTML;
    console.log(checkIcon)
    if (checkIcon === " SQL") {
        btn_sql.innerHTML = ` <i class="fa-solid fa-database sql"></i>`
    } else {
        btn_sql.innerHTML = " SQL"
    }
}

// // ICON Git

let btn_git = document.getElementById('icon-git');
btn_git.addEventListener('click', changegit);

function changegit () {
    let checkIcon = btn_git.innerHTML;
    console.log(checkIcon)
    if (checkIcon === " Git") {
        btn_git.innerHTML = ` <i class="fa-brands fa-git-alt git"></i>`
    } else {
        btn_git.innerHTML = " Git"
    }
}







// FIRST VERSION

$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    
    var typed = new Typed(".typing", {
        strings: ["a Developer.", "a team player.", "creative.", "adaptable.", "a problem solver.", ""],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["a Developer."],
        typeSpeed: 200,
        loop: false
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});