async function pedirPartidos() {
  let url =
    "https://api.football-data.org/v2/competitions/2014/matches?season=2021";
  let info = await fetch(url, {
    method: "GET",
    headers: {
      "X-Auth-Token": "41cb86530b6a4d458ec35bd404384089",
    },
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      return data.matches;
    })
    .catch(function (error) {
      console.log(error);
    });
    return info
}

let cargando = document.getElementById("loader")
let img = document.createElement("img")
img.setAttribute("src", "./images/miniatura.png")
cargando.appendChild(img)

let partidos = document.getElementById("partidos");
partidos.setAttribute("class", "estadisticas")
let divFiltro = document.createElement("div");
divFiltro.setAttribute("id", "filtro");
divFiltro.setAttribute("class", "filtro");
divFiltro.innerHTML = `<span>Equipo:</span> <input id="input"/> <input class = "x" name = "x" type="radio" value="todos" id="todos"/>Todos <input type="radio" class = "x" name = "x" id="ganados"/>Ganados <input type="radio" class = "x" name = "x" value="perdidos" id="perdidos"/>Perdidos <input type="radio"  class = "x" name = "x" value= "empatados" id= "empatados"/>Empatados <button id="boton" >Buscar</button>`;
partidos.appendChild(divFiltro);
let tabla = document.createElement("table");
tabla.setAttribute("class", "table table-striped table-bordered");
let thead = document.createElement("thead");
let tr = document.createElement("tr");
tr.innerHTML = `<th>Local</th><th>Resultado</th><th>Visitante</th>`;
thead.appendChild(tr);
tabla.appendChild(thead);
partidos.appendChild(tabla);
let tbody = document.createElement("tbody");
tabla.appendChild(tbody);
let error = document.createElement("span");
error.setAttribute("id", "mensajeError");
error.setAttribute("class", "centrar");
partidos.appendChild(error);
let mensajeError = document.getElementById("mensajeError");


function pintarPartidos(pPar){
for (i = 0; i < pPar.length; i++) {
  if (pPar[i].score.winner == null) {
    let tr = document.createElement("tr");
    tr.innerHTML = `<td>${pPar[i].homeTeam.name}</td><td><img class = "escudo" src="https://crests.football-data.org/${pPar[i].homeTeam.id}.svg"/>Pendiente<img class = "escudo" src="https://crests.football-data.org/${pPar[i].awayTeam.id}.svg"/></td><td>${pPar[i].awayTeam.name}</td>`;
    tbody.appendChild(tr);
  } else {
    let tr = document.createElement("tr");
    tr.innerHTML = `<td>${pPar[i].homeTeam.name}</td><td><img class = "escudo" src="https://crests.football-data.org/${pPar[i].homeTeam.id}.svg"/>${pPar[i].score.fullTime.homeTeam}-${pPar[i].score.fullTime.awayTeam}<img class = "escudo" src="https://crests.football-data.org/${pPar[i].awayTeam.id}.svg"/></td><td>${pPar[i].awayTeam.name}</td>`;
    tbody.appendChild(tr);
  }
}}
let boton = document.getElementById("boton");

let input = document.getElementById("input");
let nombreEquipo = []

