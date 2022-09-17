const contenedor = document.getElementById('contenedor');
const boton = document.getElementById('botonCalcular');
const cantidad = document.getElementById('inputCantidad');

function calcular(){
    var iteracion=0;

    var semilla = Number(document.getElementById('semilla').value) ;
    var campoA = Number(document.getElementById('campoA').value) ;
    var campoM = Number (document.getElementById('campoM').value) ;
    var ni=0;
    
    console.log("carga de variables");
    for(iteracion=1;iteracion<= Number(cantidad.value);iteracion++){
        var AxX = campoA*semilla;
        AxXModM = (AxX)%(campoM);
        var ui = AxXModM / campoM;
        ni = AxXModM;
        console.log("iteracion "+iteracion);
        const tr = document.createElement('tr');
        tr.innerHTML = `
        <td scope="row">${iteracion}</th>
        <td>${semilla}</td>
        <td>${AxX}</td>
        <td>${AxXModM}</td>
        <td>${ui}</td>`
        
        contenedor.appendChild(tr);
        semilla = ni;
        
    }
    
    const pasarAPrueba = document.getElementById('hacerPrueba');
    pasarAPrueba.innerHTML = `
    <a class="btn btn-success" type="button"  href="pruebaUniformidad.html" target="_blank">PRUEBA DE UNIFORMIDAD</a>

    
    `
    
}

function limpiarCampos (){
    document.getElementById('semilla').value = "";
    document.getElementById('campoA').value = "";
    document.getElementById('campoM').value = "";
    document.getElementById('inputCantidad').value = "";
    
}

boton.addEventListener("click",calcular);
const botonLimpiar = document.getElementById('botonLimpiar');
botonLimpiar.addEventListener("click",limpiarCampos);