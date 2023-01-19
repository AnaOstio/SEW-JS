class Meteo{
    constructor(ciu){
        this.apikey = "generar_api"
        this.ciudad = ciu
        this.pais = "es"
        this.unidades = "&units=metric";
        this.idioma = "&lang=es";
        this.url = "https://api.openweathermap.org/data/2.5/weather?q=" + this.ciudad +  ","+ this.pais + this.unidades + this.idioma + "&APPID=" + this.apikey;
    }

    cargarDatos(){
        $.ajax({
            dataType: "json",
            url: this.url,
            method: 'GET',
            success: function(data){
                var datos = "<p>Datos obtenidos el, " + new Date(data.dt *1000).toLocaleDateString() + " a las " + new Date(data.dt *1000).toLocaleTimeString()  + "</p>"
                datos += "<ul><li>Ciudad: " + data.name + ", " + data.sys.country +"</li>"
                datos += "<li>Coordenadas:" + data.coord.lat + ", " + data.coord.lon  +"</li>"
                datos += "<li>Temperatura actual" + data.main.temp +", con mínimas de: "+  data.main.temp_min +" y máximas de: " + + data.main.temp_max +  "</li>"
                datos += "<li>Humedad:" + data.main.humidity + " y presion de: " + data.main.pressure  +  "</li>"
                datos += "<li>Amanecer a las: " + new Date(data.sys.sunrise * 1000).toLocaleTimeString() + " y oscurece a las " +new Date(data.sys.sunset * 1000).toLocaleTimeString() + "</li>"
                datos += "<li>Viento, direccion " + data.wind.deg  + " con una velocidad de " + data.wind.speed +  "</li>"
                datos += "<li>Descripcion: " + data.weather[0].description + "</li>"
                datos += "<li>Visibilidad: " + data.visibility + "m, ademas de una nubosidad de " + data.clouds.all + "%</li></ul>"
                datos += "<p>A continuacion se muestra una imagen del timepo que hace</p>"
                datos += "<img src =\"https://openweathermap.org/img/w/" + data.weather[0].icon + ".png\"" + "alt=\"Estado actual de \"/>"
                $("main").html(datos);
                
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
