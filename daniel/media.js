const form = document.querySelector("form")
const resp1 = document.querySelector("h3")
const resp2 = document.querySelector("h4")

form.addEventListener("submit", (e) => { e.preventDefault} )

const none = form.inNome.value
const nota1 = Number(form.inNotal.value)
const nota2 = Number(form.inNota2.value)
const media = (nota1+nota2)/2
resp1.innerText = `Média das Notas` $(media.toFixed(2))
