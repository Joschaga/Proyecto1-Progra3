function Pregunta1()
{
  var Palabra="";
  for (var i = 1; i < 6; i++) {
    Palabra+=document.getElementById('Letra'+i).value;
  }
  if (Palabra.toLowerCase()=="viaje") {
    alert("La Palabra Digitada Es Correcta");
    return window.open("Pregunta2.html");
  }
  else {
    alert("La Palabra Digitada Es Incorrecta");
  }

}
function Pregunta2()
{
  var Palabra="";
  for (var i = 1; i < 7; i++) {
    Palabra+=document.getElementById('Letra'+i).value;
  }
  if (Palabra.toLowerCase()=="comida") {
    alert("La Palabra Digitada Es Correcta");
    return window.open("Pregunta3.html");
  }
  else {
    alert("La Palabra Digitada Es Incorrecta");
  }
}function Pregunta3()
{
  var Palabra="";
  for (var i = 1; i < 8; i++) {
    Palabra+=document.getElementById('Letra'+i).value;
  }
  if (Palabra.toLowerCase()=="mascota") {
    alert("La Palabra Digitada Es Correcta");
    return window.open("Pregunta4.html");
  }
  else {
    alert("La Palabra Digitada Es Incorrecta");
  }
}function Pregunta4()
{
  var Palabra="";
  for (var i = 1; i < 9; i++) {
    Palabra+=document.getElementById('Letra'+i).value;
  }
  if (Palabra.toLowerCase()=="deportes") {
    alert("La Palabra Digitada Es Correcta");
    return window.open("Pregunta5.html");
  }
  else {
    alert("La Palabra Digitada Es Incorrecta");
  }
}function Pregunta5()
{
  var Palabra="";
  for (var i = 1; i < 8; i++) {
    Palabra+=document.getElementById('Letra'+i).value;
  }
  if (Palabra.toLowerCase()=="trabajo") {
    alert("La Palabra Digitada Es Correcta");
    return window.open("index.html");
  }
  else {
    alert("La Palabra Digitada Es Incorrecta");
  }
}
