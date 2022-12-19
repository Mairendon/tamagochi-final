import { Tama } from "./tama.js"
const jaspito = new Tama ('Jaspito', 100, 100, 100, 100)

const zampar = document.getElementById('comida')
const mimir = document.getElementById('cama')
const games = document.getElementById('juego')
const baniar = document.getElementById('ducha')
const masticar = document.getElementById('comida')
const sonidoMasticar = new Audio("./images/masticar.mp3")



function Start(){
   var temporizador = setInterval(function(){
      jaspito.bindedVida()
      if (jaspito.felicidad <= 0 || jaspito.energia <= 0|| jaspito.diversion <= 0){
         clearInterval(temporizador)
         jaspito.machango.src = "./images/muerto.png";
         console.log ('¡Españoles Jaspito ha muerto!')
      }
   }, 400);
   
   zampar.addEventListener('click', function(){ 
      console.log(jaspito.comer())
   })
   mimir.addEventListener('click', function(){
      console.log(jaspito.sueño())
   })
   games.addEventListener('click', function(){
     console.log(jaspito.toy())
   })
   baniar.addEventListener('click', function(){
      console.log(jaspito.lavar())
   })
   masticar.addEventListener('click',function(){
      sonidoMasticar.play()
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

  
