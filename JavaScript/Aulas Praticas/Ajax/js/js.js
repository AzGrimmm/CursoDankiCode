var request  = new XMLHttpRequest()
request
.open('GET','https://jsonplaceholder.typicode.com/todos/1',true)

request
.onload = function(){
    if(this.status >= 200 && this.status < 400){
        //request foi feita com sucesso!
        var data = JSON.parse(this.response)
        console.log(data)
    }else {
        //erro
    }
    
}

request.onerror = function(){
    
}

request.send()

//ou

fetch('https://jsonplaceholder.typicode.com/posts',{
    method:'POST',
    body: JSON.stringify({
        title:'Danki Code',
        body: 'Meu conteudo',
        userId: 10
    }),
    headers:{
        'content-type':'application/json; charset=UTF=8'
    }
}).then(response=> response.json()).then(json=>console.log(json))
