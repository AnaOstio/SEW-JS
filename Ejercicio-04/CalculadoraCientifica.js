class Calculadora {
    constructor(){
        this.pantalla = "";
        this.op1 = "";
        this.op2 = "";
        this.ope = "";
        this.mostrar = false;
        this.memoria = 0;
        this.cRaiz = ""
        this.contador = 2
        this.esMult = false
        this.esDiv = false
        this.contadorDiv = -1;
        this.resultado = false
        this.aux = 0
        this.hayResta = false
        this.raiz = false
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
        this.contador = 2
        this.esMult = false
        this.contadorDiv = -1
        this.esDiv = false
        this.resultado = false
        this.aux = 0
        this.raiz = false
    }

    botonRaizCuadrada(){
        var res = Number(eval(Number(this.pantalla) + '**' + "(1/2)"));
        this.pantalla = res;
        document.getElementsByName('pantalla')[0].value = this.pantalla
        this.raiz = true
        this.ope = "*"
        this.op1  = res
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
                    result = this.op1 + ((this.op1*this.op2)/100)
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
                this.memoria = "";
                this.mostrar = false;
                this.contador = 2
                this.esMult = false
                this.contadorDiv = -1
                this.esDiv = false
                this.resultado = false
                this.aux = 0
            }
        }
    
    }

    botonMasMenos(){
        var enPantalla =  Number(this.pantalla);
        try{
            var cambio = Number(eval(enPantalla + "*" + Number(-1)));
            this.pantalla = cambio;
            document.getElementsByName('pantalla')[0].value = this.pantalla 
        }catch(err){
            this.pantalla = "ERROR"
            document.getElementsByName('pantalla')[0].value = this.pantalla 
            this.op1 = "";
            this.op2 = "";
            this.ope = "";
            this.memoria = "";
            this.mostrar = false;
            this.contador = 2
            this.esMult = false
            this.contadorDiv = -1
            this.esDiv = false
            this.resultado = false
            this.aux = 0
        }
    }

    digito(number){

        if( this.pantalla === '-' && this.ope === "-"){
            this.pantalla += number + ""
            document.getElementsByName('pantalla')[0].value = this.pantalla 
        } else  if (this.pantalla === '+'  || this.pantalla === '*' 
            || this.pantalla === '/' || this.pantalla === '%' || this.pantalla === '-'){
            this.pantalla = number + ""
            document.getElementsByName('pantalla')[0].value = this.pantalla 
        } else if(this.raiz){
            this.op1 = this.pantalla
            this.ope = "*"
            this.pantalla = number
            document.getElementsByName('pantalla')[0].value = number 
            console.log(this.op1, this.ope, this.op2)
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
            var res = Number(eval(Number(this.memoria) + "+" + Number(this.pantalla)))
            this.pantalla = res;
            this.memoria = res
            document.getElementsByName('pantalla')[0].value =  this.pantalla 
        } catch (err) {
            this.pantalla = "ERROR"
            document.getElementsByName('pantalla')[0].value =  this.pantalla 
            this.op1 = "";
            this.op2 = "";
            this.ope = "";
            this.memoria = "";
            this.mostrar = false;
            this.contador = 2
            this.esMult = false
            this.contadorDiv = -1
            this.esDiv = false
            this.resultado = false
            this.aux = 0
        }
    }

    mMenos(){
        try{
            var res = Number(eval(Number(this.memoria) + "-" + Number(this.pantalla)))
            this.pantalla = res;
            this.memoria = res
            document.getElementsByName('pantalla')[0].value = this.pantalla 
        } catch (err) {
            this.pantalla = "ERROR"
            document.getElementsByName('pantalla')[0].value = this.pantalla 
            this.op1 = "";
            this.op2 = "";
            this.ope = "";
            this.memoria = "";
            this.mostrar = false;
            this.contador = 2
            this.esMult = false
            this.contadorDiv = -1
            this.esDiv = false
            this.resultado = false
            this.aux = 0
        }
    }


    suma(){
        this.ope = '+';
        this.op1 = Number(this.pantalla)
        this.pantalla = '+'
        document.getElementsByName('pantalla')[0].value = this.pantalla 
    }

    multiplicacion(){
        this.ope = '*';
        this.op1 = Number(this.pantalla)
        this.pantalla = '*'
        document.getElementsByName('pantalla')[0].value = this.pantalla 

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
                this.ope += "-"
                document.getElementsByName('pantalla')[0].value =  this.pantalla 
            } else {
                this.operando2 = Number(this.pantalla);
            }
        }
    }

    division(){
        this.ope = '/';
        this.op1 = Number(this.pantalla)
        this.pantalla = '/'
        document.getElementsByName('pantalla')[0].value =  this.pantalla 
    }

    punto(){
        this.pantalla += ".";
        document.getElementsByName('pantalla')[0].value =  this.pantalla 
    }

    igual(){
        
        if(this.mostrar){
            this.pantalla = this.pantalla.substring(0, this.pantalla.length -1);
            var buton =  document.getElementsByName('pantalla')[0]
            buton.value = this.pantalla
            this.op1 = ""
            this.mostrar = false
        } else {
            this.op2 = this.pantalla
            if((this.op2 == '*')){
                this.esMult = true
            } else if (this.contador >= 3){
                this.esMult = true;
            } else if ( this.op2 == '/') {
                this.esDiv = true;
            } else if (this.contadorDiv <= -2){
                this.esDiv = true
            } else {
                this.esMult = false
                this.esDiv = false
            }
            
            if( this.esMult){
                var res = Number(eval(Number(this.op1) + "**" + Number(this.contador)))
                this.pantalla = res
                this.contador = this.contador + 1
                this.op2 = "*"
                document.getElementsByName('pantalla')[0].value = this.pantalla
            } else if(this.esDiv){
                var res = Number(eval(Number(this.op1) + "**" + Number(this.contadorDiv)))
                this.pantalla = res
                this.contadorDiv = this.contadorDiv - 1
                this.op2 = "*"
                document.getElementsByName('pantalla')[0].value = this.pantalla
            } else if(this.raiz){
                this.op2 = this.pantalla
                console.log("entro soy concha", this.op1, this.op2, this.ope)
                var res = Number(eval(Number(this.op1) + this.ope + Number(this.op2)))
                document.getElementsByName('pantalla')[0].value = res
                this.pantalla = res
                this.raiz = false
            } else{
                
                try{
                    if(this.resultado){
                        if(this.op2 != this.pantalla){
                            var res = Number(eval(Number(this.op1) + this.ope.slice(0,1) + Number(this.aux)))
                        } else {
                            var res = Number(eval(Number(this.op1) + this.ope.slice(0,1) + Number(this.op2)))
                        }
                        this.op1 = res 
                        this.pantalla = res;
                        document.getElementsByName('pantalla')[0].value = this.pantalla
                    } else {
                        
                        if(this.op1 === ''){
                            console.log("hola")
                            this.op1 = document.getElementsByName('pantalla')[0].value
                            var res = Number(eval(Number(this.op1) + "**" + Number(this.contador)))
                            this.pantalla = res
                            this.contador = this.contador + 1
                            this.op2 = "*"
                            this.esMult = true
                            document.getElementsByName('pantalla')[0].value = this.pantalla
                        } else {

                            this.op2 = this.pantalla
                            if(this.op2.slice(0,1) === '-' && this.ope === '-'){
                                var res = Number(eval(Number(this.op1) + "-" + Number(this.op2.slice(1))))
                            } else {
                                var res = Number(eval(Number(this.op1) + this.ope.slice(0,1) + Number(this.op2)))
                            }
                            this.pantalla = res;
                            this.op1 = res 
                            this.aux = this.op2
                            
                            document.getElementsByName('pantalla')[0].value = this.pantalla
                            this.resultado = true
                        }
                    }
                } catch (err) {
                    this.pantalla = "ERROR"
                    document.getElementsByName('pantalla')[0].value = this.pantalla
                    this.op1 = "";
                    this.op2 = "";
                    this.ope = "";
                    this.memoria = "";
                    this.mostrar = false;
                    this.contador = 2
                    this.esMult = false
                    this.contadorDiv = -1
                    this.esDiv = false
                    this.resultado = false
                    this.aux = 0
                }
            }
        }
    }

    addKeyEvents(){
        document.addEventListener('keydown', (event) => {
            this.tipoTecla(event.key)
        })
    }

    tipoTecla(prueba){
        if(prueba === '+'){
            calc.suma()
        } else if(prueba == '1' || prueba == '2' || prueba == '3' || 
                  prueba == '4' || prueba == '5' || prueba == '6' || 
                  prueba == '7' || prueba == '8' || prueba == '9' || 
                  prueba == '0'){
            calc.digito(prueba)
        } else if(prueba == '*'){
            calc.multiplicacion()
        } else if(prueba == '/'){
            calc.division();
        } else if(prueba == 'Enter'){
            calc.igual();
        } else if(prueba == '%'){
            calc.botonPorcentaje();
        } else if(prueba == 'c' || prueba == 'C'){
            calc.botonC();
        } else if(prueba == 'Delete'){
            calc.botonCE();
        } else if(prueba == '-'){
            calc.resta();
        } else if(prueba == 'm' || prueba == 'M' ){
            calc.mrc()
        } else if(prueba == 'n' || prueba == 'N' ){
            calc.mMas()
        } else if(prueba == 'b' || prueba == 'B' ){
            calc.mMenos()
        } else if(prueba == 'r' || prueba == 'R'){
            calc.raiz();
        } else if(prueba == ','){
            calc.botonMasMenos()
        }
    }
    
}

