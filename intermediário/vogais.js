const contagemVogais = (texto) => {

    const vogais = 'aeiouAEIOUE';
    let contador = 0;

    for (let letra of texto){
        if (vogais.includes(letra)){
            contador++;
        }
    }

    return contador;
}

console.log(contagemVogais("MINHA CASA É TODA PRETA"));