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

    function encontrarPrimeraLetraA(nombreCompleto) {
        const posicionPrimeraA = nombreCompleto.toLowerCase().indexOf('a') + 1;

        if (posicionPrimeraA > 0) {
            return `${posicionPrimeraA}`;
        } else {
            return "No se encontró ninguna letra 'A' en tu nombre.";
        }
    }


    function encontrarUltimaA(cadena) {
        for (let i = cadena.length - 1; i >= 0; i--) {
            if (cadena[i].toLowerCase() === 'a') {
                return `${i + 1}`
            }
        }
        return "No se encontro ninguna letra A en tu nombre" // Retorna null si no se encuentra ninguna "a".
    }

    function tresLetras(cadena) {
        return cadena.substring(3);
    }


    document.open()
    document.write(
        `<h1>Práctica 3 - DWEC</h1>` +
        `<div>Buenos días <b>${nombre}</b></div>` +
        `<div>La longitud de su nombre completo es <b>${nombreCompleto.length}</b></div>` +
        `<div>La <b>primera letra A</b> de tu nombre está en la posición ${encontrarPrimeraLetraA(nombreCompleto)}</div>` +
        `<div>La <b>ultima letra A</b> de tu nombre está en la posición ${encontrarUltimaA(nombreCompleto)}</div>` +
        `<div>Tu nombre <b>menos las 3 primeras letras</b> es <b>${tresLetras(nombreCompleto)}</b></div>`
    )
    document.close()

})