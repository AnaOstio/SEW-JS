"use strict";
class Geolocalizacion {
    
    constructor(){}


    unSol(){
        /**43.363319598583566, -5.845033944887411 **/
        var mestura = {lat: 43.363319598583566, lng: -5.845033944887411}
        /**43.54011190407869, -6.593868782286271 */
        var casaConsuelo = {lat: 43.54011190407869, lng: -6.593868782286271}

        var datos = "<h1>Restaurante Mestura, Oviedo</h1>"
        var dato2 = "<h1>Restaurante Casa, Otur</h1>"

        this.mostrarEnMapa(mestura, casaConsuelo, datos, dato2);
    }

    dosSol(){

        /**43.55884972750697, -6.636578815237713 */
        var regueriro = {lat: 43.55884972750697, lng: -6.636578815237713}

        /**43.57746971773232, -5.965893988253164 */
        var balneario = {lat: 43.57746971773232, lng: -5.965893988253164}

        var datos = "<h1>Restaurante Regueiro, Tox</h1>"
        var dato2 = "<h1>Restaurante Real Balneario, Salinas</h1>"

        this.mostrarEnMapa(regueriro, balneario, datos, dato2);
        
    }

    tresSol(){
        /**43.41852221648728, -5.193194290108866 */
        var marcial = {lat: 43.41852221648728, lng: -5.193194290108866}

        /**43.555327968061746, -5.766591877131261 */
        var gerardo = {lat: 43.5553279680617468, lng: -5.766591877131261}

        var datos = "<h1>Restaurante Casa Marcial, Arriondas</h1>"
        var dato2 = "<h1>Restaurante Casa Gerardo, Prendes</h1>"

        this.mostrarEnMapa(marcial, gerardo, datos, dato2);
    }


    mostrarEnMapa(res1, res2, datoRes1, datoRes2){
        var mapa = new google.maps.Map(document.getElementsByTagName('section')[0], 
            {
                zoom: 8, center: res1
            }
        );

        var info = new google.maps.InfoWindow({
            content: datoRes1
        })

        var info2 = new google.maps.InfoWindow({
            content: datoRes2
        })

        var marc = new google.maps.Marker({
            position: res1, map:mapa, title: "restaurante " + datoRes1
        })
        marc.addListener("click", () => {
            info.open({
                anchor: marc, 
                mapa
            })
        })

        var marc2 = new google.maps.Marker({
            position: res2, map:mapa, title: "restaurante " + datoRes2
        })
        marc2.addListener("click", () => {
            info2.open({
                anchor: marc2, 
                mapa
            })
        })
    }


}



var miPosicion = new Geolocalizacion();
