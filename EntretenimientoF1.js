/*Karla Alamillo Palacios
Diseño Web */
const contenido = [
    {
        id: 1,
        tipo: "pelicula",
        titulo: "F1 la película (2025)",
        descripcion: "La leyenda de las carreras Sonny Hayes se ve obligado a liderar un equipo de Fórmula 1 en dificultades, y a ser mentor de un joven prometedor, mientras busca una última oportunidad de llegar al éxito.",
        imagen: "https://i0.wp.com/tomatazos.buscafs.com/2025/01/238049_f1-la-pelicula-de-formula-1-de-brad-pitt-lanza-.jpg?fit=960,1200&quality=75&strip=all"
    },
    {
        id: 2,
        tipo: "pelicula",
        titulo: "Contra lo imposible (2019)",
        descripcion: "Contra lo imposible",
        imagen: "https://play-lh.googleusercontent.com/ZrxceOsv4iFsDFkSPkH6mt5xt7c8OVZ2Q77yIzQPcNsWpDDmskzk-JsBEBoQy_MTd9c"
    },
    {
        id: 3,
        tipo: "pelicula",
        titulo: " Gran Turismo: De Jugador a Corredor (2023)",
        descripcion: "El joven Jann Mardenborough gana una serie de competiciones del videojuego Gran Turismo organizadas por una importante empresa automovilística y obtiene la oportunidad de convertirse en piloto de carreras profesional. Pero eso no será un juego.",
        imagen: "https://www.sonypictures.com.mx/sites/mexico/files/2023-10/Key-Art_1400x2100_Gran-Turismo_Mx.jpg"
    },
    {
        id: 4,
        tipo: "pelicula",
        titulo: "The Seat (2025)",
        descripcion: "The Seat es un cortometraje documental de 2025 dirigido por Kyle Thrash y producido por RadicalMedia en colaboración con WhatsApp y el equipo Mercedes-AMG Petronas de Fórmula 1.",
        imagen: "https://pics.filmaffinity.com/the_seat-207287940-mmed.jpg"
    },
    {
        id: 5,
        tipo: "pelicula",
        titulo: "Rush: pasión y gloria (2013)",
        descripcion: "El carismático inglés James Hunt y el austriaco perfeccionista Niki Lauda destacan en la escena de la Fórmula 1 de los años setenta y comparten una intensa rivalidad dentro y fuera de las pistas.",
        imagen: "https://m.media-amazon.com/images/M/MV5BNTEzNGJmNTUtYmQyNS00YTJkLWI1OTAtNDUzYWUyMTI4YjAyXkEyXkFqcGc@._V1_.jpg"
    },
    {
        id: 6,
        tipo: "pelicula",
        titulo: " Senna (2010)",
        descripcion: "Un documental sobre el piloto brasileño de la Fórmula Uno, Ayrton Senna, tres veces campeón mundial de la F1 antes de morir a la edad de 34 años.",
        imagen: "https://pics.filmaffinity.com/Senna-139687034-large.jpg"
    },
    {
        id: 7,
        tipo: "pelicula",
        titulo: "Schumacher (2021)",
        descripcion: "Michael Schumacher fue siete veces campeón del mundo y obtuvo 91 victorias en carreras de Fórmula 1. Hizo historia y aún ostenta varios récords. Se narra su exitoso camino hasta el trágico accidente de esquí que sufrió.",
        imagen: "https://esnobgourmet.com/wp-content/uploads/2021/09/por-que-vale-la-pena-ver-schumacher-documental-de-netflix-esnobgourmet.jpg"
    },
    {
        id: 8,
        tipo: "pelicula",
        titulo: "McLaren: la inspiradora historia de Bruce McLaren (2017)",
        descripcion: "Bruce McLaren funda el equipo McLaren Motor Racing en Nueva Zelanda y le demuestra a todos que un hombre de orígenes humildes es capaz de enfrentarse al mundo de la élite automovilística y cosechar grandes victorias. ",
        imagen: "https://m.media-amazon.com/images/S/pv-target-images/071996f5ff05850f4c2d200cc0eeee4764957caa9bb9fc51f181eb4a160aadcd.jpg"
    },
     {
        id: 9,
        tipo: "pelicula",
        titulo: "Driven (2001)",
        descripcion: "Un expiloto de autos de carrera deja de lado su retiro para guiar a un talentoso e inmaduro joven a obtener un campeonato. ",
        imagen: "https://m.media-amazon.com/images/M/MV5BMjA5MDk4NzI0NF5BMl5BanBnXkFtZTYwNjU0Nzc5._V1_FMjpg_UX1000_.jpg"
    },
     {
        id: 10,
        tipo: "pelicula",
        titulo: "1 (2013)",
        descripcion: "La historia de una generación de conductores carismáticos que compitieron en el límite, arriesgando sus vidas durante el período más mortífero de la Fórmula 1 y cambiando el deporte para siempre. ",
        imagen: "https://play-lh.googleusercontent.com/IBlF3ssETpGw_nOLgP-Vd6Ea9dDPuepEwLKhCUehMAK9Fs4FU3iTezjYZvn3UV6q240v=w240-h480-rw"
    },
     {
        id: 11,
        tipo: "pelicula",
        titulo: " Ferrari (2023)",
        descripcion: "Durante el verano de 1957, la quiebra se cierne sobre la empresa que Enzo Ferrari y su esposa Laura levantaron diez años antes. Desesperado, Enzo se juega el futuro profesional en Mille Miglia, una emblemática carrera que atraviesa Italia. ",
        imagen: "https://m.media-amazon.com/images/M/MV5BYjhjY2M4NjEtNzAzMy00OGRkLTg4MWItYjA1MjE0Y2ZlNjZhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
    },
     {
        id: 12,
        tipo: "pelicula",
        titulo: "Lamborghini: The Man Behind the Legend (2022)",
        descripcion: "Lamborghini: El hombre detrás de la leyenda sigue la larga vida del emblemático empresario Ferruccio Lamborghini, desde la fabricación de tractores al principio de su carrera, pasando por la creación de vehículos militares durante la Segunda Guerra Mundial, hasta el diseño y la construcción de los automóviles Lamborghini que acabaron definiendo su profundo legado. ",
        imagen: "https://m.media-amazon.com/images/M/MV5BMmY3MDAyNDQtYmE2ZS00ZTBiLTgxZjctYTUwOGFjOThmMGU3XkEyXkFqcGc@._V1_.jpg"
    },
     {
        id: 13,
        tipo: "pelicula",
        titulo: "Need for speed: la película (2014)",
        descripcion: "Tobey es un joven piloto de carreras clandestinas que posee su propio garaje. Cuando su mejor amigo muere en una de las competiciones, Tobey es enviado a prisión, pero buscará la revancha cuando sea puesto en libertad. ",
        imagen: "https://es.web.img3.acsta.net/pictures/14/03/12/09/39/563140.jpg"
    },
     {
        id: 14,
        tipo: "pelicula",
        titulo: "Le Mans 3D (2016)",
        descripcion: "Esta es la historia desde dentro de cinco hombres que lo arriesgan todo por la gloria en el Everest del automovilismo: las 24 Horas de Le Mans. Con un acceso exclusivo entre bastidores y tecnología 3D de vanguardia, esta apasionante película lleva las carreras a la pantalla como nunca antes. ",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ-fAguupMZdKfjFMeGuo4qQp_FLwjUeWJ8A&s"
    },
     {
        id: 15,
        tipo: "pelicula",
        titulo: "Grand Prix (1966)",
        descripcion: "Tres campeones de carreras automovilísticas encuentran algunos problemas cuando compiten en el Grand Prix. ",
        imagen: "https://m.media-amazon.com/images/M/MV5BNTA2NzQzYWQtY2FlZi00ODFiLTgyOTctY2RmNjE4YTcwMjg5XkEyXkFqcGc@._V1_.jpg"
    },
     {
        id: 16,
        tipo: "pelicula",
        titulo: "Williams (2017)",
        descripcion: "El nacimiento del imperio del automovilismo de Frank Williams y el grave accidente que puso en riesgo su futuro. ",
        imagen: "https://m.media-amazon.com/images/M/MV5BYjI1MTg5ZDUtNjc5YS00Y2Q2LWEwYWMtZGE1MDcxNjdmNDRlXkEyXkFqcGc@._V1_.jpg"
    },
     {
        id: 17,
        tipo: "pelicula",
        titulo: "Ferrari: Carrera a la inmortalidad (2017)",
        descripcion: "Ferrari: De las carreras a la inmortalidad narra la historia de los amores y derrotas, triunfos y tragedias de los pilotos más condecorados de Ferrari en una época en que las carreras eran la dolce vita durante la semana y una ruleta rusa el fin de semana de la que solo podían salir vivos o muertos. ",
        imagen: "https://m.media-amazon.com/images/S/pv-target-images/c97a15aff1bffbf18be9029d2e0949042641b5a82e98eb9983ab68413b5f08eb.jpg"
    },
     {
        id: 18,
        tipo: "pelicula",
        titulo: "American Thunder: de NASCAR a Le Mans (2025)",
        descripcion: "La NASCAR intenta cumplir el sueño de la infancia de su fundador Jim France: correr un auto stock en la histórica carrera de las 24 horas de Le Mans. ",
        imagen: "https://m.media-amazon.com/images/M/MV5BYmJiN2E2NWItNjRkOS00OWRkLWIzMzItNTAxMGVmZjBhNjBhXkEyXkFqcGc@._V1_.jpg"
    },
     {
        id: 19,
        tipo: "pelicula",
        titulo: "Le Mans (1971)",
        descripcion: "Un piloto (Steve McQueen) estadounidense ama a la viuda (Elga Andersen) de un colega y enfrenta a un rival (Siegfried Rauch) europeo en el Gran Premio de Le Mans. ",
        imagen: "https://m.media-amazon.com/images/M/MV5BYmNmNjViZDYtZDhmOC00M2E5LWI2NmYtNDg2YWFhNzMxOWFiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
    },
     {
        id: 20,
        tipo: "pelicula",
        titulo: "Audi vs. Lancia: Carrera por la gloria (2024)",
        descripcion: "1983. El ex campeón Lancia se enfrenta al poderoso Audi en una batalla épica por el título mundial de rally. Un enfrentamiento entre David y Goliat que desafía los límites de la ingeniería, el coraje y la ambición. ",
        imagen: "https://m.media-amazon.com/images/S/pv-target-images/9797909a850a2aafecc28859366fc914e51a6e9d57eabd52ee020d133965bc57.jpg"
    },

    



    {
        id: 1,
        tipo: "serie",
        titulo: "F1: La academia (2025)",
        descripcion: "Un grupo de 15 chicas trata de romper las barreras que existen en el mundo del automovilismo de la Fórmula 1. Las jóvenes no se intimidan, y hacen todo lo posible por lograr que una mujer piloto vuelva a las pistas de este deporte.",
        imagen: "https://m.media-amazon.com/images/M/MV5BY2U0MjkxYWUtNzMyMC00MjQ3LTg1ZGQtMmI3YzY0Y2NiMWVhXkEyXkFqcGc@._V1_.jpg"
    },
    {
        id: 2,
        tipo: "serie",
        titulo: "F2: Chasing the Dream (2020)",
        descripcion: "Lo que ocurre en la F2, una competición internacional que reúne a jóvenes pilotos cuyo sueño es llegar a la categoría automovilística más prestigiosa del mundo: la Fórmula 1.",
        imagen: "https://m.media-amazon.com/images/M/MV5BZWNjZjUzZWQtZTQyYS00MGFmLTljNDItODUxNDYwMGYwZDYzXkEyXkFqcGc@._V1_.jpg"
    },
     {
        id: 3,
        tipo: "serie",
        titulo: "Fórmula 1: La emoción de un Grand Prix (Formula 1: Drive to Survive) (2019)",
        descripcion: "Los pilotos, representantes y dueños de equipos viven a máxima velocidad, tanto dentro como fuera de la pista, durante una temporada despiadada en la Fórmula 1.",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsR2BZBuc7Fpyj6FI0FswMUhaOnO4xu4To5tWIgHKLGkN_sZRpnLsWS86sjJy-pAUZfz4RfxUMfaGOOIcquZW0G_IE9bx-oRZiPBTRVEM&s=10"
    },
     {
        id: 4,
        tipo: "serie",
        titulo: "F1: Carrera hacia la perfección (2020)",
        descripcion: "Un homenaje a los 70 años de historia de la Fórmula 1.",
        imagen: "https://play-lh.googleusercontent.com/proxy/2bRxN2s52D30g_UV-zcsKxGk4PpQUlqx3UR3UYcRXu8NJYw52w7RhIDjnVehSPhbvm7oaZWiKKm8vYiSgBwRrHDv0u6C4Ddck9RxPfM_A6s4oM_irzrVzZmwBpNlwYEbXE_KcZbL4NKcA51BrShaGvNwgQFieZ_RK19Dhg"
    },
     {
        id: 5,
        tipo: "serie",
        titulo: "NASCAR: A toda velocidad (2024)",
        descripcion: "Los pilotos y sus escuderías corren por el motor de la pasión, buscan la gloria de la Copa NASCAR y persiguen la oportunidad de pasar a la historia.",
        imagen: "https://m.media-amazon.com/images/M/MV5BOGJjN2EyOWUtZjBlYS00OWI3LTg1YjItMjRlZjE5Nzg4YjljXkEyXkFqcGc@._V1_.jpg"
    },
     {
        id: 6,
        tipo: "serie",
        titulo: "Senna (2024)",
        descripcion: "La carrera de la leyenda del automovilismo Ayrton Senna, héroe nacional en Brasil y tres veces ganador del Campeonato Mundial de la Fórmula 1.",
        imagen: "https://m.media-amazon.com/images/M/MV5BZDI2ZjQyMzItYjg4NS00ZWYzLWE2M2EtYTNiN2Y4Mzc5Y2EwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
    },
     {
        id: 7,
        tipo: "serie",
        titulo: "F1 Legends (2012)",
        descripcion: "Steve Rider conoce a los grandes nombres en el mundo de la Fórmula 1 del pasado y del presente.",
        imagen: "https://m.media-amazon.com/images/M/MV5BNWZmZWM0ZTQtOTA5Ni00ZGNjLTgzYmYtNTE0YTJiZTgxYzk2XkEyXkFqcGc@._V1_.jpg"
    },
     {
        id: 8,
        tipo: "serie",
        titulo: "Brawn: La increíble historia de la F1 (2023)",
        descripcion: "En 2009, el equipo Brawn GP, fruto de la compra de Honda por parte de Ross Brawn por una libra simbólica, logró, en las narices de los favoritos y a pesar de sus limitados recursos, ganar los dos títulos mundiales.",
        imagen: "https://m.media-amazon.com/images/M/MV5BYTk5MGFmOTUtOWI3My00OTI5LTgzYTEtMDFiNDgxY2I3YTZiXkEyXkFqcGc@._V1_.jpg"
    },
     {
        id: 9,
        tipo: "serie",
        titulo: "Le Mans: Pasión por la carrera (2017)",
        descripcion: "Seis equipos son seguidos desde Kuala Lumpur hasta la Costa Azul mientras compiten por la gloria.",
        imagen: "https://m.media-amazon.com/images/M/MV5BNjRjZGY3OTYtYzhkNy00Yzc4LTkwZGYtYTFlZTY2NjEyMzRlXkEyXkFqcGc@._V1_QL75_UY281_CR2,0,190,281_.jpg"
    },
     {
        id: 10,
        tipo: "serie",
        titulo: "Formula E: DRIVER (2025)",
        descripcion: "Los pilotos de Fórmula E comparten cómo es la vida detrás de escena mientras hablan de sus experiencias en la pista, sus vidas y su amor por el deporte.",
        imagen: "https://m.media-amazon.com/images/M/MV5BMzM4ZDcyMTItN2NjZi00MGExLTg1YTMtMjZjMWE5YzY1Yjc5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
    },
     {
        id: 11,
        tipo: "serie",
        titulo: "100 Days To Indy (2023)",
        descripcion: "Una mirada detrás de escenas a las personalidades del NTT IndyCar Series en el inicio de la temporada 2023 y en su épica búsqueda del mayor premio del automovilismo.",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVeQEgug1BOHBF4QfV8Z6pv4JzN-2EahjtFQ&s"
    },
     {
        id: 12,
        tipo: "serie",
        titulo: "Conductor de Grand Prix (2018)",
        descripcion: "Un programa con el repaso de los inicios de McLaren-Honda, uno de los equipos más prolíficos de la Fórmula 1.",
        imagen: "https://m.media-amazon.com/images/M/MV5BMjUwYzcxZWQtNjE0NC00ZTY2LWJhZmMtZTAzOThlOTA5YTVjXkEyXkFqcGc@._V1_.jpg"
    },
     {
        id: 13,
        tipo: "serie",
        titulo: "Max Verstappen: Anatomía de un campeón (2023)",
        descripcion: "Un recorrido de la cabeza a los pies para examinar los atributos físicos y mentales que ayudaron a Max Verstappen a convertirse en doble campeón.",
        imagen: "https://m.media-amazon.com/images/M/MV5BNmVhZmQxY2QtNzQ1My00ODAyLTlmZDUtOWE0YjdiYTAxMGRlXkEyXkFqcGc@._V1_.jpg"
    },
     {
        id: 14,
        tipo: "serie",
        titulo: "Le Mans: Pasión por la carrera (2017)",
        descripcion: "Seis equipos son seguidos desde Kuala Lumpur hasta la Costa Azul mientras compiten por la gloria.",
        imagen: "https://m.media-amazon.com/images/M/MV5BNjRjZGY3OTYtYzhkNy00Yzc4LTkwZGYtYTFlZTY2NjEyMzRlXkEyXkFqcGc@._V1_QL75_UY281_CR2,0,190,281_.jpg"
    },
     {
        id: 15,
        tipo: "serie",
        titulo: "Max Verstappen - Off the Beaten Track (2024)",
        descripcion: "Un retrato íntimo de Max Verstappen, que muestra aspectos de su vida que en gran medida permanecen ocultos.",
        imagen: "https://m.media-amazon.com/images/M/MV5BYjgwZjI2NjUtMzQxNi00ZTQ4LTgzZmMtNzFkMGQyNzgwZTMzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
    },

];

