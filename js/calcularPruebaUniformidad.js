// const contenedor = document.getElementById('contenedor');
// const botonPruebaUniformidad = document.getElementById('calcularPrueba');
// const cantidad = document.getElementById('inputCantidad');

// function calcular(){
//     var iteracion=0;

//     var semilla = Number(document.getElementById('semilla').value) ;
//     var campoA = Number(document.getElementById('campoA').value) ;
//     var campoM = Number (document.getElementById('campoM').value) ;
//     var ni=0;

//     var intervalo = Number(document.getElementById('campoIntervalo').value);
//     var alfa = Number(document.getElementById('campoAlfa').value);
//     var valorTabla = 5.99;

    
//     for(iteracion=1;iteracion<= Number(cantidad.value);iteracion++){
//         var AxX = campoA*semilla;
//         AxXModM = (AxX)%(campoM);
//         var ui = AxXModM / campoM;
//         ni = AxXModM;
        
//         var columnaIntervalo= 0;
//         var contar1=0;
//         var contar2=0;
//         var contar3=0;
//         if(ui < (1/3)  ){
//             columnaIntervalo = 1;
//         }else if ( (ui > (1/3) ) && (ui< (2/3)) ) {
//             columnaIntervalo=2;

//         }else {
//             columnaIntervalo= 3;
//         }

        
        
//         const tr = document.createElement('tr');
//         tr.innerHTML = `
//         <td scope="row">${iteracion}</th>
//         <td>${semilla}</td>
//         <td>${AxX}</td>
//         <td>${AxXModM}</td>
//         <td>${ui}</td>
//         <td>${columnaIntervalo}</td>`
        
//         contenedor.appendChild(tr);
//         semilla = ni;
        
//     }
    
    
    
// }



// botonPruebaUniformidad.addEventListener("click",calcular);
