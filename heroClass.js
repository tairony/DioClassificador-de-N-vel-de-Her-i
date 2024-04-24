//Classificador de Nível de Herói ⚔️

// Guardar o nome e XP do herói
let nome = "Larapio";
let xp = 8500;

// Função para determinar o nível do herói ✨
function determinarNivel(xp) {
  if (xp < 1000) {
    return "Ferro";
  } else if (xp < 2001) {
    return "Bronze";
  } else if (xp < 5001) {
    return "Prata";
  } else if (xp < 7001) {
    return "Ouro";
  } else if (xp < 8001) {
    return "Platina";
  } else if (xp < 9001) {
    return "Ascendente";
  } else if (xp < 10001) {
    return "Imortal";
  } else {
    return "Radiante";
  }
}

// Determinar o nível do herói
let nivel = determinarNivel(xp);

// Exibir a mensagem final
console.log("O Herói de nome" + " " +"é " + nome  + " " +" e ele está no nível" + " " + nivel);
