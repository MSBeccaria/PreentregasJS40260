/*creo un array con las opciones de tours*/


const citytour = [
    { id: 1, nombre: "Casco histórico", turno: "domingo" },
    { id: 2, nombre: "Patrimonio arquitectura", turno: "sábado" },
    { id: 3, nombre: "Calles con historia", turno: "viernes" },

];

/*uso find para que el usuario elija el tour y sepa que días se hace*/

let nombre = prompt("Qué citytour quieres hacer?");
let tour = citytour.find(item => item.nombre === nombre);
let mensaje = `El citytour ${nombre} se realiza los días ${tour.turno}`;
alert(mensaje);

