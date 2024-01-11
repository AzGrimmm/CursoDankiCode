var lastIndex = 0

var imagens = document.querySelectorAll('img')

imagens.forEach((item, index) => {
    var bullets = document.querySelectorAll('.bullet-single')[index]
    bullets.addEventListener('click', () => {
        var lastImage = imagens[lastIndex]
        var actualImage = imagens[index]
        var lastbullet = document.querySelectorAll('.bullet-single')[lastIndex]
        var actualBullet = document.querySelectorAll('.bullet-single')[index]

        lastbullet.classList.remove('active-bullet')
        actualBullet.classList.add('active-bullet')


        lastImage.style.opacity = 0
        actualImage.style.opacity = 1

        lastIndex = index

    })



})