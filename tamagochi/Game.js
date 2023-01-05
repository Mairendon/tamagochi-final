import { Tama } from "./tama.js"
import { rain } from "./lluvia.js"

const jaspito = new Tama ('Jaspito', 100, 100, 100, 55)

const zampar = document.getElementById('comida')
const mimir = document.getElementById('cama')
const games = document.getElementById('juego')
const baniar = document.getElementById('ducha')
const sonidoMasticar = new Audio("./sonidos/masticar.mp3")
const sonidoDormir = new Audio("./sonidos/roncar.mp3")
const sonidoDucha = new Audio("./sonidos/ducha.mp3")
const sonidoJugar = new Audio("./sonidos/jugar.mp3")

function Start() {
   var temporizador = setInterval(function() {
      jaspito.apareceCaca()
      jaspito.bindedVida()
      //jaspito.estado = false;
      if (jaspito.felicidad <= 0 || jaspito.energia <= 0 || jaspito.diversion <= 0 || jaspito.suciedad <= 0) {
         clearInterval(temporizador)
         jaspito.machango.style.background = 'url(./images/jaspi-muerto_min.png)'; /*imagen jaspi muerto */
         jaspito.fondoCielo.style.background = 'url(./images/cielo_negro_min.jpg)'
         jaspito.fondoCielo.style.backgroundSize = "cover"
         jaspito.poo.style.display = 'none'; //desaparece caca muerto
         console.log ('¡Españoles Jaspito ha muerto!')
      }
   }, 4000);
   
   let estadoTemp = setInterval(function(){
      jaspito.estado = false;
      console.log(jaspito.estado)
   }, 2800);

   zampar.addEventListener('click', function() { 
     
      console.log(jaspito.comer())
      sonidoMasticar.play()
   })
   mimir.addEventListener('click', function() {
      console.log(jaspito.sueño())
      sonidoDormir.play()
   })
   games.addEventListener('click', function(){
     console.log(jaspito.toy())
     sonidoJugar.play()
   })
   baniar.addEventListener('click', function(){
      console.log(jaspito.lavar())
      sonidoDucha.play()
      rain()

   })
  
}

Start();
/*

const bottLoop = setInterval(jaspito.vida() , 4000)
function gameloop(){
    update()
    draw()
    setInterval(perderenergia, 4000)
}

 
 
 function perderenergia (){
    this.energia--
 }
 
    */

  
