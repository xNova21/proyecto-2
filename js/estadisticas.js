let estadisticas = document.getElementById("estadisticas");
let table = document.createElement("table");
table.setAttribute("class", "table")
let thead = document.createElement("thead");
let tr = document.createElement("tr");
tr.innerHTML = `<td>Club</td><td>Goles</td><td>Partidos</td><td>Media de goles</td>`;
thead.appendChild(tr);
table.appendChild(thead);
estadisticas.appendChild(table);
let tbody = document.createElement("tbody");
table.appendChild(tbody);

let equipos = [];
let media = [];


for (let i = 0; i < matches.matches.length; i++) {
  if (equipos.includes(matches.matches[i].homeTeam.name) != true) {
    equipos.push(matches.matches[i].homeTeam.name);
  }
}
for(let i = 0; i < equipos.length; i++){
    let partidos = 0;
    let goles = 0;
    let x = {Equipo: equipos[i], Goles: goles,Partidos: partidos}
    for(i=0; i<matches.matches.length; i++){

    }
}
console.log(media);
