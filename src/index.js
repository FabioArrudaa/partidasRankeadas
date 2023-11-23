//Variável para guardar o nível do personagem em escopo global.
let nivel = "";
//Função para checar a quantidade líquida de vitórias
function checkResult(wins, losers) {
  return wins - losers;
}
let result = checkResult(100, 53);

//Estrutura condicional para verificar o nível do personagem
if (result <= 10) {
  nivel = "Ferro";
} else if (result <= 20) {
  nivel = "Bronze";
} else if (result <= 50) {
  nivel = "Prata";
} else if (result <= 80) {
  nivel = "Ouro";
} else if (result <= 100) {
  nivel = "Lendário";
} else if (result >= 101) {
  nivel = "Imortal";
}

console.log(
  `O Herói tem saldo líquido de ${result} vitórias e está no nível de ${nivel}`
);
