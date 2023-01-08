function buscar() {
  // Obtener el valor de la barra de búsqueda
  var busqueda = document.getElementById("Search").value;
  // Obtener todas las filas de la tabla
  var filas = document.getElementById("Table").getElementsByTagName("tr");

  // Recorrer cada fila
  for (var i = 0; i < filas.length; i++) {
    // Obtener las celdas de la fila
    var celdas = filas[i].getElementsByTagName("td");
    // Si la fila no es la de encabezado (th)
    if (celdas.length > 0) {
      // Ver si alguna de las celdas contiene el texto de búsqueda
      var coincide = false;
      for (var j = 0; j < celdas.length; j++) {
        if (celdas[j].innerHTML.toLowerCase().indexOf(busqueda.toLowerCase()) > -1) {
          coincide = true;
          break;
        }
      }
      // Ocultar la fila si no se encontró coincidencia
      if (!coincide) {
        filas[i].style.display = "none";
      } else {
        filas[i].style.display = "";
      }
    }
  }
}

