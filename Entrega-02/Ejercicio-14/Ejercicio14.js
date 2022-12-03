class Audio{

    constructor(){
        this.contexto;
        this.source;
        this.filter;
        this.cont = 0
    }

    checkFile(files){
        this.procesaAudio(files[0])

    }

    procesaAudio(file){
        // Tipo del archiuo
        var tipo = /.mp3*/
        if(!file.name.match(tipo)){
            $('section').after("<p>El fichero " + file.name + " no es un ficehro .mp3</p>")
            return;
        } else {
            
            var direccionArchivo = URL.createObjectURL(file);
            
            $('section').after(
                "<article>" + 
                    "<h2>El Nombre del audio es: " + file.name  + "</h2>" + 
                    "<p>Opciones a mostrar</p>" +
                    "<p>" +  
                        "<input type = 'button' value = 'Lowpass' onclick = 'audio.lowpass()' />" + 
                        "<input type = 'button' value = 'HighPass' onclick = 'audio.highpass()' />" +
                        "<input type = 'button' value = 'Bandpass' onclick = 'audio.bandpass()' />" +
                        "<input type = 'button' value = 'Notch' onclick = 'audio.notch()' />"
                    + "</p>" +
                    "<label for='hz'>Control Frecuencia</label>" +
                    "<input id='hz' name = 'hz' type = 'range' value = '50' min = '1' max = '6000' onchange = 'audio.frecuencia()' />" +
                    '<audio src = ' + direccionArchivo + ' controls </audio>' + 
                "</article>"
            )

            this.contexto = new AudioContext()
            this.source = this.context.createMediaElementSource(document.getElementsByTagName('audio')[0]);
            this.filter = this.context.createBiquadFilter();
            this.filter.type = "highpass"
            this.source.connect(this.filter);
            this.filter.connect(this.context.destination);
        }
    }

    drop(event){
        event.preventDefault();
        var files = event.dataTransfer.files;
        this.procesaAudio(files[0])
    }

    drag(event){
        event.preventDefault();
    }

    lowpass() {
        this.filter = this.contexto.createBiquadFilter();
        this.filter.type = "lowpass"; 
        this.source.connect(this.filter);
        this.filter.connect(this.contexto.destination);
    }

    highpass() {
        this.filter = this.contexto.createBiquadFilter();
        this.filter.type = "highpass"; 
        this.source.connect(this.filter);
        this.filter.connect(this.contexto.destination);
    }

    bandpass() {
        this.filter = this.contexto.createBiquadFilter();
        this.filter.type = "bandpass"; 
        this.source.connect(this.filter);
        this.filter.connect(this.contexto.destination);
    }

    notch() {
        this.filter = this.contexto.createBiquadFilter();
        this.filter.type = "notch"; 
        this.source.connect(this.filter);
        this.filter.connect(this.contexto.destination);
    }

    frecuencia(){
        var value = document.getElementsByName("hz").value;
        this.filter.frequency.setValueAtTime(value,this.contexto.currentTime);
        this.source.connect(this.filter);
        this.filter.connect(this.contexto.destination);
    }

}

var audio = new Audio();