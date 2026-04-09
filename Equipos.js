/*Karla Alamillo Palacios
Diseño Web */
const teams = [
 {name:"Arizona Cardinals",conf:"NFC",logo:"https://a.espncdn.com/i/teamlogos/nfl/500/ari.png", page:"Cardinals.html"},
  {name:"Atlanta Falcons",conf:"NFC",logo:"https://a.espncdn.com/i/teamlogos/nfl/500/atl.png", page:"https://www.atlantafalcons.com/"}, 
  {name:"Baltimore Ravens",conf:"AFC",logo:"https://a.espncdn.com/i/teamlogos/nfl/500/bal.png", page:"https://www.baltimoreravens.com/"},
  {name:"Buffalo Bills",conf:"AFC",logo:"https://a.espncdn.com/i/teamlogos/nfl/500/buf.png",page:"https://www.buffalobills.com/"},
  {name:"Carolina Panthers",conf:"NFC",logo:"https://a.espncdn.com/i/teamlogos/nfl/500/car.png", page:"https://www.panthers.com/"},
  {name:"Chicago Bears",conf:"NFC",logo:"https://a.espncdn.com/i/teamlogos/nfl/500/chi.png", page:"https://www.chicagobears.com/"},
  {name:"Cincinnati Bengals",conf:"AFC",logo:"https://a.espncdn.com/i/teamlogos/nfl/500/cin.png", page:"https://www.bengals.com/"},
  {name:"Cleveland Browns",conf:"AFC",logo:"https://a.espncdn.com/i/teamlogos/nfl/500/cle.png", page:"https://www.clevelandbrowns.com/"},
  {name:"Dallas Cowboys",conf:"NFC",logo:"https://a.espncdn.com/i/teamlogos/nfl/500/dal.png", page:"https://www.dallascowboys.com/"},
  {name:"Denver Broncos",conf:"AFC",logo:"https://a.espncdn.com/i/teamlogos/nfl/500/den.png", page:"https://www.denverbroncos.com/"},
  {name:"Detroit Lions",conf:"NFC",logo:"https://a.espncdn.com/i/teamlogos/nfl/500/det.png", page:"https://www.detroitlions.com/"},
  {name:"Green Bay Packers",conf:"NFC",logo:"https://a.espncdn.com/i/teamlogos/nfl/500/gb.png", page:"https://www.packers.com/"},
  {name:"Houston Texans",conf:"AFC",logo:"https://a.espncdn.com/i/teamlogos/nfl/500/hou.png", page:"https://www.houstontexans.com/"},
  {name:"Indianapolis Colts",conf:"AFC",logo:"https://a.espncdn.com/i/teamlogos/nfl/500/ind.png", page:"https://www.colts.com/"},
  {name:"Jacksonville Jaguars",conf:"AFC",logo:"https://a.espncdn.com/i/teamlogos/nfl/500/jax.png", page:"https://www.jaguars.com/"},
  {name:"Kansas City Chiefs",conf:"AFC",logo:"https://a.espncdn.com/i/teamlogos/nfl/500/kc.png", page:"https://www.chiefs.com/"},
  {name:"Las Vegas Raiders",conf:"AFC",logo:"https://a.espncdn.com/i/teamlogos/nfl/500/lv.png", page:"https://www.raiders.com/espanol/"},
  {name:"Los Angeles Chargers",conf:"AFC",logo:"https://a.espncdn.com/i/teamlogos/nfl/500/lac.png", page:"https://www.chargers.com/"},
  {name:"Los Angeles Rams",conf:"NFC",logo:"https://a.espncdn.com/i/teamlogos/nfl/500/lar.png", page:"https://www.therams.com/"},
  {name:"Miami Dolphins",conf:"AFC",logo:"https://a.espncdn.com/i/teamlogos/nfl/500/mia.png", page:"https://www.miamidolphins.com/"},
  {name:"Minnesota Vikings",conf:"NFC",logo:"https://a.espncdn.com/i/teamlogos/nfl/500/min.png", page:"https://www.vikings.com/"},
  {name:"New England Patriots",conf:"AFC",logo:"https://a.espncdn.com/i/teamlogos/nfl/500/ne.png", page:"Patriots.html"},
  {name:"New Orleans Saints",conf:"NFC",logo:"https://a.espncdn.com/i/teamlogos/nfl/500/no.png", page:"https://www.neworleanssaints.com/"},
  {name:"New York Giants",conf:"NFC",logo:"https://a.espncdn.com/i/teamlogos/nfl/500/nyg.png", page:"https://www.giants.com/"},
  {name:"New York Jets",conf:"AFC",logo:"https://a.espncdn.com/i/teamlogos/nfl/500/nyj.png", page:"https://www.newyorkjets.com/"},
  {name:"Philadelphia Eagles",conf:"NFC",logo:"https://a.espncdn.com/i/teamlogos/nfl/500/phi.png", page:"https://www.philadelphiaeagles.com/"},
  {name:"Pittsburgh Steelers",conf:"AFC",logo:"https://a.espncdn.com/i/teamlogos/nfl/500/pit.png", page:"https://www.steelers.com/espanol/"},
  {name:"San Francisco 49ers",conf:"NFC",logo:"https://a.espncdn.com/i/teamlogos/nfl/500/sf.png", page:"https://www.49ers.com/esp/"},
  {name:"Seattle Seahawks",conf:"NFC",logo:"https://a.espncdn.com/i/teamlogos/nfl/500/sea.png", page:"Seahawks.html"},
  {name:"Tampa Bay Buccaneers",conf:"NFC",logo:"https://a.espncdn.com/i/teamlogos/nfl/500/tb.png", page:"https://www.buccaneers.com/"},
  {name:"Tennessee Titans",conf:"AFC",logo:"https://a.espncdn.com/i/teamlogos/nfl/500/ten.png", page:"https://www.tennesseetitans.com/"},
  {name:"Washington Commanders",conf:"NFC",logo:"https://a.espncdn.com/i/teamlogos/nfl/500/wsh.png", page:"https://www.commanders.com/"}
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

