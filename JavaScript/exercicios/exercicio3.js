const potencia = (base, expoente) => {
    var resp = base
    for(let i = 1; i < expoente; i++){
        resp *= base
    }
    return resp
}
let base = 5
let expoente = 2
console.log(`${base} elevado a ${expoente} = ${potencia(base, expoente)}`)