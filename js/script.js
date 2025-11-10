
const botones = document.querySelectorAll(".boton-jugada");
const resultado = document.getElementById("resultados");
let contM = document.getElementById("contador-ordenador");
let contU = document.getElementById("contador-usuario");
let puntosM = 0;
let puntosU = 0;

botones.forEach(boton => {
    boton.addEventListener("click", function () {
        let jugadaUsuario;
        let resultadoMaquina;
        console.log("Usuario ha sacado " + this.dataset.jugada);
        jugadaUsuario = this.dataset.jugada;
        resultadoMaquina = Math.floor(Math.random() * 3);
        let jugadaMaquina;
        let mensaje;
        
        if (resultadoMaquina === 0) {

            jugadaMaquina = "piedra"
        } else if (resultadoMaquina === 1) {
            jugadaMaquina = "papel"
        } else {
            jugadaMaquina = "tijera"
        }
        console.log("Maquina ha sacado " + jugadaMaquina)

        if (jugadaMaquina === jugadaUsuario) {
            mensaje = "Ha habido un empate";
        }
        else if ((jugadaMaquina === "piedra" && jugadaUsuario === "tijera") || (jugadaMaquina === "tijera" && jugadaUsuario === "papel") || (jugadaMaquina === "papel" && jugadaUsuario === "piedra")) {
            mensaje= "El ordenador ha ganado";
            puntosM = puntosM + 1;
        }
        else {
            mensaje ="El usuario ha ganado"
            puntosU = puntosU + 1;

        }
        console.log(puntosM)
        console.log(puntosU)

        resultado.innerHTML =
         '<p>Tu jugada: <strong>' + jugadaUsuario + '</strong></p>' + 
         '<p>Jugada del ordenador: <strong>' + jugadaMaquina + '</strong></p>' + mensaje;

        contU.innerHTML = "Tus puntos: "+ puntosU;
        contM.innerHTML = "Puntos del ordenador: "+ puntosM;

    });
});




