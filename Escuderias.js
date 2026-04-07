/*Karla Alamillo Palacios
Diseño Web */
const teams = [
  {
    name: "Oracle Red Bull Racing",
    logo: "https://i.pinimg.com/1200x/28/ee/6c/28ee6c55b8e3d6414342daf10d97fe5a.jpg",
    color: "#3671C6",
    country: "Austria",
    wins: 0,
    podiums: 0,
    points: 12,
    link: "https://www.redbullracing.com/int-en"
  },
  {
    name: "Mercedes-AMG PETRONAS",
    logo: "https://i.pinimg.com/736x/f9/62/51/f96251e7dc205c852df840f443523225.jpg",
    color: "#27F4D2",
    country: "Alemania",
    wins: 2,
    podiums: 4,
    points: 98,
     link: "https://www.mercedesamgf1.com/"
  },
  {
    name: "Scuderia Ferrari HP",
    logo: "https://i.pinimg.com/736x/8f/92/c2/8f92c268caac6dde6199fc5934dec42e.jpg",
    color: "#E80020",
    country: "Italia",
    wins: 0,
    podiums: 2,
    points: 67,
     link: "https://www.ferrari.com/en-EN/formula1"
  },
  {
    name: "McLaren Mastercard",
    logo: "https://i.pinimg.com/1200x/16/29/c3/1629c3813bad291e2e423f2100969113.jpg",
    color: "#FF8700",
    country: "Reino Unido",
    wins: 0,
    podiums: 0,
    points: 18,
     link: "https://www.mclaren.com/racing/"
  },
  {
    name: "Aston Martin Aramco",
    logo: "https://i.pinimg.com/736x/8c/c5/bc/8cc5bcc749296bc4adf2bff3fc093e5b.jpg",
    color: "#006F62",
    country: "Reino Unido",
    wins: 0,
    podiums: 0,
    points: 0,
     link: "https://www.astonmartinf1.com/en-GB/2026"
  },
  {
    name: "Cadillac",
    logo: "https://i.pinimg.com/1200x/4a/77/1a/4a771a367803fa6d4b9af13379ecbb97.jpg",
    color: "#8e8c92",
    country: "Estados Unidos",
    wins: 0,
    podiums: 0,
    points: 0,
     link: "https://www.cadillacf1team.com/"
  },
  {
    name: "Visa Cash App Racing Bulls",
    logo: "https://i.pinimg.com/1200x/52/8b/ad/528bade0d402955c0e8b859f4b1317a5.jpg",
    color: "#6692ff",
    country: "Reino Unido",
    wins: 0,
    podiums: 0,
    points: 12,
     link: "https://www.visacashapprb.com/int-en"
  },
  {
    name: "BWT Alpine",
    logo: "https://i.pinimg.com/736x/c8/1c/8d/c81c8d72b5c8f32d4cc1526a23b59ccd.jpg",
    color: "#00A1E8",
    country: "Francesa",
    wins: 0,
    podiums: 0,
    points: 10,
     link: "https://www.alpinef1.com/"
  },
  {
    name: "Audi",
    logo:"https://i.pinimg.com/736x/b0/f7/eb/b0f7eb6e9c6d5923a044bf4bfa9bcd68.jpg",
    color: "#333d3c",
    country: "Alemania",
    wins: 0,
    podiums: 0,
    points: 2,
     link: "https://www.audi.com.mx/es/f1/"
  },
  {
    name: "Atlassian Williams",
    logo: "https://i.pinimg.com/736x/0d/dd/d6/0dddd6c7dd42eba63079e12531c2f197.jpg",
    color: "#1868d8",
    country: "Reino Unido",
    wins: 0,
    podiums: 0,
    points: 2,
     link: "https://www.williamsf1.com/"
  },
  {
    name: "TGR Haas",
    logo: "https://i.pinimg.com/736x/9a/7e/4f/9a7e4f9179f1797429a46a24d4dfc5bb.jpg",
    color: "#f62039",
    country: "Estados Unidos",
    wins: 0,
    podiums: 0,
    points: 17,
     link: "https://www.haasf1team.com/"
  }
];



