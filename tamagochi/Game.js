import { Tama } from "./tama.js"
const jaspito = new Tama ('Jaspito', 100, 100, 100)

const zampar = document.getElementById('comida')
const mimir = document.getElementById('cama')
const games = document.getElementById('juego')



function Start(){
   var temporizador = setInterval(function(){
      jaspito.bindedVida()
      if (jaspito.felicidad <= 0 || jaspito.energia <= 0|| jaspito.diversion <= 0){
         clearInterval(temporizador)
         jaspito.machango.src = "./images/muerto.jpeg";
         console.log ('¡Españoles Jaspito ha muerto!')
      }
   }, 2000);
   
   zampar.addEventListener('click', function(){ 
      console.log(jaspito.comer())
   })
   mimir.addEventListener('click', function(){
      console.log(jaspito.sueño())
   })
   games.addEventListener('click', function(){
     console.log(jaspito.toy())
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

  
