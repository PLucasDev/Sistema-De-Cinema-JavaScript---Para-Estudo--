//Somar elementos de um array

// let num1 = [10,40,60,70,80,20] ; // total é 280
// let total = 0

// let notas = [5,9,2,4] ;
// let soma = 0 ;

// for (i=0;i<notas.length; i++) {
//     soma = soma + notas[i] ;
// }

// let media = soma /notas.length

// for (i=0;i<num1.length; i++) {
//      total = total + num1[i]
// }

// console.log(media)

//////////////////////////////////////////////

// let num1 = [1,2,3,4,5,6,7,8,9,10];
// let menorQueCinco = 0 ;
// let maiorQueCinco = 0 ;

// for (i = 0; i < num1.length; i++) {

//     if (num1[i] <= 5) {

//          menorQueCinco++
//      } else {

//          maiorQueCinco++
//      }
// }

// console.log(menorQueCinco);
// console.log(maiorQueCinco);

//////////////////////////////////////////////////

// let num1 = [-5,-4,-3,9,1] ;

// for (i=0;i<num1.length; i++) {
//     if (num1[i] > 0) {
//         console.log("Este numero é positivo")
//     } else {
//         console.log("este numero é negativo")
//     }
// }

/////////////////////////////////////////////////////

// let num1 = [-5,-4,-3,9,1] ;

// let numPositivo = 0;
// let numNegativo = 0

// for (i=0;i<num1.length;i++) {
//     if (num1[i] > 0 ) {
//      numPositivo = numPositivo + num1[i]
//     } else if (num1[i] < 0) {
//      numNegativo++ 
//     }
// }

// console.log(`A quantidade de numero positovos é ${numPositivo}`)
// console.log(`A quantidade de numero negativos é ${numNegativo}`)

/////////////////////////////////////////////////////////////

//let numeros = [10, 40, -20, -70, 80, 30, -90, 23, 1451, -1000];

// let maiorNumero = 0
// for ( i=0; i<numeros.length; i++) {
//     let numero = numeros[i]
//     if (numero > maiorNumero) {
//         maiorNumero = numero
//     }
// }

// console.log(maiorNumero)

////////////////////////////////////////////////////////////

// Soma dos numeros positivos = 100
// Quantidade de numeros negativos = 5
// Maior numero = 40
let numeros = [10, 40, -20, -70, 30, 10, -90, 10, -10, -1000]; 

let soma = 0 ;
let numsNegativos = 0 ;
let maiorNumero = 0 ;

for (i=0; i<numeros.length; i++) {
    if (numeros[i] >= 0) {
        soma = soma + numeros[i]
    } else if (numeros[i] < 0) {
        numsNegativos++
    }
    let numero = numeros[i]
    if (numero > maiorNumero) {
        maiorNumero = numero
    }
}

console.log(soma);
console.log(numsNegativos);
console.log(maiorNumero);