let filtroActual = "todos";

const lista = document.getElementById("lista");
const detalle = document.getElementById("detalle");
const buscador = document.getElementById("buscador");
const videos = document.getElementById("videos");
const body = document.body;
const modoBtn = document.getElementById("modoBtn");


function cambiarModo() {
    body.classList.toggle("dark");
    body.classList.toggle("light");
    const modo = body.classList.contains("dark") ? "dark" : "light";
    localStorage.setItem("modo", modo);
    modoBtn.textContent = modo === "dark" ? "🌙" : "☀️";
}

(function cargarModo() {
    const modo = localStorage.getItem("modo") || "dark";
    body.className = modo;
    modoBtn.textContent = modo === "dark" ? "🌙" : "☀️";
})();


function render() {
    lista.innerHTML = "";
    videos.style.display = "none";

    const texto = buscador.value.toLowerCase();

    contenido
        .filter(c =>
            (filtroActual === "todos" || c.tipo === filtroActual) &&
            c.titulo.toLowerCase().includes(texto)
        )
        .forEach(c => {
            lista.innerHTML += `
                <div class="card" onclick="mostrar(${c.id})">
                    <img src="${c.imagen}">
                    <h3>${c.titulo}</h3>
                </div>
            `;
        });
}

function filtrar(tipo) {
    filtroActual = tipo;
    render();
}


function mostrar(id) {
    const item = contenido.find(c => c.id === id);
    const rating = localStorage.getItem("rating_" + id) || 0;

    detalle.innerHTML = `
        <h2>${item.titulo}</h2>
        <p>${item.descripcion}</p>
        <h3>Calificación</h3>
        <div class="estrellas">
            ${[1,2,3,4,5].map(n =>
                `<span class="${n <= rating ? 'activa' : ''}"
                onclick="calificar(${id}, ${n})">★</span>`
            ).join("")}
        </div>
    `;
}

function calificar(id, valor) {
    localStorage.setItem("rating_" + id, valor);
    mostrar(id);
}


function mostrarVideos() {
    lista.innerHTML = "";
    detalle.innerHTML = "<h2>Videos del Super Bowl</h2>";
    videos.style.display = "block";
}

buscador.addEventListener("input", render);
render();
