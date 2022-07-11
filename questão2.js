var x = 0
var y = 1
var resultado;
let numeroEscolhido = 57;
let resposta = 'não faz parte'


while (x <= numeroEscolhido) {
    console.log(x)
    if (x === numeroEscolhido) {
        resposta = 'faz parte'
        break;
    }
    resultado = x + y
    x = y
    y = resultado
}

console.log(resposta)