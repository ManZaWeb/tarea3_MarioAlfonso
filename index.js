/**
 * Autor Mario Alfonso Nuñez
 * GitHub: https://github.com/ManZaWeb/tarea3_MarioAlfonso.git
 */

document.addEventListener("DOMContentLoaded", () => {

    const solicitarNombre = () => {
        let nombre
        do {
            nombre = prompt("INTRODUCE TU NOMBRE")
        } while (nombre === "")
        return nombre
    }

    const solicitarApellidos = () => {
        let apellidos
        do {
            apellidos = prompt("INTRODUCE TUS APELLIDOS")
        } while (apellidos === "")
        return apellidos
    }

    const solicitarFechaN = () => {
        let fechaN;
        const regexFechaNacimiento = /^(19|20)\d\d\/(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])$/;

        do {
            fechaN = prompt("INTRODUCE TU FECHA DE NACIMIENTO AAAA/MM/DD");
        } while (!regexFechaNacimiento.test(fechaN));
        return fechaN;
    }
    

    const nombre = solicitarNombre()
    const apellidos = solicitarApellidos()
    const fechaN = solicitarFechaN()
    const fechaNacimiento = new Date(fechaN)
    const nombreCompleto = `${nombre} ${apellidos}`
    const numeros = [34, 66, 23, 75, 35, 19]

    

    function encontrarPrimeraLetraA(nombreCompleto) {
        const posicionPrimeraA = nombreCompleto.toLowerCase().indexOf('a') + 1

        if (posicionPrimeraA > 0) {
            return `La <b>primera letra A</b> de tu nombre está en la posición ${posicionPrimeraA}`
        } else {
            return "No se encontró ninguna letra 'A' en tu nombre."
        }
    }


    function encontrarUltimaA(cadena) {
        for (let i = cadena.length - 1; i >= 0; i--) {
            if (cadena[i].toLowerCase() === 'a') {
                return `La <b>ultima letra A</b> de tu nombre está en la posición ${i + 1}`
            }
        }
        return "No se encontro ninguna letra A en tu nombre"
    }

    function tresLetras(cadena) {
        return cadena.substring(3)
    }

    function mayus(cadena) {
        return cadena.toUpperCase()
    }

    function calcularEdad(fechaNacimiento) {
        const ahora = new Date()
        const anioActual = ahora.getFullYear()
        const mesActual = ahora.getMonth() + 1 // Enero seía el 0 y Diciembre el 11 sumamos uno para mostrarselo al usuario
        const diaActual = ahora.getDate()

        const anioNacimiento = fechaNacimiento.getFullYear()
        const mesNacimiento = fechaNacimiento.getMonth() + 1
        const diaNacimiento = fechaNacimiento.getDate()

        let edad = anioActual - anioNacimiento

        // Si todavía no ha pasado el cumpleaños quitamos un año a la edad
        if (mesActual < mesNacimiento || (mesActual === mesNacimiento && diaActual < diaNacimiento)) {
            edad--
        }

        return edad
    }

    function estacion(fechaNacimiento) {
        const mesNacimiento = fechaNacimiento.getMonth() + 1; // Los meses en JavaScript van de 0 a 11

        if ((mesNacimiento >= 3 && mesNacimiento <= 5) || (mesNacimiento === 6 && fechaNacimiento.getDate() < 21)) {
            return "Primavera"
        } else if ((mesNacimiento >= 6 && mesNacimiento <= 8) || (mesNacimiento === 9 && fechaNacimiento.getDate() < 23)) {
            return "Verano"
        } else if ((mesNacimiento >= 9 && mesNacimiento <= 11) || (mesNacimiento === 12 && fechaNacimiento.getDate() < 21)) {
            return "Otoño"
        } else {
            return "Invierno"
        }
    }

    function mayor(numeros) {

        let nMayor = numeros[0]
        for (i = 1; i < numeros.length; i++) {
            if (numeros[i] > nMayor) {
                nMayor = numeros[i]
            }
        }
        return nMayor
    }

    function aleatorio() {
        const nAle = Math.floor(Math.random() * 101)
        return nAle
    }





    document.open()
    document.write(
        `<h1>Práctica 3 - DWEC</h1>` +
        `<div>Buenos días <b>${nombre}</b></div>` +
        `<div>Tu nombre completo (nombre y apellidos) tiene <b>${nombreCompleto.length}</b> caracteres, incluidos espacios</div>` +
        `<div>${encontrarPrimeraLetraA(nombreCompleto)}</div>` +
        `<div>${encontrarUltimaA(nombreCompleto)}</div>` +
        `<div>Tu nombre <b>menos las 3 primeras letras</b> es <b>${tresLetras(nombreCompleto)}</b></div>` +
        `<div>Tu nombre todo en <b>MAYÚSCULAS</b> es <b>${mayus(nombreCompleto)}</b></div>` +
        `<div>Tu <b>edad</b> es <b>${calcularEdad(fechaNacimiento)}</b></div>` +
        `<div>Naciste un feliz dia de <b>${estacion(fechaNacimiento)}</b> del año <b>${fechaNacimiento.getFullYear()}</b></div>` +
        `<div>El <b>coseno de 180 </b>es <b>${Math.cos(Math.PI)}</b></div>` +  //180 grados radianes es igual a PI 
        `<div>El numero mayor de <b>${numeros}</b> es ${mayor(numeros)}</div>` +
        `<div>Ejemplo de un número aleatorio entre 0 y 100: <b> ${aleatorio()}</b></div>`
    )
    document.close()

    const ventanaBtn = document.createElement('button')
    ventanaBtn.innerText = "Abrir ventana"
    document.body.appendChild(ventanaBtn)

    ventanaBtn.addEventListener("click", () => {
        window.location.href = "/iframeVentana.html"
    })


    const reiniciarBtn = document.createElement('button')
    reiniciarBtn.innerText = "Reiniciar"
    document.body.appendChild(reiniciarBtn)

    reiniciarBtn.addEventListener("click", () => {
        window.location.href = "/index.html"
    })



})