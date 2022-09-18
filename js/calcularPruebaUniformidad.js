const contenedorFilas = document.getElementById('contenedorFilas');
const botonUniformidad = document.getElementById('calcularPrueba');
const cantidad2 = Number (document.getElementById('inputCantidad').value);
let miCanvas = document.getElementById('MiGrafica').getContext("2d");
const grafico = document.getElementById('grafico');




function calcularPruebaUniformidad(){
    grafico.classList.add('d-none');

    var iteracion=0;

    var semilla = Number(document.getElementById('semilla').value) ;
    var campoA = Number(document.getElementById('campoA').value) ;
    var campoM = Number (document.getElementById('campoM').value) ;
    var ni=0;

    var intervalo = Number(document.getElementById('campoIntervalo').value); 
    var porcentajeAlfa = Number(document.getElementById('campoAlfa').value); 
    var valorTabla = 5.99;
    
    var contar1 = 0;
    var contar2 = 0;
    var contar3 = 0;
    
    for(iteracion=1;iteracion<= Number(cantidad2);iteracion++){
        var AxX = campoA*semilla;
        AxXModM = (AxX)%(campoM);
        var ui = AxXModM / campoM;
        ni = AxXModM;

        var columnaIntervalo = 0;
        if(ui < (1/3)){
            columnaIntervalo = 1;
            contar1++;
        }else if( (ui >= (1/3))  && (ui<(2/3)) ){
            columnaIntervalo = 2;
            contar2++;
        }else{
            columnaIntervalo = 3;
            contar3++;
        }
        
        const tr = document.createElement('tr');
        tr.innerHTML = `
        <td scope="row">${iteracion}</th>
        <td>${semilla}</td>
        <td>${AxX}</td>
        <td>${AxXModM}</td>
        <td>${ui}</td>
        <td>${columnaIntervalo}</td>`
        
        contenedorFilas.appendChild(tr);
        semilla = ni;
        
    }
    var frecuenciaEsperada = cantidad2/intervalo ;
    var mostrarCantidadIntervalo = document.getElementById('mostrarCantidadIntervalo');
    mostrarCantidadIntervalo.innerHTML = `
        <h6>Cantidad Intervalo 1  = ${contar1} </h6>
        <h6>Cantidad Intervalo 2  = ${contar2} </h6>
        <h6>Cantidad Intervalo 3  = ${contar3} </h6>
        <h6>La Frecuencia Esperada es:   ${frecuenciaEsperada} </h6>
         
    `
    var sumador=0;
    for ( i=1; i<(intervalo+1) ; i++){
        var contar=0;
        var cuadrado = 0;
        var divididoEnFe = 0;
        
        if(i===1){
            contar=(contar1 - frecuenciaEsperada);
            cuadrado = Math.pow(contar, 2);
            divididoEnFe = (cuadrado / frecuenciaEsperada);
            sumador = sumador + divididoEnFe;
        }else if (i===2){
            contar=(contar2 - frecuenciaEsperada);
            cuadrado = Math.pow(contar, 2);
            divididoEnFe = (cuadrado / frecuenciaEsperada);
            sumador = sumador + divididoEnFe;
        }else{
            contar=(contar3 - frecuenciaEsperada);
            cuadrado = Math.pow(contar, 2);
            divididoEnFe = (cuadrado / frecuenciaEsperada);
            sumador = sumador + divididoEnFe;
        }
           
        
        var fila = document.getElementById('fila');
        var trCalcular = document.createElement('tr');

        trCalcular.innerHTML=`
        <td scope="row">${i}</th>
        <td>${contar}</td>
        <td>${cuadrado}</td>
        <td>${divididoEnFe}</td>
        `
        fila.appendChild(trCalcular);
        
    }
    var contenedorSumatoria = document.getElementById('mostrarSumatoria');
    contenedorSumatoria.innerHTML = `
    <h5>Sumatoria Total = ${sumador}  </h5>
    `

    var conclusion = document.getElementById('conclusion');
    if(sumador < valorTabla) {
        conclusion.innerHTML = `
        <h3> Podemos concluir que la muestra es VERDADERA ya que la sumatoria es menor a 5,99, por lo tanto la hipotesis
        no se puede rechazar</h3>
        
        `
        grafico.classList.remove('d-none');

        var chart = new Chart(miCanvas,{
            type:"bar",
            data:{
                labels:["Intervalo 1","Intervalo 2","Intervalo 3"],
                datasets:[
                    {
                        label: "Frecuencias Esperadas",
                        backgroundColor: 'rgb(66,134,244,0.8)',
                        data: [frecuenciaEsperada,frecuenciaEsperada,frecuenciaEsperada]
                    },
                    {
                        label: "Frecuencias Observadas",
                        backgroundColor: ['rgb(74,135,72,0.8)'],
                        data:[contar1,contar2,contar3]
                    }
                ]
            },
            options:{
                scales:{
                    yAxes:[{
                        ticks:{
                            beginAtZero:true
                        }
                    }]
                }
            }
        })
    }else{
        conclusion.innerHTML = `
        <h3> Podemos concluir que la muestra es FALSA ya que la sumatoria es mayor a 5,99, por lo tanto la hipotesis
        se  rechazar</h3>
        `
    }
    
    
    
    
    
}

// function limpiarCampos (){
//     document.getElementById('semilla').value = "";
//     document.getElementById('campoA').value = "";
//     document.getElementById('campoM').value = "";
//     document.getElementById('inputCantidad').value = "";
    
// }

botonUniformidad.addEventListener("click",calcularPruebaUniformidad);
// const botonLimpiar = document.getElementById('botonLimpiar');
// botonLimpiar.addEventListener("click",limpiarCampos);