var lastIndex = 0

var imagens = document.querySelectorAll(".container img")

imagens.forEach(function(item,index){
    document.querySelectorAll('.bullet-single')[index].addEventListener('click',()=>{
        let lastImage = imagens[lastIndex]
        let actualImage = imagens[index]
        var lastBullet = document.querySelectorAll('.bullet-single')[lastIndex]
        var actualBullet = document.querySelectorAll('.bullet-single')[index]

        lastBullet.classList.remove('active-bullet')
        actualBullet.classList.add('active-bullet')

        lastImage.style.opacity = 0
        actualImage.style.opacity = 1

        lastIndex = index
    })

})
