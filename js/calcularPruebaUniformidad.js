const contenedorUniformidad = document.getElementById('contenedorUniformidad'); //contenedor prueba uniformidad
const botonPruebaUniformidad = document.getElementById('calcularPrueba'); //boton calcular uniformidad
const botonNumerosAleatorios = document.getElementById('botonCalcular'); //boton numeros aleatorios

const cantidad2 = document.getElementById('inputCantidad');

function displayUniformidad(){
    contenedorUniformidad.classList.remove('d-none');
    console.log("asdasd");
}

function calcular(){
    var iteracion=0;

    var semilla = Number(document.getElementById('semilla').value) ;
    var campoA = Number(document.getElementById('campoA').value) ;
    var campoM = Number (document.getElementById('campoM').value) ;
    var ni=0;

    var intervalo = Number(document.getElementById('campoIntervalo').value);
    var alfa = Number(document.getElementById('campoAlfa').value);



    for(iteracion=1;iteracion<= Number(cantidad.value);iteracion++){
        var AxX = campoA*semilla;
        AxXModM = (AxX)%(campoM);
        var ui = AxXModM / campoM;
        ni = AxXModM;
        
        var columnaIntervalo= 0;
        var contar=0;
        if(intervalo === 2){
            
            if(ui< (1/2)){
                const tr = document.createElement('tr');
                tr.innerHTML = `
                <td scope="row">${iteracion}</th>
                <td>${semilla}</td>
                <td>${AxX}</td>
                <td>${AxXModM}</td>
                <td>${ui}</td>
                <td>${1}</td>`
                
                contenedor.appendChild(tr);
                semilla = ni;
            }else{
                const tr = document.createElement('tr');
                tr.innerHTML = `
                <td scope="row">${iteracion}</th>
                <td>${semilla}</td>
                <td>${AxX}</td>
                <td>${AxXModM}</td>
                <td>${ui}</td>
                <td>${2}</td>`
                
                contenedor.appendChild(tr);
                semilla = ni;
            }
            
            
            
        }else{
            for(j=1 ; j<intervalo ; j++ ){
                if(ui< (j/intervalo)){
                    columnaIntervalo = 1;
                }else if()
                
            }
            
        }

        
        
        
        
    }
    
    
    
}

botonNumerosAleatorios.addEventListener("click",displayUniformidad);
botonPruebaUniformidad.addEventListener("click",calcular);
