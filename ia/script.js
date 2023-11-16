// Cache the DOM
var button = document.getElementById("button")
var body = document.getElementById("body")
var nume = document.getElementById("nume")
var prenume = document.getElementById("prenume")
var image = document.getElementById("image")
var asteptari= document.getElementById("asteptari")
var an = document.getElementById("anNastere")
const d = new Date()
var year = d.getFullYear()
button.addEventListener("click", altaViata)
an.addEventListener("mouseover", displayAge)
function displayAge(){
	an.innerHTML = year - an.innerHTML
}
function altaViata(){
	nume.innerHTML = "Functie: Game Developer"
	prenume.innerHTML = "Loc de munca: La Ovidiu=)"
	asteptari.innerHTML = "Experienta: <ol><li>internship</li><li>proiect cercetare</li></ol>"
	image.src = "codrin.jpg"
	body.style.backgroundColor = "red"
	body.style.color = "purple"
	image.style.opacity = "70%"
	image.style.borderWidth = "25px"
	image.style.height = "250px"
	image.style.width = "250px"
}