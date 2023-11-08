const nombre = prompt("INTRODUCE TU NOMBRE")
const apellidos = prompt("INTRODUCE TUS APELLIDOS")
const fechaN = prompt("INTRODUCE TU FECHA DE NACIMIENTO")
nombreCompleto = nombre.concat(apellidos)

const h1 = document.createElement("h1")
h1.innerText = "Práctica 3 - DWEC"
document.body.appendChild(h1)

const saludo = document.createElement("div")
saludo.innerText = `Buenos días ${nombre}`
document.body.appendChild(saludo)

const longitud = document.createElement("div")
longitud.innerText = `La longitud de su nombre completo es ${nombreCompleto.length}`
document.body.appendChild(longitud)
