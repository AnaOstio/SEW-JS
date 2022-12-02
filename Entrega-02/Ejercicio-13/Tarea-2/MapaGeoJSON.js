"use strict"
class MapaGeoJSON{
    constructor(){}

    initMap(files){
        let archivo = files[0];

        var tipo = archivo.name

        if (tipo.match(/.GeoJSON/)) { 
            let centro = { lat: 43.52622, lng: -5.65567 };
            let mapa = new google.maps.Map(document.querySelector("main"), 
                    {zoom: 8, center: centro, mapTypeId: google.maps.MapTypeId.SATELLITE});

            let win = new google.maps.InfoWindow();

            let reader = new FileReader();
            reader.onload = function() {
                mapa.data.addGeoJson(JSON.parse(reader.result));
            };
            reader.readAsText(archivo);

            mapa.data.addListener('click', function(event) {
                win.setPosition(event.feature.getGeometry().get());
                win.setContent(event.feature.getProperty("name"));
                win.open(mapa);
            });
        } else {
            $('p').text("Solo se aceptan archivos de tipo geojson")
        }
    }
}

var mapa = new MapaGeoJSON();