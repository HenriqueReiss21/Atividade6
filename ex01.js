const lista = [10,12,15,35,40]

function maioresQueMedia(funcaoSoma, ...lista){ //função que devolve os valores que são maiores que a média, utilizando como parâmetro a função somaValoresLista
    const somaLista = funcaoSoma(...lista)
    const mediaLista = somaLista/lista.length
    
    const resultado = lista.filter(numero => numero > mediaLista)

    console.log(resultado) 
    
}

function menorValor(...lista){ //função que encontra o menor valor da lista
    let menor = lista[0]
    lista.forEach(numero => {
        if(numero < menor){
            menor = numero
        }
    });

    console.log(menor)
}

function somaValoresLista(...lista){ //função que calcula a soma dos valores da lista
    const somaLista = lista.reduce((acumulador,atual) => acumulador + atual, 0)
    return somaLista
}

function maioresQueVinte(...lista){ //função que seleciona os números da lista maiores que 20
    const resultado = lista.filter(numero => numero > 20)
    console.log(resultado)
}

maioresQueMedia(somaValoresLista, ...lista)
menorValor(...lista)
console.log(somaValoresLista(...lista))
maioresQueVinte(...lista)