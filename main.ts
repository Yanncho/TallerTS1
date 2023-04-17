import{Serie} from './Serie.js'; 
import{series} from './data.js';

let seriestable: HTMLElement = document.getElementById("series")!;
let avgText : HTMLElement = document.getElementById("Avg")!;


mostrarDatosSeries(series);
mostrarSeasonAvg(series);

function mostrarDatosSeries(series :Serie[]):void{
    let tbodySerie = document.createElement("tbody");
    for (let serie of series){
        tbodySerie.innerHTML+=
        `<tr name="click" id=${serie.id} >
         <td>${serie.id}</td>
         <td><a href="${serie.url}"> ${serie.nombre}</a></td> 
         <td>${serie.plataforma}</td>
         <td>${serie.temporadas}</td>
         </tr>`
        console.log(serie);
        console.log(serie.imagen);
        
    }
    seriestable.appendChild(tbodySerie);
    
}

function mostrarSeasonAvg(series:Serie[]):void{
    let avg: number = 0; 
    let avgAdd = document.createElement("h2");
    let tot: number=0;
    for(let serie of series){
        avg+= serie.temporadas;
        tot++; 
    }
    avgAdd.innerHTML= (series.length>0)?`Season Average: ${avg/tot}`: "No hay series"; 
    avgText.appendChild(avgAdd);
}

