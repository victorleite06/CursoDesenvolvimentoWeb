let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a // return implicito

console.log(dobro(Math.PI))

let ola = function () {
    return 'ola'
}

ola = () => 'ola'
ola = _ => 'ola' // possui parametro

console.log(ola())