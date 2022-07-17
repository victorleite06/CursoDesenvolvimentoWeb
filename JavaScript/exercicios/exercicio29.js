const numIntervalo = vetor => {
    let contNum = 0
    for(let i = 10; i <= 20; i++){
        if(typeof vetor[i] == 'number'){
            contNum++
        }
    }
    return contNum
}

console.log(numIntervalo([,,,,,,,,,,,4,6,8,"",3,5,,734,2,3,345,,5,6,7,3]))