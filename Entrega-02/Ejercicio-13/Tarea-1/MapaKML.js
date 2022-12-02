"use strict"
class MapaKML{
    constructor(){}

    initMap(){

        let centro = { lat: 43.52622, lng: -5.65567 };
            let mapa = new google.maps.Map(document.querySelector("main"), 
                    {zoom: 8, center: centro, mapTypeId: google.maps.MapTypeId.SATELLITE});

        let win = new google.maps.InfoWindow();

        this.lugares.forEach(function(lugar) {
            let posicion = lugar.toString().split(","); 
            posicion = { lat: Number(posicion[1]), lng: Number(posicion[0]) };

            let marcador = new google.maps.Marker({
                map: mapa,
                position: posicion
            });
        }.bind(this));

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

}

var mapa = new MapaKML()