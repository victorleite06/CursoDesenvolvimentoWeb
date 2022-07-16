const jogos = (partidas) => {
    const pontos = partidas.split(' ')
    var posMenor = 0
    var vezesRecord = 0
    for(let i = 1, posMaior = 0; i < pontos.length; i++){
        if(pontos[i] >= pontos[posMaior]){
            posMaior = i
            vezesRecord++
        
        }
        if(pontos[i] < pontos[posMenor]){
            posMenor = i
        
        }
    }
    return [vezesRecord, (posMenor + 1)]
}

console.log(jogos('10 20 20 8 25 3 0 30 1'))