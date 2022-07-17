const entre = (num1 = 0, num2 = 100) => {
    if(num2 < num1){
        let aux = num1
        num1 = num2
        num2 = aux
    }
    for(let i = num1; i < num2; i++){
        if(!(i % 2 == 0)){
            console.log(i)
        }
    }
    console.log('\n')
}

entre()
entre(10, 30)
entre(30, 10)