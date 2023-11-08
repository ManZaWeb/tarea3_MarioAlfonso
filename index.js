document.addEventListener("DOMContentLoaded", () => {

    const solicitarNombre = () => {
        let nombre;
        do {
            nombre = prompt("INTRODUCE TU NOMBRE");
        } while (nombre === "");
        return nombre; // Devolver el nombre ingresado
    }

    const solicitarApellidos = () => {
        let apellidos;
        do {
            apellidos = prompt("INTRODUCE TUS APELLIDOS");
        } while (apellidos === "");
        return apellidos; // Devolver los apellidos ingresados
    }

    const solicitarFechaN = () => {
        let fechaN;
        do {
            fechaN = prompt("INTRODUCE TU FECHA DE NACIMIENTO AAAA/MM/DD");
        } while (fechaN === "");
        return fechaN; // Devolver la fecha de nacimiento ingresada
    }

    const nombre = solicitarNombre()
    const apellidos = solicitarApellidos()
    const fechaN = solicitarFechaN()
    const fechaNacimiento = new Date(fechaN);

    const nombreCompleto = `${nombre} ${apellidos}`;

    const h1 = document.createElement("h1")
    h1.innerText = "Práctica 3 - DWEC"
    document.body.appendChild(h1)

    const saludo = document.createElement("div")
    saludo.innerText = `Buenos días ${nombre}`
    document.body.appendChild(saludo)

    const longitud = document.createElement("div")
    longitud.innerText = `La longitud de su nombre completo es ${nombreCompleto.length}`
    document.body.appendChild(longitud)


    const primeraA = document.createElement("div")
    primeraA.innerText = `La primera letra A de tu nombre está en la posición ${nombreCompleto.indexOf('A')}`
    document.body.appendChild(primeraA)
    //funciona pero si no encuentra nada resultado -1

    

})