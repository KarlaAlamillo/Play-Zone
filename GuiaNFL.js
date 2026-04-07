/*Karla Alamillo Palacios
Diseño Web */
const sections = document.querySelectorAll(".section");

window.addEventListener("scroll", () => {
  sections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      sec.classList.add("show");
    }
  });
});

// STATS
let yards = 0, tds = 0, passes = 0;

const statsInterval = setInterval(() => {
  if (yards < 350) yards += 10;
  if (tds < 4) tds++;
  if (passes < 25) passes += 2;

  document.getElementById("yards").innerText = yards;
  document.getElementById("tds").innerText = tds;
  document.getElementById("passes").innerText = passes;

  if (yards >= 350) clearInterval(statsInterval);
}, 50);

// QUIZ
const quizData = [
  {
    question: "¿Cuántos puntos vale un touchdown?",
    answers: ["3", "6", "7"],
    correct: "6"
  },
  {
    question: "¿Cuántos equipos hay en la NFL?",
    answers: ["32", "26", "27"],
    correct: "32"
  },
  {
    question: "¿Cuántos downs hay?",
    answers: ["3", "4", "5"],
    correct: "4"
  },
  {
    question: "¿Cómo se llama el trofeo del campeón?",
    answers: ["Super Cup", "Lombardi Trophy", "Championship Trophy"],
    correct: "Lombardi Trophy"
  },
  {
    question: "¿Cuántos jugadores hay por equipo en el campo?",
    answers: ["11", "12", "10"],
    correct: "11"
  },
  {
    question: "¿Cuánto dura un partido (tiempo regular)?",
    answers: ["15 minutos", "30 minutos", "60 minutos"],
    correct: "60 minutos"
  },
  {
    question: "¿Qué equipo ganó el Super Bowl 55?",
    answers: ["Tampa Bay Buccaneers", "Kansas City Chiefs", "Green Bay Packers"],
    correct: "Tampa Bay Buccaneers"
  },
  {
    question: "¿Cuál es el equipo con más títulos de Super Bowl?",
    answers: ["Pittsburgh Steelers", "New England Patriots", "Dallas Cowboys"],
    correct: "New England Patriots"
  },
  {
    question: "¿En qué año se celebró el primer Super Bowl?",
    answers: ["1967", "1970", "1965"],
    correct: "1967"
  },
  {
    question: "¿Cómo se llama la final de la NFL?",
    answers: ["Mega Bowl", "Championship Game", "Super Bowl"],
    correct: "Super Bowl"
  },
  {
    question: "¿Cuántos downs hay para avanzar 10 yardas?",
    answers: ["3", "4", "5"],
    correct: "4"
  },
  {
    question: "¿Qué es una intercepción?",
    answers: ["Pase incompleto", "Pase atrapado por defensa", "Touchdown"],
    correct: "Pase atrapado por defensa"
  },
  {
    question: "¿Qué sucede en un safety?",
    answers: ["3 puntos", "2 puntos para defensa", "1 punto"],
    correct: "2 puntos para defensa"
  },
  {
    question: "¿Qué jugador lanza el balón?",
    answers: ["Quarterback", "Running Back", "Wide Receiver"],
    correct: "Quarterback"
  },
  {
    question: "Función del wide receiver",
    answers: ["Bloque", "Defensa", "Atrapar pases"],
    correct: "Atrapar pases"
  },
  {
    question: "¿Qué hace un running back?",
    answers: ["Lanza pases", "Defiende", "Corre con el balón"],
    correct: "Corre con el balón"
  },
  {
    question: "¿Qué es el MVP?",
    answers: ["Mejor novato", "Mejor defensa", "Jugador más valioso"],
    correct: "Jugador más valioso"
  },
  {
    question: "¿Qué significa “Red Zone”?",
    answers: ["Zona de castigo", "Zona lateral", "Últimas 20 yardas antes de anotar"],
    correct: "Últimas 20 yardas antes de anotar "
  }
];

let current = 0;

function loadQuestion() {
  const q = quizData[current];

  document.getElementById("question").innerText = q.question;

  const answersDiv = document.getElementById("answers");
  answersDiv.innerHTML = "";

  q.answers.forEach(ans => {
    const btn = document.createElement("button");
    btn.innerText = ans;

    btn.onclick = () => {
      document.getElementById("result").innerText =
        ans === q.correct ? "✅ Correcto" : "❌ Incorrecto";

      current++;
      if (current < quizData.length) {
        setTimeout(loadQuestion, 1000);
      }
    };

    answersDiv.appendChild(btn);
  });
}

loadQuestion();

/*JU390 */

const field = document.getElementById("field");
const ball = document.getElementById("ball");

const receivers = [
  document.getElementById("wr1"),
  document.getElementById("wr2"),
  document.getElementById("wr3")
];

