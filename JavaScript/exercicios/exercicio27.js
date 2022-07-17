const alturasCriancas = (idades, crescimentoAnual) => {
    let criancaMenor = [idades[0], crescimentoAnual[0]]
    let criancaMaior = [idades[1], crescimentoAnual[1]]
    if(criancaMenor[0] > criancaMaior[0]){
        let aux = criancaMenor
        criancaMenor = criancaMaior
        criancaMaior = aux
    }
    let resp
    if(criancaMenor[1] > criancaMaior[1]){
        let cont = 0
        while(criancaMenor[0] <= criancaMaior[0]){
            criancaMenor[0] += criancaMenor[1]
            criancaMaior[0] += criancaMaior[1]
            cont++
        }
        resp = `A menor criança passará a maior depois de ${cont} anos`
    }else{
        resp = 'Não irá passar'
    }
    return resp
}

console.log(alturasCriancas([120,160], [3,2]))