// 📅 C413ND4R10
const races = [
  { name: "Australia (Melbourne) GP", date: "2026/Marzo/06-08", img:"https://i.pinimg.com/1200x/f4/71/46/f47146dd395eae99209459839eadf7b4.jpg" },
  { name: "China (Shanghai) GP", date: "2026/Marzo/13-15", img:"https://i.pinimg.com/1200x/ca/a6/dc/caa6dc46642428d99f67aaf4124631f7.jpg" },
  { name: "Japón (Suzuka) GP", date: "2026/Marzo/27-29", img:"https://i.pinimg.com/1200x/81/43/95/814395f16f4e53e46dee5eba2012b199.jpg"},
  { name: "Bahrain (Sakhir) GP", date: "2026/Abril/10-12", img:"https://i.pinimg.com/1200x/e1/a6/9c/e1a69ce1c4f492869690c566ac15c105.jpg"},
  { name: "Arabia Saudita (Jeddah) GP", date: "2026/Abril/17-19", img:"https://i.pinimg.com/1200x/e5/02/8c/e5028c0204bbc9d0312122d30e9471d6.jpg"},
  { name: "Miami (Miami) GP", date: "2026/Mayo/01-03", img:"https://i.pinimg.com/1200x/1a/88/56/1a885626167808fa2856844d0752dbde.jpg"},
  { name: "Canada (Montreal) GP", date: "2026/Mayo/22-24", img:"https://i.pinimg.com/1200x/b5/1b/38/b51b385bca45aaa26110c8ceccd136c1.jpg"},
  { name: "Monaco (Monaco) GP", date: "2026/Junio/05-07", img:"https://i.pinimg.com/1200x/2f/c6/8b/2fc68ba5790f51db03f25cc156865b7a.jpg"},
  { name: "España (Barcelana-Catalunya) GP", date: "2026/Junio/12-14", img:"https://i.pinimg.com/1200x/80/30/96/8030964b4c310a390a87e73979c0c45c.jpg" },
  { name: "Austria (Spielberg) GP", date: "2026/Junio/26-28", img:"https://i.pinimg.com/736x/3b/3a/ff/3b3aff64b4814ae659760bd0b036e976.jpg"},
  { name: "Gran Bretaña (Silverstone) GP", date: "2026/Julio/03-05", img:"https://i.pinimg.com/1200x/0b/24/9c/0b249c02e361ee46dcb0133df4d9d86b.jpg" },
  { name: "Belgica (Spa-Francorchamps) GP", date: "2026/Julio/17-19", img:"https://i.pinimg.com/1200x/bd/13/31/bd1331d8a0c3f60598f6e1e15ea5adf6.jpg" },
  { name: "Hungria (Budapest) GP", date: "2026/Julio/24-26", img:"https://i.pinimg.com/1200x/5b/a1/99/5ba199f6bed6b4b544407aef1d7678f7.jpg" },
  { name: "Paises Bajos (Zandvoort) GP", date: "2026/Agostol/21-23", img:"https://i.pinimg.com/1200x/d4/10/0c/d4100c3bf4c47cb707ed4d5a17fc0084.jpg" },
  { name: "Italia (Monza) GP", date: "2026/Septiembre/04-06", img:"https://i.pinimg.com/1200x/d3/ac/0f/d3ac0f0982cee15cabea5c1b394efe9b.jpg" },
  { name: "España (Madrid) GP", date: "2026/Septiembre/11-13" },
  { name: "Azerbaijan (Baku) GP", date: "2026/Septiembre/24-26", img:"https://i.pinimg.com/1200x/df/6a/f8/df6af87b02910693764eeaaae719ffa5.jpg" },
  { name: "Singapor (Singapor) GP", date: "2026/Octubre/09-11", img:"https://i.pinimg.com/1200x/45/b9/7e/45b97ed273f76c39fa8ac11402c95ae0.jpg" },
  { name: "Estados Unidos (Austin) GP", date: "2026/Octubre-Noviembre/23-25", img:"https://i.pinimg.com/1200x/5c/73/2a/5c732a60ceb0fb2e9fc3399d48b9645a.jpg" },
  { name: "México (Ciudad de México) GP", date: "2026/Octubre/30-01", img:"https://i.pinimg.com/1200x/79/56/73/79567318c8bcab43b6aeff6b9684bd56.jpg" },
  { name: "Brasil (Sao Paulo) GP", date: "2026/Noviembre/06-08", img:"https://i.pinimg.com/1200x/75/f9/7b/75f97b9eed130ac4991c2aa37687783d.jpg" },
  { name: "Estados Unidos (Las Vegas) GP", date: "2026/Noviembre/19-21", img:"https://i.pinimg.com/1200x/98/39/9c/98399cef9f240f2f9aa1081feb0810c8.jpg" },
  { name: "Qatar (Lusail) GP", date: "2026/Noviembre/27-29", img:"https://i.pinimg.com/1200x/91/70/15/91701553f284a6f634506f4147de589a.jpg" },
  { name: "Abu Dhabi (Yas Island) GP", date: "2026/Diciembre/04-06", img:"https://i.pinimg.com/1200x/e9/33/1d/e9331d90f1cc55966365ecf8c80bb123.jpg" }
];

