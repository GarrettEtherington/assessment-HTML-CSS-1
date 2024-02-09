console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	alert("Form Submited!")
}

function BingusMouse(evt) {
	evt.preventDefault()
	alert("Woah... nice caulk.")
}


let form = document.querySelector('#contact');
let bingus = document.querySelector("#bingsus")

bingus.addEventListener("mouseover", BingusMouse)
form.addEventListener('submit', handleSubmit);