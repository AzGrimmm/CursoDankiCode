$(function(){
    toggle()
    function toggle(){
       $('.menu').on("click", function(){
        $('header nav').animate({
            'width':'toggle'
        },200,function(){
            $('header nav').css('display','flex')
        })
          })
}
})