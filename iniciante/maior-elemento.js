const max = (lista) => {

    const mValor = Math.max(...lista);

    console.log(mValor)
}

max([23, 78, 108, 45, 90]);

const otherMethod = (lista) => {

    let maior = lista[0]

    for (i = 1; i < lista.length; i++){
        if(lista[i] > maior) {
            maior = lista[i];
        }
    }

    console.log(maior)
}

otherMethod([23, 78, 98, 45, 90]);