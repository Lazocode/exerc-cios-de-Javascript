//Exercício de fatorial recursivo

//função sem o meio recursivo
const fatorial = (value) => {
    let resultado = 1;
    let mult = 1;

    while (resultado < value) {
        mult *= value + 1 - resultado;
        resultado++;
    }

    return mult;
}

console.log(fatorial(4));


//função com o meio recursivo
