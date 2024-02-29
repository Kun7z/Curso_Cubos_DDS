const date = new Date();
console.log(date)  // 2024-02-27T20:01:11.930Z

const dateOntem = new Date('2024-02-26T20:01:11.930Z')  // alterado de 27 para 26, para ser o mesmo dia mas ontem.
console.log(dateOntem)  // 2024-02-26T20:01:11.930Z

/* Não recomendado porque nem todo navegador suporta, e porque o comportamento não é padrão*/