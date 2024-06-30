const API = "https://random-word-api.herokuapp.com/word?length=5&lang=es"
let diccionario = ["APPLE", "ANGEL", "HOUSE", "MOUSE", "PLATE", "PLACE", "PADRE"]
let random = Math.random ()*diccionario.length
random = Math.floor (random)
let palabraSecreta = diccionario [random]


fetch(API)
.then((response)=>{
    response.json()
    .then((data)=>{
        palabraSecreta = data [0].toUpperCase()
        console.log(data)
    })
})


let oportunidades = 6;


let button= document.getElementById("guess-button")
let input = document.getElementById("guess-input")
let grid = document.getElementById("grid")

button.addEventListener("click" ,enter)

function enter(){
    let intento = input.value.toUpperCase()
    if (intento == palabraSecreta){
        GameOver("GANASTE!!")
    }
    let row = document.createElement("div")
    row.className = "row"
    for (let i in palabraSecreta){
        let letra = document.createElement("span")
        letra.className = "letter"
        letra.innerHTML = intento [i]
        if (palabraSecreta[i] == intento[i]){
            letra.style.backgroundColor = "green"
        } else if (palabraSecreta.includes(intento[i])){
            letra.style.backgroundColor = "yellow"
        }else {
            letra.style.backgroundColor = "gray"
        }
        row.appendChild(letra)
    }
grid.appendChild(row)
    oportunidades -- 
    if (oportunidades === 0){
        GameOver("Ups Perdiste!") 
    }    
}

function GameOver(mensaje){
    button.disabed = true
    input.disabled = true
    let contenedor = document.getElementById('guesses');
    contenedor.innerHTML = "<h1>" + mensaje + "</h1>"
}
