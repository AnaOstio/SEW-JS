class Meteo{
    constructor(ciu){
        this.apikey = "generar_api"
        this.ciudad = ciu
        this.tipo = "&mode=xml"
        this.pais = "es"
        this.unidades = "&units=metric";
        this.idioma = "&lang=es";
        this.url = "https://api.openweathermap.org/data/2.5/weather?q=" + this.ciudad + this.tipo + this.unidades + this.idioma + "&APPID=" + this.apikey;
    }

    cargarDatos(){
        $.ajax({
            dataType: "xml",
            url: this.url,
            method: 'GET',
            success: function(datos){
               var ciudad                = $('city',datos).attr("name");
               var longitud              = $('coord',datos).attr("lon");
               var latitud               = $('coord',datos).attr("lat");
               var pais                  = $('country',datos).text();
               var amanecer              = $('sun',datos).attr("rise");
               var minutosZonaHoraria    = new Date().getTimezoneOffset();
               var amanecerMiliSeg1970   = Date.parse(amanecer);
                   amanecerMiliSeg1970  -= minutosZonaHoraria * 60 * 1000;
               var amanecerLocal         = (new Date(amanecerMiliSeg1970)).toLocaleTimeString("es-ES");
               var oscurecer             = $('sun',datos).attr("set");          
               var oscurecerMiliSeg1970  = Date.parse(oscurecer);
                   oscurecerMiliSeg1970  -= minutosZonaHoraria * 60 * 1000;
               var oscurecerLocal        = (new Date(oscurecerMiliSeg1970)).toLocaleTimeString("es-ES");
               var temperatura           = $('temperature',datos).attr("value");
               var temperaturaMin        = $('temperature',datos).attr("min");
               var temperaturaMax        = $('temperature',datos).attr("max");
               var temperaturaUnit       = $('temperature',datos).attr("unit");
               var humedad               = $('humidity',datos).attr("value");
               var humedadUnit           = $('humidity',datos).attr("unit");
               var presion               = $('pressure',datos).attr("value");
               var presionUnit           = $('pressure',datos).attr("unit");
               var velocidadViento       = $('speed',datos).attr("value");
               var nombreViento          = $('speed',datos).attr("name");
               var direccionViento       = $('direction',datos).attr("value");
               var codigoViento          = $('direction',datos).attr("code");
               var nombreDireccionViento = $('direction',datos).attr("name");
               var nubosidad             = $('clouds',datos).attr("value");
               var nombreNubosidad       = $('clouds',datos).attr("name");
               var visibilidad           = $('visibility',datos).attr("value");
               var precipitacionValue    = $('precipitation',datos).attr("value");
               var precipitacionMode     = $('precipitation',datos).attr("mode");
               var descripcion           = $('weather',datos).attr("value");
               var horaMedida            = $('lastupdate',datos).attr("value");
               var horaMedidaMiliSeg1970 = Date.parse(horaMedida);
                   horaMedidaMiliSeg1970 -= minutosZonaHoraria * 60 * 1000;
               var horaMedidaLocal       = (new Date(horaMedidaMiliSeg1970)).toLocaleTimeString("es-ES");
               var fechaMedidaLocal      = (new Date(horaMedidaMiliSeg1970)).toLocaleDateString("es-ES");
               var icono                 = $('weather',datos).attr("icon");
               
               var stringDatos =  "<ul>"
                   stringDatos += "<li>Ciudad: " + ciudad + "</li>";
                   stringDatos += "<li>Longitud: " + longitud + " grados</li>";
                   stringDatos += "<li>Latitud: " + latitud + " grados</li>";
                   stringDatos += "<li>País: " + pais + "</li>";
                   stringDatos += "<li>Amanece a las: " + amanecerLocal + "</li>";
                   stringDatos += "<li>Oscurece a las: " + oscurecerLocal + "</li>";
                   stringDatos += "<li>Temperatura: " + temperatura + " grados Celsius</li>";
                   stringDatos += "<li>Temperatura mínima: " + temperaturaMin + " grados Celsius</li>";
                   stringDatos += "<li>Temperatura máxima: " + temperaturaMax + " grados Celsius</li>";
                   stringDatos += "<li>Temperatura (unidades): " + temperaturaUnit + "</li>";
                   stringDatos += "<li>Humedad: " + humedad + " " + humedadUnit + "</li>";
                   stringDatos += "<li>Presión: " + presion + " " + presionUnit + "</li>";
                   stringDatos += "<li>Velocidad del viento: " + velocidadViento + " metros/segundo</li>";
                   stringDatos += "<li>Nombre del viento: " + nombreViento + "</li>";
                   stringDatos += "<li>Dirección del viento: " + direccionViento + " grados</li>";
                   stringDatos += "<li>Código del viento: " + codigoViento + "</li>";
                   stringDatos += "<li>Nombre del viento: " + nombreDireccionViento + "</li>";
                   stringDatos += "<li>Nubosidad: " + nubosidad + "</li>";
                   stringDatos += "<li>Nombre nubosidad: " + nombreNubosidad + "</li>";
                   stringDatos += "<li>Visibilidad: " + visibilidad + " metros</li>";
                   stringDatos += "<li>Precipitación valor: " + precipitacionValue + "</li>";
                   stringDatos += "<li>Precipitación modo: " + precipitacionMode + "</li>";
                   stringDatos += "<li>Descripción: " + descripcion + "</li>";
                   stringDatos += "<li>Hora de la medida: " + horaMedidaLocal + "</li>";
                   stringDatos += "<li>Fecha de la medida: " + fechaMedidaLocal + "</li>";
                   stringDatos += "<li>Estado actual: </li></ul>" + "<img src=\"https://openweathermap.org/img/w/"  +  icono  + ".png\"" +  "alt=\" Estado actual\" />" ;
                
                   $("main").html(stringDatos);
            },
            error:function(){
                $("h3").html("HA OCURRIDO UN ERROR AL OBTENER LA INFORMACION DE <a href='http://openweathermap.org'>OpenWeatherMap</a>")

            }
        });
    }
}

var m = new Meteo("Oviedo")
var l = new Meteo("Langreo")
var b = new Meteo("Barcelona")
var s = new Meteo("Soria")
var n = new Meteo("Madrid")
