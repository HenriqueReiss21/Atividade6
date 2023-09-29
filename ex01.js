const lista = [10,12,15,35,40]

function maioresQueMedia(...lista){ //função que devolve os valores que são maiores que a média
    const somaLista = lista.reduce((acumulador,atual) => acumulador + atual, 0)
    const mediaLista = somaLista/lista.length
    
    const resultado = lista.filter(numero => numero > mediaLista)

    console.log(resultado) 
    
}

maioresQueMedia(...lista)