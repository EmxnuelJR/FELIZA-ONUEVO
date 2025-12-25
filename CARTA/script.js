const parrafos = [
    "Hola, Yura:", 
    "Quiero desearte un feliz Año Nuevo a ti y a tus papás. Espero que este 2025 que termina, a pesar de que en muchas ocasiones no tuviste los mejores momentos, te haya permitido aprender y mejorar en muchos aspectos que te ayuden a crecer como persona.",
    "Que este 2026 que viene sea muy próspero y esté lleno de logros por cumplir. Deseo que alcances todas tus metas acompañada de las personas que te aman y, sobre todo, de tus papás, quienes siempre están presentes apoyándote y demostrándote tanto amor.",
    "Ahora que empiezas una nueva etapa en la universidad, te deseo lo mejor. Espero que puedas sacar adelante tu carrera profesional, pero lo más importante es que seas feliz, que te sientas a gusto y que en un futuro también te beneficies económicamente.",
    "Nunca dejes de ser esa niña extrovertida a la que no le da pena nada, esa que resalta por su sencillez y humildad. ¿Que tienes un carácter fuerte? Sí, y aunque es algo en lo que debes trabajar, no dejes de tenerlo, porque ese es tu criterio.",
    "Eres muy importante para mí; una persona especial que ocupa un lugar en mi corazón que nadie podrá reemplazar. Espero que este 2026 y los años que siguen podamos seguir creciendo juntos. Te amo con todo mi corazón.",
    "¡Feliz Año Nuevo, chimbilín! Te llevo en mi corazón."
];

const imagenes = [
    { ruta: "IMAGENES/Mini-Chimbilin.png", estilo: "max-width: 150px; border-radius: 50%;" },
    { ruta: "IMAGENES/Chimbi2.png", estilo: "max-width: 200px; border-radius: 15px;" },
    { ruta: "IMAGENES/Chimbi3.jpg", estilo: "max-width: 200px; border-radius: 15px;" },
    { ruta: "IMAGENES/Chimbi4.jpg", estilo: "max-width: 200px; border-radius: 15px;" },
    { ruta: "IMAGENES/Chimbi5.jpg", estilo: "max-width: 200px; border-radius: 15px;" },
    { ruta: "IMAGENES/Chimbi6.jpg", estilo: "max-width: 200px; border-radius: 15px;" },
    { ruta: "IMAGENES/Chimbi7.png", estilo: "max-width: 220px; border-radius: 10px; border: 3px solid gold;" }
];

let indiceActual = 0;

const contenidoDiv = document.getElementById('contenido');
const indicador = document.getElementById('indicador');
const btnPrev = document.getElementById('btnPrev');
const btnNext = document.getElementById('btnNext');
const musica = document.getElementById('musicaCarta');
const imagenCarta = document.getElementById('imagenCarta');

function actualizarPagina() {
    if (!contenidoDiv || !imagenCarta) return;
    contenidoDiv.classList.remove('fade-in');
    imagenCarta.classList.remove('fade-in');
    void contenidoDiv.offsetWidth; 
    void imagenCarta.offsetWidth;

    contenidoDiv.innerHTML = `<p>${parrafos[indiceActual]}</p>`;
    imagenCarta.src = imagenes[indiceActual].ruta;
    imagenCarta.style.cssText = imagenes[indiceActual].estilo; 
    
    contenidoDiv.classList.add('fade-in');
    imagenCarta.classList.add('fade-in');

    indicador.innerText = `${indiceActual + 1} / ${parrafos.length}`;
    btnPrev.disabled = (indiceActual === 0);
    btnNext.disabled = (indiceActual === parrafos.length - 1);
}

// Lógica de audio mejorada
function iniciarMusica() {
    musica.play().catch(() => {
        // Si el navegador bloquea, lo intentamos en el primer movimiento
        document.addEventListener('click', () => musica.play(), { once: true });
        document.addEventListener('keydown', () => musica.play(), { once: true });
    });
}

btnNext.onclick = () => {
    iniciarMusica();
    if (indiceActual < parrafos.length - 1) {
        indiceActual++;
        actualizarPagina();
    }
};

btnPrev.onclick = () => {
    iniciarMusica();
    if (indiceActual > 0) {
        indiceActual--;
        actualizarPagina();
    }
};

function crearLuces() {
    const contenedor = document.getElementById('particulas');
    if(!contenedor) return;
    for (let i = 0; i < 50; i++) {
        const luz = document.createElement('div');
        luz.className = 'luz';
        luz.style.left = Math.random() * 100 + "%";
        luz.style.top = Math.random() * 100 + "%";
        luz.style.width = (Math.random() * 5 + 2) + "px";
        luz.style.height = luz.style.width;
        contenedor.appendChild(luz);
        luz.animate([{opacity: 0}, {opacity: 0.6}, {opacity: 0}], {
            duration: Math.random() * 3000 + 2000,
            iterations: Infinity
        });
    }
}

window.onload = () => {
    actualizarPagina();
    crearLuces();
    musica.volume = 0.5;
    iniciarMusica();
};