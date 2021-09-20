const donacionData = {
  objetivo: 100,
  recaudacion: 99,
};

export let progresResult =
  (donacionData.recaudacion * 100) / donacionData.objetivo;
console.log(progresResult);
