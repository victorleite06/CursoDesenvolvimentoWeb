const mediaPonderada = (...notas) => {
    let posMaior = 0
    let soma = 0
    const pesoN = ((3 * (notas.length - 1)) + 4)
    for(let i = 1; i < notas.length; i++){
        if(notas[posMaior] < notas[i]){
            posMaior = i
        }
    }

    for(let i = 0; i < notas.length; i++){
        if(i == posMaior){
            soma += (4 * notas[posMaior])
        }else{
            soma += (3 * notas[i])
        }
    }

    return soma / pesoN
}

if(mediaPonderada(2, 3, 8, 5, 6, 7) >= 5){
    console.log('Aprovado')
}else{
    console.log('Reprovado')
}