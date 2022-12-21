import { Tama } from "./tama.js"
import { rain } from "./lluvia.js"

const jaspito = new Tama ('Jaspito', 100, 100, 100, 100)

const zampar = document.getElementById('comida')
const mimir = document.getElementById('cama')
const games = document.getElementById('juego')
const baniar = document.getElementById('ducha')
const sonidoMasticar = new Audio("./sonidos/masticar.mp3")
const sonidoDormir = new Audio("./sonidos/roncar.mp3")
const sonidoDucha = new Audio("./sonidos/ducha.mp3")
const sonidoJugar = new Audio("./sonidos/jugar.mp3")

function Start(){
   var temporizador = setInterval(function(){
      jaspito.apareceCaca()
      jaspito.bindedVida()
      if (jaspito.felicidad <= 0 || jaspito.energia <= 0|| jaspito.diversion <= 0){
         clearInterval(temporizador)
         jaspito.machango.src = "./images/muerto.png";
         jaspito.fondoCielo.style.background = 'url(./images/cielo_muerto.jpg)'
         jaspito.fondoCielo.style.backgroundSize = "cover"
         console.log ('¡Españoles Jaspito ha muerto!')
      }
   }, 400000);
   
   zampar.addEventListener('click', function(){ 
     
      console.log(jaspito.comer())
      sonidoMasticar.play()
   })
   mimir.addEventListener('click', function(){
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
const statusLoop = setInterval(jaspito.vida() , 4000)
function gameloop(){
    update()
    draw()
    setInterval(perderenergia, 4000)
}

 
 
 function perderenergia (){
    this.energia--
 }
 
    */

  