const defenders = [
  document.getElementById("def1"),
  document.getElementById("def2")
];

let coverage = "man";
let routePoints = [];

// MENSAJE
function showMessage(text) {
  const msg = document.getElementById("message");
  msg.innerText = text;
  msg.style.opacity = 1;
  setTimeout(() => msg.style.opacity = 0, 1500);
}

// DISTANCIA
function distance(a, b) {
  return Math.hypot(a.offsetLeft - b.offsetLeft, a.offsetTop - b.offsetTop);
}

// QB DECISION
function qbDecision() {
  let bestWR = receivers.reduce((best, wr) => {
    return getSeparation(wr) > getSeparation(best) ? wr : best;
  }, receivers[0]);

  runPlay(bestWR);
}

// SEPARACIÓN
function getSeparation(wr) {
  return Math.min(...defenders.map(def => distance(def, wr)));
}

// RUN PLAY
function runPlay(targetWR) {
  followDrawnRoute(targetWR);

  let t = 0;

  const interval = setInterval(() => {
    t += 0.04;

    let arc = Math.sin(t * Math.PI) * 60;

    let x = ball.offsetLeft + (targetWR.offsetLeft - ball.offsetLeft) * t;
    let y = ball.offsetTop + (targetWR.offsetTop - ball.offsetTop) * t - arc;

    ball.style.left = x + "px";
    ball.style.top = y + "px";

    if (defenders.some(d => collision(d, ball))) {
      clearInterval(interval);
      showMessage("❌ Intercepción");
    }

    if (t >= 1) {
      clearInterval(interval);
      tackle(targetWR);
    }

  }, 30);
}

// TACKLE
function tackle(wr) {
  function chase() {
    defenders.forEach(def => {
      let dx = wr.offsetLeft - def.offsetLeft;
      let dy = wr.offsetTop - def.offsetTop;

      def.style.left = def.offsetLeft + dx * 0.05 + "px";
      def.style.top = def.offsetTop + dy * 0.05 + "px";

      if (collision(def, wr)) {
        showMessage("💥 Tackle");
      }
    });

    requestAnimationFrame(chase);
  }
  chase();
}

// COLISIÓN
function collision(a, b) {
  const r1 = a.getBoundingClientRect();
  const r2 = b.getBoundingClientRect();
  return !(r1.right < r2.left || r1.left > r2.right || r1.bottom < r2.top || r1.top > r2.bottom);
}

// DEFENSE AI
function defenseAI() {
  defenders.forEach((def, i) => {

    let target = receivers[i % receivers.length];

    let dx = target.offsetLeft - def.offsetLeft;
    let dy = target.offsetTop - def.offsetTop;

    def.style.left = def.offsetLeft + dx * 0.03 + "px";
    def.style.top = def.offsetTop + dy * 0.03 + "px";
  });

  requestAnimationFrame(defenseAI);
}
defenseAI();

// CANVAS RUTAS
const canvas = document.getElementById("routesCanvas");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width = field.clientWidth;
  canvas.height = field.clientHeight;
}
resizeCanvas();

let drawing = false;
let drawMode = false;

function toggleDraw() {
  drawMode = !drawMode;
  document.body.classList.toggle("draw-mode");
}

canvas.addEventListener("mousedown", () => {
  if (!drawMode) return;
  drawing = true;
  routePoints = [];
});

canvas.addEventListener("mousemove", e => {
  if (!drawing) return;

  const rect = canvas.getBoundingClientRect();
  let x = e.clientX - rect.left;
  let y = e.clientY - rect.top;

  routePoints.push({x,y});

  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.beginPath();

  routePoints.forEach((p,i)=>{
    if(i===0) ctx.moveTo(p.x,p.y);
    else ctx.lineTo(p.x,p.y);
  });

  ctx.strokeStyle="yellow";
  ctx.lineWidth=3;
  ctx.stroke();
});

canvas.addEventListener("mouseup", ()=> drawing=false);

// SEGUIR RUTA
function followDrawnRoute(player) {
  let i = 0;

  function move() {
    if (i >= routePoints.length) return;

    player.style.left = routePoints[i].x + "px";
    player.style.top = routePoints[i].y + "px";

    i++;
    requestAnimationFrame(move);
  }

  move();
}

// GUARDAR JUGADA
function savePlay() {
  const play = {
    players: [],
    route: routePoints
  };

  document.querySelectorAll(".player").forEach(p => {
    play.players.push({
      id: p.id,
      x: p.offsetLeft,
      y: p.offsetTop
    });
  });

  let plays = JSON.parse(localStorage.getItem("plays") || "[]");
  plays.push(play);
  localStorage.setItem("plays", JSON.stringify(plays));

  showMessage("💾 Guardado");
}