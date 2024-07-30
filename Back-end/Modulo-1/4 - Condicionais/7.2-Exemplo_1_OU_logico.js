const tem_ingresso = true;
const censura = 16;
const idade = 18;
const com_pais = true;

if (tem_ingresso == true) {
    if (idade >= censura || com_pais == true) {
        console.log("Pode entrar")
    } else {
        console.log("Barrada.")

    }
} else {
    console.log("Barrada")
}