const tipoDoTriangulo = (lado1, lado2, lado3) => {
    if(lado1 == lado2 && lado1 == lado3){
        console.log('Equilátero')
    } else {
        if((lado1 == lado2 && lado1 != lado3) || (lado1 == lado3 && lado1 != lado2) || (lado3 == lado2 && lado1 != lado3)){
            console.log('Isósceles')
        } else {
            if(lado1 != lado2 && lado1 != lado3 && lado2 != lado3){
                console.log('Escaleno')
            }
        }
    }
}

tipoDoTriangulo(2,1,3)