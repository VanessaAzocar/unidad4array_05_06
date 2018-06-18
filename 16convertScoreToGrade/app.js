/*Escribe una función llamada convertScoreToGrade.

Dada una puntuación, convertScoreToGrade devuelve una cadena que representa el grado de letra correspondiente a la puntuación dada.

Notas:

(100 - 90) -> 'A'
(89 - 80) ->' B '
(79 - 70) -> 'C'
(69 - 60) -> 'D'
(59 - 0) -> 'F'
Si la puntuación dada es mayor que 100 o menor que 0, debe devolver 'PUNTUACION INVALIDA'.
var output = convertScoreToGrade(91);
console.log(output); // -> 'A' */

const convertScoreToGrade = (number) => {
  if (number <= 100 && number >=90){
  return "A"}
  if (number <= 89 && number >=80){
  return "B"}
  if (number <= 79 && number >=70){
  return "C"}
  if (number <= 69 && number >=60){
  return "D"}
  if (number <= 59 && number >=0){
  return "F"}
  if (number > 100 || number<0){
  return "PUNTUACION INVALIDA" }
  }
  console.log(convertScoreToGrade(79));

