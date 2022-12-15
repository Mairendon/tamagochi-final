import { Tama } from "./tama.js"
const jaspito = new Tama ('Jaspito', 4, 0, 1)

const zampar = document.getElementById('comida')
const mimir = document.getElementById('cama')
const games = document.getElementById('juego')



zampar.addEventListener('click', function(){ 
   console.log(jaspito.comer())
   
})
mimir.addEventListener('click', function(){
   console.log(jaspito.sueño())
})
games.addEventListener('click', function(){
  console.log(jaspito.toy())
})
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

  