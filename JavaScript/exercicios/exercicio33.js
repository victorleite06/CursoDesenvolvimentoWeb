const vetorInt = [3,6,8,0]
const vetorString = ['1', '4', '7', '9']
const vetorDouble = [2.0, 5.0, 10.0, 15.0]

const vetor1 = vetorInt.concat(vetorString, vetorDouble)
const vetor2 = vetorInt.concat(vetorDouble, vetorString)
console.log(vetor1, vetor2)