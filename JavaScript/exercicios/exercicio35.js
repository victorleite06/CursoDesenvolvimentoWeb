const juntarVetor = (vetorPilha, vetorAdiciona) => {
    for(let i = 0; i < vetorAdiciona.length; i++){
        vetorPilha[vetorPilha.length] = vetorAdiciona[i]
    }
    
    for(let i = 0; i < vetorPilha.length; i++){
        console.log(vetorPilha[i])
    }
}

juntarVetor([1, 2, 3, 4, 5], [6, 7, 8, 9, 10])