const lista = [10,12,15,35,40]

function maioresQueMedia(...lista){ //função que devolve os valores que são maiores que a média
    const somaLista = lista.reduce((acumulador,atual) => acumulador + atual, 0)
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

//maioresQueMedia(...lista)

menorValor(...lista)
