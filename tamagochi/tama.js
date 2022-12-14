export function Tama(felicidad, energia, diversion, estado, mensaje){
    this.name = nombre;
    this.felicidad = felicidad;
    this.energia = energia;
    //this.suciedad = suciedad;
    this.diversion = diversion;
    //this.salud = salud;
    //this.amor = amor;
    //this.estado = 0;
    //this.mensaje = "Hazme caso desgraciao";
    this.machango = document.getElementById('machanguito')
    console.log("Mascota creada");
}
Tama.prototype.comer = function (alimento) {
   //this.energia = this.energia +
   
    if(this.energia >= 100){
        this.felicidad--;
        return 'Estoy llenito'
    } else if( this.energia > 0){
        this.machango.src = "./images/cama.png"
        this.felicidad++;
        this.energia++;
        return '¡DAAME DE COMER!'
    } else {
        return 'Los muertos no hablan'
    }
}
Tama.prototype.sueño = function () {
    if (this.energia < 10){
        this.felicidad++;
        this.energia++;
        return 'Quiero dormir'
    } else if (this.energia >= 80){
        this.felicidad--;
        this.energia++;
        this.diversion--;
        return '¡¡No quiero dormir!!'
    } else {
        this.felicidad--;
        this.energia++;
        this.diversion--;
        return 'Auxilio me desmayo...zzZZ'
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
