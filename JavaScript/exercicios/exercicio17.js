const aumento = (salario, plano) => {
    let resp;
    switch (plano) {
        case 'A':
            resp = salario + (salario * 0.1)
            break;

        case 'B':
            resp = salario + (salario * 0.15)
            break;

        case 'C':
            resp = salario + (salario * 0.2)
            break;
    
        default:
            resp = 'Plano inválido'
            break;
    }
    return resp
}

console.log(aumento(1000, 'A'))
console.log(aumento(1000, 'B'))
console.log(aumento(1000, 'C'))