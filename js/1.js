const principio= document.querySelector('.principio');
window.addEventListener('scroll',function(){
    principio.classList.toggle('active', window.scrollY >0)
})