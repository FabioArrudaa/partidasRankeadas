//Teste!! Ainda em estudo, tentando uma segunda maneira de resolver o problema

//Variável para guardo o nível do personagem em escopo global.
let nivel = "ola";

function checkResult(wins, losers) {
  return wins - losers;
}

let result = checkResult(100, 53);
console.log(result);

function checkWins(nivel) {
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
}
let nivelTwo = checkWins();

console.log(result, nivelTwo);
