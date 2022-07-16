const moeda = (num1, num2) => {
    const soma = num1 + num2
    console.log(soma)
    console.log(`${soma.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`)
}

moeda(0.1, 0.2)