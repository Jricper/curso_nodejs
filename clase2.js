var num1 = 1;
var num2 = 3;
var resul = num1 + num2;
let numero1 = 3;
let numero2 = 2;
let resultado = numero1 + numero2;
let arreglo = [1,2,3,4,5];
let objeto = {
    att:`hola mundo`,
    att2: `hola mundo 2`
}
console.log(arreglo, objeto);
arreglo = objeto;
console.log(arreglo);
console.log(`Resultado var: ${JSON.stringify(objeto)}, Resultado let: ${resultado}`)

process.argv.forEach((value, index)=>{
    console.log(`indice: ${index}, value: ${value}`);
})

for(let i=0; i<process.argv.length; i++){
    console.log(`indice: ${i}, value: ${process.argv[i]}`);
}

let funcion = (param1, param2)=>
    param1 + param2;

console.log(`funcion: ${funcion(6,5)}`);