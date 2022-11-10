class Calculadora {
    constructor(){
        this.pantalla = "";
        this.op1 = "";
        this.op2 = "";
        this.ope = "";
        this.mostrar = false;
        this.memoria = 0;
        this.raiz = false;
        this.cRaiz = ""
    }

    botonCE(){
        // borra el contenido que hay en la pantalla
        this.pantalla = Number("0");
        document.getElementsByName('pantalla')[0].value = this.pantalla
    }

    botonC(){
        // este boton limpia todo
        this.pantalla = Number("0");
        document.getElementsByName('pantalla')[0].value = this.pantalla 
        this.op1 = "";
        this.op2 = "";
        this.ope = "";
        this.memoria = "";
        this.mostrar = false;
    }

    botonRaizCuadrada(){
        if(!this.raiz) {
            this.raiz = true 
       }
        var res = Math.sqrt(Number(this.pantalla));
        this.pantalla = res;
        document.getElementsByName('pantalla')[0].value = this.pantalla
        this.raiz
    }

    botonPorcentaje(){

        if(this.op1.length == 0){
            this.ope = '*';
            this.op1 = eval(Number(this.pantalla) + "/" + 100)
            this.pantalla = '%'
            document.getElementsByName('pantalla')[0].value = this.pantalla 

        } else {
            this.op2 = Number(this.pantalla)

            var result = ''
            switch(this.ope){
                case '-':
                    result = this.op1 - ((this.op1*this.op2)/100)
                    break;
                case '*':
                    result = this.op1 * this.op2 /100;
                    break;
                case '+':
                    result = this.op1 +((this.op1*this.op2)/100)
                    break;
                case '/':
                    result = this.op1 * 100 / this.op2
                    break;
            }

            try{
                var res = Number(eval(result))
                this.pantalla = res;
                this.op1 = res
                this.ope = '';
                this.op2 = ""
                this.mostrar = true
                document.getElementsByName('pantalla')[0].value = this.pantalla 
            } catch (err) {
                this.pantalla = "ERROR"
                document.getElementsByName('pantalla')[0].value = this.pantalla 
                this.op1 = "";
                this.op2 = "";
                this.ope = "";
                this.mostrar = false;
            }
        }
    
    }

    botonMasMenos(){
        var enPantalla =  Number(this.pantalla);
        try{
            var cambio = eval(enPantalla + "*" + Number(-1));
            this.pantalla = cambio;
            document.getElementsByName('pantalla')[0].value = this.pantalla 
        }catch(err){
            this.pantalla = "ERROR"
            document.getElementsByName('pantalla')[0].value = this.pantalla 
            this.op1 = "";
            this.op2 = "";
            this.ope = "";
            this.mostrar = false;
        }
    }

    digito(number){
        if (this.pantalla === '+' || this.pantalla === '-' || this.pantalla === '*' 
            || this.pantalla === '/' || this.pantalla === '%' ){
                if(this.raiz){
                    this.cRaiz += number + ""
                }

            this.pantalla = number + ""
            document.getElementsByName('pantalla')[0].value = this.pantalla 
        } else {
            if(this.mostrar) {
                this.pantalla = number
                this.mostrar = false
                document.getElementsByName('pantalla')[0].value = this.pantalla 
            } else {
                if(this.pantalla === 0){
                    this.pantalla = number;
                } else {
                    this.pantalla += number + ""
                    
                }
                document.getElementsByName('pantalla')[0].value = this.pantalla 
            }
        }

    }

    mrc(){
        this.pantalla = this.memoria + ""
        document.getElementsByName('pantalla')[0].value =  this.pantalla 
    }

    mMas(){
        try{
            var res = eval(Number(this.memoria) + "+" + Number(this.pantalla))
            this.pantalla = res;
            this.memoria = res
            document.getElementsByName('pantalla')[0].value =  this.pantalla 
        } catch (err) {
            this.pantalla = "ERROR"
            document.getElementsByName('pantalla')[0].value =  this.pantalla 
            this.op1 = "";
            this.op2 = "";
            this.ope = "";
            this.mostrar = false;
        }
    }

    mMenos(){
        try{
            var res = eval(Number(this.memoria) + "-" + Number(this.pantalla))
            this.pantalla = res;
            this.memoria = res
            document.getElementsByName('pantalla')[0].value = this.pantalla 
        } catch (err) {
            this.pantalla = "ERROR"
            document.getElementsByName('pantalla')[0].value = this.pantalla 
            this.op1 = "";
            this.op2 = "";
            this.ope = "";
            this.mostrar = false;
        }
    }


    suma(){
        if(this.op1.length == 0){
            this.ope = '+';
            this.op1 = Number(this.pantalla)
            this.pantalla = '+'
            document.getElementsByName('pantalla')[0].value = this.pantalla 

        } else {
            this.op2 = Number(this.pantalla)
            try{
                var res = eval(this.op1 + this.ope + this.op2)
                this.pantalla = res;
                this.op1 = res
                this.ope = '+';
                this.pantalla += this.ope;
                this.mostrar = true
                document.getElementsByName('pantalla')[0].value = this.pantalla 
            } catch (err) {
                this.pantalla = "ERROR"
                document.getElementsByName('pantalla')[0].value =  this.pantalla 
                this.op1 = "";
                this.op2 = "";
                this.ope = "";
                this.mostrar = false;
            }
        }
    }

    multiplicacion(){
        console.log(this.op1)
        if(this.op1.length == 0){
            this.ope = '*';
            this.op1 = Number(this.pantalla)
            this.pantalla = '*'
            document.getElementsByName('pantalla')[0].value = this.pantalla 

        } else {
            this.op2 = Number(this.pantalla)
            try{
                var res = eval(this.op1 + this.ope + this.op2)
                this.pantalla = res;
                this.op1 = res
                this.ope = '*';
                this.pantalla += this.ope;
                this.mostrar = true
                document.getElementsByName('pantalla')[0].value = this.pantalla 
            } catch (err) {
                this.pantalla = "ERROR"
                document.getElementsByName('pantalla')[0].value =  this.pantalla 
                this.op1 = "";
                this.op2 = "";
                this.ope = "";
                this.mostrar = false;
            }
        }
    }

    resta(){
        if(this.op1.length == 0){
            this.ope = '-';
            this.op1 = Number(this.pantalla)
            this.pantalla = '-'
            document.getElementsByName('pantalla')[0].value =  this.pantalla 
        } else {
            if(this.pantalla === '+' ||  this.pantalla === '*' 
                || this.pantalla === '/' || this.pantalla === '%'){
                this.pantalla =  "-"
                this.ope += '-' 
                document.getElementsByName('pantalla')[0].value =  this.pantalla 
            } else {
                this.op2 = Number(this.pantalla)
                try{
                    var res = eval(this.op1 + this.ope + this.op2)
                    this.pantalla = res;
                    this.op1 = res
                    this.ope = '-';
                    this.pantalla += this.ope;
                    this.mostrar = true
                    document.getElementsByName('pantalla')[0].value = this.pantalla 
                } catch (err) {
                    this.pantalla = "ERROR"
                    document.getElementsByName('pantalla')[0].value = this.pantalla 
                    this.op1 = "";
                    this.op2 = "";
                    this.ope = "";
                    this.mostrar = false;
            }
            }
        }
    }

    division(){
        if(this.op1.length == 0){
            this.ope = '/';
            this.op1 = Number(this.pantalla)
            this.pantalla = '/'
            document.getElementsByName('pantalla')[0].value =  this.pantalla 

        } else {
            this.op2 = Number(this.pantalla)
            try{
                var res = eval(this.op1 + this.ope + this.op2)
                this.pantalla = res;
                this.op1 = res
                this.ope = '/';
                this.pantalla += this.ope;
                this.mostrar = true
                document.getElementsByName('pantalla')[0].value =  this.pantalla 
            } catch (err) {
                document.getElementsByName('pantalla')[0].value =  this.pantalla 
                buton.value = this.pantalla
                this.op1 = "";
                this.op2 = "";
                this.ope = "";
                this.mostrar = false;
            }
        }
    }

    punto(){
        this.pantalla += ".";
        document.getElementsByName('pantalla')[0].value =  this.pantalla 
    }

    igual(){
        if(this.mostrar){
            this.pantalla = this.pantalla.substring(0, this.pantalla.length -1);
            var buton = document.getElementById('pantalla')
            buton.values = this.pantalla
            this.op1 = ""
            this.mostrar = false
        } else {
            this.op2 = Number(this.pantalla)
            try{
                var res = eval(this.op1 + this.ope + this.op2)
                this.pantalla = res;
                this.memoria = res
                this.op1 = ""
                this.op = ""
                document.getElementsByName('pantalla')[0].value = this.pantalla

            } catch (err) {
                this.pantalla = "ERROR"
                document.getElementsByName('pantalla')[0].value = this.pantalla
                this.op1 = "";
                this.op2 = "";
                this.ope = "";
                this.mostrar = false;
            }
        }
    }

    addKeyEvents(){
        document.addEventListener('keydown', (event) => {
            const prueba = event.key;
            if(prueba === '+'){
                calc.suma()
            } else if(prueba == '1' || prueba == '2' || prueba == '3' || 
                      prueba == '4' || prueba == '5' || prueba == '6' || 
                      prueba == '7' || prueba == '8' || prueba == '9' || 
                      prueba == '0'){
                calc.digito(prueba)
            } else if(prueba == '*'){
                calc.botonMul()
            } else if(prueba == '/'){
                calc.botonDiv();
            } else if(prueba == 'Enter'){
                calc.igual();
            } else if(prueba == '%'){
                calc.botonPorcentaje();
            } else if(prueba == 'c' || prueba == 'C'){
                calc.botonC();
            } else if(prueba == 'Delete'){
                calc.botonCE();
            } else if(prueba == '-'){
                calc.botonResta();
            } else if(prueba == 'm' || prueba == 'M' ){
                calc.mrc()
            } else if(prueba == 'n' || prueba == 'N' ){
                calc.mMas()
            } else if(prueba == 'b' || prueba == 'B' ){
                calc.mMenos()
            } else if(prueba == 'E' || prueba == 'e'){
                calc.botonCE()
            } else if(prueba == 'r' || prueba == 'R'){
                calc.raiz();
            } else if(prueba == ','){
                calc.botonMasMenos()
            }
        })
    }
    
}

