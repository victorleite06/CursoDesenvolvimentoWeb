const divisivelTres = num => {
    let teste = false
    if(num % 3 == 0){
        teste = true
    }
    return teste
}

console.log(divisivelTres(9))