console.log("hi Awesome!!");

const sumarFuncionTipoFlecha = (a, b) => a + b;

resultado = sumarFuncionTipoFlecha(3, 3);
console.log(resultado);

var arreglo = ["hola", 1, "Mundillo"];
//modificando arreglo
arreglo[2] = "Mundo";
arreglo.push("malo h");
arreglo.shift();

var miArreglo = ["Hola", "Mundo", 7];
var borrados = miArreglo.splice(1, 2, 8, "world"); //["Hola", 8, "world"]
console.log(borrados);
console.log(miArreglo);

console.log(arreglo);

function checaValor() {
  // accediendo al elemento input por su id "respuesta"
  var respues = document.getElementById("respuesta");

  // contendrá el mensaje que se mostrará
  var text = "";

  //acceder al valor respues
  switch (respues.value) {
    case "1":
      text = "El valor es 1";
      break;
    case "2":
      text = "El valor es 2";
      break;
    case "3":
      text = "El valor es 3";
      break;
    default:
      text = "No ingresaste un valor válido";
  }
  //busca id "resultado" y lo remplaza por la var text
  document.getElementById("resultado").innerHTML = text;
}

var canciones = ["mariachi", "suprema", "leila", "TitoCalde"];
var temas = document.getElementById("parrafo1");

function mostrarTemas(){
  var text = " ";
  for (var index = 0; index < canciones.length; index++){
    text += "Tema " + index + " es: " +  canciones[index] + "<br>";
  }

  temas.innerHTML = text;
};


function ocultarTemas() {
  var temas = document.getElementById("parrafo1");
  var text = "MOSTRAR CANCIONES DE BENY";
  temas.innerHTML = text;
};

// va mal


function cambiarimagen() {
  var img1 = "../assets/img/thorfin.jpg";
  var img2 = "../assets/img/kbra.jpeg";
  var imagenes = document.getElementById("imagen");

  // Obtener solo el nombre del archivo de la propiedad src
  var nombreActual = imagenes.src.split("/").pop();

  if (nombreActual === "thorfin.jpg") {
    imagenes.src = img2;
  } else {
    imagenes.src = img1;
  }
}
