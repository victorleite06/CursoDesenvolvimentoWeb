const fatorial = num => {
    let resp = num
    for(let i = (num - 1); i > 0; i--){
        resp *= i
    }
    return resp
}

console.log(fatorial(3))