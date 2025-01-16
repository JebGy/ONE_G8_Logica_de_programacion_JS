let intentos = 1;
let numeroSecreto = 1;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function verificarIntento() {
  let numeroUsuario = parseInt(document.getElementById("valor__usuario").value);

  // sourcery skip: merge-else-if
  if (numeroUsuario === numeroSecreto) {
    asignarTextoElemento("p", `Acertaste el número en ${intentos} ${intentos === 1 ? "intento" : "intentos"}!`)
    document.querySelector("#reiniciar").removeAttribute("disabled");
  } else {
    if (numeroUsuario > numeroSecreto) {
      asignarTextoElemento("p", "El número SECRETO es MENOR!");
    } else {
      asignarTextoElemento("p", "El número SECRETO es MAYOR!");
    }
    intentos++;
    limpiarCaja();
  }
  return;
}

function mensajesIniciales() {
  asignarTextoElemento("h1", "Juego del número SECRETO!");
  asignarTextoElemento("p", `Indica un número del 1 al ${numeroMaximo}!`);
}

function reiniciarJuego() {
  limpiarCaja();
  condicionesInciales();
  document.querySelector("#reiniciar").setAttribute("disabled", "true");
}

function limpiarCaja() {
  document.querySelector("#valor__usuario").value = "";
  return;
}

function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
}

function generarNumeroSecreto() {
  let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
  if (listaNumerosSorteados.length === numeroMaximo) {
    asignarTextoElemento("p","Ya se sortearon todos los número posibles!")
  } else {
    if (listaNumerosSorteados.includes(numeroGenerado)) {
      return generarNumeroSecreto();
    } else {
      listaNumerosSorteados.push(numeroGenerado);
      return numeroGenerado;
    }
  }
}

function condicionesInciales() {
  mensajesIniciales();
  intentos = 1;
  numeroSecreto = generarNumeroSecreto();
}


condicionesInciales();


