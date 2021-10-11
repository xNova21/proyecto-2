let container = document.getElementById("container")
let logo = document.createElement("img")
logo.src = "./images/la-liga.png"
logo.setAttribute("class", "img-fluid margin")
container.appendChild(logo)
let divHome = document.createElement("div")
divHome.id = "divHome"
let home = document.createElement("p")
home.innerText = "¡Bienvenido a la página de la liga!"
home.setAttribute("class", "text-center fs-2 text-decoration-underline margin2")
divHome.appendChild(home)
home = document.createElement("p")
home.innerText = "Aquí podrás comprobar el estado de la clasificación, ver los resultados de los partidos. "
home.setAttribute("class", "text-center fs-4 margin2")
divHome.appendChild(home)
home = document.createElement("p")
home.innerText = "¡Incluso filtrar todos los partidos en los que ha competido tu equipo!"
home.setAttribute("class", "text-center fs-4 margin2")
divHome.appendChild(home)
container.appendChild(divHome)