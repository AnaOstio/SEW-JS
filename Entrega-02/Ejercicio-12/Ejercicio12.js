class LeerArchivos{
    constructor(){}

    leerArchivo(files){
        this.compruebaNavegador();

        var archivo = files[0];
        var txt = /text.*/;
        var xml = /xml.*/
        var json = /json.*/

        var texto = "<h3>Archivo selecionado</h3>"
            texto += "<ul><li>Nombre del archivo: " + archivo.name +  "</li>";
            texto += "<li>Tipo del texto: " + archivo.type + "</li>"
            texto += "<li>Tamaño del archivo: " + archivo.size +  "bytes</li>"
            texto += "<li>Ultima modificacion: " + archivo.lastModifiedDate + "</li></ul>"

          

        if(archivo.type.match(txt) || archivo.type.match(xml) || archivo.type.match(json)){
            // Ahora leo el contendio
            var lector = new FileReader();
            lector.onload = function(evento) {

                $('p').text(lector.result);
            }
            lector.readAsText(archivo) 
            $('section').html(texto) 
        } else {
            var texto = "<h3>Este ejercicio solo acepta archivos de tipo txt, xml, json</h3>"
            $('section').html(texto)
        }
    }

    compruebaNavegador(){
        var error = "";
        if (!(window.File && window.FileReader && window.FileList && window.Blob)) 
        {  
            error = "<h3>¡¡¡ Este navegador NO soporta el API File y este programa puede no funcionar correctamente !!!</h3>";
            $('section').remove();
            $("main").html(error)
        }  
    }
}

var leer = new LeerArchivos();