class CalculadoraCientifica extends Calculadora{

    constructor(){
        super()
        this.parentesis = false
        this.fHyper = false;
        this.NotacionCien = false;
        // meter en flecha un if-else para cambiar el html 
        // luego en cos, sen, tan, meter los arcos 
        this.arco = false
    }

    buttonPI(){
        super.digito(Math.PI)
    }

    btnFact(){
        var res = this.factorialNumero(Number(this.pantalla))
        this.pantalla = res
        document.getElementsByName('pantalla')[0].value = this.pantalla
    }

    factorialNumero(n){
        if(n == 0){
            return 1
        } 
        return n * this.factorialNumero(n - 1)
    }

    buttonChangeGrades(){
        var act = document.getElementsByName('grades')[0].value;
        if(act == 'DEG'){
            document.getElementsByName('grades')[0].value = "RAD";
        } else if (act == 'RAD'){
            document.getElementsByName('grades')[0].value = "GRAD";
        } else {
            document.getElementsByName('grades')[0].value = "DEG";
        }
    }

    seno(){
        var valor = Number(this.pantalla)
        if(document.getElementsByName('grades')[0].value == "DEG"){
            valor = valor * Math.PI / 180
        } else if(document.getElementsByName('grades')[0].value = "GRAD"){
            valor = valor * Math.PI / 200
        }
        if(this.fHyper){
            var res = Math.sinh(Number(valor))
        } else {
            var res = Math.sin(Number(valor))
        }
        this.pantalla = res;
        document.getElementsByName('pantalla')[0].value = this.pantalla
    }

