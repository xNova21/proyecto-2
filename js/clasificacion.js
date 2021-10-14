async function perdirClasificacion() {
  let url = "https://api.football-data.org/v2/competitions/2014/standings";
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
      return data.standings[0].table;
    })
    .catch(function (error) {
      console.log(error);
    });
  return info;
}
let cargando = document.getElementById("loader")
let img = document.createElement("img")
img.setAttribute("src", "./images/miniatura.png")
cargando.appendChild(img)

function cabecera(){
let clasificacion = document.getElementById("clasificacion");
let tabla = document.createElement("table");
tabla.setAttribute("class", "table table-striped table-bordered ");
let thead = document.createElement("thead");
let tr = document.createElement("tr");
let td = document.createElement("th");
td.innerHTML = "Posición";
tr.appendChild(td);
td = document.createElement("th");
td.innerHTML = "Club";
tr.appendChild(td);
td = document.createElement("th");
td.innerHTML = "PJ";
tr.appendChild(td);
td = document.createElement("th");
td.innerHTML = "PG";
tr.appendChild(td);
td = document.createElement("th");
td.innerHTML = "PP";
tr.appendChild(td);
td = document.createElement("th");
td.innerHTML = "PE";
tr.appendChild(td);
td = document.createElement("th");
td.innerHTML = "GF";
tr.appendChild(td);
td = document.createElement("th");
td.innerHTML = "GC";
tr.appendChild(td);
td = document.createElement("th");
td.innerHTML = "DG";
tr.appendChild(td);
td = document.createElement("th");
td.innerHTML = "Pts";
tr.appendChild(td);
thead.appendChild(tr);
tabla.appendChild(thead);
clasificacion.appendChild(tabla);
let tbody = document.createElement("tbody");
tbody.setAttribute("id", "tbody")
tabla.appendChild(tbody);}

function pintarTabla(pClas) {
  let tbody = document.getElementById("tbody")
  for (i = 0; i < pClas.length; i++) {
    let tr = document.createElement("tr");
    let td = document.createElement("td");
    td.innerText = pClas[i].position;
    tr.appendChild(td);
    td = document.createElement("td");
    td.innerHTML = `<img class = "escudo" src="https://crests.football-data.org/${pClas[i].team.id}.svg"/>
   ${pClas[i].team.name}`;
    tr.appendChild(td);
    td = document.createElement("td");
    td.innerText = pClas[i].playedGames;
    tr.appendChild(td);
    td = document.createElement("td");
    td.innerText = pClas[i].won;
    tr.appendChild(td);
    td = document.createElement("td");
    td.innerText = pClas[i].lost;
    tr.appendChild(td);
    td = document.createElement("td");
    td.innerText = pClas[i].draw;
    tr.appendChild(td);
    td = document.createElement("td");
    td.innerText = pClas[i].goalsFor;
    tr.appendChild(td);
    td = document.createElement("td");
    td.innerText = pClas[i].goalsAgainst;
    tr.appendChild(td);
    td = document.createElement("td");
    td.innerText = pClas[i].goalDifference;
    tr.appendChild(td);
    td = document.createElement("td");
    td.innerText = pClas[i].points;
    tr.appendChild(td);
    tbody.appendChild(tr);
  }
}

async function init() {
  let pClas = await perdirClasificacion();
  cargando.innerHTML = ""
  cabecera()
  pintarTabla(pClas);
  console.log(pClas);
}
init();
