// REMOVER DUPLICATAS

// Função usando Set()
const removerDuplicatas = (texto) => {
    const removerDup = [...new Set(texto)];

    return removerDup;
}

console.log(removerDuplicatas([1,2,2,3,4,5,5,5,5,6,4]))

// Função usando For() (Melhor para entender a lógica por trás)
const otherRemoverDuplicatas = (texto) => {
    const removerDup = [];

    for (let letra of texto) {
        if (!removerDup.includes(letra)) {
            removerDup.push(letra)
        }
    }

    return removerDup;
}

console.log(otherRemoverDuplicatas([1,1,1,1,2,22,2,22,44,44,44,55,66,66]));

// Função usando Filter()

const removerDupFilter = (texto) => {

    const removerDupFilter = texto.filter((item, index) => {return texto.indexOf(item) === index});

    return removerDupFilter;
}

console.log(removerDupFilter([2,2,2,2,22,33,4,55,4,77,7,77]));
