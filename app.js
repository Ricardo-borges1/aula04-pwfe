'use strict'

const botaoMostrarNumeros = document.getElementById('botao-mostrar-numeros')
const botaoMostrarNumerosPares = document.getElementById('botao-mostrar-numeros-pares')
const botaoMostrarDobro = document.getElementById('botao-mostrar-dobro')
const botaoMostrarPar = document.getElementById('botao-mostrar-proximo-par')
const botaoMostrarNumerosMultiplos3Ou5 = document.getElementById('botao-mostrar-numeros-multiplos-3-ou-5')
const botaoMostrarNumerosMultiplos3E5 = document.getElementById('botao-mostrar-numeros-multiplos-3-e-5')
const botaoPrimo = document.getElementById('mostrar-primo')

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

function mostrarMultiplos3Ou5 () {
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-numeros-multiplos-3-ou-5')

    container.replaceChildren('')
    const ultimoIndice = numeros.length

    for (let indice = 0; indice < ultimoIndice; indice++ ){

        if(numeros[indice] % 3 == 0 || numeros[indice] % 5 == 0){
            const novoSpan = document.createElement('span')
            novoSpan.textContent = numeros[indice]
            container.appendChild(novoSpan)
        }
    }
}

function mostrarMultiplos3E5 () {
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-numeros-multiplos-3-e-5')

    container.replaceChildren('')
    const ultimoIndice = numeros.length

    for (let indice = 0; indice < ultimoIndice; indice++ ){

        if(numeros[indice] % 3 == 0 && numeros[indice] % 5 == 0){
            const novoSpan = document.createElement('span')
            novoSpan.textContent = numeros[indice]
            container.appendChild(novoSpan)
        }
    }
}

function primo() {
    const numeros = document.getElementById('numeros').value.split(',');
    const container = document.getElementById('cont-mostrar-primo');

    container.replaceChildren();

    for (const numero of numeros) {
        const valor = parseInt(numero);
        const proximoPrimo = encontrarProximoPrimo(valor);

        const novoSpan = document.createElement('span');
        novoSpan.textContent = proximoPrimo;
        container.appendChild(novoSpan);
    }
}

function isPrimo(valor) {
    if (valor <= 1) return false;
    if (valor <= 3) return true;
    if (valor % 2 === 0 || valor % 3 === 0) return false;

    let i = 5;
    while (i * i <= valor) {
        if (valor % i === 0 || valor % (i + 2) === 0) {
            return false;
        }
        i += 6;
    }

    return true;
}

function encontrarProximoPrimo(valor) {
    let proximo = valor + 1;

    while (true) {
        if (isPrimo(proximo)) {
            return proximo;
        }
        proximo++;
    }
}



botaoMostrarNumeros.addEventListener('click', mostrarNumeros)
botaoMostrarNumerosPares.addEventListener('click', mostrarNumerosPares)
botaoMostrarDobro.addEventListener('click', mostrarDobro)
botaoMostrarPar.addEventListener('click', mostrarProximoPar)
botaoMostrarNumerosMultiplos3Ou5.addEventListener('click', mostrarMultiplos3Ou5)
botaoMostrarNumerosMultiplos3E5.addEventListener('click', mostrarMultiplos3E5)
botaoPrimo.addEventListener('click', primo)