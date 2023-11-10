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
        return cadena.substring(3)
    }

    function mayus(cadena){
        return cadena.toUpperCase()
    }

    function calcularEdad(fechaNacimiento) {
        const ahora = new Date();
        const anioActual = ahora.getFullYear();
        const mesActual = ahora.getMonth() + 1; // Los meses en JavaScript van de 0 a 11
        const diaActual = ahora.getDate();
    
        const anioNacimiento = fechaNacimiento.getFullYear();
        const mesNacimiento = fechaNacimiento.getMonth() + 1;
        const diaNacimiento = fechaNacimiento.getDate();
    
        let edad = anioActual - anioNacimiento;
    
        // Ajuste si el cumpleaños aún no ha ocurrido este año
        if (mesActual < mesNacimiento || (mesActual === mesNacimiento && diaActual < diaNacimiento)) {
            edad--;
        }
    
        return edad;
    }

    function estacion(fechaNacimiento) {
        const mesNacimiento = fechaNacimiento.getMonth() + 1; // Los meses en JavaScript van de 0 a 11
    
        if ((mesNacimiento >= 3 && mesNacimiento <= 5) || (mesNacimiento === 6 && fechaNacimiento.getDate() < 21)) {
            return "Primavera";
        } else if ((mesNacimiento >= 6 && mesNacimiento <= 8) || (mesNacimiento === 9 && fechaNacimiento.getDate() < 23)) {
            return "Verano";
        } else if ((mesNacimiento >= 9 && mesNacimiento <= 11) || (mesNacimiento === 12 && fechaNacimiento.getDate() < 21)) {
            return "Otoño";
        } else {
            return "Invierno";
        }
    }


    document.open()
    document.write(
        `<h1>Práctica 3 - DWEC</h1>` +
        `<div>Buenos días <b>${nombre}</b></div>` +
        `<div>La longitud de su nombre completo es <b>${nombreCompleto.length}</b></div>` +
        `<div>La <b>primera letra A</b> de tu nombre está en la posición ${encontrarPrimeraLetraA(nombreCompleto)}</div>` +
        `<div>La <b>ultima letra A</b> de tu nombre está en la posición ${encontrarUltimaA(nombreCompleto)}</div>` +
        `<div>Tu nombre <b>menos las 3 primeras letras</b> es <b>${tresLetras(nombreCompleto)}</b></div>` +
        `<div>Tu nombre todo en <b>mayúsculas</b> es <b>${mayus(nombreCompleto)}</b></div>` +
        `<div>Tu <b>edad</b> es <b>${calcularEdad(fechaNacimiento)}</b></div>` + 
        `<div>Naciste un feliz dia de <b>${estacion(fechaNacimiento)}</b> del año <b>${fechaNacimiento.getFullYear()}</b></div>`


        )
    document.close()

})