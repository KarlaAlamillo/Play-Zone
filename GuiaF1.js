/* Karla Alamillo Palacios
Diseño Web*/
const sections = document.querySelectorAll(".section");

window.addEventListener("scroll", () => {
  sections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;

    if (top < window.innerHeight - 100) {
      sec.classList.add("show");
    }
  });
});


/*GR4F1C05 D3 V310C1D4D */ 
const canvas = document.getElementById("speedChart");
const ctx = canvas.getContext("2d");

canvas.width = 300;
canvas.height = 200;

const speeds = [320, 340, 330, 350, 345];

function drawChart() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  speeds.forEach((speed, i) => {
    const x = i * 50 + 30;
    const y = canvas.height - speed / 2;

    ctx.fillStyle = "#e10600";
    ctx.fillRect(x, y, 30, speed / 2);

    ctx.fillStyle = "white";
    ctx.fillText(speed + " km/h", x, y - 5);
  });
}

drawChart();

/*3F3C070 H0V3R */
canvas.addEventListener("mousemove", e => {
  drawChart();

  const x = e.offsetX;

  speeds.forEach((speed, i) => {
    const barX = i * 50 + 30;

    if (x > barX && x < barX + 30) {
      ctx.fillStyle = "#00ffcc";
      ctx.fillRect(barX, canvas.height - speed / 2, 30, speed / 2);
    }
  });
});

/*B4ND3R45*/

function abrirModal(tipo) {
  const modal = document.getElementById("modal");
  const img = document.getElementById("modalImg");
  const texto = document.getElementById("modalTexto");

  const datos = {
    Amarilla: {
      img: "https://i.pinimg.com/1200x/51/2f/d9/512fd99d0fb665ef7fca42551c365cb1.jpg",
      texto: "⚠️ Peligro en pista. No adelantar."
    },
    Roja: {
      img: "https://i.pinimg.com/1200x/37/5f/25/375f25e9455a8ef24a7a3bc76063433b.jpg",
      texto: "🛑 Carrera detenida por seguridad."
    },
    Azul: {
      img: "https://i.pinimg.com/736x/8d/62/f1/8d62f1f5f898f61f893ad39fbc8a2848.jpg",
      texto: "🔵 Deja pasar a un piloto más rápido."
    },
    Verde: {
      img: "https://soymotor.com/sites/default/files/imagenes/article/bandera-verde-circuit-barcelona-catalunya-soymotor.jpg",
      texto: "🟢 Pista libre, todo normal."
    },
    Negra: {
      img: "https://cdn-8.motorsport.com/images/mgl/0LvGDwVY/s8/motogp-german-gp-2017-hector-barbera-avintia-racing-black-flag.jpg",
      texto: "⚫ Descalificación del piloto."
    },
    cuadros: {
      img: "https://i.pinimg.com/1200x/09/24/83/092483273a2a4758ca1353012df5691c.jpg",
      texto: "🏁 Final de la carrera."
    },
    "Bandera a Rayas": {
      img: "https://th.bing.com/th/id/R.1eff076455ccee13b63a527b04afaf89?rik=EvkFo6gmJdOK4w&riu=http%3a%2f%2fwww.xquip.com.cn%2fupload%2fueditor%2fimage%2f20181226%2f6368143987354768686094177.jpg&ehk=0ZZ9hXy4oIFtD3AnmgttynX7%2fe1ly5%2b3e0CwG%2fxLUHY%3d&risl=&pid=ImgRaw&r=0",
      texto: " Superficie resbalosa."
    },
     "Negra con circulo naranja": {
      img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgUmjL-SFI6fohqmYc1Pca2fuVrFZMqJ9TBlqq-y4jiwYZ4p6KMu-j5S6H8K5nnyzeYKRe9sWB7ynjkzqWL_oo6xv3uFvsMOBp2pwsMkA7xzuRBGhu5mmJqJly8Bj91WIW_WJGK9hEJbf4/s1600/F1-Bandera_negra_con_c%25C3%25ADrculo_anaranjado.png",
      texto: "Problemas con el carro de parte de los mecanicos."
    }
  };

  img.src = datos[tipo].img;
  texto.innerText = datos[tipo].texto;

  modal.style.display = "flex";
}

function cerrarModal() {
  document.getElementById("modal").style.display = "none";
}