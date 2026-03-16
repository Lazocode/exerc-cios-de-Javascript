// Função para contar vogais
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


//Função usando split, filter e includes
const contagemVogaisAtualizada = (texto) => {
    let vogais = "aeiouAEIOU";

    return texto
    .split("")
    .filter(letra => vogais.includes(letra)).length;
}

console.log(contagemVogaisAtualizada("MINHA CASA É TODA PRETA"));
