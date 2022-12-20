export function Tama(nombre, felicidad, energia, suciedad, diversion){
    this.nombre = nombre;
    this.felicidad = felicidad;
    this.energia = energia;
    //ACTIVO SUCIEDAD
    this.suciedad = suciedad;
    this.diversion = diversion;
    //this.salud = salud;
    //this.amor = amor;
    //this.mensaje = "Hazme caso desgraciao"
    this.poo = document.getElementById('caca')
    this.time = 1 //time
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
        this.fondoCielo.style.background = 'url(./images/cielo_muerto.jpg)'
        this.fondoCielo.style.backgroundSize = "cover"
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

   
    if(this.energia >= 100){
        this.felicidad--;
        this.suciedad--;
       
        return 'Estoy llenito'
    } else if( this.energia > 0 && this.energia < 30){
        this.machango.src = "./images/cama.png"
        this.felicidad += 20;
        this.energia += 5;
        this.suciedad--;
        
        return '¡DAAME DE COMER!'
    } else if ( this.energia >= 30 && this.energia < 100){
        this.felicidad++;
        this.energia++;
        this.suciedad -= 5;
        return ('por pura gula')
    } else { return 'Los muertos no hablan'} 
}
Tama.prototype.sueño = function () {
  
    if (this.energia < 10){
        this.felicidad++;
        this.energia += 20;
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
    } else if (this.diversion >= 100 || this.felicidad >= 100 && this.diversion >= 100 && this.felicidad) {
        this.felicidad++;
        this.energia--;
        this.diversion++;
        this.suciedad--;
        return '¡No me canso de jugar!'

    } else {
        this.felicidad++;
        this.energia--;
        this.diversion++;
        this.suciedad--;
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
        this.diversion -= 5;
        this.suciedad += 10;
        return 'No me quiero lavar no me voy a duchar asi cochino me quiero quedar'
    } else if (this.suciedad >=100 ){
        this.felicidad -= 10;
        this.energia--;
        this.diversion -= 15;
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
}*/
Tama.prototype.apareceCaca = function () {
   
    if (this.suciedad < 80){
        
        this.poo.src = './images/popo.jpg'
        console.log('mi amigo huele raro')
    } else if (this.suciedad < 40){
        
        this.poo.src = './images/comida.png'
        console.log('uno más para la colección')
    } else if (this.suciedad <= 20){ 
        
        this.poo.src = './images/game.png'
       console.log('quiero estar limpio')
    } else {
        this.poo.src = '' //cosa encima de jaspito
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