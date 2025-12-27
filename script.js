const signals = [
  {
    file: "giro_izquierda.jpeg",
    type: "image",
    title: "Giro a la izquierda",
    description:
      "Prepárense para girar a la izquierda: ocupen posición y señalicen con tiempo.",
  },
  {
    file: "giro_derecha.jpeg",
    type: "image",
    title: "Giro a la derecha",
    description:
      "Prepárense para girar a la derecha: ajusten trayectoria y mantengan huecos.",
  },
  {
    file: "frenar.jpeg",
    type: "image",
    title: "Alto",
    description:
      "Deténganse en orden, manteniendo distancia y evitando adelantarse.",
  },
  {
    file: "peligro_izquierda.jpeg",
    type: "image",
    title: "Peligro a la izquierda",
    description:
      "Eviten el lado izquierdo, abran trayectoria a la derecha y bajen el ritmo.",
  },
  {
    file: "peligro_derecha.jpeg",
    type: "image",
    title: "Peligro a la derecha",
    description:
      "Eviten el lado derecho, carguen a la izquierda y bajen el ritmo.",
  },
  {
    file: "peligro.jpeg",
    type: "image",
    title: "Peligro general",
    description:
      "Extreme atención: reduzcan velocidad y busquen la trazada más limpia.",
  },
  {
    file: "aminorar marcha+.mp4",
    type: "video",
    title: "Reducir la velocidad",
    description:
      "Frenen progresivamente manteniendo la separación; sin frenazos bruscos.",
  },
  {
    file: "acelerar marcha.mp4",
    type: "video",
    title: "Aumentar la velocidad",
    description:
      "Suban el ritmo de forma suave para igualar al líder sin romper la formación.",
  },
  {
    file: "circular en fila india.jpeg",
    type: "image",
    title: "Fila única",
    description:
      "Formarse en una sola fila, uno detrás de otro, dejando espacio de seguridad.",
  },
  {
    file: "circula en fila zig zag.jpeg",
    type: "image",
    title: "Fila doble",
    description:
      "Pasar a formación en zig-zag dejando huecos alternados y visibilidad.",
  },
  {
    file: "acercarse.mp4",
    type: "video",
    title: "Apegarse a la formación",
    description:
      "Cierren huecos: acorten la distancia manteniendo margen seguro.",
  },
  {
    file: "alejarse.mp4",
    type: "video",
    title: "Despegarse de la formación",
    description:
      "Aumenten la separación entre motos para tener más margen de maniobra.",
  },
  {
    file: "repostar.mp4",
    type: "video",
    title: "Parada para combustible",
    description:
      "Prepárense para entrar a la gasolinera en la próxima oportunidad.",
  },
  {
    file: "seguime.mp4",
    type: "video",
    title: "Síganme",
    description: "Manténganse tras el guía copiando su trazada y ritmo.",
  },
  {
    file: "policia_radar.mp4",
    type: "video",
    title: "Policía / Radar",
    description: "Reduzcan a velocidad legal y circulen con máxima prudencia.",
  },
  {
    file: "foto.mp4",
    type: "video",
    title: "Oportunidad de foto",
    description:
      "Mantengan ritmo estable y posición; prepárense si quieren salir en la foto.",
  },
];

const grid = document.getElementById("signals-grid");

const createMediaElement = (item) => {
  const wrapper = document.createElement("div");
  wrapper.className = "media";

  const src = "media/" + encodeURIComponent(item.file);

  if (item.type === "video") {
    const video = document.createElement("video");
    video.src = src;
    video.autoplay = true;
    video.loop = true;
    video.muted = true;
    video.playsInline = true;
    video.preload = "metadata";
    video.setAttribute(
      "aria-label",
      `${item.title} (video en bucle, sin audio)`
    );
    if (
      item.file === "aminorar marcha+.mp4" ||
      item.file === "acelerar marcha.mp4"
    ) {
      wrapper.classList.add("top-align");
    }
    wrapper.appendChild(video);
  } else {
    const img = document.createElement("img");
    img.src = src;
    img.loading = "lazy";
    img.alt = `${item.title} (imagen)`;
    wrapper.appendChild(img);
  }

  return wrapper;
};

signals.forEach((item) => {
  const card = document.createElement("article");
  card.className = "card";

  const title = document.createElement("h2");
  title.textContent = item.title;

  const description = document.createElement("p");
  description.textContent = item.description;

  card.appendChild(createMediaElement(item));
  card.appendChild(title);
  card.appendChild(description);

  grid.appendChild(card);
});
