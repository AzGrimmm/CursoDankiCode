var nI = prompt('qual o primeiro número?')
var sinal = prompt('Qual o sinal da sua operação?')
while(sinal != '+' && sinal != '-' && sinal != '*' && sinal != '/' && sinal != '%' && sinal != '**') {
    alert('Por favor, digite um sinal válido!')
    sinal = prompt('Qual o sinal da sua operação?')
}
var nF = prompt('Qual o segundo número?')

nI = Number(nI)
nF = Number(nF)

if(sinal == "+") {
    res = nI + nF
} else if(sinal == "-") {
    res = nI - nF
} else if(sinal == "*") {
    res = nI * nF
} else if(sinal == "/") {
    res = nI / nF
} else if(sinal == "%") {
    res = nI % nF
} else if(sinal == "**") {
    res = nI ** nF
}

alert(res)
