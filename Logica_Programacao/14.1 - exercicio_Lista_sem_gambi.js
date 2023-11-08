const listanumero = [34, 56, 768, 8, 81, 3, 6, 12, 10000, 750]
let resultado = 0;
let numeroguardado;



for (const numero2 of listanumero) {
    if (numeroguardado === undefined) {
        numeroguardado = numero2;

    } else {
        if (numeroguardado > numero2) {
            numeroguardado = numero2;
        }

    }
}

console.log("O menor número da lista é: ", numeroguardado);