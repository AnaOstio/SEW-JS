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
    }

    botonRaizCuadrada(){
        var res = Number(eval(Number(this.pantalla) + '**' + "(1/2)"));
        this.pantalla = res;
        document.getElementsByName('pantalla')[0].value = this.pantalla
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

var calc = new Calculadora();
calc.addKeyEvents();
