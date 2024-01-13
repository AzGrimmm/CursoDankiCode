function teste(){

    return new Promise(function(resolve,reject){
        setTimeout(function(){
        var erro = true
        if(erro == true){
            reject('erro')
        } else {
            resolve('A promise foi resolvida')
        }
    },2000)
    })
}

async function teste2(){
    await teste().then(function(res){
        alert(res)
    }).catch(function(res){
        alert(res)
    })
    alert('ola')
}

teste2()