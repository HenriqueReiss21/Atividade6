function primeiroLista(...lista){ //função que pega apenas o primeiro valor da array
    const resultado = lista[0]
    return resultado
}

function listaSemPrimeiro(...lista){
    lista.shift();

    const resultado = lista

    return resultado
}

const lista = [5,12,20,7,9]

const primeiro = primeiroLista(...lista) // variavel com a primeira posição do vetor

//console.log(primeiro)

const restante = listaSemPrimeiro(...lista) //  variável que recebe todo o restante dos dados

//console.log(restante)