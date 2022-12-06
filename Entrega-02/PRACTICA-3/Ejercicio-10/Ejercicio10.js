class GasNatual{
    constructor(){
        this.url = "https://commodities-api.com/api/latest?access_key=r744jh6kmicqzco10t85x12al9k8u2kjz0s75br0s003v9p0ec2u8avjdhyd&base=EUR&symbols=NG"

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