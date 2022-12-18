export function Tama(nombre, felicidad, energia, diversion){
    this.nombre = nombre;
    this.felicidad = felicidad;
    this.energia = energia;
    //this.suciedad = suciedad;
    this.diversion = diversion;
    //this.salud = salud;
    //this.amor = amor;
    //this.estado = 0;
    //this.mensaje = "Hazme caso desgraciao";
    this.time = 2 //time
    this.bindedVida = this.vida.bind(this)
    this.machango = document.getElementById('machanguito')
    console.log("Mascota creada");
}
Tama.prototype.vida = function () {
  
    var total = this.felicidad + this.energia + this.diversion;

    if( this.felicidad <= 0 || this.energia <= 0 || this.diversion <= 0){
        this.machango.src = "./images/muerto.jpeg"; /*imagen jaspi muerto */
        this.machango.innerText = "he muerto"
    } else if(total <= 150){ 
        this.machango.src = " "; /*imagen jaspi pachucho */
    } else if(total > 150) {
        this.machango.src = "./images/vivo.jpeg"; /*imagen jaspi :) */
    }
this.felicidad = this.felicidad - this.time;
this.energia = this.energia - this.time; 
this.diversion = this.diversion - this.time; 
document.getElementById('felicidad').innerText = this.felicidad + '%';
document.getElementById('energia').innerText = this.energia + '%';
document.getElementById('diversion').innerText = this.diversion + '%';   
}

Tama.prototype.comer = function (alimento) {
   //this.energia = this.energia +
   
    if(this.energia >= 100){
        this.felicidad--;
        this.machango.src = "./images/burger.jpeg"
        return 'Estoy llenito'
    } else if( this.energia > 0){
        this.felicidad++;
        this.energia++;
        this.machango.src = "./images/burger.jpeg"
        return '¡DAAME DE COMER!'
    } else {
        this.machango.src = "./images/burger.jpeg"
        return 'Los muertos no hablan'
    }
}
Tama.prototype.sueño = function () {
   console.log(this.felicidad)
    if (this.energia < 10){
        this.felicidad++;
        this.energia++;
        this.machango.src = "./images/duerme.jpeg"
        return 'Auxilio me desmayo...zzZZ'
    } else if (this.energia >= 80){
        this.felicidad--;
        this.energia++;
        this.diversion--;
        this.machango.src = "./images/duerme.jpeg"
        return '¡¡No quiero dormir!!'
    } else {
        this.felicidad--;
        this.energia++;
        this.diversion--;
        this.machango.src = "./images/duerme.jpeg"
        return 'Quiero dormir'
    }
}
Tama.prototype.toy = function () {
    this.felicidad++;
    this.energia--;
    //this.suciedad - 4
    this.diversion++;
    //this.amor++;
    if (this.diversion <= 25){
        this.diversion++
        return 'Me matas de aburrimiento'
    } else if (this.diversion > 40){
        this.felicidad++;
        this.energia--;
        this.diversion++;
        return '¡Quiero jugar!'
    } else {
        this.felicidad++;
        this.energia--;
        this.diversion++;
        return '¡No me canso de jugar!'
    }
}

/*
Tama.prototype.vida() = function(time = 2) {
    //ver como arreglar o donde posicionar

    let total = this.energia + this.felicidad + this.diversion
    console.log('hola')
    if (total <= 0 ){
        return `${this.name} l'ha palmao`
    } else if (total < 150){
        return`${this.name} viviendo que es poco`
    } else {
        return `${this.name} vivito y coleando`
    }
  }
*/