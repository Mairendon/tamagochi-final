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
    this.poo = document.getElementById('caca')
    this.time = 2 //time
    this.bindedVida = this.vida.bind(this)
    this.machango = document.getElementById('machanguito')
    this.fondoCielo = document.getElementsByClassName('cielo')[0]
    console.log("Mascota creada");
   // this.estado = document.getElementsByClassName('cielo');
}
Tama.prototype.vida = function () {
  
    var total = this.felicidad + this.energia + this.diversion + this.suciedad;

    if( this.felicidad <= 0 || this.energia <= 0 || this.diversion <= 0 || this.suciedad <= 0){
        this.machango.src = "./images/muerto.png"; /*imagen jaspi muerto */
        this.machango.innerText = "he muerto"
    } else if(total <= 200){ 
        this.machango.src =  "./images/vivo.png"; /*imagen jaspi pachucho */
        this.fondoCielo.style.background = 'url(./images/cielo_critico.jpg)'
        this.fondoCielo.style.backgroundSize = "cover"

        //console.log(this.fondoCielo.style.url)
    } else if(total > 200) {
        this.machango.src = "./images/vivo.png"; /*imagen jaspi :) */
    }
this.felicidad = this.felicidad - this.time;
this.energia = this.energia - this.time ; //* 2 
this.diversion = this.diversion - this.time  ; //*2
this.suciedad = this.suciedad - this.time;
document.getElementById('felicidad').innerText = this.felicidad + '%';
document.getElementById('energia').innerText = this.energia + '%';
document.getElementById('diversion').innerText = this.diversion + '%';
document.getElementById('suciedad').innerText = this.suciedad + '%';      
}

Tama.prototype.comer = function (alimento) {

   
    if(this.energia <= 100){
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
  
    if (this.energia < 10){
        this.felicidad++;
        this.energia++;
        this.machango.src = "./images/duerme.png"
        return 'Auxilio me desmayo...zzZZ'
    } else if (this.energia <= 100 && this.energia >= 80){
        this.felicidad--;
        this.energia++;
        this.diversion--;
        this.machango.src = "./images/duerme.png"
        return '¡¡No quiero dormir!!'
    } else {
        this.felicidad--;
        this.energia++;
        this.diversion--;
        this.machango.src = "./images/duerme.png"
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
        this.suciedad += 20; // si pongo +20 no suma vente punntos de golpe
        
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
Tama.prototype.caca = function (){
    this.felicidad++;
    this.poo++;
        if (this.poo > 5 ){
            this.felicidad++;
            this.suciedad++;
            console.log('hago caca')
            return 'limpito como una patena'
        } else if (this.poo >= 10 ) {
            this.felicidad++;
            this.suciedad++;
            return 'tengo un amigo'
        } else if (this.poo >= 20) {
            return 'huele raruno'
        } else {
            return 'limpito como una patena'
        } 
        this.poo++;
}
Tama.prototype.apareceCaca = function () {
    if (this.suciedad <= 80){
        this.felicidad++;
        this.poo.src = ''
        console.log('mi amigo huele raro')
    } else if (this.suciedad <= 60) {
        this.felicidad++;
        this.poo.src = ''
        console.log('ahora somos tres')
    } else if (this.suciedad <= 40){
        this.felicidad--;
        this.poo.src = ''
        console.log('uno más para la colección')
    } else if (this.suciedad <= 20){
        this.felicidad--;
        this.poo.src = ''
       console.log('quiero estar limpio')
    } else {
        console.log('limpito como una patena')
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