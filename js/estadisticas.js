let estadisticas = document.getElementById("estadisticas");
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

function crearEquipos(){
let equipos = [];


for(i=0 ; i<matches.matches.length; i++){
    if(matches.matches[i].score.winner == null){
    continue
  }
  let repetidoCasa = false
  let repetidoVisitante = false
  for(j=0; j<equipos.length; j++){
    if(equipos[j].club == matches.matches[i].homeTeam.name){
      repetidoCasa = true
    }
    if(equipos[j].club == matches.matches[i].awayTeam.name){
      repetidoVisitante = true
    }
  }
  if(repetidoCasa == false ){
    let obj = { 
      club: matches.matches[i].homeTeam.name,
      partidos: 0,
      goles: 0,
      media: 0
    }
    equipos.push(obj)
  }
  if(repetidoVisitante == false ){
    let obj = { 
      club: matches.matches[i].awayTeam.name,
      partidos: 0,
      goles: 0,
      media: 0
    }
    equipos.push(obj)
  }
  for(k=0; k<equipos.length; k++){
    if(equipos[k].club == matches.matches[i].homeTeam.name){
      equipos[k].partidos++;
      equipos[k].goles+= matches.matches[i].score.fullTime.homeTeam
    }
    if(equipos[k].club == matches.matches[i].awayTeam.name){
      equipos[k].partidos++;
      equipos[k].goles+= matches.matches[i].score.fullTime.awayTeam
    }
    

  }
  } return equipos};
  
  let objEquipos = crearEquipos()
  
  for(let i = 0; i<objEquipos.length; i++){
    objEquipos[i].media = parseFloat(objEquipos[i].goles/objEquipos[i].partidos).toFixed(2);
    
  }
  objEquipos.sort((a,b) => b.media - a.media)
  
for(let i =0; i<5; i++){
  let tr = document.createElement("tr")
  tr.innerHTML = `<td>${objEquipos[i].club}</td><td>${objEquipos[i].goles}</td><td>${objEquipos[i].partidos}</td><td>${objEquipos[i].media}</td>`
  tbody.appendChild(tr)
}