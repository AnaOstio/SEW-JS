class Meteo{
    constructor(){
        this.apikey = "d9e1d0aa1e31ad46ec137b434cea4854"
        this.ciudad = "Oviedo";
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
                var datos = "<p>Ciudad: " + data.name + ", " + data.sys.country +"</p>"
                datos += "<p>Coordenadas:" + data.coord.lat + ", " + data.coord.lon  +"</p>"
                datos += "<p>Temperatura actual" + data.main.temp +", con mínimas de: "+  data.main.temp_min +" y máximas de: " + + data.main.temp_max +  "</p>"
                datos += "<p>Humedad:" + data.main.humidity + " y presion de: " + data.main.pressure  +  "</p>"
                console.log(datos)
            },
            error:function(){
                console.log("error") 
            }
        });
    }
}

var m = new Meteo()