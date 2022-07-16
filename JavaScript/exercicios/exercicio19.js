const nota = (codigo, quantidade) => {
    let resp
    switch (codigo) {
        case 100:
            resp = quantidade * 3
            break;

        case 200:
            resp = quantidade * 4
            break;

        case 300:
            resp = quantidade * 5.5
            break;

        case 400:
            resp = quantidade * 7.5
            break;

        case 500:
            resp = quantidade * 3.5
            break;

        case 600:
            resp = quantidade * 2.8
            break;
    
        default:
            resp = 'Produto não existente'
            break;
    }
    return resp
}

console.log(nota(100, 3))
console.log(nota(200, 3))
console.log(nota(300, 3))
console.log(nota(400, 3))
console.log(nota(500, 3))
console.log(nota(600, 3))
console.log(nota(700, 3))