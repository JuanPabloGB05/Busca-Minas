//Variables
var matriz = [];
var filas = 10;
var columnas = 10;
var probabilidad = 0.2;
var gracia = 0.95;
var contenedor = document.getElementById("mi-contenedor");
var vidas = 5;

//Creacion de Matriz
for (var i = 0; i < filas; i++) {
    matriz[i] = [];
    for (var j = 0; j < columnas; j++) {
        var numero = Math.random();
        if (numero < probabilidad){
            matriz[i][j] = 1;
        }
        else if(numero > gracia){
            matriz[i][j] = 0.1;
        }
        else {
            matriz[i][j] = 0;
        }
    }
}
console.log(contenedor.escuela);
//Creacion de divs
for (var i = 0; i < filas; i++) {
    for (var j = 0; j < columnas; j++) {
        var nuevoDiv = document.createElement("div");
        nuevoDiv.classList.add("mi-div");
        //nuevoDiv.textContent = `${i}-${j}`; //posición fila 
        nuevoDiv.dataset.fila = i.toString(); //fila como atributo de datos
        nuevoDiv.dataset.columna = j.toString(); //columna como atributo de datos
        /*nuevoDiv.Col = j;
        nuevoDiv.Ren = i;*/

    //hacer que cada div haga cada cosa
        nuevoDiv.addEventListener("click", function() {
        // Obtener el valor de data-fila y data-columna
            var fila = this.dataset.fila;                           /*var fila = this.Ren;*/
            var columna = this.dataset.columna;                     /*var fila = this.Col*/
        // Convertir el valor a tipo número
            fila = +fila;
            columna = +columna;
        //Recorrido para ver si hay bombas al rededor
            var suma = 0;
            for(var i = max(fila - 1, 0); i < min(fila +2, filas); i++)
                for(var j = max(columna - 1, 0); j < min(columna +2, columnas); j++)
                    suma += matriz[i][j];
        // Cambiar el color del div según el valor de la matriz
            if (matriz[fila][columna] === 1) {
              this.style.backgroundColor = "red";
              this.style.backgroundImage = "url('imagenes/bomb_PNG41.png')";
              this.style.backgroundSize = "contain";
              this.textContent = null;
              vidas--;
              document.getElementById('vidasnum').innerHTML=vidas
              console.log("Vidas = " + vidas);
            } else if(matriz[fila][columna] === 0.1){
                this.style.backgroundImage = "url('imagenes/peon-alas.jpg')";
                this.style.backgroundSize = "contain";
                this.innerText = suma - 0.1;
                this.style.color = "#2b48f0";
                this.style.fontFamily = "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif"
                vidas++;
                document.getElementById('vidasnum').innerHTML=vidas
                console.log("Vidas = " + vidas);
            } 
            else {
              this.style.background = "green";
              this.innerText = suma;
              if( suma != 0){
                this.style.backgroundImage = "url('imagenes/bandera.png')";
                this.style.backgroundSize = "contain";
              }
            }
          });
        contenedor.appendChild(nuevoDiv);
    }
}
/*function frunción(control) {
    // Obtener el valor de data-fila y data-columna
        fila = control.dataset.fila
        columna = control.dataset.columna
        //console.log(fila); 
        //console.log(columna); 
    // Convertir el valor a tipo número
        fila = +fila;
        columna = +columna;
        //console.log(fila); 
        //console.log(columna); 
    // Cambiar el color del div según el valor de la matriz
        if (matriz[fila][columna] === 1) {
            control.style.backgroundImage = "url(bandera.png)";
          vidas--;
          console.log("Vidas = " + vidas);
        } else {
            control.style.backgroundImage = "url(bomb_PNG41.png)";
        }
      }*/
function max(i, j)
{   if (i > j)
        return i;
    else
        return j;
}
function min(i, j)
{   if (i < j)
        return i;
    else
        return j;
}

console.log(matriz);
if (vidas == 0){
    alert("Haz perdido")
}
else if("hacer que al ya haber seleccionado todas las casillas buenas aparezca que hayas ganado"){}