async function init() {
  let pPar = await pedirPartidos();
  cargando.innerHTML = ""
  pintarPartidos(pPar)
  boton.addEventListener("click", function () {
    let equipo = false;
    let x = document.getElementsByClassName("x");
    tbody.innerHTML = "";
    mensajeError.innerText = "";
    let checked = false;
    for (m = 0; m < x.length; m++) {
      if (x[m].checked == true) {
        checked = true;
      }
    }
  
    for (i = 0; i < pPar.length; i++) {
      
      if(nombreEquipo.includes(pPar[i].homeTeam) == false){
        nombreEquipo.push(pPar[i].homeTeam)
      }
      if(pPar[i].homeTeam.name == input.value || pPar[i].awayTeam.name == input.value){
        equipo = true
      }
      if (
        (document.getElementById("todos").checked &&
          pPar[i].homeTeam.name == input.value) ||
        (document.getElementById("todos").checked &&
          pPar[i].awayTeam.name == input.value) 
      ) {
        equipo = true;
  
        if (pPar[i].score.winner == null) {
          let tr = document.createElement("tr");
          tr.innerHTML = `<td>${pPar[i].homeTeam.name}</td><td><img class = "escudo" src="https://crests.football-data.org/${pPar[i].homeTeam.id}.svg"/>Pendiente<img class = "escudo" src="https://crests.football-data.org/${pPar[i].awayTeam.id}.svg"/></td><td>${pPar[i].awayTeam.name}</td>`;
          tbody.appendChild(tr);
        } else {
          let tr = document.createElement("tr");
          tr.innerHTML = `<td>${pPar[i].homeTeam.name}</td><td><img class = "escudo" src="https://crests.football-data.org/${pPar[i].homeTeam.id}.svg"/>${pPar[i].score.fullTime.homeTeam}-${pPar[i].score.fullTime.awayTeam}<img class = "escudo" src="https://crests.football-data.org/${pPar[i].awayTeam.id}.svg"/></td><td>${pPar[i].awayTeam.name}</td>`;
          tbody.appendChild(tr);
        }
      } else if (
        (document.getElementById("ganados").checked &&
          pPar[i].homeTeam.name == input.value) ||
        (document.getElementById("ganados").checked &&
          pPar[i].awayTeam.name == input.value)
      ) {
        equipo = true;
  
        if (
          (pPar[i].score.winner == "HOME_TEAM" &&
            pPar[i].homeTeam.name == input.value) ||
          (pPar[i].score.winner == "AWAY_TEAM" &&
            pPar[i].awayTeam.name == input.value)
        ) {
          let tr = document.createElement("tr");
          tr.innerHTML = `<td>${pPar[i].homeTeam.name}</td><td><img class = "escudo" src="https://crests.football-data.org/${pPar[i].homeTeam.id}.svg"/>${pPar[i].score.fullTime.homeTeam}-${pPar[i].score.fullTime.awayTeam}<img class = "escudo" src="https://crests.football-data.org/${pPar[i].awayTeam.id}.svg"/></td><td>${pPar[i].awayTeam.name}</td>`;
          tbody.appendChild(tr);
        }
      } else if (
        (document.getElementById("perdidos").checked &&
          pPar[i].homeTeam.name == input.value) ||
        (document.getElementById("perdidos").checked &&
          pPar[i].awayTeam.name == input.value)
      ) {
        equipo = true;
  
        if (
          (pPar[i].score.winner == "AWAY_TEAM" &&
            pPar[i].homeTeam.name == input.value) ||
          (pPar[i].score.winner == "HOME_TEAM" &&
            pPar[i].awayTeam.name == input.value)
        ) {
          let tr = document.createElement("tr");
          tr.innerHTML = `<td>${pPar[i].homeTeam.name}</td><td><img class = "escudo" src="https://crests.football-data.org/${pPar[i].homeTeam.id}.svg"/>${pPar[i].score.fullTime.homeTeam}-${pPar[i].score.fullTime.awayTeam}<img class = "escudo" src="https://crests.football-data.org/${pPar[i].awayTeam.id}.svg"/></td><td>${pPar[i].awayTeam.name}</td>`;
          tbody.appendChild(tr);
        }
      } else if (
        (document.getElementById("empatados").checked &&
          pPar[i].homeTeam.name == input.value) ||
        (document.getElementById("empatados").checked &&
          pPar[i].awayTeam.name == input.value)
      ) {
        equipo = true;
  
        if (
          (pPar[i].score.winner == "DRAW" &&
            pPar[i].homeTeam.name == input.value) ||
          (pPar[i].score.winner == "DRAW" &&
            pPar[i].awayTeam.name == input.value)
        ) {
          let tr = document.createElement("tr");
          tr.innerHTML = `<td>${pPar[i].homeTeam.name}</td><td><img class = "escudo" src="https://crests.football-data.org/${pPar[i].homeTeam.id}.svg"/>${pPar[i].score.fullTime.homeTeam}-${pPar[i].score.fullTime.awayTeam}<img class = "escudo" src="https://crests.football-data.org/${pPar[i].awayTeam.id}.svg"/></td><td>${pPar[i].awayTeam.name}</td>`;
          tbody.appendChild(tr);
        }
      }
      if (equipo == false && input.value != "") {
        mensajeError.innerText = "Introduce un nombre v??lido";}
       else if (checked == false && input.value != "") {
        mensajeError.innerText = "Elige una categor??a para filtrar";
      } else if (input.value == "") {
        mensajeError.innerText = "Introduce el nombre de un equipo";
      }
    }
    console.log(equipo)
    
  });

}
init();