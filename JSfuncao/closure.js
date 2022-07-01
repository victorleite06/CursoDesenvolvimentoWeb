// Closure é o escopo criado quandp uma função é declarada
// Esse esopo permite a função acessar e manipular variáveis externas à função

// Contexto Léxico em ação

const x = 'Global'

function fora(){
    const x = 'Local'
    function dentro(){
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())