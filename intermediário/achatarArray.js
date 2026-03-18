//ACHATAR ARRAY

//Função com flat()
const achatarArray = (value) => {
    
    return value.flat();
}

console.log(achatarArray([1,2,[23],4,5,[35]]));

//Função usando Lógica
const achatarArrayLogic = (value) => {
    const list = [];

    for(letra of value) {
        if(Array.isArray(letra)) {
            for(pedaco of letra) {
            list.push(pedaco);
            }
        }
        else {
            list.push(letra);
        }
    }

    return list;

}
console.log(achatarArrayLogic([22,34,54,[7,8],8,[90],[2]]));