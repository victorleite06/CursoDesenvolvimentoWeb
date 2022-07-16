const bissexto = ano => {
    let teste = false
    if(ano % 4 == 0){
        teste = true
    }
    return teste
}

console.log(bissexto(2028))