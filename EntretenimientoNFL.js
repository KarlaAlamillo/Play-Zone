/*Karla Alamillo Palacios
Diseño Web */
const contenido = [
    {
        id: 1,
        tipo: "pelicula",
        titulo: "Pequeños Gigantes (1994)",
        descripcion: "Los perdedores también pueden ganar. Un grupo de niños inadaptados desafía todas las expectativas en esta comedia familiar llena de emoción.",
        imagen: "https://th.bing.com/th/id/OIP.R-1lEle9b1pVrwZI0efRrQAAAA?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
        id: 2,
        tipo: "pelicula",
        titulo: "Un sueño posible (2009)",
        descripcion: "Una familia, una oportunidad, un futuro en la NFL. La inspiradora historia historia real de Michael Oher, un joven sin hogar que cambió su vida.",
        imagen: "https://th.bing.com/th/id/R.5551d2d6706dc10c819a20079c97332e?rik=kTD4iSFiGsO%2f2w&pid=ImgRaw&r=0"
    },
    {
        id: 3,
        tipo: "pelicula",
        titulo: "El aguador (1998)",
        descripcion: "De aguador a estrella del fútbol americano.. ¿qué podría salir mal? Adam Sandler en una de sus comedias más icónicas, llena de momentos absurdos y mucha diversión.",
        imagen: "https://pics.filmaffinity.com/The_Waterboy_El_aguador-273106545-large.jpg"
    },
    {
        id: 4,
        tipo: "pelicula",
        titulo: "Un domingo cualquiera (1999)",
        descripcion: "En el fútbol profesional, solo los más fuertes sobreviven. Oliver Stone nos muestra el lado más brutal y despiadado de la NFL en este drama intenso. ",
        imagen: "https://images.justwatch.com/poster/300834755/s718/any-given-sunday.%7Bformat%7D"
    },
    {
        id: 5,
        tipo: "pelicula",
        titulo: "Duelo de Titanes (2000)",
        descripcion: "Un equipo dividido por el racismo. Un entrenador decidido a cambiarlo todo. Basada en una historia real, esta película es puro corazón, pasión y fútbol americano. ",
        imagen: "https://tse4.mm.bing.net/th/id/OIP.XWamxrgMAT70KqZdfoAusAHaJ4?rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
        id: 6,
        tipo: "pelicula",
        titulo: "Desafio a los Gigantes (2006)",
        descripcion: "El entrenador de un equipo de fútbol de una escuela inspirada a sus jugadores a superarse, a través de la creencia de Dios.",
        imagen: "https://tse2.mm.bing.net/th/id/OIP.eIYfjRmSYv-rf1JMZZZ9igHaK9?rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
        id: 7,
        tipo: "pelicula",
        titulo: "Golpe Bajo: el juego final (2005)",
        descripcion: "En una cárcel de Texas, veteranos de la NFL entrenan a sus compañeros para un juego cntra los guardias del penal.",
        imagen: "https://th.bing.com/th/id/R.24cd826d32cbdd9de71af2a4649090b0?rik=Y40Yw%2bM7l%2fj8Tg&riu=http%3a%2f%2fstatic1.wikia.nocookie.net%2f__cb20140102094731%2fdoblaje%2fes%2fimages%2fa%2fac%2fGolpe_Bajo_El_Juego_Final.png&ehk=1o7zGMzDeAKsX8u%2fxwIFlng8V4HGIRghs4I0veObYZM%3d&risl=&pid=ImgRaw&r=0"
    },
    {
        id: 8,
        tipo: "pelicula",
        titulo: "Un juego vs el destino (2006)",
        descripcion: "En un centro de detención juvenil, un consejero transforma a un grupo de criminales en un equipo de fútbol americano para enseñarles sobre la autoestima y la responsabilidad social.",
        imagen: "https://th.bing.com/th/id/R.a0632407641c2bc643eb65277f958bca?rik=HJ%2bce53jjtvXTw&pid=ImgRaw&r=0"
    },
    {
        id: 9,
        tipo: "pelicula",
        titulo: "Friday Night Lights (2004)",
        descripcion: " El entrenador de fútbol americano de una escuela secundaria de Odessa, Texas, intenta dirigir a sus jugadores hasta el campeonato estatal.",
        imagen: "https://tse4.mm.bing.net/th/id/OIP.zG_jyggX1X6-9c8FH72MtQHaKk?rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
        id: 10,
        tipo: "pelicula",
        titulo: "Somos Marshall (2006)",
        descripcion: "En 1970, la Universidad Marshall y el pequeño pueblo de Huntington, Virginia, se vuelve famoso cuando un accidente de avión afecta a futbolistas de la escuela, miembros del equipo y fanáticos. El nuevo entrenador, Jack Lengye, llega decidido a reconstruir al equipo de Marshall y sanar el proceso.",
        imagen: "https://tse1.mm.bing.net/th/id/OIP.EIqwNGkBpJ4cTSSPfZXfZgHaKh?rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
        id: 11,
        tipo: "pelicula",
        titulo: "El expreso de Elmira (2008)",
        descripcion: "El entrenar al programa de fútbol de la Universidad de Syracuse. Bajo su entrenador, Davis se convierte en uno de los mejores jugadores, superando los logros de Jim Brown. ",
        imagen: "https://play-lh.googleusercontent.com/sKFNMFkSLE4vKN3AKznJjUyXaDjEblA9dZL3BS86C1tGesqwakjV9LZbsb7EgAasE-Q"
    },
    {
        id: 12,
        tipo: "pelicula",
        titulo: "Decisión Final (2014)",
        descripcion: "En el día del Draft de la NFL, el gerente general de los Cleveland Browns debe decidir qué es lo que está dispuesto a sacrificar mientras busca al seleccionado número uno. ",
        imagen: "https://th.bing.com/th/id/R.5dfbddb67791686fa0b5c04f09251bb1?rik=pCRx41RxquCUQA&riu=http%3a%2f%2fwww.cineymas.com.ar%2fwp-content%2fuploads%2f2014%2f10%2fTranseuropa-Decision-Final.jpg&ehk=ORZzj2pgkjy7MiEfWuXScBcDY5e%2fpN46w6ZwsUUx6WA%3d&risl=&pid=ImgRaw&r=0"
    },
    {
        id: 13,
        tipo: "pelicula",
        titulo: "La verdad oculta (2015)",
        descripcion: "La historia del doctor Bennett Omalu, quien dasafió al fútbol americano descubriendo el riesgo de los traumatismos cerebrales mientras realizaba una autopsia al cadáver del exjugador  de la NFL Mike Webster.",
        imagen: "https://m.media-amazon.com/images/S/pv-target-images/d2b268c8e4f87b33b1298cca0966763c22231332b9b595d18c4c18d9ed06e8ce.jpg"
    },
    {
        id: 14,
        tipo: "pelicula",
        titulo: "Invensible (2006)",
        descripcion: "El fanático del fútbol americano, Vince Papale, ve su sueño hecho realidad cuando se convierte en un miembro más de las Águilas de Filadelfia. Mientras enseña en la preparatoria de Pensilvania, el hombre de 30 años recibe la oportunidad para probarse con su equipo favorito y, a excepción de los pateadores, se convierte en el novato más grande en la historia de la NFL.",
        imagen: "https://johnrieber.com/wp-content/uploads/2019/09/invincible-movie-poster-nfl-movies.jpg"
    },
    {
        id: 15,
        tipo: "pelicula",
        titulo: "Historia de Kurt Warner (2021)",
        descripcion: "La inspiradora historia de Kurt Warner, quien superó desafíos y golpes durante años hasta convertirse en MVP de la NFL en dos oportunidades, campeón del Super Bowl y miembro del Salón de la Fama.",
        imagen: "https://m.media-amazon.com/images/M/MV5BMTI5MjIxZWEtNDA5ZC00MGRjLThhMzQtNWM5OTc0MTlmZDAxXkEyXkFqcGc@._V1_.jpg"
    },
     {
        id: 16,
        tipo: "pelicula",
        titulo: "Rudy (1993)",
        descripcion: "El sueño de Rudy es jugar al fútbol en la Universidad de Notre Dame, pero no tiene ni el dinero para la matrícula ni las calificaciones para merecer una beca. Rudy supera todos los obstáculos para conseguir su sueño y abrirse camino en el legendario equipo de fútbol.",
        imagen: "https://m.media-amazon.com/images/I/71wno0zi96L._AC_UF1000,1000_QL80_.jpg"
    },
     {
        id: 17,
        tipo: "pelicula",
        titulo: "Los Suplentes (2000)",
        descripcion: "Un grupo de suplentes tiene la oportunidad de jugar al fútbol profesional tras una huelga de los jugadores titulares.",
        imagen: "https://m.media-amazon.com/images/M/MV5BMmE2ZWY5ZTUtMDAzOC00OWE3LWFlYmQtYmY2OGNiMTQyNjY1XkEyXkFqcGc@._V1_.jpg"
    },
     {
        id: 18,
        tipo: "pelicula",
        titulo: "Juego de campeones (1999)",
        descripcion: "Un jugador de fútbol se rebela contra su entrenador, quien abusa de los jugadores en su búsqueda del torneo divisional.",
        imagen: "https://m.media-amazon.com/images/I/71j0P0s8cUL._AC_UF894,1000_QL80_.jpg"
    },
     {
        id: 19,
        tipo: "pelicula",
        titulo: "Brian Banks: nunca es tarde (2018)",
        descripcion: "Brian Banks, estrella del fútbol americano en la escuela secundaria, es enviado a la cárcel por un delito que no cometió, a pesar de la falta de evidencias en su contra. Sin embargo, Banks no se rinde y lucha por recuperar la libertad y continuar su carrera deportiva.",
        imagen: "https://m.media-amazon.com/images/M/MV5BNzliNDYyZjEtNGMzYy00YTEwLTllNDMtNjc3MzhmNWI1M2E0XkEyXkFqcGc@._V1_.jpg"
    },
    



    {
        id: 1,
        tipo: "serie",
        titulo: "Hard Knocks",
        descripcion: "Es un reality deportivo documental producido por NFL Films, sigue a un equipo de la Liga.",
        imagen: "https://tse2.mm.bing.net/th/id/OIP.uTMAg-Kk_UXIMv7dL7ZGwQHaLH?rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
        id: 2,
        tipo: "serie",
        titulo: "Ballers",
        descripcion: "Se centra en la vida de un grupo de jugadores de fútbol americano, tanto titulares como retirados, entre los que se encuuentra Spencer Strassmore, quien intenta reubicarse mientras entrena a otros jugadores.",
        imagen: "https://tse4.mm.bing.net/th/id/OIP.onEJTUV66_QcK_RnSHCnygHaLH?rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
        id: 3,
        tipo: "serie",
        titulo: "Americann Sports Story",
        descripcion: "Aaron Hernández es un jugador famoso de la NFL. Después de tres temporadas con los Patriots, incluyendo una parición en el Super Bowl, es arrestado y condenado por el asesinato de  Odin Llloys en 2013.",
        imagen: "https://m.media-amazon.com/images/M/MV5BYTUyYmYzNjctNThiMi00MDVjLTg4MzQtNGY5N2EzYTc0Y2FmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
    },
    {
        id: 4,
        tipo: "serie",
        titulo: "Man in the Arena: Tom Brady",
        descripcion: "Tom Brady comparte un relato personal de sus 10 participaciones en el Super Bowl, con el análisis de los logros obtenidos en su carrera al explorar cada victoria y cada derrota.",
        imagen: "https://www.themoviedb.org/t/p/original/tBN98ahpW2b2xK35WWbDAASxe97.jpg"
    },
     {
        id: 5,
        tipo: "serie",
        titulo: "Receptor",
        descripcion: "Un seguimiento a los cinco mejores receptore externos de la NFL en la temporada 2023-2024. Deebo Samuel, Davante Adams, Amon-Ra St. Brown, Justin Jefferson y George Kittle.",
        imagen: "https://tse1.mm.bing.net/th/id/OIP.EyHVwRiap7fyZiuxYHgU6QHaLH?rs=1&pid=ImgDetMain&o=7&rm=3"
    },
     {
        id: 6,
        tipo: "serie",
        titulo: "Last Chance U",
        descripcion: "Un grupo de jóvenes se convierten en estrellas de la NFL y son dirigidos por el entrenador Buddy Stephens cuyos métodos han ayudado a los jugadores a llegar a la NFL.",
        imagen: "https://fr.web.img4.acsta.net/pictures/16/07/27/12/01/115608.jpg"
    },
     {
        id: 7,
        tipo: "serie",
        titulo: "El Mariscal",
        descripcion: "Seguimiento a los mariscales de campo estrellas de la NFL Patrick Mahones, Kirk Cousins y Marcus Mariota.",
        imagen: "https://hiramnoriega.com/wp-content/uploads/2023/07/Poster-de-El-mariscal.jpg"
    },
      {
        id: 8,
        tipo: "serie",
        titulo: "America's team Dallas Cowboys",
        descripcion: "A través de imágenes y entrevistas inéditas, esta serie retrata la historia de los Dallas Cowboys y el impacto de Jerry Jones en la historia de la NFL.",
        imagen: "https://m.media-amazon.com/images/I/81gGF7TlZGL._AC_UF1000,1000_QL80_.jpg"
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
