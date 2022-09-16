/*creo un array con las opciones de tours


const citytour = [
    { id: 1, nombre: "Casco histórico", turno: "domingo" },
    { id: 2, nombre: "Patrimonio arquitectura", turno: "sábado" },
    { id: 3, nombre: "Calles con historia", turno: "viernes" },

];

/*uso find para que el usuario elija el tour y sepa que días se hace

let nombre = prompt("Qué citytour quieres hacer?");
let tour = citytour.find(item => item.nombre === nombre);
let mensaje = `El citytour ${nombre} se realiza los días ${tour.turno}`;
alert(mensaje);*/


/*esto como para recopilar datos de los inscriptos, pero no se si está bien*/

class Turista {
    constructor(tour, nombre, apellido, mail) {
        this.tour = tour;
        this.nombre = nombre;
        this.apellido = apellido;
        this.mail = mail;
    
    }
}

const turistas = [];
turistas.push(new Turista("Casco histórico", "Susana", "Lopez", "susana@lopez"));
turistas.push(new Turista("Patrimonio arquitectura", "Juan", "Perez", "juan@perez"));
turistas.push(new Turista("Casco histórico", "Ana", "Gomez", "ana@gomez"));
console.log(turistas); 



function buscarTurista(tour, nombre){
    console.log(tour) 
    console.log(nombre)
    return tour.find( objeto => objeto.apellido === nombre);
}


    let busqueda = buscarTurista(turistas,"Gomez");
    if (busqueda != undefined){
    console.log('Reserva de'+ busqueda.apellido + 'para tour' + busqueda.tour);
} else{
    
    console.log("No hay reserva a ese nombre")
    console.log(busqueda)
}