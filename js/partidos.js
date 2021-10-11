let partidos = document.getElementById("partidos");
let divFiltro = document.createElement("div");
divFiltro.setAttribute("id", "filtro");
divFiltro.innerHTML = `<span>Equipo:</span> <input id="input"/> <input name = "x" type="radio" value="todos" id="todos"/>Todos <input type="radio" name = "x" id="ganados"/>Ganados <input type="radio" name = "x" value="perdidos" id="perdidos"/>Perdidos <input type="radio" name = "x" value= "empatados" id= "empatados"/>Empatados <button id="boton" >Buscar</button>`;
partidos.appendChild(divFiltro);
let tabla = document.createElement("table");
tabla.setAttribute("class", "table")
let thead = document.createElement("thead");
let tr = document.createElement("tr");
tr.innerHTML = `<td>Local</td><td>Resultado</td><td>Visitante</td>`;
thead.appendChild(tr);
tabla.appendChild(thead);
partidos.appendChild(tabla);
let tbody = document.createElement("tbody");
tabla.appendChild(tbody);

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
let x = document.getElementsByName("name");
let input = document.getElementById("input");
boton.addEventListener("click", function () {
  tbody.innerHTML = "";
  for (i = 0; i < matches.matches.length; i++) {
    if (
      (document.getElementById("todos").checked &&
        matches.matches[i].homeTeam.name == input.value) ||
      (document.getElementById("todos").checked &&
        matches.matches[i].awayTeam.name == input.value)
    ) {
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
    else if (
        (document.getElementById("ganados").checked &&
          matches.matches[i].homeTeam.name == input.value ) ||
        (document.getElementById("ganados").checked &&
          matches.matches[i].awayTeam.name == input.value)
      ) {
        if (matches.matches[i].score.winner == "HOME_TEAM" && matches.matches[i].homeTeam.name == input.value || matches.matches[i].score.winner == "AWAY_TEAM" && matches.matches[i].awayTeam.name == input.value) {
            let tr = document.createElement("tr");
            tr.innerHTML = `<td>${matches.matches[i].homeTeam.name}</td><td><img class = "escudo" src="https://crests.football-data.org/${matches.matches[i].homeTeam.id}.svg"/>${matches.matches[i].score.fullTime.homeTeam}-${matches.matches[i].score.fullTime.awayTeam}<img class = "escudo" src="https://crests.football-data.org/${matches.matches[i].awayTeam.id}.svg"/></td><td>${matches.matches[i].awayTeam.name}</td>`;
            tbody.appendChild(tr);
        } 
      }
      else if (
        (document.getElementById("perdidos").checked &&
          matches.matches[i].homeTeam.name == input.value ) ||
        (document.getElementById("perdidos").checked &&
          matches.matches[i].awayTeam.name == input.value)
      ) {
        if (matches.matches[i].score.winner == "AWAY_TEAM" && matches.matches[i].homeTeam.name == input.value || matches.matches[i].score.winner == "HOME_TEAM" && matches.matches[i].awayTeam.name == input.value) {
            let tr = document.createElement("tr");
            tr.innerHTML = `<td>${matches.matches[i].homeTeam.name}</td><td><img class = "escudo" src="https://crests.football-data.org/${matches.matches[i].homeTeam.id}.svg"/>${matches.matches[i].score.fullTime.homeTeam}-${matches.matches[i].score.fullTime.awayTeam}<img class = "escudo" src="https://crests.football-data.org/${matches.matches[i].awayTeam.id}.svg"/></td><td>${matches.matches[i].awayTeam.name}</td>`;
            tbody.appendChild(tr);
        } 
      }
      else if (
        (document.getElementById("empatados").checked &&
          matches.matches[i].homeTeam.name == input.value ) ||
        (document.getElementById("empatados").checked &&
          matches.matches[i].awayTeam.name == input.value)
      ) {
        if (matches.matches[i].score.winner == "DRAW" && matches.matches[i].homeTeam.name == input.value || matches.matches[i].score.winner == "DRAW" && matches.matches[i].awayTeam.name == input.value) {
            let tr = document.createElement("tr");
            tr.innerHTML = `<td>${matches.matches[i].homeTeam.name}</td><td><img class = "escudo" src="https://crests.football-data.org/${matches.matches[i].homeTeam.id}.svg"/>${matches.matches[i].score.fullTime.homeTeam}-${matches.matches[i].score.fullTime.awayTeam}<img class = "escudo" src="https://crests.football-data.org/${matches.matches[i].awayTeam.id}.svg"/></td><td>${matches.matches[i].awayTeam.name}</td>`;
            tbody.appendChild(tr);
        } 
      }
      
  }
})
