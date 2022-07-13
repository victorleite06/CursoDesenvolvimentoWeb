const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const chineses = f => f.pais === 'China'
const mulheres = g => g.genero === 'F'
const menorSalario = (funcionario, funcAtual) => {
    return funcionario.salario < funcAtual.salario ? funcionario : funcAtual
}

axios.get(url).then(response => {
    const funcionarios = response.data

    const func = funcionarios.filter(chineses).filter(mulheres).reduce(menorSalario)
    console.log(func)
})