
function favColor(evt) {
    evt.preventDefault
    alert("Mann Gunn just loooooves purple")
}

let color =  document.querySelector("#color")
color.addEventListener("click", favColor)

function favPlace(evt) {
    evt.preventDefault
    alert("Mann Gunn loves any and all mountains")
}

let place =  document.querySelector("#place")
place.addEventListener("click", favPlace)

function favRitual(evt) {
    evt.preventDefault
    alert("the second death ritual")
}

let ritual =  document.querySelector("#ritual")
ritual.addEventListener("click", favRitual)