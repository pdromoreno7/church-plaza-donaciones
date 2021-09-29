const donacionData = {
  objetivo: 100,
  recaudacion: 100,
};

export let progresResult =
  (donacionData.recaudacion * 100) / donacionData.objetivo;
console.log(progresResult);

function progresRealizacion(n) {
  switch (n) {
    case 1:
      return "17";

    case 2:
      return "30";

    case 3:
      return "50";

    case 4:
      return "67";

    case 5:
      return "80";

    case 6:
      return "100";

    default:
      return "0";
  }
}
// Del 1 al 6 que tan avanzado esta el proyecto en obra?
let avance = 6;
export let resultRealizacion = progresRealizacion(avance);
