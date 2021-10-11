let clasificacion = document.getElementById("clasificacion");
let tabla = document.createElement("table");
tabla.setAttribute("class", "table");
let thead = document.createElement("thead");
let tr = document.createElement("tr");
let td = document.createElement("td");
td.innerHTML = "Posición";
tr.appendChild(td);
td = document.createElement("td");
td.innerHTML = "Club";
tr.appendChild(td);
td = document.createElement("td");
td.innerHTML = "PJ";
tr.appendChild(td);
td = document.createElement("td");
td.innerHTML = "PG";
tr.appendChild(td);
td = document.createElement("td");
td.innerHTML = "PP";
tr.appendChild(td);
td = document.createElement("td");
td.innerHTML = "PE";
tr.appendChild(td);
td = document.createElement("td");
td.innerHTML = "GF";
tr.appendChild(td);
td = document.createElement("td");
td.innerHTML = "GC";
tr.appendChild(td);
td = document.createElement("td");
td.innerHTML = "DG";
tr.appendChild(td);
td = document.createElement("td");
td.innerHTML = "Pts";
tr.appendChild(td);
thead.appendChild(tr);
tabla.appendChild(thead);
clasificacion.appendChild(tabla);
let tbody = document.createElement("tbody");
tabla.appendChild(tbody);

for (i = 0; i < position.standings[0].table.length; i++) {
  let tr = document.createElement("tr");
  let td = document.createElement("td");
  td.innerText = position.standings[0].table[i].position;
  tr.appendChild(td);
  td = document.createElement("td");
  td.innerHTML = `<img class = "escudo" src="https://crests.football-data.org/${position.standings[0].table[i].team.id}.svg"/>
   ${position.standings[0].table[i].team.name}`;
  tr.appendChild(td);
  td = document.createElement("td");
  td.innerText = position.standings[0].table[i].playedGames;
  tr.appendChild(td);
  td = document.createElement("td");
  td.innerText = position.standings[0].table[i].won;
  tr.appendChild(td);
  td = document.createElement("td");
  td.innerText = position.standings[0].table[i].lost;
  tr.appendChild(td);
  td = document.createElement("td");
  td.innerText = position.standings[0].table[i].draw;
  tr.appendChild(td);
  td = document.createElement("td");
  td.innerText = position.standings[0].table[i].goalsFor;
  tr.appendChild(td);
  td = document.createElement("td");
  td.innerText = position.standings[0].table[i].goalsAgainst;
  tr.appendChild(td);
  td = document.createElement("td");
  td.innerText = position.standings[0].table[i].goalDifference;
  tr.appendChild(td);
  td = document.createElement("td");
  td.innerText = position.standings[0].table[i].points;
  tr.appendChild(td);
  tbody.appendChild(tr);
}
