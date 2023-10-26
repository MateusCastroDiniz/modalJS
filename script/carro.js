/*
var alunos = [
    [5,5,6,5],
    [7,7,7,8],
    [9,8,9,7]
];

var nota = 0;
for (var i = 0; i < alunos.length; i++){
    nota = 0;
    aluno = alunos[i];
    nome = ("Aluno" + i);
    
    for (var x = 0; x < aluno.length; x++){
        nota += aluno[x];
    };

    media = nota/4;

    if (media >= 7){
        resultado = "Aprovado(a)"
    }else{
        resultado = "Reprovado(a)"
    };

    console.log("O " +nome+ " foi " +resultado+ " por atingir média " +media+ " nas disciplinas.");
};

function CalcMedia(notas){
    let soma = 0;
    for (b=0; b < notas.length; b++){
        soma += notas[b];
    };

    media = soma / notas.length
    return media
}

function verificar(Nome , notas){

    let media = CalcMedia(notas);

    let condicao = media >=7 ? "aprovado" : "reprovado";

    return console.log("O (A) aluno(a) " + Nome+ " foi " +condicao+ " com media final: " +media)
}

console.log(verificar("Mateus Diniz", [8, 8, 1]));
*/


var branco = "preto";
var preto = "cinza";
var cinza = "branco";
var carro = "preto";
var valor = 30000;
var prestacao = 750;

var cavalo = carro == "preto" ? "cinza" : "marrom";
/*
var parcelas = 0

function conta(valor, entrada, parcela){
    num_parcelas = (valor - entrada)/parcela
    console.log(num_parcelas)
}

conta(valor, 3000, 750);
*/

var lista = branco+preto+cinza
console.log(lista.length)
