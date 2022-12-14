import { Tama } from "./tama.js"
const jaspito = new Tama (100, 95, 100, 3, 'estoy vivo')

const zampar = document.getElementById('comida')
const mimir = document.getElementById('cama')
const jugar = document.getElementById('jugar')


zampar.addEventListener('click', function(){ 
  console.log(jaspito.comer())
   
})
/*
function gameloop(){
    update()
    draw()
}
 const pasoTiempo = setInterval({
    jaspito.felicidad --
 }, 4000)
  
 */
