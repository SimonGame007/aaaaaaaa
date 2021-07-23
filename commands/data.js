
const time = new Date() // metodo para pegar a data de hoje
horas = time.getHours() // pega as horas
minutos = time.getMinutes() // pega os minutos
segundos = time.getSeconds() // pega os segundos
milisegndos = time.getMilliseconds() // pega os milisegundos
data = time.getDate() // pega a data de hoje
mes = time.getMonth() // pega o mes de hoje
ano = time.getFullYear() // pega o ano de hoje, exemplo 2021
tempo = time.getTime() // pega o tempo em milisegundos desde 1 de janeiro
dia = time.getDay() // pega o dia da semana
datenow = Date.now() // pega o tempo em ECMAScript 5

console.log(horas, minutos, segundos, milisegndos, data, mes, ano, tempo, dia, datenow)
