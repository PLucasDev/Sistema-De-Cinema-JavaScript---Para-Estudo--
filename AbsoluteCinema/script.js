const readlineSync = require('readline-sync');

let filmes = [
    {   nome: "• Arcane", nota: "10/10",
        horarios: {
            horario1: "10:00",
            horario2: "11:00",
            horario3: "12:00"
        }},
    //
    {   nome: "• Dr House", nota: "7,9",
        horarios: {
            horario1: "10:00",
            horario2: "11:00",
            horario3: "12:00"
        }},
    //
    {   nome: "• The Walking Dead", nota: "8,9",
        horarios: {
            horario1: "13:00",
            horario2: "14:00",
            horario3: "15:00"
        }},
    //
    {   nome: "• Robo Selvagem", nota: "9,0",
        horarios: {
            horario1: "16:00",
            horario2: "17:00",
            horario3: "18:00"
        }}
]

let pergunta = readlineSync.question("Selecione um dos filmes que deseja assistir ");

const filmeSelecionado = filmes.find(filme => filme.nome.includes(pergunta));

if (filmeSelecionado) {
    console.log(`Horarios Disponiveis para ${filmeSelecionado.nome}`);
    console.log(filmeSelecionado.horarios.horario1);
    console.log(filmeSelecionado.horarios.horario2);
    console.log(filmeSelecionado.horarios.horario3);
} else {console.log ("Filme não encontrado, tente novamente")}


//  filmes.forEach((filmes) => {
//     console.log(`O filme que você selecionou foi ${pergunta} com nota ${filmes.nota}`)
// }) //Mostra os itens do array

 

