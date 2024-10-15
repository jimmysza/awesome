function mostrarlista() {
    var extension = document.getElementById("extension");
    extension.classList.add("show");
     // Añade la clase "show" para mostrar el contenido
}

function mostraLista2(){
    var clase = document.getElementsByClassName("lista2")[0];
    clase.classList.add("show");
}

function desapareceLista2(){
    var clase = document.getElementsByClassName("lista2")[0];
    clase.classList.remove("show");
}

function ocultarlista() {
    var extension = document.getElementById("extension");
    extension.classList.remove("show");  // Remueve la clase "show" para ocultar el contenido
}

//alterna en la id y en la clase titulo
function alternarClase() {
    document.getElementById("h3").classList.toggle("titulo");
}

function h3masgrande(){
    document.getElementById("h3").style.textTransform = "uppercase";
    document.getElementById("h3").style.fontSize = "40px";
};

function reiniciarValores() {
    document.getElementById("h3").style.cssText = "";
    document.getElementById("h3").classList.remove("titulo");
}


function cambiobackground(){
    document.getElementById("usuario").style.backgroundColor = "#111";
    document.getElementById("usuario").style.color = "#fff";
    document.getElementById("Contraseña").style.color = "#fff";
    document.getElementById("Contraseña").style.backgroundColor = "#111";
}

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}


function samethings() {
    // Evita que el formulario se envíe y recargue la página
    event.preventDefault();
    var name = document.getElementById("usuario").value;
    var contra = document.getElementById("password").value;
    var element = document.getElementById("respuesta");
    
    if (name === contra) {
        element.innerHTML = "Accediste";
    } else {
        element.innerHTML = "Rectifiqe a ver ingresado bien los datos";
    }
}




function agregarto_do() {
    var input = document.getElementById("do"); // Obtener el input
    var text = input.value; // Obtener el valor del input
    var list = document.getElementById("list-do"); // Obtener el contenedor para los checkboxes

    // Crear un contenedor para el checkbox y el párrafo
    var contenedor = document.createElement('div');
    contenedor.style.display = "flex";
    contenedor.id = "container-do";
    contenedor.for = "checkbox-list";
    
    // Crear el checkbox
    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = "checkbox-list";

    // Crear el párrafo con el texto
    var parrafo = document.createElement('p');
    parrafo.textContent = text; // Añadir el texto al <label>

    // Añadir el checkbox y el párrafo al contenedor
    contenedor.appendChild(checkbox);
    contenedor.appendChild(parrafo);

    // Añadir el contenedor al listado
    list.appendChild(contenedor);

    // Agregar un evento al checkbox para verificar su estado
    checkbox.addEventListener('change', function() {
        if (checkbox.checked) {
            contenedor.style.display = "none"; // Ocultar el contenedor cuando el checkbox está marcado
        } else {
            contenedor.style.display = "flex"; // Mostrar el contenedor si el checkbox no está marcado
        }
    });

    // Limpiar el valor del input
    input.value = ""; // Vaciar el campo de texto
}

function enfocarInput() {
    var input = document.getElementById("do");
    input.focus(); // Enfocar el input
}

// Agregar el evento de clic al div
var miDiv = document.getElementById("container-do");
miDiv.addEventListener("click", enfocarInput);
