const contemChar = (String1, String2) => {
    let resp = false
    String1.toLowerCase()
    String2.toLowerCase()
    for(let i = 0; i < String1.length; i++){
        let letra = String1.charAt(i)
        String1.replace(letra, "")
        String2.replace(letra, "")
    }
    if(String1 == String2){
        resp = true
    }
    return resp
}

console.log(contemChar('Abobora', 'Feijao')) 