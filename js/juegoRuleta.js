const botonJugar = document.getElementById('botonJugar');
const numeroElegido = document.getElementById('numeroElegido');
const ganasteLabel = document.getElementById('ganaste');
const numeroGanador = document.getElementById('numeroGanador');
const perdisteLabel = document.getElementById('perdiste');
const sinsaldoLabel = document.getElementById('sinsaldo');
const numeroPerdedor = document.getElementById('numeroPerdedor');
var saldo = document.getElementById('saldo');

const listaVariables = [];
var jugada = 0;

congruencialMultiplicativo(7,14,73);

function jugar(){
    ganasteLabel.classList.add('d-none');
    perdisteLabel.classList.add('d-none');
    sinsaldoLabel.classList.add('d-none');

    if(Number(numeroElegido.value)>0 && Number(numeroElegido.value)<=37 && Number(saldo.value) > 300){
        if(numeroElegido.value == listaVariables[jugada]){
            ganasteLabel.classList.remove('d-none');
            numeroGanador.innerHTML = numeroElegido.value;
            saldo.value = Number(saldo.value) +700;
        }else{
            perdisteLabel.classList.remove('d-none');
            numeroPerdedor.innerHTML = numeroElegido.value;
            saldo.value = Number(saldo.value) -300;
        }
        jugada++;
    }

    if(Number(saldo.value) < 300){
        sinsaldoLabel.classList.remove('d-none');
    }

    numeroElegido.value = "";
}

function congruencialMultiplicativo(semilla,campoA,campoM){
    var iteracion=0;
    var ni=0;
    
    for(iteracion=1;iteracion<= 50;iteracion++){
        var AxX = campoA*semilla;
        AxXModM = (AxX)%(campoM);
        var ui = AxXModM / campoM;
        ni = AxXModM;
        if(semilla<=37 && semilla>=0){
            listaVariables.push(semilla);
        }
        semilla = ni;
    }
}

botonJugar.addEventListener('click',jugar);