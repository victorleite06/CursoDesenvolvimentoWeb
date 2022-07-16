const verificarNota = nota => {
    if(nota <= 35){
        return 'Reprovado'
    } else {
        for(var i = 0; i < nota; i += 5);
        nota = nota - (nota - i)
        return `Aprovado com ${nota}`
    }
}

console.log(verificarNota(36))