/* 9R3F3R171 (541V470)*/
let favorites = JSON.parse(localStorage.getItem("f1Favorites")) || [];

const container = document.getElementById("teamsContainer");

function getRankedTeams() {
  return [...teams].sort((a, b) => b.points - a.points);
}

/*90D10 */
function getPositionColor(index) {
  if (index === 0) return "#FFD700";
  if (index === 1) return "#C0C0C0";
  if (index === 2) return "#CD7F32";
  return "#ffffff20";
}

/*M0574 9R3F3R171 */
function renderTeams(list) {
  container.innerHTML = "";

  const ranked = getRankedTeams();

  ranked.forEach((team, index) => {
    const card = document.createElement("a");

 
    card.href = `teamF1.html?team=${encodeURIComponent(team.name)}`;
    card.classList.add("card");

    card.style.background = `linear-gradient(135deg, ${team.color}, #000)`;
     card.style.border = `2px solid ${getPositionColor(index)}`;
    card.style.setProperty("--team-color", team.color);

card.innerHTML = `
      <div class="rank">#${index + 1}</div>

      <img src="${team.logo}" class="team-logo">

      <h3>${team.name}</h3>

      <p>🏆 ${team.wins}</p>
      <p>🥇 ${team.podiums}</p>
      <p>📊 ${team.points} pts</p>

      <button onclick="toggleFavorite(event, '${team.name}')">
        ${favorites.includes(team.name) ? "⭐" : "☆"}
      </button>

      <div class="card-buttons">
    <button onclick="toggleFavorite(event, '${team.name}')">
      ${favorites.includes(team.name) ? "⭐" : "☆"}
    </button>

    <button onclick="goToLink(event, '${team.link || ""}')">
      🌐 Ver más
    </button>
  </div>
    `;

    /* S0N1D05 90R 35CUD3R14 */ 
    card.addEventListener("mouseenter", () => playSound(team.name));

    container.appendChild(card);
  });
}

/*50N1D05 */ 
function playSound(teamName) {
  const sounds = {
    "Mercedes-AMG PETRONAS": "sounds/mercedes.mp3",
    "Scuderia Ferrari HP": "sounds/ferrari.mp3",
    "Oracle Red Bull Racing": "sounds/redbull.mp3"

  };

  if (sounds[teamName]) {
    const audio = new Audio(sounds[teamName]);
    audio.volume = 0.3;
    audio.play();
  }
}


function toggleFavorite(e, name) {
  e.preventDefault();

  if (favorites.includes(name)) {
    favorites = favorites.filter(f => f !== name);
  } else {
    favorites.push(name);
  }

  localStorage.setItem("f1Favorites", JSON.stringify(favorites));
  renderTeams(teams);
}

/*F117R05 */ 
function showAll() {
  renderTeams(teams);
}


function showFavorites() {
  const favTeams = teams.filter(t => favorites.includes(t.name));
  renderTeams(favTeams);
}

function goToLink(e, url) {
  e.preventDefault(); 

  if (url) {
    window.open(url, "_blank"); 
  } else {
    alert("No hay enlace disponible");
  }
}

/*C413ND4R10*/
function showCalendar() {
  container.innerHTML = "<h2> Calendario F1 2026</h2>";

  races.forEach(r => {
    container.innerHTML += `
      <div class="race-card">
        <img src="${r.img}" class="race-img">
        <h3>${r.name}</h3>
        <p>${r.date}</p>
      </div>
    `;
  });
}


document.getElementById("search").addEventListener("input", e => {
  const text = e.target.value.toLowerCase();

  renderTeams(
    teams.filter(t => t.name.toLowerCase().includes(text))
  );
});

/*1n1c10*/
renderTeams(teams);    