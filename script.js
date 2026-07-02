const intro = document.getElementById("intro");
const pagina = document.getElementById("pagina");
const boton = document.getElementById("entrar");
const tiempo = document.getElementById("tiempo");
const textoCarta = document.getElementById("textoCarta");

const inicio = new Date("2023-01-09T11:00:00");

const carta = `Feliz cumpleaños mi muñequita hermosa. 💜

Hoy es un día muy especial porque celebra la llegada de la persona más importante de mi vida.

Aunque hoy la distancia no me permita abrazarte ni darte todo lo que quisiera, quise hacerte este pequeño regalo para recordarte lo muchísimo que te amo.

Me hace inmensamente feliz ver a la increíble mujer en la que te has convertido. Estoy muy orgulloso de ti y de todo lo que has logrado.

Gracias por hacerme feliz, por estar conmigo y por regalarme los mejores momentos de mi vida.

Espero que hoy sonrías muchísimo, disfrutes tu cumpleaños y recuerdes siempre lo especial que eres para mí.

Te amo infinitamente, Melanie.

Con todo mi amor...

❤️ Tu Chaparro ❤️`;

boton.addEventListener("click", () => {
    intro.style.display = "none";
    pagina.style.display = "block";
    escribirCarta();
});

function actualizarTiempo(){

    const ahora = new Date();

    let diff = ahora - inicio;

    let segundos = Math.floor(diff/1000);
    let minutos = Math.floor(segundos/60);
    let horas = Math.floor(minutos/60);
    let dias = Math.floor(horas/24);

    let años = Math.floor(dias/365.25);
    dias -= Math.floor(años*365.25);

    let meses = Math.floor(dias/30.44);
    dias -= Math.floor(meses*30.44);

    horas%=24;
    minutos%=60;
    segundos%=60;

    tiempo.innerHTML=`
❤️ ${años} años<br>
💜 ${meses} meses<br>
🌷 ${dias} días<br>
⏰ ${horas} horas<br>
⌛ ${minutos} minutos<br>
✨ ${segundos} segundos
`;
}

setInterval(actualizarTiempo,1000);
actualizarTiempo();

textoCarta.innerHTML="";

let i=0;

function escribirCarta(){

    textoCarta.innerHTML="";

    let j=0;

    function escribir(){

        if(j<carta.length){

            textoCarta.innerHTML+=carta.charAt(j);

            j++;

            setTimeout(escribir,35);

        }

    }

    escribir();

}

// ❤️ Corazones flotando
function crearCorazon(){

    const corazon=document.createElement("div");

    corazon.innerHTML="💜";

    corazon.style.position="fixed";
    corazon.style.left=Math.random()*100+"vw";
    corazon.style.top="-30px";
    corazon.style.fontSize=(20+Math.random()*20)+"px";
    corazon.style.pointerEvents="none";
    corazon.style.zIndex="9999";
    corazon.style.transition="transform 8s linear, top 8s linear, opacity 8s";

    document.body.appendChild(corazon);

    setTimeout(()=>{
        corazon.style.top="110vh";
        corazon.style.transform="rotate(360deg)";
        corazon.style.opacity="0";
    },50);

    setTimeout(()=>{
        corazon.remove();
    },8000);

}

// 🌷 Pétalos
function crearPetalo(){

    const petalo=document.createElement("div");

    petalo.innerHTML="🌷";

    petalo.style.position="fixed";
    petalo.style.left=Math.random()*100+"vw";
    petalo.style.top="-30px";
    petalo.style.fontSize=(18+Math.random()*18)+"px";
    petalo.style.pointerEvents="none";
    petalo.style.zIndex="9998";
    petalo.style.transition="transform 10s linear, top 10s linear, opacity 10s";

    document.body.appendChild(petalo);

    setTimeout(()=>{
        petalo.style.top="110vh";
        petalo.style.transform="rotate(720deg)";
        petalo.style.opacity="0";
    },50);

    setTimeout(()=>{
        petalo.remove();
    },10000);

}

// ✨ Estrellas
function crearEstrella(){

    const estrella=document.createElement("div");

    estrella.innerHTML="✨";

    estrella.style.position="fixed";
    estrella.style.left=Math.random()*100+"vw";
    estrella.style.top=Math.random()*100+"vh";
    estrella.style.fontSize=(10+Math.random()*12)+"px";
    estrella.style.opacity="0";

    document.body.appendChild(estrella);

    setTimeout(()=>{
        estrella.style.transition="opacity 1s";
        estrella.style.opacity="1";
    },100);

    setTimeout(()=>{
        estrella.remove();
    },4000);

}

setInterval(crearCorazon,1200);

setInterval(crearPetalo,1700);

setInterval(crearEstrella,900);
