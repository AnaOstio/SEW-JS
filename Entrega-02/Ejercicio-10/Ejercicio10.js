class GasNatual{
    constructor(){
        this.url = "https://commodities-api.com/api/latest?access_key=generar_api&base=EUR&symbols=NG"

    }

    prueba(){
        $.ajax({
            dataType: "json",
            url: this.url,
            method: 'GET',
            success: function(data) {
                var precio = 1 / data.data.rates.NG;
                $('p:first').text("El precio actual de gas natual es:" + precio + "€");
            },
            error: function() {
                $('p:first').text("No se ha podido acceder a este valor");
            }
        });
    }
}

var m = new GasNatual()
