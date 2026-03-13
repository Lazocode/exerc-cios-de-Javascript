const calculo = () => {

    for (let i = 0; i < 10; i++) {

        let num = Math.floor(Math.random() * 100);

        if (num % 2 === 0) {
        console.log(`O número ${num} é par`);
        }
        else {
        console.log(`O número ${num} é impar`);
        }
    }
}

calculo();