class CalculadoraCientifica {

    constructor(){
        this.cadena = ""
        this.flecha = false
        this.hyp = false
        this.e = false
        this.paE = ""
        this.notacion = false;
        this.memoria = 0
    }


    mMas(){
        this.memoria = Number(document.getElementsByName('pantalla')[0].value) + Number(this.memoria)
        document.getElementsByName('pantalla')[0].value = this.memoria
    }

    mMenos(){
        this.memoria = document.getElementsByName('pantalla')[0].value - this.memoria
        document.getElementsByName('pantalla')[0].value = this.memoria
    }

    btnLimpiarMem(){
        this.memoria = 0
    }

    mrc(){
        document.getElementsByName('pantalla')[0].value = this.memoria
    }

    guardarMem(){
        this.memoria = document.getElementsByName('pantalla')[0].value  
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

    changeHyper(){
        if(!this.hyp){
            this.hyp = true
        } else {
            this.hyp = false;
        }
        this.changeValores();
    }

    shift(){
        if(!this.flecha){
            this.flecha = true
        } else {
            this.flecha = false;
        }
        this.changeValores();
    }

    changeValores(){
        if(!this.flecha && this.hyp){
            document.getElementsByName('seno')[0].value = "sinh"
            document.getElementsByName('cos')[0].value = "cosh"
            document.getElementsByName('tan')[0].value = "tanh"
        } else if(this.flecha && this.hyp){
            document.getElementsByName('seno')[0].value = "asinh"
            document.getElementsByName('cos')[0].value = "acosh"
            document.getElementsByName('tan')[0].value = "atanh"
        } else if(this.flecha && !this.hyp){
            document.getElementsByName('seno')[0].value = "asin"
            document.getElementsByName('cos')[0].value = "acos"
            document.getElementsByName('tan')[0].value = "atan"
        } else if(!this.flecha && !this.hyp){
            document.getElementsByName('seno')[0].value = "sin"
            document.getElementsByName('cos')[0].value = "cos"
            document.getElementsByName('tan')[0].value = "tan"
        }
    }

    seno(){
        var rad = this.changeToRad(document.getElementsByName('grades')[0].value, document.getElementsByName('pantalla')[0].value)
        try {
            var rad = Number(this.changeToRad(document.getElementsByName('grades')[0].value, document.getElementsByName('pantalla')[0].value))
            var res = 0
            if(document.getElementsByName('seno')[0].value === "sin"){
                res = Math.sin(rad)
            } else if(document.getElementsByName('seno')[0].value === "sinh"){
                res = Math.sinh(rad)
            } else if( document.getElementsByName('seno')[0].value === "asinh"){
                res = Math.asinh(rad)
            } else if(document.getElementsByName('seno')[0].value === "asin"){
                res = Math.asin(rad)
            } 
            document.getElementsByName('pantalla')[0].value = res
        } catch (error) {
            this.cadena = ""
            document.getElementsByName('pantalla')[0].value = "ERROR"
        }
        
    }

    cos(){
        var rad = this.changeToRad(document.getElementsByName('grades')[0].value, document.getElementsByName('pantalla')[0].value)
        try {
            var rad = Number(this.changeToRad(document.getElementsByName('grades')[0].value, document.getElementsByName('pantalla')[0].value))
            var res = 0
            if(document.getElementsByName('cos')[0].value === "cos"){
                res = Math.cos(rad)
            } else if(document.getElementsByName('cos')[0].value === "cosh"){
                res = Math.cosh(rad)
            } else if( document.getElementsByName('cos')[0].value === "acosh"){
                res = Math.acosh(rad)
            } else if(document.getElementsByName('cos')[0].value === "acos"){
                res = Math.acos(rad)
            } 
            document.getElementsByName('pantalla')[0].value = res
        } catch (error) {
            this.cadena = ""
            document.getElementsByName('pantalla')[0].value = "ERROR"
        }
        
    }

    tan(){
        var rad = this.changeToRad(document.getElementsByName('grades')[0].value, document.getElementsByName('pantalla')[0].value)
        try {
            var rad = Number(this.changeToRad(document.getElementsByName('grades')[0].value, document.getElementsByName('pantalla')[0].value))
            var res = 0
            if(document.getElementsByName('tan')[0].value === "tan"){
                res = Math.tan(rad)
            } else if(document.getElementsByName('tan')[0].value === "tanh"){
                res = Math.tanh(rad)
            } else if( document.getElementsByName('tan')[0].value === "atanh"){
                res = Math.atanh(rad)
            } else if(document.getElementsByName('tan')[0].value === "atan"){
                res = Math.atan(rad)
            } 
            document.getElementsByName('pantalla')[0].value = res
        } catch (error) {
            this.cadena = ""
            document.getElementsByName('pantalla')[0].value = "ERROR"
        }
        
    }

    changeToRad(tipo, valor){
        if(tipo === "RAD"){
            return valor
        } else if(tipo === "GRAD"){
            return valor * ( Math.PI / 200)
        } else if(tipo === "DEG"){
            return valor * (Math.PI / 180)
        }
    }

    notacionC(){
        if(!this.notacion){
            this.notacion = true
            document.getElementsByName('pantalla')[0].value = Number(document.getElementsByName('pantalla')[0].value).toExponential()
        } else {
            this.notacion = false
            var prueba = Number(document.getElementsByName('pantalla')[0].value)
            var i = document.getElementsByName('pantalla')[0].value.length - 4
            document.getElementsByName('pantalla')[0].value = prueba / (10**(-1 * i))
        }
    }

    botonC(){
        this.cadena = ""
        this.flecha = false
        this.hyp = false
        this.paE = ""
        this.e = false
        this.notacion = false;
        this.changeValores()
    }

    botonCE(){
        this.cadena = ""
        document.getElementsByName('pantalla')[0].value = this.cadena
    }

    botonMasMenos(){
        super.botonMasMenos();
    }

    botonRaizCuadrada(){
        try {
            var res = Number(eval(Number(eval(document.getElementsByName('pantalla')[0].value)) + '**' + "(1/2)"));
            this.cadena = res
            document.getElementsByName('pantalla')[0].value = this.cadena
            
        } catch (error) {
            this.cadena = ""
            document.getElementsByName('pantalla')[0].value = "ERROR"
        }
    }

    botonPorcentaje(){
        
    }

    digito(n){
        this.cadena = document.getElementsByName('pantalla')[0].value + n
        document.getElementsByName('pantalla')[0].value = this.cadena
    }

    multiplicacion(){
        this.cadena = document.getElementsByName('pantalla')[0].value + "*"
        document.getElementsByName('pantalla')[0].value = this.cadena
    }


    suma(){
        this.cadena = document.getElementsByName('pantalla')[0].value + "+"
        document.getElementsByName('pantalla')[0].value = this.cadena
    }

    resta(){
        this.cadena = document.getElementsByName('pantalla')[0].value + "-"
        document.getElementsByName('pantalla')[0].value = this.cadena
    }

    division(){
        this.cadena = document.getElementsByName('pantalla')[0].value + "/"
        document.getElementsByName('pantalla')[0].value = this.cadena
    }

    punto(){
        this.cadena = document.getElementsByName('pantalla')[0].value + "."
        document.getElementsByName('pantalla')[0].value = this.cadena
    }
    
    

    igual(){
        if(this.e){
            var pos = 0
            for(var i = 0; i < document.getElementsByName('pantalla')[0].value.length; i++){
                if(document.getElementsByName('pantalla')[0].value[i] === 'e'){
                    pos = i;
                    break;
                }
            }
            var prueba = document.getElementsByName('pantalla')[0].value;
            var p = prueba.slice(i + 2, prueba.length)
            var exponente = Number(eval(p))
            try{
                var result = eval(this.paE + "*(10**" + exponente + ")")
                document.getElementsByName('pantalla')[0].value = result
                this.paE = ""
                this.e = false
            } catch(error){
                this.cadena = ""
                document.getElementsByName('pantalla')[0].value = "ERROR"
            }
        } else {
            try {
                var res = Number(eval(document.getElementsByName('pantalla')[0].value))
                document.getElementsByName('pantalla')[0].value = res
            } catch (error) {
                this.cadena = ""
                document.getElementsByName('pantalla')[0].value = "ERROR"
            }
        }
    }

    elevadoCuadrado(){
        this.cadena = document.getElementsByName('pantalla')[0].value + "**2"
        document.getElementsByName('pantalla')[0].value = this.cadena
    }


    xElevadoY(){
        this.cadena = document.getElementsByName('pantalla')[0].value + "**"
        document.getElementsByName('pantalla')[0].value = this.cadena
    }

    abrirParentesis(){
        this.cadena = document.getElementsByName('pantalla')[0].value + "("
        document.getElementsByName('pantalla')[0].value = this.cadena
    }

    cerrarParentesis(){
        this.cadena = document.getElementsByName('pantalla')[0].value + ")"
        document.getElementsByName('pantalla')[0].value = this.cadena
    }

    btnFact(){
        try {
            var res = Number(eval(document.getElementsByName('pantalla')[0].value))
            var sol = this.factorial(res)
            this.cadena = sol
            document.getElementsByName('pantalla')[0].value = this.cadena
        } catch (error) {
            this.cadena = ""
            document.getElementsByName('pantalla')[0].value = "ERROR"
        }
    }

    factorial(n) {
        if (n == 0) {
            return 1;
        }
        return n * this.factorial(n - 1);
    }

    buttonPI(){
        this.cadena = document.getElementsByName('pantalla')[0].value + Math.PI
        document.getElementsByName('pantalla')[0].value = this.cadena
    }

    mod(){
        this.cadena = document.getElementsByName('pantalla')[0].value + "%"
        document.getElementsByName('pantalla')[0].value = this.cadena
    }

    elevadoDiez(){
        this.cadena = document.getElementsByName('pantalla')[0].value + "10**"
        document.getElementsByName('pantalla')[0].value = this.cadena
    }

    log(){
        try {
            var res = Number(eval(document.getElementsByName('pantalla')[0].value))
            var sol = Math.log10(res)
            this.cadena = sol
            document.getElementsByName('pantalla')[0].value = this.cadena
        } catch (error) {
            this.cadena = ""
            document.getElementsByName('pantalla')[0].value = "ERROR"
        }
    }

    exp(){
        this.paE = document.getElementsByName('pantalla')[0].value 
        this.cadena = document.getElementsByName('pantalla')[0].value + ",e+"
        document.getElementsByName('pantalla')[0].value = this.cadena
        this.e = true;
    }

    borrar(){
        document.getElementsByName('pantalla')[0].value = 
            document.getElementsByName('pantalla')[0].value.substring(0, document.getElementsByName('pantalla')[0].value.length - 1)
    }

    addKeyEvents(){
        document.addEventListener('keydown', (event) => {
            this.tipoTecla(event.key)
        })
    }

    tipoTecla(tecla){
        if(tecla === '+'){
            calc.suma()
        } else if(tecla == '1' || tecla == '2' || tecla == '3' || 
        tecla == '4' || tecla == '5' || tecla == '6' || 
        tecla == '7' || tecla == '8' || tecla == '9' || 
        tecla == '0'){
            calc.digito(tecla)
        } else if(tecla == '*'){
            calc.multiplicacion()
        } else if(tecla == '/'){
            calc.division();
        } else if(tecla == 'Enter'){
            calc.igual();
        } else if(tecla == '%'){
            calc.mod();
        } else if(tecla == 'c' || tecla == 'C'){
            calc.botonC();
        } else if(tecla == 'Delete'){
            calc.botonCE();
        } else if(tecla == '-'){
            calc.resta();
        } else if(tecla == 'm' || tecla == 'M' ){
            calc.mrc()
        } else if(tecla == 'n' || tecla == 'N' ){
            calc.mMas()
        } else if(tecla == 'b' || tecla == 'B' ){
            calc.mMenos()
        } else if(tecla == 'r' || tecla == 'R'){
            calc.raiz();
        } else if(tecla == ','){
            calc.botonMasMenos()
        } else if(tecla === 'l' || tecla === 'L'){
            calc.log()
        } else if(tecla === 'f' || tecla === 'F'){
            calc.factorial()
        } else if(tecla === 'Shift'){
            calc.shift()
        } else if(tecla === 'Tab'){
            calc.buttonChangeGrades()
        } else if(tecla === 'h' || tecla === 'H'){
            calc.changeHyper()
        } else if(tecla === 'i' || tecla === 'I'){
            calc.buttonPI()
        } else if(tecla === 'x' || tecla === 'X'){
            calc.exp()
        } else if(tecla === '('){
            calc.abrirParentesis()
        } else if(tecla === ')'){
            calc.cerrarParentesis()
        } else if(tecla === '.'){
            calc.punto()
        } else if(tecla === 'p' || tecla === 'P'){
            calc.elevadoCuadrado()
        } else if(tecla === 'o' || tecla === 'O'){
            calc.elevadoDiez()
        } else if(tecla === 'u' || tecla === 'U'){
            calc.xElevadoY()
        } else if(tecla === 't' || tecla === 'T'){
            calc.notacionC()    
        } else if(tecla === 'v' || tecla === 'V'){
            calc.btnLimpiarMem()
        } else if(tecla === 'z' || tecla === 'Z'){
            calc.guardarMem()
        }
    }
}

var calc = new CalculadoraCientifica();
calc.addKeyEvents()
