export function Tama(nombre, felicidad, energia, diversion, suciedad){
    this.nombre = nombre;
    this.felicidad = felicidad;
    this.energia = energia;
    //ACTIVO SUCIEDAD
    this.diversion = diversion;
    this.suciedad = suciedad;
    //this.salud = salud;
    //this.amor = amor;
    //this.mensaje = "Hazme caso desgraciao"
    this.poo = document.getElementById('caca')
    this.time = 1 //time
    this.estado = false
    this.bindedVida = this.vida.bind(this)
    this.machango = document.getElementById('machanguito')
    this.fondoCielo = document.getElementsByClassName('cielo')[0]
    console.log("Mascota creada");
   // this.estado = document.getElementsByClassName('cielo');
}
Tama.prototype.vida = function () {
    this.felicidad = this.felicidad - this.time;
    this.energia = this.energia - this.time ; //* 2 
    this.diversion = this.diversion - this.time  ; //*2
    this.suciedad = this.suciedad - this.time;
    document.getElementById('felicidad').innerText = this.felicidad + '%';
    document.getElementById('energia').innerText = this.energia + '%';
    document.getElementById('diversion').innerText = this.diversion + '%';
    document.getElementById('suciedad').innerText = this.suciedad + '%'; 

    var total = this.felicidad + this.energia + this.diversion + this.suciedad;
    if( this.felicidad <= 0 || this.energia <= 0 || this.diversion <= 0 || this.suciedad <= 0){
        this.machango.style.background = 'url(./images/jaspi-muerto_min.png)'; /*imagen jaspi muerto */
        this.fondoCielo.style.background = 'url(./images/cielo_negro_min.jpg)'
        this.fondoCielo.style.backgroundSize = "cover"
        //this.machango.innerText = "he muerto"
    } else if(total <= 200 && this.estado === false){ //&&
        this.machango.style.background =  "url(./images/jaspi-pachucho_feo.png)"; /*imagen jaspi pachucho */
        this.fondoCielo.style.background = 'url(./images/cielo_critico_min.jpg)'
        this.fondoCielo.style.backgroundSize = "cover"
        console.log("me siento mal")
        //console.log(this.fondoCielo.style.url)
    } else if(total > 200 && this.estado === false) { //&& añadir otro estado si esta ocurriendo no funcionar
        // this.machango.src = "images/vivo.png"; /*imagen jaspi :) */
        this.machango.style.background =  "url(./images/jaspi-vivo_min.png)";/*imagen jaspi :) */
        console.log("It's Alive")
        
    }
        
}

