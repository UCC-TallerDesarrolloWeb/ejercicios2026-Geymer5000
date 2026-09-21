/**
 * Descripción
 * @method Nombre de la función
 * @param {string} id - Id del elemento HTML
 * @param {number} valor - Valor ingresado por el usuario
 * @return Valor que retorna
 */

convertirUnidadeas=(id,valor)=>{

    if(isNan(valor)){ /* isNan() es una función que devuelve true si el valor no es un número y false si lo es */
        let metros,pulgadas,pies,yardas;

        valor = valor.replace(",",".");
        alert("El valor introducido no es un número");

       metros = "";
       pulgadas = "";
       pies = "";
       yardas = "";
        
    } else if (id=="metro"){
        metro = valor;
        pulgadas = valor * 39.37;
        pies = valor * 3.28;
        yardas = valor * 1.09361;
    } else if (id=="pie"){

        pie = valor;
        pulgadas = valor * 12;
        metro = valor * 0.0254;
        yardas = valor * 0.027778;

    } else if (id=="pulgada"){

        pulgadas = valor;
        metro = valor * 0.0254;
        pies = valor * 0.083333;
        yardas = valor * 0.027778;

    } else if (id=="yarda"){

        yardas = valor;
        metro = valor * 0.9144;
        pies = valor * 3;
        pulgadas = valor * 36;

    }    
    document.getElementById("metro").value = Math.round(metro * 100) / 100;
    document.getElementById("pulgada").value = Math.round(pulgadas * 100) / 100;
    document.getElementById("pie").value = pies.toFixed(2);
    document.getElementById("yarda").value = yardas.toFixed(2);
}
/* Descripción
 * @method ConvertirGr
 * @param {string} id - Id del elemento INPUT en el HTML
 */
function convertirGR(id){
    let grad,rad;

    if(id=="grados"){
        grad= document.getElementById("grados").value;
        rad = grad * (Math.PI/180);
    }else{
            document.getElementById("radianes").value = rad;
            grad = rad * 180/Math.PI;
        }
        document.getElementById("grados").value = grad;
        document.getElementById("radianes").value = rad;
    }

/* Descripción
 * @method MostrarOcultar
 * @param {string} valor = valor del id del radio butoon seleccionado
 */
mostrarOcultar = (valor)=>{

    const displayDiv = valor ==="val_mostrar" ? "block" : "none";
    document.getElementById("unDiv").style.display = displayDiv;

    // if (valor==="val_mostrar"){
    //     document.getElementById("unDiv").style.display = "block";
    // } else {
    //     document.getElementById("unDiv").style.display = "none";
    // }
}

/* Descripción
 * @method CalcularSuma
 */

calcularSuma = () => {

    let sum1,sum2;

    sum1 = Number(document.getElementById("nums1").value);
    sum2 = Number(document.getElementById("nums2").value);
    document.getElementById("totalS").innerText = sum1 + sum2;

}

