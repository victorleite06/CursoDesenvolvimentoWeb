const paresImpares = vetor => {
    let pares = 0, impares = 0
    for(let i = 0; i < vetor.length; i++){
        if(vetor[i] % 2 == 0){
            pares++
        }else{
            impares++
        }
    }
    console.log(`Numeros pares: ${pares}\nNumeros impares: ${impares}`)
}

paresImpares([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])