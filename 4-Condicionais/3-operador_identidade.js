let identico = 18 === 18;  //identico

console.log(identico);

identico = 18 === "18";  //não é identico, 18 tipo number, não é igual a 18 string

console.log(identico);

identico = 18 !== "18";  //Lê-se 18 number não é identico a 18 string, logo, True.

console.log(identico);