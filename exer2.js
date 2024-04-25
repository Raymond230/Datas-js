const finalDaCopa = new Date(2002, 5, 30, 8, 0, 0, 0);
const inicioTimeStemp = +finalDaCopa

const momentoPrimeiroGol = inicioTimeStemp + (45 + 22 +15)*1000*60

const primeiroGol = new Date(momentoPrimeiroGol)

console.log(primeiroGol)