Tama.prototype.comer = function (alimento) {
    this.poo.style.display = 'none';
    if(this.energia >= 100 ) {
        this.felicidad--;
        this.suciedad--;
        //this.estado = true 
        console.log(this.estado)
        this.machango.style.background = "url(./images/dormir.png)" //poner gif de comida
        return 'Estoy llenito'
    } else if( this.energia > 0 && this.energia < 30 ) {
        this.machango.style.background = "url(./images/dormir.png)" //poner gif de comida
        this.felicidad += 20;
        this.energia += 5;
        this.suciedad--;
        //this.estado = true
        return '¡DAAME DE COMER!'
    } else if ( this.energia >= 30 && this.energia < 100 ) {
        this.felicidad++;
        this.energia++;
        this.suciedad -= 5;
        //this.estado = true
        this.machango.style.background = "url(./images/dormir.png)" //poner gif de comida
        return ('por pura gula')
    } else { 
        this.machango.style.background = "url(./images/dormir.png)"
        return 'Los muertos no hablan'
    } 
}
Tama.prototype.sueño = function () {
   // this.estado = true
   this.poo.style.display = 'none';
    if (this.energia < 10 ) {
        this.felicidad++;
        this.energia += 20;
        //this.estado == true
        this.machango.style.background = "url(./images/jaspi-duerme_min.png)"
        //this.estado = true
        console.log(this.estado)
        return 'Auxilio me desmayo...zzZZ'
    } else if (this.energia <= 100 && this.energia >= 80) {
        this.felicidad--;
        this.energia++;
        this.diversion--;
        //this.estado = true;
        this.machango.style.background = "url(./images/jaspi-duerme_min.png)"
        console.log(this.estado)
        return '¡¡No quiero dormir!!'
    } else {
        this.felicidad-- ;
        this.energia += 2;
        this.diversion++ ;
        this.machango.style.background = "url(./images/jaspi-duerme_min.png)"
        console.log(this.estado)
        return 'Quiero dormir'
    }
}
Tama.prototype.toy = function () {
    //this.felicidad++ ;
    //this.energia-- ;
    //this.diversion++ ;
    this.poo.style.display = 'none' ;
       if (this.diversion <= 25) {
        this.diversion += 20;
        this.energia += 5;
        this.suciedad--;
        //this.estado = true
        this.machango.style.background = "url(./images/bo-jugar.png)" //cambiar por imagen de juego
        return 'Me matas de aburrimiento'
    } else if (this.diversion > 40) {
        this.felicidad++ ;
        this.energia -= 10;
        this.diversion += 15;
        this.suciedad--;
        //this.estado = true
        this.machango.style.background = "url(./images/bo-jugar.png)"//cambiar por imagen de juego
        return '¡Quiero jugar!'
    } else if (this.diversion >= 100 || this.felicidad >= 100 && this.diversion >= 100 || this.felicidad >= 100) {
        this.felicidad++ ;
        this.energia-- ;
        this.diversion++ ;
        this.suciedad-- ;
        //this.estado = true
        this.machango.style.background = "url(./images/bo-jugar.png)"//cambiar por imagen de juego
        return '¡No me canso de jugar!'
    } else {
        this.felicidad++ ;
        this.energia-- ;
        this.diversion += 5;
        this.suciedad-- ;
        this.machango.style.background = "url(./images/bo-jugar.png)"
    }
    
}
////---------Prueba DUCHA---------------
Tama.prototype.lavar = function () {
    this.felicidad++ ;
    this.energia-- ;
    this.diversion-- ;
    this.suciedad++ ;
    //this.estado = false
    if (this.suciedad <= 30){
        this.diversion +=20 ;
        this.suciedad += 20; // si pongo +20 no suma vente punntos de golpe
        //this.estado = false
        console.log(this.estado)
        return 'Ya era hora... Olia a zorruno'
    } else if (this.suciedad <= 60) {
        this.felicidad++ ;
        this.energia--;
        this.diversion -= 5;
        this.suciedad += 10;
        //this.estado = false
        return 'No me quiero lavar no me voy a duchar asi cochino me quiero quedar'
    } else if (this.suciedad >= 100) {
        this.felicidad -= 10;
        this.energia--;
        this.diversion -= 15;
        this.suciedad +=2;
        //this.estado = false
        console.log(this.estado)
        return '¡Que ya estoy limpio!'
    }
    this.poo.style.display = 'none' ;
}

Tama.prototype.apareceCaca = function () {
  
    if (this.suciedad <= 20) {
        this.diversion -= 5;
        this.poo.style.display = 'block';//el block modifica el atributo que de base es none
        this.poo.style.background = 'url(./images/barro-3_min.png)'
        console.log('quiero estar limpio')
    } else if (this.suciedad <= 40) {
        this.diversion -= 8;
        this.poo.style.display = 'block';
        this.poo.style.background = 'url(./images/barro-2_min.png)'
        console.log('uno más para la colección')
    } else if (this.suciedad <= 50) { 
        this.suciedad -= 4;
        this.poo.style.display = 'block';
        this.poo.style.background = 'url(./images/barro-1_min.png)'
        console.log('juego con barro')
    } else {
        this.poo.style.display = 'none'; //quita las cacas
        console.log('limpito como una patena')
    }
}
