const jurosSimples = (capitalInicial, juros, tempoAplicacao) => {
    const jurosSimples = capitalInicial * juros * tempoAplicacao
    return jurosSimples
}

const jurosComposto = (capitalInicial, juros, tempoAplicacao) => {
    const jurosComposto = capitalInicial * (Math.pow((1 + juros), tempoAplicacao))
    return jurosComposto
}

console.log(`Juros simples: ${jurosSimples(1000, 0.5, 10)}`)
console.log(`Juros composto: ${jurosComposto(1000, 0.5, 10)}`)