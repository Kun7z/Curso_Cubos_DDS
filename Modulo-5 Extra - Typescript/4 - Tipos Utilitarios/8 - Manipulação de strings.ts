//Só aceitam tipoos literais

//Uppercase<literalType>

type TipoTransacao = 'credito' | 'debito';

type TipoTransacaoUpper = Uppercase<TipoTransacao>;  //Manipula tudo em maiúsculo

const nome: TipoTransacaoUpper = 'CREDITO';  //só aceita tipo literal maiúsculo

const nome2: TipoTransacao = 'credito'  //só aceita como colocado no type.

//Lowercase<literalType>

type tipoTransacaoLower = Lowercase<TipoTransacao>;

const nome3: tipoTransacaoLower = 'credito';  //só aceita minúsculo