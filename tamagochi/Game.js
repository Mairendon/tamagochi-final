import { Tama } from "./tama.js"
const jaspito = new Tama (100, 100, 100, 3, 'estoy vivo')

const zampar = document.getElementById('comida')
const mimir = document.getElementById('cama')
const jugar = document.getElementById('jugar')


zampar.addEventListener('click', function(){ 
    return `estoy comiendo`
})

function gameloop(){
    update()
    draw()
}
 
