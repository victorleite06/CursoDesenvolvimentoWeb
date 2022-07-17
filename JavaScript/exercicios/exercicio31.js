const contNegativos = vetor => {
    let cont = 0
    for(let i = 0; i < vetor.length; i++){
        if(vetor[i] < 0){
            cont++
        }
    }
    return cont
}

console.log('Numeros negativos no vetor: ' + contNegativos([2,4,6,7,3,6,7,-2, -34, -32,-23, 3,,-23,4,-54]))