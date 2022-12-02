class Objecto {
    constructor(){

    }

    mostrar(){
        $("p").show();
    }

    ocultar(){
        $("p").hide();
    }

    eliminarAudio(){
        $("audio").remove();
    }

    modificar(){
        $("h1").text("Ejercicio 07 con JQuery");
        $("main > section > p").text("Ejercicio modificado por Ana Fernandez Ostio")
    }
    
    anadir(){
        $("h1").after("<h2>Añadido despues del h1</h2>")
    }

    sumaFilaColumnas(){
        var tabla = document.querySelector('table');
        var nFils = document.querySelectorAll('tr').length;
        var nCols = document.querySelectorAll('tr:first-child th').length

        tabla.querySelector('tr:first-child').innerHTML += "<th>Total</th>"

        var filas = tabla.querySelectorAll('tr');
        for(let i = 1; i < nFils; i++){
            
            var Total = filas[i].innerText.replace('\t', ' ')
            filas[i].innerHTML += "<td>"+ Total +"</td>" 
        }

        var last = "";
        for(let i = 0; i < nCols; i++){
            var Total = ""
            for(let f = 1; f<nFils; f++){
                Total += filas[f].children[i].innerText + " ";

            }

            if(i == nCols - 1){
                last += Total
            } else {
                last += Total + '|p|'
            }
        }

        var totalCols = last.split('|p|');
        var f = '<tr>'
        for(let i = 0; i <  totalCols.length; i++){
            f += '<td>' + totalCols[i] + "</td>"
        }
        f += '</tr>'

       document.querySelector('table').innerHTML += f

    }

    recorrerDOM(){
        $("aside").remove()
        var arbol;
        $("*", document.body).each(function() {
            var padre = $(this).parent().get(0).tagName;
            arbol += "Etiqueta padre: <" + padre + "> elemento : <" + $(this).get(0).tagName + " ";
        })

        var aside = document.createElement("aside")
        var txt = document.createTextNode(arbol);
        aside.appendChild(txt)
        var f = document.getElementsByTagName('footer')[0]

        document.body.insertBefore(aside, f)
    }
}

var obj = new Objecto()