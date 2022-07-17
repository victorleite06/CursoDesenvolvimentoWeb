const multVetorPor = (num, vetor) => {
    for(let i = 0; i < vetor.length; i++){
        vetor[i] *= num
    }
    return vetor
}

const multVetorPorAcimaDeCinco = (num, vetor) => {
    for(let i = 0; i < vetor.length; i++){
        if(vetor[i] > 5){
            vetor[i] *= num
        }
    }
    return vetor
}

console.log(multVetorPor(3, [1,2,3,4,5,6,7,8,9]))
console.log(multVetorPorAcimaDeCinco(3, [1,2,3,4,5,6,7,8,9]))