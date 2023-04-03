// *************************************************

// var a
// var b = 1
// let c = 2
// d = 3
// e = null
// f = Object

// console.log(typeof(a))
// console.log(typeof(b))
// console.log(typeof(c))
// console.log(typeof(d))
// console.log(typeof(e))
// console.log(typeof(f))

// *************************************************

// Diferença entre igual (==) e estritamente igual (===)
// ou diferentes (!=) e estritamente diferentes (!==)

// var a = 1
// var b = '1'

// if(a !== b){}
//     console.log('Diferentes')
// }else{}
//     console.log('Iguais')
// }

// for(i=1; i<=10;i++){
//     console.log(i)
// }
//     console.log(i)

// *************************************************

// function soma(a = 0,b = 1){
//     gravaLog()
//     if(a>=6)
//         return a
//     return a + b
// }

// function gravaLog(){
//     console.log('Valor gravado em Log   ')
// }

// x = soma(10)
// console.log(x)
// y = x + soma(5,2)
// console.log(y)

// *************************************************

// Digitando variáveis de dois valores + operação:

// a = parseInt(prompt("Insira o primeiro valor:"));
// b = parseInt(prompt("Insira o segundo valor:"));
// calculo = parseInt(prompt("Insira o número referente ao cálculo: [1] Soma [2] Subtração [3] Multiplicação [4] Divisão"));
// console.log("Primeiro valor: " +a)
// console.log("Segundo valor: " +b)
// if(calculo == 1){
//     console.log("Operação: " +calculo +" - Soma")
// }else if(calculo==2){
//     console.log("Operação: " +calculo +" - Subtração")
// }else if(calculo==3){
//     console.log("Operação: " +calculo +" - Multiplicação")
// }else if(calculo==4){
//     console.log("Operação: " +calculo +" - Divisão")
// }
// operacao(a,b,calculo)
// function operacao(a, b, calculo){
//     switch(calculo){
//         case 1:
//             console.log("Resultado: " + (a+b))
//             break
//         case 2:
//             console.log("Resultado: " + (a-b))
//             break
//         case 3:
//             console.log("Resultado: " + (a*b))
//             break
//         case 4:
//             if(b == 0){
//                 console.log(a+" não pode ser dividido por "+b)
//                 return
//             }
//             console.log("Resultado: " + (a/b))
//             break
//         default: 
//             console.log("Dígito Inválido")
//             break
//     } 
// }

// *************************************************

numero = parseInt(prompt("Insira o número:"));
tabuada(numero)
function tabuada(numero){
    for(let i = numero; i<=10; i++){
        console.log("\nTabuada de : " + numero)
        for(let cont=1; cont <=10; cont++){
            console.log(numero + " x " + cont +" = " + (numero*cont))
        }
        numero++
    }
}

// *************************************************