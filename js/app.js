document.addEventListener('DOMContentLoaded',function(){
    iniciarApp ();
});

function iniciarApp(){
menuDes();
menuClose();
};

function menuDes(){
    const desMenu = document.querySelector(".img__menu");
    desMenu.addEventListener("click",function(){
    const nav = document.querySelector(".nav__principal");
    nav.classList.add('visible');
    
    });
};

function menuClose(){
    const close = document.querySelector(".img__close2");
    close.addEventListener("click", function(){
        const nav2 = document.querySelector(".nav__principal");
        nav2.classList.remove('visible');
    })
}
