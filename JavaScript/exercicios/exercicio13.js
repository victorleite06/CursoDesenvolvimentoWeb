const diaDeSemana = dia => {
    let resp = (dia - 1) % 7
    switch (resp) {
        case 0:
            resp = 'Domingo'
            break;

        case 1:
            resp = 'Segunda'
            break;

        case 2:
            resp = 'Terça'
            break;

        case 3:
            resp = 'Quarta'
            break;

        case 4:
            resp = 'Quinta'
            break;

        case 5:
            resp = 'Sexta'
            break;

        case 6:
            resp = 'Sabado'
            break;
    
        default:
            resp = 'Data inválida'
            break;
    }
    return resp
}

console.log(diaDeSemana(3))