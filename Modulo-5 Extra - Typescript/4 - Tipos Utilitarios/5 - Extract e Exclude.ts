//Exclude<Union Type, Excluded members>  -> SÓ FUNCIONA COM TIPOS LITERAIS

//Temos os tipos literais a,b e c, mas no excluded members, pós vírgula, excluímos o tipo literal a, sendo assim ficou b ou c
type Example1 = Exclude<'a' | 'b' | 'c', 'a'>

//----------------------------------------------------

//Extract <type,union  

//Seria ao contrário, temos o tipo literal a, b ou c, e procuramos após a vírgula se temos o tipo a ou b, se tivermos, ele cria um novo tipo com esses valores, ficando a e b
type Example2 = Extract<'a' | 'b' | 'c', 'a' | 'b'>