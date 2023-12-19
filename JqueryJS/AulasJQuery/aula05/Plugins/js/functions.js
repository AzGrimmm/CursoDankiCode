$(function(){

    //Plugin Botões social media

    $('#social-share').jsSocials({
        showLabel: true,
        showCount: false,
        shares: ["email", "twitter", "facebook", "googleplus", "linkedin", "pinterest", "stumbleupon", "whatsapp"]
    })

    //Plugin mask para formulários

    $('input[name=telefone]').mask('(99)99999-9999')
    $('input[name=data]').mask('')


    //Fancybox 

    Fancybox.bind("[data-fancybox]", {
        
      });

})