window.onload = function () {
    let aux = true;
    var juego = ["", "", "", "", "", "", "", "", ""];
    var el = document.getElementById("body");
    el.setAttribute("style", "height:" + window.innerHeight + "px");
    var celdas = document.getElementsByClassName("celda");


    for (var celda of celdas) {
        celda.onclick = function () {
            if (aux == true) {
                if (juego[this.id] == "") {
                    this.innerHTML = "x";
                    aux = false;
                    juego[this.id] = "x";
                }
            } else {
                if (juego[this.id] == "") {
                    this.innerHTML = "o";
                    aux = true;
                    juego[this.id] = "o";
                }
            }
            Comprobar(juego, celdas);
        }
    }
}

function Comprobar(juego, celdas) {
    if (juego[0] == juego[1] && juego[1] == juego[2] && juego[0] != "") {
        alert("Ha ganado " + juego[0]);
        Vaciar(juego, celdas)
    };
    if (juego[3] == juego[4] && juego[4] == juego[5] && juego[4] != "") {
        alert("Ha ganado " + juego[3]);
        Vaciar(juego, celdas)
    };
    if (juego[6] == juego[7] && juego[7] == juego[8] && juego[6] != "") {
        alert("Ha ganado " + juego[6]);
        Vaciar(juego, celdas)
    };
    if (juego[0] == juego[3] && juego[3] == juego[6] && juego[0] != "") {
        alert("Ha ganado " + juego[0]);
        Vaciar(juego, celdas)
    };
    if (juego[1] == juego[4] && juego[4] == juego[7] && juego[1] != "") {
        alert("Ha ganado " + juego[1]);
        Vaciar(juego, celdas)
    };
    if (juego[0] == juego[4] && juego[4] == juego[8] && juego[0] != "") {
        alert("Ha ganado " + juego[4]);
        Vaciar(juego, celdas)
    };
    if (juego[2] == juego[4] && juego[4] == juego[6] && juego[4] != "") {
        alert("Ha ganado " + juego[2]);
        Vaciar(juego, celdas)
    };
    let empate = true;
    for (let a of juego) {
        if (a == "") {
            empate = false;
        }
    }
    if (empate) {
        alert("empate");
        Vaciar(juego, celdas)
    }
}

function Vaciar(juego, celdas) {
    for (let a in juego) {
        juego[a] = "";
    }
    var celdas = document.getElementsByClassName("celda");
    for (let celda of celdas) {
        celda.innerHTML = "";
    }
}
