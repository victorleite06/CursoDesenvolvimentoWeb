const progressaoAritmetica = (n, a1, razao) => {
    console.log('Progressão Aritmética')
    let termos = [a1]
    for(let i = 1; i < n; i++){
        termos[i] = termos[i - 1] + razao
    }
    let soma = 0
    for(let i = 0; i < n; i++){
        soma += termos[i]
        console.log(termos[i])
    }
    console.log('Soma: ' + soma + '\n')
}

const progressaoGeometrica = (n, a1, razao) => {
    console.log('Progressão Geométrica')
    let termos = [a1]
    for(let i = 1; i < n; i++){
        termos[i] = termos[i - 1] * razao
    }
    let soma = 0
    for(let i = 0; i < n; i++){
        soma += termos[i]
        console.log(termos[i])
    }
    console.log('Soma: ' + soma + '\n')
}

progressaoAritmetica(5, 3, 9)
progressaoGeometrica(5, 3, 9)