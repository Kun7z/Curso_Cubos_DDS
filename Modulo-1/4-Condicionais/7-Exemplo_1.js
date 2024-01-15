const tem_ingresso = true;
const censura = 16;
const idade = 18;

if (tem_ingresso === true) {
    if (idade >= censura) {
        console.log("Pode entrar");
    } else {
        console.log("Barrada pela censura.")
    }

} else {
    console.log("Barrada")
}