const maiorMenor = vetor => {
    let posMaior = posMenor = 0
    for(let i = 1; i < vetor.length; i++){
        if(vetor[i] > vetor[posMaior]){
            posMaior = i
        }else{
            if(vetor[i] < vetor[posMenor]){
                posMenor = i
            }
        }
    }

    console.log(`Maior elemento na posição ${posMaior} e é o ${vetor[posMaior]}`)
    console.log(`Menor elemento na posição ${posMenor} e é o ${vetor[posMenor]}`)
}

maiorMenor([2,3,6,9,5,8,5,2,5,9,12,5,7,7,3])