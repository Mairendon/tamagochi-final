import { Tama } from "./tama.js"
const jaspito = new Tama (100, 100, 100, 3, 'estoy vivo')

const zampar = document.getElementById('comida')


zampar.addEventListener('click', function(){ 

    console.log(`estoy llenito  mi felicidad vale ${this.mensaje} `)
    /*if(energia > 100){
        return 'Estoy llenito'
    } else if( energia = 0 ){
    return 'Los muertos no hablan'
    } else {
        return '¡DAAME DE COMER!'
    }*/
})

function gameloop(){
    update()
    draw()
}
 
