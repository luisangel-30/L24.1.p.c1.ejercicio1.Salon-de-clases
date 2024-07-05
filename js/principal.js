import CL_estudiante from "./CL_estudiante.js";
import CL_salon from "./CL_salon.js";

let estud1 = new CL_estudiante("Luis", 16, "M");
let estud2 = new CL_estudiante("Ana", 19, "F");
let estud3 = new CL_estudiante("Jose", 20, "M");
let estud4 = new CL_estudiante("Carmen", 18, "F");

let salon = new CL_salon();

salon.procesarestudiante(estud1);
salon.procesarestudiante(estud2);
salon.procesarestudiante(estud3);
salon.procesarestudiante(estud4);

let salida=document.getElementById("salida");


salida.innerHTML+= "<br> Edad Promedio: " +salon.edadPromedio();
salida.innerHTML+= "<br> Estudiante con mayor edad: "  +salon.nombremayoredad();
salida.innerHTML+= "<br> Porcentajes de chicas con mayor edad:" +salon.porcchicasmayoredad();




