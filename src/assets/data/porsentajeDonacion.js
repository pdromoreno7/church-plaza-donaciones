const donacionData = {
  objetivo: 100,
  recaudacion: 50,
};

export let progresResult =
  (donacionData.recaudacion * 100) / donacionData.objetivo;
console.log(progresResult);
