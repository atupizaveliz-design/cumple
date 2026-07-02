const intro = document.getElementById("intro");
const pagina = document.getElementById("pagina");
const boton = document.getElementById("entrar");
const tiempo = document.getElementById("tiempo");
const textoCarta = document.getElementById("textoCarta");

const inicio = new Date("2023-01-09T11:00:00");

boton.onclick = () => {
    intro.style.display = "none";
    pagina.style.display = "block";
    iniciarCarta();
};

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

    horas %= 24;
    minutos %= 60;
    segundos %= 60;

    tiempo.innerHTML = `
💜 ${años} años<br>
🌷 ${meses} meses<br>
❤️ ${dias} días<br>
⏰ ${horas} horas<br>
⌛ ${minutos} minutos<br>
✨ ${segundos} segundos
`;
}

setInterval(actualizarTiempo,1000);
actualizarTiempo();

const carta = `
Feliz cumpleaños mi muñequita hermosa 💜

Hoy es un día especial porque es tu cumpleaños.

Aunque la distancia no me deja abrazarte, quería darte este detalle para recordarte lo mucho que te amo.

Estoy muy orgulloso de ti y de la persona increíble en la que te estás convirtiendo.

Gracias por todo lo bonito que me das.

Te amo muchísimo, Melanie.

❤️ Tu Chaparro ❤️
`;

function iniciarCarta(){
    textoCarta.innerHTML = "";
    let i = 0;

    function escribir(){
        if(i < carta.length){
            textoCarta.innerHTML += carta.charAt(i);
            i++;
            setTimeout(escribir, 30);
        }
    }

    setTimeout(escribir, 800);
}
