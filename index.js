const { leerCitas, registrarCita } = require("./operaciones.js");

const [operaciones, nombre, edad, tipo, color, enfermedad] = process.argv.slice(2);

if (operaciones === "registrar") {
  if (!nombre || !edad || !tipo || !color || !enfermedad) {
    console.log("Ingrese todos los campos");
  } else {
    registrarCita(nombre, edad, tipo, color, enfermedad);
  }
} else if (operaciones === "leer") {
  leerCitas();
} else {
  console.log("Ingrese una operación valida");
}