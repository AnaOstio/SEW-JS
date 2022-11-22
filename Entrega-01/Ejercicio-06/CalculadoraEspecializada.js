class CalculadoraRPN{

    constructor(){
        this.stack = new Array()
        this.actual = ""

        document.addEventListener('keydown', (event) => {
            const letra = event.key;
            calc.tipoTecla(letra)
        })
    }

    digito(n){
        this.actual += n
    }

    punto(){
        if(this.actual + "" != "NaN"){
            this.actual = this.actual + "."
        }
    }

    enter(){
        var num = Number(this.actual)
        if(num != "NaN"){
            this.stack.push(num)
            document.getElementsByName('pantalla')[0].textContent += num + "\n"
            this.actual = ""
        }
    }

    suma(){
        if(this.stack.length >= 2){
            var op1 = this.stack.pop()
            var op2 = this.stack.pop()
            var sum = op1 + op2;
            this.actual = sum
            this.actualizar()
        }
    }

    resta(){
        if(this.stack.length >= 2){
            var op1 = this.stack.pop()
            var op2 = this.stack.pop()
            var sum = op2 - op1;
            this.actual = sum
            this.actualizar()
        }
    }

    multiplicacion(){
        if(this.stack.length >= 2){
            var op1 = this.stack.pop()
            var op2 = this.stack.pop()
            var sum = op1 * op2;
            this.actual = sum
            this.actualizar()
        }
    }

    division(){
        if(this.stack.length >= 2){
            var op1 = this.stack.pop()
            var op2 = this.stack.pop()
            var sum = op2 / op1;
            this.actual = sum
            this.actualizar()
        }
    }

    cos(){
        if(this.stack.length >= 1){
            var op1 = this.stack.pop()
            var sum = Math.cos(op1);
            this.actual = sum
            this.actualizar()
        }
    }

    arccos(){
        if(this.stack.length >= 1){
            var op1 = this.stack.pop()
            var sum = Math.arccos(op1);
            this.actual = sum
            this.actualizar()
        }
    }

    sen(){
        if(this.stack.length >= 1){
            var op1 = this.stack.pop()
            var sum = Math.sen(op1);
            this.actual = sum
            this.actualizar()
        }
    }

    tan(){
        if(this.stack.length >= 1){
            var op1 = this.stack.pop()
            var sum = Math.tan(op1);
            this.actual = sum
            this.actualizar()
        }
    }

    arctan(){
        if(this.stack.length >= 1){
            var op1 = this.stack.pop()
            var sum = Math.arctan(op1);
            this.actual = sum
            this.actualizar()
        }
    }

    arcsen(){
        if(this.stack.length >= 1){
            var op1 = this.stack.pop()
            var sum = Math.arcsen(op1);
            this.actual = sum
            this.actualizar()
        }
    }

    actualizar(){
        this.stack.push(this.actual)
        var text = ""
        for(var i = 0; i < this.stack.length; i++) {
            text += this.stack[i] + "\n"
        }
        document.getElementsByName('pantalla')[0].textContent = text + "\n"
        this.actual = "0"
    }

    raiz(){
        if(this.stack.length >= 1){
            var op1 = this.stack.pop()
            var sum = Math.sqrt(op1);
            this.actual = sum
            this.actualizar()
        }
    }

    xEleveadoY(){
        if(this.stack.length >= 2){
            var op1 = this.stack.pop()
            var op2 = this.stack.pop()
            var sum = op2 ** op1;
            this.actual = sum
            this.actualizar()
        }
    } 

    logNeperiano(){
        if(this.stack.length >= 1){
            var op1 = this.stack.pop()
            var sum = Math.log(op1);
            this.actual = sum
            this.actualizar()
        }
    }

    logaritmo(){
        if(this.stack.length >= 1){
            var op1 = this.stack.pop()
            var sum = Math.log10(op1);
            this.actual = sum
            this.actualizar()
        }
    }

    borrar(){
        if(this.actual.slice(-1) == '' && this.actual.slice(-1).substring(0,1) === '\n' ){
            this.actual = ""
        } else if(this.actual.slice(-1).substring(0,1) === '\n' ){
            this.actual = this.actual.substring(0, this.actual.length - 1 )
        } else {
            this.actual = this.actual.substring(0, this.actual.length - 1 )

        }
    }

    botonC(){
        this.stack = new Array()
        this.actual = ""
        document.getElementsByName('pantalla')[0].textContent = ""
    }

    tipoTecla(l){
        if(l === '1' || l === '2' || l === '3' || l === '4' || l === '5' || l === '6' || 
            l === '7' || l === '8' || l === '9' || l === '0'){
            calc.digito(l)
        } else if (l === '*'){
            calc.multiplicacion()
        } else if(l === '-'){
            calc.resta()
        } else if(l === '+'){
            calc.suma()
        } else if (l === '/' ){
            calc.division()
        } else if(l === 'Backspace'){
            calc.borrar()
        } else if (l === 'C' || l === 'c'){
            calc.botonC()
        } else if(l === 's' || l === 'S'){
            calc.sen()
        } else if(l === 'd' || l==='D'){
            calc.arcsen()
        } else if(l === 'f' || l === 'F'){
            calc.cos()
        } else if(l === 'g' || l==='G'){
            calc.arccos()
        } else if(l === 'h' || l === 'H'){
            calc.tan()
        } else if(l === 'j' || l==='J'){
            calc.arctan()
        } else if(l === 'Enter'){
            calc.enter()
        } else if (l === '.' ){
            calc.punto()
        }
    }
}


