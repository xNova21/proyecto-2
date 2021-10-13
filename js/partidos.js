let partidos = document.getElementById("partidos");
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
partidos.appendChild(error);
let mensajeError = document.getElementById("mensajeError");
for (i = 0; i < matches.matches.length; i++) {
  if (matches.matches[i].score.winner == null) {
    let tr = document.createElement("tr");
    tr.innerHTML = `<td>${matches.matches[i].homeTeam.name}</td><td><img class = "escudo" src="https://crests.football-data.org/${matches.matches[i].homeTeam.id}.svg"/>Pendiente<img class = "escudo" src="https://crests.football-data.org/${matches.matches[i].awayTeam.id}.svg"/></td><td>${matches.matches[i].awayTeam.name}</td>`;
    tbody.appendChild(tr);
  } else {
    let tr = document.createElement("tr");
    tr.innerHTML = `<td>${matches.matches[i].homeTeam.name}</td><td><img class = "escudo" src="https://crests.football-data.org/${matches.matches[i].homeTeam.id}.svg"/>${matches.matches[i].score.fullTime.homeTeam}-${matches.matches[i].score.fullTime.awayTeam}<img class = "escudo" src="https://crests.football-data.org/${matches.matches[i].awayTeam.id}.svg"/></td><td>${matches.matches[i].awayTeam.name}</td>`;
    tbody.appendChild(tr);
  }
}
let boton = document.getElementById("boton");

let input = document.getElementById("input");

boton.addEventListener("click", function () {
  let equipo = false
  let x = document.getElementsByClassName("x");
  tbody.innerHTML = "";
  mensajeError.innerText = "";
  let checked = false;
  for (m = 0; m < x.length; m++) {
    if (x[m].checked == true) {
      checked = true;
    }
  }
 
  
  for (i = 0; i < matches.matches.length; i++) {
      if (
      (document.getElementById("todos").checked &&
        matches.matches[i].homeTeam.name == input.value) ||
      (document.getElementById("todos").checked &&
        matches.matches[i].awayTeam.name == input.value)
    ) {
      equipo = true;

      if (matches.matches[i].score.winner == null) {
        let tr = document.createElement("tr");
        tr.innerHTML = `<td>${matches.matches[i].homeTeam.name}</td><td><img class = "escudo" src="https://crests.football-data.org/${matches.matches[i].homeTeam.id}.svg"/>Pendiente<img class = "escudo" src="https://crests.football-data.org/${matches.matches[i].awayTeam.id}.svg"/></td><td>${matches.matches[i].awayTeam.name}</td>`;
        tbody.appendChild(tr);
      } else {
        let tr = document.createElement("tr");
        tr.innerHTML = `<td>${matches.matches[i].homeTeam.name}</td><td><img class = "escudo" src="https://crests.football-data.org/${matches.matches[i].homeTeam.id}.svg"/>${matches.matches[i].score.fullTime.homeTeam}-${matches.matches[i].score.fullTime.awayTeam}<img class = "escudo" src="https://crests.football-data.org/${matches.matches[i].awayTeam.id}.svg"/></td><td>${matches.matches[i].awayTeam.name}</td>`;
        tbody.appendChild(tr);
      }
    } else if (
      (document.getElementById("ganados").checked &&
        matches.matches[i].homeTeam.name == input.value) ||
      (document.getElementById("ganados").checked &&
        matches.matches[i].awayTeam.name == input.value)
    ) {
      equipo = true;

      if (
        (matches.matches[i].score.winner == "HOME_TEAM" &&
          matches.matches[i].homeTeam.name == input.value) ||
        (matches.matches[i].score.winner == "AWAY_TEAM" &&
          matches.matches[i].awayTeam.name == input.value)
      ) {
        let tr = document.createElement("tr");
        tr.innerHTML = `<td>${matches.matches[i].homeTeam.name}</td><td><img class = "escudo" src="https://crests.football-data.org/${matches.matches[i].homeTeam.id}.svg"/>${matches.matches[i].score.fullTime.homeTeam}-${matches.matches[i].score.fullTime.awayTeam}<img class = "escudo" src="https://crests.football-data.org/${matches.matches[i].awayTeam.id}.svg"/></td><td>${matches.matches[i].awayTeam.name}</td>`;
        tbody.appendChild(tr);
      }
    } else if (
      (document.getElementById("perdidos").checked &&
        matches.matches[i].homeTeam.name == input.value) ||
      (document.getElementById("perdidos").checked &&
        matches.matches[i].awayTeam.name == input.value)
    ) {
      equipo = true;

      if (
        (matches.matches[i].score.winner == "AWAY_TEAM" &&
          matches.matches[i].homeTeam.name == input.value) ||
        (matches.matches[i].score.winner == "HOME_TEAM" &&
          matches.matches[i].awayTeam.name == input.value)
      ) {
        let tr = document.createElement("tr");
        tr.innerHTML = `<td>${matches.matches[i].homeTeam.name}</td><td><img class = "escudo" src="https://crests.football-data.org/${matches.matches[i].homeTeam.id}.svg"/>${matches.matches[i].score.fullTime.homeTeam}-${matches.matches[i].score.fullTime.awayTeam}<img class = "escudo" src="https://crests.football-data.org/${matches.matches[i].awayTeam.id}.svg"/></td><td>${matches.matches[i].awayTeam.name}</td>`;
        tbody.appendChild(tr);
      }
    } else if (
      (document.getElementById("empatados").checked &&
        matches.matches[i].homeTeam.name == input.value) ||
      (document.getElementById("empatados").checked &&
        matches.matches[i].awayTeam.name == input.value)
    ) {
      equipo = true;

      if (
        (matches.matches[i].score.winner == "DRAW" &&
          matches.matches[i].homeTeam.name == input.value) ||
        (matches.matches[i].score.winner == "DRAW" &&
          matches.matches[i].awayTeam.name == input.value)
      ) {
        let tr = document.createElement("tr");
        tr.innerHTML = `<td>${matches.matches[i].homeTeam.name}</td><td><img class = "escudo" src="https://crests.football-data.org/${matches.matches[i].homeTeam.id}.svg"/>${matches.matches[i].score.fullTime.homeTeam}-${matches.matches[i].score.fullTime.awayTeam}<img class = "escudo" src="https://crests.football-data.org/${matches.matches[i].awayTeam.id}.svg"/></td><td>${matches.matches[i].awayTeam.name}</td>`;
        tbody.appendChild(tr);
      }
    }
    
  
  }
  console.log(equipo)
  console.log(input.value)
  if (equipo == false && input.value != "") {
    mensajeError.innerText = "Introduce un nombre válido";
  }
  else if (checked == false ) {
    mensajeError.innerText = "Elige una categoría";
  }
  
  else if (input.value == "") {
    mensajeError.innerText = "Introduce el nombre de un equipo";
  }
});
