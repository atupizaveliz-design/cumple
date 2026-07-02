const intro = document.getElementById("intro");
const pagina = document.getElementById("pagina");
const boton = document.getElementById("entrar");
const tiempo = document.getElementById("tiempo");

boton.onclick = () => {
    intro.style.display = "none";
    pagina.style.display = "block";
};

const inicio = new Date("2023-01-09T11:00:00");

function actualizarContador(){

    const ahora = new Date();

    let diferencia = ahora - inicio;

    let segundos = Math.floor(diferencia / 1000);
    let minutos = Math.floor(segundos / 60);
    let horas = Math.floor(minutos / 60);
    let dias = Math.floor(horas / 24);

    let años = Math.floor(dias / 365.25);
    dias -= Math.floor(años * 365.25);

    let meses = Math.floor(dias / 30.44);
    dias -= Math.floor(meses * 30.44);

    horas %= 24;
    minutos %= 60;
    segundos %= 60;

    tiempo.innerHTML =
    `
    💜 ${años} años<br>
    🌷 ${meses} meses<br>
    ❤️ ${dias} días<br>
    ⏰ ${horas} horas<br>
    ⌛ ${minutos} minutos<br>
    ✨ ${segundos} segundos
    `;
}

setInterval(actualizarContador,1000);

actualizarContador();

const carta = `

Feliz cumpleaños mi muñequita hermosa. 💜

Hoy es un día muy especial porque celebra la llegada de la persona que más amo.

Aunque la distancia no me permita abrazarte, hice este pequeño regalo para recordarte lo muchísimo que te amo.

Me hace inmensamente feliz ver la increíble mujer en la que te has convertido. Estoy muy orgulloso de ti y de todo lo que has logrado.

Gracias por existir, por hacerme sonreír y por acompañarme durante todo este tiempo.

Espero que hoy disfrutes muchísimo tu cumpleaños, que sonrías todo el día y que recibas todo el amor que mereces.

Te amo infinitamente, Melanie.

🌷 Siempre tu Chaparro. 💜

`;

const textoCarta = document.getElementById("textoCarta");

textoCarta.innerHTML="";

let i=0;

function escribir(){

    if(i<carta.length){

        textoCarta.innerHTML+=carta.charAt(i);

        i++;

        setTimeout(escribir,35);

    }

}

boton.addEventListener("click",()=>{

setTimeout(escribir,800);

});

const boton = document.getElementById("entrar");
const intro = document.getElementById("intro");
const pagina = document.getElementById("pagina");

boton.onclick = () => {
intro.style.display = "none";
pagina.style.display = "block";
};

// 🎵 MÚSICA
const musica = new Audio("https://www.youtube.com/watch?v=nSDgHBxUbVQ");

const playBtn = document.createElement("button");
playBtn.innerText = "🎵 Reproducir Photograph";
playBtn.classList.add("musicaBtn");

document.querySelector(".musica").appendChild(playBtn);

playBtn.onclick = () => {
window.open("https://www.youtube.com/watch?v=nSDgHBxUbVQ","_blank");
};
