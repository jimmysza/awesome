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
