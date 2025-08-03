let mobileMenuBtn = document.querySelector('#mobileMenuBtn');
let mobileMenu = document.querySelector('#mobileMenu');
let menuIcon = document.querySelector('i');

mobileMenuBtn.addEventListener('click', ()=>{
    if(mobileMenu.classList.contains('hidden')){
        mobileMenu.classList.remove('hidden')
        menuIcon.classList.replace('fa-bars', 'fa-times')
    }
    else{
        mobileMenu.classList.add('hidden')
        menuIcon.classList.replace('fa-times', 'fa-bars')
    }
    console.log("clicked");
})

document.querySelectorAll('#mobileMenu a').forEach((link)=>{
    link.addEventListener('click', ()=>{
        mobileMenu.classList.add('hidden');
        menuIcon.classList.replace('fa-times', 'fa-bars')
    })
})