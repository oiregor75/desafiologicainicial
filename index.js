// ## 
// 1 Desafio Classificador de nível de Herói
// **O Que deve ser utilizado**
// - Variáveis
// - Operadores
// - Laços de repetição
// - Estruturas de decisões
// ## Objetivo
// Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:
// Se XP for menor do que 1.000 = Ferro
// Se XP for entre 1.001 e 2.000 = Bronze
// Se XP for entre 2.001 e 5.000 = Prata
// Se XP for entre 5.001 e 7.000 = Ouro
// Se XP for entre 7.001 e 8.000 = Platina
// Se XP for entre 8.001 e 9.000 = Ascendente
// Se XP for entre 9.001 e 10.000= Imortal
// Se XP for maior ou igual a 10.001 = Radiante
// ## Saída
// Ao final deve se exibir uma mensagem:
// "O Herói de nome **{nome}** está no nível de **{nivel}**"
// ##

console.log("iai tio felipao");

let heroi = "Batima";
let XPpower = 6555;
if (XPpower <= 1000) { nivel = "Ferro"}
else if (XPpower <= 2000) { nivel = "Bronze"}
else if (XPpower <= 5000) { nivel = "Prata"}
else if (XPpower <= 6000) { nivel = "Ouro"}
else if (XPpower <= 7000) { nivel = "Platina"}
else if (XPpower <= 8000) { nivel = "Ascendente"}
else if (XPpower <= 9000) { nivel = "Imortal"}
else { nivel = "Radiante"};

console.log("O Herói de nome " + heroi + " está no nível " + nivel)

