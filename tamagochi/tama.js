export function Tama(nombre, felicidad, energia, suciedad, diversion){
    this.nombre = nombre;
    this.felicidad = felicidad;
    this.energia = energia;
    //ACTIVO SUCIEDAD
    this.suciedad = suciedad;
    this.diversion = diversion;
    //this.salud = salud;
    //this.amor = amor;
    //this.mensaje = "Hazme caso desgraciao";
    this.time = 2 //time
    this.bindedVida = this.vida.bind(this)
    this.machango = document.getElementById('machanguito')
    console.log("Mascota creada");
   // this.estado = document.getElementsByClassName('cielo');
}
Tama.prototype.vida = function () {
  
    var total = this.felicidad + this.energia + this.diversion + this.suciedad;

    if( this.felicidad <= 0 || this.energia <= 0 || this.diversion <= 0 || this.suciedad <= 0){
        this.machango.src = "./images/muerto.jpeg"; /*imagen jaspi muerto */
        this.machango.innerText = "he muerto"
    } else if(total <= 150){ 
        this.machango.src = " "; /*imagen jaspi pachucho */
      //  this.estado = 
    } else if(total > 150) {
        this.machango.src = "./images/vivo.jpeg "; /*imagen jaspi :) */
    }
this.felicidad = this.felicidad - this.time;
this.energia = this.energia - this.time; 
this.diversion = this.diversion - this.time; 
this.suciedad = this.suciedad - this.time;
document.getElementById('felicidad').innerText = this.felicidad + '%';
document.getElementById('energia').innerText = this.energia + '%';
document.getElementById('diversion').innerText = this.diversion + '%';
document.getElementById('suciedad').innerText = this.suciedad + '%';      
}

Tama.prototype.comer = function (alimento) {
   //this.energia = this.energia +
   
    if(this.energia >= 100){
        this.felicidad--;
        this.suciedad--;
        return 'Estoy llenito'
    } else if( this.energia > 0){
        this.machango.src = "./images/cama.png"
        this.felicidad++;
        this.energia++;
        this.suciedad--;
        return '¡DAAME DE COMER!'
    } else {
        return 'Los muertos no hablan'
    }
}
Tama.prototype.sueño = function () {
   console.log(this.felicidad)
    if (this.energia < 10){
        this.felicidad++;
        this.energia++;
        this.machango.src = "./images/cama.png"
        return 'Auxilio me desmayo...zzZZ'
    } else if (this.energia >= 80){
        this.felicidad--;
        this.energia++;
        this.diversion--;
        return '¡¡No quiero dormir!!'
    } else {
        this.felicidad--;
        this.energia++;
        this.diversion--;
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
        this.suciedad--;
        return 'Me matas de aburrimiento'
    } else if (this.diversion > 40){
        this.felicidad++;
        this.energia--;
        this.diversion++;
        this.suciedad--;
        return '¡Quiero jugar!'
    } else {
        this.felicidad++;
        this.energia--;
        this.diversion++;
        this.suciedad--;
        return '¡No me canso de jugar!'
    }
}
////---------Prueba DUCHA---------------
Tama.prototype.lavar = function () {
    this.felicidad++;
    this.energia--;
    //this.suciedad - 4
    this.diversion--;
    this.suciedad++;
    //this.amor++;
    if (this.suciedad <= 30){
        this.diversion++;
        this.suciedad++; // si pongo +20 no suma vente punntos de golpe
        return 'Ya era hora... Olia a zorruno'
    } else if (this.suciedad <= 60){
        this.felicidad++;
        this.energia--;
        this.diversion--;
        this.suciedad++;
        return 'No me quiero lavar no me voy a duchar asi cochino me quiero quedar'
    } else {
        this.felicidad--;
        this.energia--;
        this.diversion--;
        this.suciedad++;
        return '¡Que ya estoy limpio!'
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