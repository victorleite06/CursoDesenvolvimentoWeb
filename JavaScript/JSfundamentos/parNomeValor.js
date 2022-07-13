//par nome/valor
const saudacao = 'Opa'

function exec(){
    const saudacao = 'Falaaa'
    return saudacao
}

const Cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua ...',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(Cliente)