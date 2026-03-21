// Array de robots con sus datos
const robots = [
    { nombre: "Siemens", grados: 6, aplicacion: "Soldadura y pintura", precision: "Alta" },
    { nombre: "KUKA", grados: 3, aplicacion: "Ensamblaje", precision: "Muy alta" },
    { nombre: "FANUC", grados: 4, aplicacion: "Ensamblaje rápido", precision: "Alta" },
    { nombre: "UR", grados: 6, aplicacion: "Trabajo con humanos", precision: "Media" }
];

// Función que muestra info de cada robot en la consola
function mostrarRobots() {
    for (let i = 0; i < robots.length; i++) {
        console.log("Robot: " + robots[i].nombre + " - Precisión: " + robots[i].precision);
    }
}

// Función que cuenta robots con precisión alta
function contarRobotsPrecisionAlta() {
    let contador = 0;
    for (let i = 0; i < robots.length; i++) {
        if (robots[i].precision === "Alta" || robots[i].precision === "Muy alta") {
            contador++;
        }
    }
    return contador;
}

// Función que valida el formulario de contacto
function validarFormulario(event) {
    event.preventDefault();

    let nombre = document.getElementById("nombre").value;
    let correo = document.getElementById("correo").value;
    let mensaje = document.getElementById("mensaje").value;

    if (nombre === "" || correo === "" || mensaje === "") {
        alert("Por favor, rellena todos los campos obligatorios");
    } else {
        alert("Consulta enviada correctamente");
    }
}

// Función que muestra los robots de alta precisión
function mostrarRobotsPrecisionAlta() {
    let resultado = "Robots con precisión alta o muy alta:\n";
    for (let i = 0; i < robots.length; i++) {
        if (robots[i].precision === "Alta" || robots[i].precision === "Muy alta") {
            resultado = resultado + "- " + robots[i].nombre + "\n";
        }
    }
    alert(resultado);
}

// Ejecutar al cargar la página
mostrarRobots();
console.log("Robots con precisión alta: " + contarRobotsPrecisionAlta());

// Evento del formulario
let formulario = document.querySelector("form");
if (formulario) {
    formulario.addEventListener("submit", validarFormulario);
}

// Evento del botón de precisión
let btnPrecision = document.getElementById("btn-precision");
if (btnPrecision) {
    btnPrecision.addEventListener("click", mostrarRobotsPrecisionAlta);
}