//Variables
let maximoposible = prompt(`Indica el valor máximo para iniciar el juego:`);
let numeroSecreto = Math.floor(Math.random() * maximoposible) + 1
let numeroUsuario = 0
let intentos = 1;
let limitedeIntentos = 5;


while (numeroSecreto != numeroUsuario) {
    numeroUsuario = prompt(`Me indicas un número entre el 1 y el ${maximoposible} porfavor:`);

    console.log(numeroUsuario);

    if (numeroUsuario == numeroSecreto) {
        alert(`¡Acertaste, el número era ${numeroSecreto}. Usaste ${intentos} ${intentos == 1 ? "intento" : "intentos"}!`);
    } else {
        alert("Perdón, no acertaste :(");
        intentos++;
        if (numeroUsuario == 0) {
            alert("El 0 no vale pillín!")
        }
        if (numeroUsuario > numeroSecreto) {
            alert("El número secreto es menor :)");
        }
        if (numeroUsuario < numeroSecreto) {
            alert("El número secreto es mayor :)");
        }
        if (intentos > limitedeIntentos) {
            alert(`Máximo de inentos ${limitedeIntentos} alcanzado!`)
            break;
        }
    }


}