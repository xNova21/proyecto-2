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
let estadisticas = document.getElementById("estadisticas");
estadisticas.setAttribute("class", "estadisticas")
let table = document.createElement("table");
table.setAttribute("class", "table table-striped table-bordered");
let thead = document.createElement("thead");
let tr = document.createElement("tr");
tr.innerHTML = `<td>Club</td><td>Goles</td><td>Partidos</td><td>Media de goles</td>`;
thead.appendChild(tr);
table.appendChild(thead);
estadisticas.appendChild(table);
let tbody = document.createElement("tbody");
table.appendChild(tbody);

function crearEquipos(pPar){
let equipos = [];
for(i=0 ; i<pPar.length; i++){
    if(pPar[i].score.winner == null){
    continue
  }
  let repetidoCasa = false
  let repetidoVisitante = false
  for(j=0; j<equipos.length; j++){
    if(equipos[j].club == pPar[i].homeTeam.name){
      repetidoCasa = true
    }
    if(equipos[j].club == pPar[i].awayTeam.name){
      repetidoVisitante = true
    }
  }
  if(repetidoCasa == false ){
    let obj = { 
      club: pPar[i].homeTeam.name,
      partidos: 0,
      goles: 0,
      media: 0,
      id: pPar[i].homeTeam.id
    }
    equipos.push(obj)
  }
  if(repetidoVisitante == false ){
    let obj = { 
      club: pPar[i].awayTeam.name,
      partidos: 0,
      goles: 0,
      media: 0,
      id: pPar[i].awayTeam.id
    }
    equipos.push(obj)
  }
  for(k=0; k<equipos.length; k++){
    if(equipos[k].club == pPar[i].homeTeam.name){
      equipos[k].partidos++;
      equipos[k].goles+= pPar[i].score.fullTime.homeTeam
    }
    if(equipos[k].club == pPar[i].awayTeam.name){
      equipos[k].partidos++;
      equipos[k].goles+= pPar[i].score.fullTime.awayTeam
    }
    

  }} return equipos};
  
  
async function init() {
  let pPar = await pedirPartidos();
  cargando.innerHTML = ""
  crearEquipos(pPar)
  let objEquipos = crearEquipos(pPar)
  
  for(let i = 0; i<objEquipos.length; i++){
    objEquipos[i].media = parseFloat(objEquipos[i].goles/objEquipos[i].partidos).toFixed(2);
    
  }
  objEquipos.sort((a,b) => b.media - a.media)
 
  
for(let i =0; i<5; i++){
  let tr = document.createElement("tr")
  tr.innerHTML = `<td><img class = "escudo" src="https://crests.football-data.org/${objEquipos[i].id}.svg"/>${objEquipos[i].club}</td><td>${objEquipos[i].goles}</td><td>${objEquipos[i].partidos}</td><td>${objEquipos[i].media}</td>`
  tbody.appendChild(tr)
}
  
}
init()