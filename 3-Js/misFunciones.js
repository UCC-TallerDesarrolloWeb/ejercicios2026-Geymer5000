/**
 * Descripción
 * @method Nombre de la función
 * @param Parámetro A
 * @param Parámetro B
 * @return Valor que retorna
 */
function convertirUnidadeas(id,valor){
    if(isNan(valor)){ /* isNan() es una función que devuelve true si el valor no es un número y false si lo es */
        alert("El valor introducido no es un número");

        document.getElementById("pulgada").value = "";
        document.getElementById("pie").value = "";
        document.getElementById("yarda").value = "";
        document.getElementById("metro").value = "";
        
    } else if (id=="metro"){
        document.getElementById("pulgada").value = valor * 39.37;
        document.getElementById("pie").value = valor * 3.28;
        document.getElementById("yarda").value = valor * 1.09361;
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

        document.getElementById("pulgada").value = "";
        document.getElementById("pie").value = "";
        document.getElementById("yarda").value = "";
        document.getElementById("metro").value = "";

    }    
}
