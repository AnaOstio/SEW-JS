class GasNatual{
    constructor(){
        this.apiKey = "yUn1nEGsnmt13rLSK53wtlbMwwaglJ1dq9cBSwbn";
        "http://api.eia.gov/series/?series_id=NG.N3010SP3.M&api_key=yUn1nEGsnmt13rLSK53wtlbMwwaglJ1dq9cBSwbn&out=json"
        this.url = "http://api.eia.gov/category/?api_key=" + this.apiKey + "&category_id=461215&out=json"

    }

    prueba(){
        $.ajax({
            dataType: "json",
            url: this.url,
            method: 'GET',
            success: function(data) {
                console.log(data)
            },
            error: function() {
            }
        });
    }
}

var m = new GasNatual()