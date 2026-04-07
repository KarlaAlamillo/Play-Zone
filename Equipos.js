/*Karla Alamillo Palacios
Diseño Web */
const teams = [
  {name:"Arizona Cardinals",conf:"NFC",logo:"https://a.espncdn.com/i/teamlogos/nfl/500/ari.png", page:"Cardinals.html"},
  {name:"Atlanta Falcons",conf:"NFC",logo:"https://a.espncdn.com/i/teamlogos/nfl/500/atl.png"},
  {name:"Baltimore Ravens",conf:"AFC",logo:"https://a.espncdn.com/i/teamlogos/nfl/500/bal.png"},
  {name:"Buffalo Bills",conf:"AFC",logo:"https://a.espncdn.com/i/teamlogos/nfl/500/buf.png"},
  {name:"Carolina Panthers",conf:"NFC",logo:"https://a.espncdn.com/i/teamlogos/nfl/500/car.png"},
  {name:"Chicago Bears",conf:"NFC",logo:"https://a.espncdn.com/i/teamlogos/nfl/500/chi.png"},
  {name:"Cincinnati Bengals",conf:"AFC",logo:"https://a.espncdn.com/i/teamlogos/nfl/500/cin.png"},
  {name:"Cleveland Browns",conf:"AFC",logo:"https://a.espncdn.com/i/teamlogos/nfl/500/cle.png"},
  {name:"Dallas Cowboys",conf:"NFC",logo:"https://a.espncdn.com/i/teamlogos/nfl/500/dal.png"},
  {name:"Denver Broncos",conf:"AFC",logo:"https://a.espncdn.com/i/teamlogos/nfl/500/den.png"},
  {name:"Detroit Lions",conf:"NFC",logo:"https://a.espncdn.com/i/teamlogos/nfl/500/det.png"},
  {name:"Green Bay Packers",conf:"NFC",logo:"https://a.espncdn.com/i/teamlogos/nfl/500/gb.png", page:"Packers.html"},
  {name:"Houston Texans",conf:"AFC",logo:"https://a.espncdn.com/i/teamlogos/nfl/500/hou.png"},
  {name:"Indianapolis Colts",conf:"AFC",logo:"https://a.espncdn.com/i/teamlogos/nfl/500/ind.png"},
  {name:"Jacksonville Jaguars",conf:"AFC",logo:"https://a.espncdn.com/i/teamlogos/nfl/500/jax.png"},
  {name:"Kansas City Chiefs",conf:"AFC",logo:"https://a.espncdn.com/i/teamlogos/nfl/500/kc.png"},
  {name:"Las Vegas Raiders",conf:"AFC",logo:"https://a.espncdn.com/i/teamlogos/nfl/500/lv.png"},
  {name:"Los Angeles Chargers",conf:"AFC",logo:"https://a.espncdn.com/i/teamlogos/nfl/500/lac.png"},
  {name:"Los Angeles Rams",conf:"NFC",logo:"https://a.espncdn.com/i/teamlogos/nfl/500/lar.png"},
  {name:"Miami Dolphins",conf:"AFC",logo:"https://a.espncdn.com/i/teamlogos/nfl/500/mia.png"},
  {name:"Minnesota Vikings",conf:"NFC",logo:"https://a.espncdn.com/i/teamlogos/nfl/500/min.png"},
  {name:"New England Patriots",conf:"AFC",logo:"https://a.espncdn.com/i/teamlogos/nfl/500/ne.png", page:"Patriots.html"},
  {name:"New Orleans Saints",conf:"NFC",logo:"https://a.espncdn.com/i/teamlogos/nfl/500/no.png"},
  {name:"New York Giants",conf:"NFC",logo:"https://a.espncdn.com/i/teamlogos/nfl/500/nyg.png"},
  {name:"New York Jets",conf:"AFC",logo:"https://a.espncdn.com/i/teamlogos/nfl/500/nyj.png"},
  {name:"Philadelphia Eagles",conf:"NFC",logo:"https://a.espncdn.com/i/teamlogos/nfl/500/phi.png", page:"Eagles.html"},
  {name:"Pittsburgh Steelers",conf:"AFC",logo:"https://a.espncdn.com/i/teamlogos/nfl/500/pit.png"},
  {name:"San Francisco 49ers",conf:"NFC",logo:"https://a.espncdn.com/i/teamlogos/nfl/500/sf.png"},
  {name:"Seattle Seahawks",conf:"NFC",logo:"https://a.espncdn.com/i/teamlogos/nfl/500/sea.png", page:"Seahawks.html"},
  {name:"Tampa Bay Buccaneers",conf:"NFC",logo:"https://a.espncdn.com/i/teamlogos/nfl/500/tb.png"},
  {name:"Tennessee Titans",conf:"AFC",logo:"https://a.espncdn.com/i/teamlogos/nfl/500/ten.png"},
  {name:"Washington Commanders",conf:"NFC",logo:"https://a.espncdn.com/i/teamlogos/nfl/500/wsh.png"}
];


