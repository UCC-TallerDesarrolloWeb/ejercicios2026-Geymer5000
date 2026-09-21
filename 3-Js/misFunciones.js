/**
 * Descripción
 * @method Nombre de la función
 * @param {string} id - Id del elemento HTML
 * @param {number} valor - Valor ingresado por el usuario
 * @return Valor que retorna
 */

convertirUnidadeas=(id,valor)=>{

    if(isNan(valor)){ /* isNan() es una función que devuelve true si el valor no es un número y false si lo es */
        alert("El valor introducido no es un número");

       metros = "";
       pulgadas = "";
       pies = "";
       yardas = "";
        
    } else if (id=="metro"){
        metros = valor;
        pulgadas = valor * 39.37;
        pies = valor * 3.28;
        yardas = valor * 1.09361;
    } else if (id=="pie"){

        document.getElementById("pulgada").value = "";
        document.getElementById("pie").value = "";
        document.getElementById("yarda").value = "";
        document.getElementById("metro").value = "";

    } else if (id=="pulgada"){

        document.getElementById("pulgada").value = "";
        document.getElementById("pie").value = "";
        document.getElementById("yarda").value = "";
        document.getElementById("metro").value = "";

    } else if (id=="yarda"){

        document.getElementById("pulgada").value = metros;
        document.getElementById("pie").value = pulgadas;
        document.getElementById("yarda").value = pies;
        document.getElementById("metro").value = yardas;

    }    
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
