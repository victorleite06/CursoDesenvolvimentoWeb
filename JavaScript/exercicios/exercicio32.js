const media = vetor => {
    let soma = 0
    for(let i = 0; i < vetor.length; i++){
        soma += vetor[i]
    }
    return soma / vetor.length
}

console.log(`Media dos elementos do vetor ${media([2,4,6,4,3,4,61,4,4,2,1,4,6,7])}`)