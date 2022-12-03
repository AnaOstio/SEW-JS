"use strict"
class MapaKML{
    constructor(){
    }

    initMap(){

        let centro = { lat: 43.52622, lng: -5.65567 };
             this.mapa = new google.maps.Map(document.querySelector("main"), 
                    {zoom: 8, center: centro, mapTypeId: google.maps.MapTypeId.SATELLITE});

        let win = new google.maps.InfoWindow();

    }


    procesar(data){

        let coordenadas = []; 

        let parser = new DOMParser();
        let dom = parser.parseFromString(data, "text/xml");
        let domCoord = dom.getElementsByTagName("coordinates");

        for (let element of domCoord)
            coordenadas.push(element.innerHTML.trim());

        this.lugares = coordenadas.map(conjunto => conjunto.split(" "))

        this.initMap();

    }


    checkFile(files){
        let archivo = files[0]
        let reader = new FileReader();

        let tipo = archivo.name
        
        if(tipo.match(/.kml/)){

            reader.onload = e => this.procesar(reader.result)
            reader.readAsText(archivo)

        } else {
            $('p').text("Solo se aceptan archivos de tipo geojson")
        }
    }


    checkFile2(files){
        let archivo = files[0]
        let lector = new FileReader();

        let tipo = archivo.name
        var th = this;
        var ar = new Array();
        
        if(tipo.match(/.kml/)){

            lector.onload = function(evento) {
                var a = lector.result
                let b = $('coordinates', a).text().split(',')
                let c = new Array();
                for(var r=0; r< b.length; r++){


                    if(r % 2 == 0 && r > 0){
                        b[r] = b[r].toString().substring(3)
                    }
                }

                b.pop()

                for(var i = 0; i < b.length - 2; i++){
                    var cood =  {lat: Number(b[i + 1]), lng: Number(b[i])}
                    i++;
                    c.push(cood)
                }

                th.puntos(c)
            }

            lector.readAsText(archivo)

        } else {
            $('p').text("Solo se aceptan archivos de tipo geojson")
        }
    }

    puntos(datos){
        let centro = { lat: 43.52622, lng: -5.65567 };
             this.mapa = new google.maps.Map(document.querySelector("main"), 
                    {zoom: 8, center: centro, mapTypeId: google.maps.MapTypeId.SATELLITE});

        let win = new google.maps.InfoWindow();
        for(let i = 0; i < datos.length; i++){
            var marc2 = new google.maps.Marker({
                position: datos[i], map:this.mapa
            })
        }
    }

}

var mapa = new MapaKML()