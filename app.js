const navslide = ()=>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navlinks = document.querySelectorAll('.nav-links li');
    //toggle nav
    burger.addEventListener('click', ()=>{
        nav.classList.toggle("nav-active");
    });
}

navslide();