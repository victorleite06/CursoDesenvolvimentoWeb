const delta = (a, b, c) => {
    const delta = Math.pow(b, 2) - (4 * a * c)
    return delta
}

const bhaskara = (a, b, c) => {
    const d = delta(a, b, c)
    if(d < 0){
        return 'Delta é negativo'
    } else {
        const x1 = (-(b) - (Math.sqrt(d)) ) / (2 * a)
        const x2 = (-(b) + (Math.sqrt(d)) ) / (2 * a)
        return [x1, x2]
    }    
}

console.log(bhaskara(1, 1, 0))