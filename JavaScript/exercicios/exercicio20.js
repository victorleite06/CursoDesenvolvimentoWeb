const notas = cedulas => {
    let resto = cedulas
    let contCem = 0
    let contCinquenta = 0
    let contDez = 0
    let contCinco = 0
    let contUm = 0
    while(resto != 0){
        if(resto >= 100){
            contCem += 1
            resto -= 100
        }else{
            if(resto >= 50){
                contCinquenta += 1
                resto -= 50
            }else{
                if(resto >= 10){
                    contDez += 1
                    resto -= 10
                }else{
                    if(resto >= 5){
                        contCinco += 1
                        resto -= 5
                    }else{
                        if(resto >= 1){
                            contUm += 1
                            resto -= 1
                        }
                    }
                }
            }
        }
    }
    return [contCem, contCinquenta, contDez, contCinco, contUm]
}

const cedulas = notas(396)

console.log(`Notas de Cem: ${cedulas[0]}\nNotas de Cinquenta: ${cedulas[1]}\nNotas de Dez: ${cedulas[2]}\nNotas de Cinco: ${cedulas[3]}\nNotas de Um: ${cedulas[4]}`)