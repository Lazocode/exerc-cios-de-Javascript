const lista = (numeros) => {

    const soma = numeros.reduce((start, valor) => start + valor, 0);

    console.log(soma);
}

lista([50, 50, 80, 56, 70]);