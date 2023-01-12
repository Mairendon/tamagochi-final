import { Tama } from "./tama.js"
import { rain } from "./lluvia.js"

const jaspito = new Tama ('Jaspito', 2, 100, 100, 60)

const zampar = document.getElementById('comida')
const mimir = document.getElementById('cama')
const games = document.getElementById('juego')
const baniar = document.getElementById('ducha')
const gameOver = document.getElementById('game-over')
const tryAgainButton = document.getElementById('try-again')
const sonidoMasticar = new Audio("./sonidos/masticar.mp3")
const sonidoDormir = new Audio("./sonidos/roncar.mp3")
const sonidoDucha = new Audio("./sonidos/ducha.mp3")
const sonidoJugar = new Audio("./sonidos/jugar.mp3")

function reload() {
   setTimeout(() => {
   gameOver.style.display = 'block'
   tryAgainButton.addEventListener('click', function () {
      jaspito.felicidad = 100;
      jaspito.energia = 100;
      jaspito.diversion = 100;
      jaspito.suciedad = 100;
      Start() 
     
      gameOver.style.display = 'none';
   })        
 }, "4000")
}

function Start() {
   const temporizador = setInterval(function() {
      jaspito.apareceCaca()
      jaspito.bindedVida()
      jaspito.estado = false     
      if (jaspito.felicidad <= 0 || jaspito.energia <= 0 || jaspito.diversion <= 0 || jaspito.suciedad <= 0) {
         clearInterval(temporizador)
         jaspito.machango.style.background = 'url(./images/jaspi-muerto_min.png)'; 
         jaspito.machango.style.backgroundSize =  "contain";
         jaspito.machango.style.backgroundRepeat = "no-repeat"; 
         jaspito.fondoCielo.style.background = 'url(./images/cielo_negro_min.jpg)'
         jaspito.fondoCielo.style.backgroundSize = "cover"
         jaspito.poo.style.display = 'none'; 
         reload()
      }
      console.log(jaspito.estado)
   }, 3000);
   
   zampar.addEventListener('click', function() { 
      console.log(jaspito.comer());
         sonidoMasticar.play();
         
   })

   mimir.addEventListener('click', function() {
      console.log(jaspito.sueño());
      sonidoDormir.play()
     
   })

   games.addEventListener('click', function(){
      console.log(jaspito.toy()) ;
      sonidoJugar.play()
     
   })

   baniar.addEventListener('click', function(){
      console.log(jaspito.lavar())
      sonidoDucha.play()
      rain()

   })
  
}

Start();
