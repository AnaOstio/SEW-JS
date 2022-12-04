class Audio{

    constructor(){
        this.context;
        this.source;
        this.filter;
        this.cont = 0
    }

    checkFile(files){
        this.procesador(files[0])
    }

    procesador(file){
        if(!file.name.match(/.mp3*/)){
            $('h3').before('<h3>El formato del archivo no es correcto</h3>')
        } else {
            $('audio').attr("src", URL.createObjectURL(file))
            this.context = new AudioContext();
            this.source = this.context.createMediaElementSource(document.getElementsByTagName('audio')[0]);
            this.filter = this.context.createBiquadFilter()
            this.filter.type = "highpass";
            this.source.connect(this.filter)
            this.filter.connect(this.context.destination);
        }
    }

    drop(event){
        event.preventDefault();
        var files = event.dataTransfer.files;
        this.procesador(files[0])
    }

    drag(event){
        event.preventDefault();
    }

    lowpass() {
        this.filter = this.context.createBiquadFilter();
        this.filter.type = "lowpass"; 
        this.source.connect(this.filter);
        this.filter.connect(this.context.destination);
    }

    highpass() {
        this.filter = this.context.createBiquadFilter();
        this.filter.type = "highpass"; 
        this.source.connect(this.filter);
        this.filter.connect(this.context.destination);
    }

    bandpass() {
        this.filter = this.context.createBiquadFilter();
        this.filter.type = "bandpass"; 
        this.source.connect(this.filter);
        this.filter.connect(this.context.destination);
    }

    notch() {
        this.filter = this.context.createBiquadFilter();
        this.filter.type = "notch"; 
        this.source.connect(this.filter);
        this.filter.connect(this.context.destination);
    }

    frecuencia(){
        var value = document.getElementsByName("hz").value;
        this.filter.frequency.setValueAtTime(value,this.context.currentTime);
        this.source.connect(this.filter);
        this.filter.connect(this.context.destination);
    }

}

var audio = new Audio();