let currentFilter = "ALL";

const container = document.getElementById("teamsContainer");
const searchInput = document.getElementById("search");

/*F4V0R1705*/
function getFavorites() {
  return JSON.parse(localStorage.getItem("favorites")) || [];
}

function toggleFavorite(name) {
  let favs = getFavorites();

  favs = favs.includes(name)
    ? favs.filter(f => f !== name)
    : [...favs, name];

  localStorage.setItem("favorites", JSON.stringify(favs));
  displayTeams(teams);
}

function showFavorites() {
  const favs = getFavorites();
  displayTeams(teams.filter(t => favs.includes(t.name)));
}

/*BU5QU3D4*/
searchInput.addEventListener("input", applyFilters);

function filterTeams(conf) {
  currentFilter = conf;
  applyFilters();
}

function applyFilters() {
  let filtered = teams;

  if (currentFilter !== "ALL") {
    filtered = filtered.filter(t => t.conf === currentFilter);
  }

  const search = searchInput.value.toLowerCase();
  filtered = filtered.filter(t =>
    t.name.toLowerCase().includes(search)
  );

  displayTeams(filtered);
}

/*3QU1905*/
function displayTeams(data) {
  const favs = getFavorites();
  container.innerHTML = "";

  data.forEach(team => {
    const isFav = favs.includes(team.name);

    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${team.logo}">
      <h3>${team.name}</h3>
      <p>${team.conf}</p>
      <span class="star">
        ${isFav ? "⭐" : "☆"}
      </span>
    `;
    /*F4V0R170*/
    card.querySelector(".star").addEventListener("click", (e) => {
      e.stopPropagation();
      toggleFavorite(team.name);
    });

    /*N4V3394C10N*/
    card.addEventListener("click", () => {
      card.style.transform = "scale(0.95)";

      setTimeout(() => {
        if (team.page) {
          window.location.href = team.page;
        } else {
          window.location.href = `team.html?name=${encodeURIComponent(team.name)}`;
        }
      }, 150);
    });

    container.appendChild(card);
  });
}

/* 74B14*/
async function loadStandings() {
  try {
    const res = await fetch("https://site.api.espn.com/apis/v2/sports/football/nfl/standings");
    const data = await res.json();

    const tbody = document.querySelector("#standingsTable tbody");
    tbody.innerHTML = "";

    data.children.forEach(conf => {
      conf.standings.entries.forEach(team => {
        const stats = team.stats;

        const wins = stats.find(s => s.name === "wins")?.value || 0;
        const losses = stats.find(s => s.name === "losses")?.value || 0;
        const pct = stats.find(s => s.name === "winPercent")?.displayValue || "-";

        tbody.innerHTML += `
          <tr>
            <td>${team.team.displayName}</td>
            <td>${wins}</td>
            <td>${losses}</td>
            <td>${pct}</td>
          </tr>
        `;
      });
    });

  } catch (error) {
    console.error("Error cargando standings:", error);
  }
}

displayTeams(teams);
loadStandings();

