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
        var filas = 0;
        var cols = 0;
        $("table tr").each(
            function() {
                filas += 1
        });

        $("table th").each(
            function() {
                cols += 1
        });

        $("table").after("<p>Hay " + filas +" filas y " + cols + " columnas</p>")
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