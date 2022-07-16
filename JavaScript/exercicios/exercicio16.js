const calculador = (num1, operador, num2) => {
    let resp;
    switch (operador) {
        case '+':
            resp = num1 + num2
            break;

        case '-':
            resp = num1 - num2
            break;

        case '*':
            resp = num1 * num2
            break;

        case '/':
            resp = num1 / num2
            break;
    
        default:
            resp = 'Opção inválida'
            break;
    }
    return resp
}

console.log(calculador(1, '+', 2))
console.log(calculador(1, '-', 2))
console.log(calculador(1, '*', 2))
console.log(calculador(1, '/', 2))
console.log(calculador(1, '%', 2))