class CalculadoraFinanciera extends CalculadoraRPN{
    constructor(){
        super()
    }

    armot(){
        if(this.stack.length >= 3){
            var cantidad = this.stack.pop();
            if(cantidad != "NaN" && cantidad != 0){
                var interes = this.stack.pop()
                var plazos = this.stack.pop()
                var res = Number((cantidad * (interes / 12)) / (1-Math.pow((1+interes / 12), -plazos)))
                if(res + "" != "NaN"){
                    this.actual = res;
                } else {
                    this.actual = 0
                }
                this.actualizar()
            }
        } else {
            this.actual = 0
            this.actualizar()
        }
    }

    ganPerd(){
        if(this.stack.length >= 3){
            var precioVenta = this.stack.pop();
            var precioCompra = this.stack.pop();
            var unidades = this.stack.pop();

            var res = precioVenta * unidades - precioCompra * unidades;
            if(res + "" != "NaN"){
                this.actual = res
            } else {
                this.actual = 0
            }
            this.actualizar()
        } else {
            this.actual = 0
            this.actualizar()
        }
    }

    interesCompuesto(){

        if(this.stack.length >= 4){
            var tiempo = this.stack.pop();
            var periosdos = this.stack.pop();
            var tasaInteres = this.stack.pop();
            var capitalInicial = this.stack.pop();
            var res = capitalInicial * ((1 + (tasaInteres / periosdos))^(tiempo * periosdos));
            if(res + "" != "NaN"){
                this.actual = res
            } else {
                this.actual = 0
            }
            this.actualizar()
        } else {
            this.actual = 0
            this.actualizar()
        }

    }

    interesSimple(){

        if(this.stack.length >= 4){
            var tiempo = this.stack.pop();
            var tasaInteres = this.stack.pop();
            var capitalInicial = this.stack.pop();
            var tipo = this.stack.pop();
            // Este valor dividendo es el que cambia en funcion del tipo
            // de fecha que se usa
            var dividendo = 0

            if(tipo == 1){
                dividendo = 100
            } else if (tipo == 2){
                dividendo = 1200
            } else if (tipo == 3){
                dividendo = 360000
            } else if(tipo == 4) {
                dividendo = 200
            } else if(tipo == 5) {
                dividendo = 400
            } else if (tipo == 6) {
                dividendo = 600
            } 

            if(dividendo == 0){
                this.actual = 0
                this.actualizar()
            } else {
                var res = capitalInicial * (tasaInteres / dividendo) * tiempo
                if(res + "" != "NaN"){
                    this.actual = res
                } else {
                    this.actual = 0
                }
                this.actualizar()
            }
        } else {
            this.actual = 0
            this.actualizar()
        }
    }


    tipoTecla(l) {
        super.tipoTecla(l)
        if(l === 'W' || l === 'w'){
            calc.armot()
        } else if (l === 'e' || l === 'E') {
            calc.ganPerd()
        } else if (l === 'r' || l === 'R') {
            calc.interesCompuesto()
        } else if(l === 't' || l === 'T') {
            calc.interesSimple()
        }
    }

}

var calc = new CalculadoraFinanciera()