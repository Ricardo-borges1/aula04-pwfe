'use strict'

const botaoMostrarNumeros = document.getElementById('botao-mostrar-numeros')
const botaoMostrarNumerosPares = document.getElementById('botao-mostrar-numeros-pares')
const botaoMostrarDobro = document.getElementById('botao-mostrar-dobro')
const botaoMostrarPar = document.getElementById('botao-mostrar-proximo-par')

function mostrarNumeros() {
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-mostrar-numeros')

    const ultimoIndice = numeros.length
    container.replaceChildren('')
    for (let contador = 0; contador < ultimoIndice; contador++) {
        const novoSpan = document.createElement('span')
        novoSpan.textContent = numeros[contador]
        container.appendChild(novoSpan)
    }
}

function mostrarNumerosPares() {
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-mostrar-numeros-pares')

    const ultimoIndice = numeros.length
    container.replaceChildren('')
    for (let contador = 0; contador < ultimoIndice; contador++) {
        if (numeros[contador] % 2 == 0) {
            const novoSpan = document.createElement('span')
            novoSpan.textContent = numeros[contador]
            container.appendChild(novoSpan)
        }
    }
}

function mostrarDobro () {
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-dobro')

    container.replaceChildren('')
    const ultimoIndice = numeros.length

    for (let indice = 0; indice < ultimoIndice; indice++){
        const novoSpan = document.createElement('span')
        novoSpan.textContent = Number(numeros[indice]) * 2
        container.appendChild(novoSpan)
    }


}

function mostrarProximoPar () {
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-proximo-par')

    container.replaceChildren('')
    const ultimoIndice = numeros.length

    for (let indice = 0; indice < ultimoIndice; indice++ ){
        if (numeros[indice] % 2 == 0){
            const novoSpan = document.createElement('span')
            novoSpan.textContent = Number(numeros[indice]) + 2
            container.appendChild(novoSpan)
        }else{
            const novoSpan = document.createElement('span')
            novoSpan.textContent = Number(numeros[indice]) + 1
            container.appendChild(novoSpan)
        }
    }
}



botaoMostrarNumeros.addEventListener('click', mostrarNumeros)
botaoMostrarNumerosPares.addEventListener('click', mostrarNumerosPares)
botaoMostrarDobro.addEventListener('click', mostrarDobro)
botaoMostrarPar.addEventListener('click', mostrarProximoPar)