let estadisticas = document.getElementById("estadisticas");
let table = document.createElement("table");
table.setAttribute("class", "table");
let thead = document.createElement("thead");
let tr = document.createElement("tr");
tr.innerHTML = `<td>Club</td><td>Goles</td><td>Partidos</td><td>Media de goles</td>`;
thead.appendChild(tr);
table.appendChild(thead);
estadisticas.appendChild(table);
let tbody = document.createElement("tbody");
table.appendChild(tbody);

let equipos = [];

for (let i = 0; i < position.standings[0].table.length; i++) {
  let x = {
    club: position.standings[0].table[i].team.name,
    partidos: 0,
    goles: position.standings[0].table[i].goalsFor,
    media: 0,
  };
  equipos.push(x);
}

for (i = 0; i < matches.matches.length; i++) {
  for (j = 0; j < equipos.length; j++) {
    if (
      (equipos[j].club == matches.matches[i].homeTeam.name &&
        matches.matches[i].score.winner != null) ||
      (equipos[0].club == matches.matches[i].awayTeam.name &&
        matches.matches[i].score.winner != null)
    ) {
      equipos[j].partidos++;
    }
    equipos[j].media = equipos[j].goles / equipos[j].partidos;
  }
}

console.log(equipos);
