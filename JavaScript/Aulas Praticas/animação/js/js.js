var span = document.querySelector('main h1 span')
var p = document.querySelector('main p')
span.addEventListener('click',()=> {
    
if(p.classList.contains('mostrar')) {
    span.innerHTML = " ver mais!"
    p.classList.remove('mostrar')
} else {
    span.innerHTML = " ocultar"
    p.classList.add('mostrar')
}
})