    cos(){
        if(this.fHyper){
            var res = Math.cosh(Number(this.pantalla))
        } else {
            var res = Math.cos(Number(this.pantalla))
        }
        this.pantalla = res;
        document.getElementsByName('pantalla')[0].value = this.pantalla
    }

    tan(){
        if(this.fHyper){
            var res = Math.tanh(Number(this.pantalla))
        } else {
            var res = Math.tan(Number(this.pantalla))
        }
        this.pantalla = res;
        document.getElementsByName('pantalla')[0].value = this.pantalla
    }

    buttonFE(){
        if(this.NotacionCien){
            this.NotacionCien = false;
        } else {
            this.NotacionCien = true
        }
    }

    buttonHYP(){
        if(this.fHyper){
            this.fHyper = false;
        } else {
            this.fHyper = true
        }
    }

    btnCuadrado(){
        var res = Math.pow(Number(this.pantalla), 2)
        this.pantalla = res
        document.getElementsByName('pantalla')[0].value = this.pantalla
    }

    btnElevadoDiez(){
        var res = Math.pow(10, Number(this.pantalla))
        this.pantalla = res
        document.getElementsByName('pantalla')[0].value = this.pantalla
    }

    btnLog(){
        // TODO preguntar si sirve esto
        var res = eval(Math.log(Number(this.pantalla))  + "/" + Math.log(10))
        this.pantalla = res
        document.getElementsByName('pantalla')[0].value = this.pantalla 
    }

    btnBorrar(){
        this.pantalla += "";
        if(this.pantalla.length > 0){
            this.pantalla = this.pantalla.substring(0, this.pantalla.length - 1);
            if(this.pantalla.length == 0){
                this.pantalla = 0
            }
            document.getElementsByName('pantalla')[0].value = this.pantalla 
        }
    }

}

var calc = new CalculadoraCientifica();
calc.addKeyEvents();
