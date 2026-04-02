// ═══════════════════════════════════════
// INIT - Orisono System
// ═══════════════════════════════════════
document.addEventListener("DOMContentLoaded", () => {
  console.log("Sistema Orisono inicializado (JS Mode) 🚀");

  // ═══════════════════════════════════════
  // MODO OSCURO / CLARO (persistente)
  // ═══════════════════════════════════════
  const botonTema = document.createElement("button");
  botonTema.textContent = "🌙 / ☀️";
  botonTema.style.margin = "1rem 0";
  botonTema.setAttribute("aria-label", "Cambiar tema");

  const contenedor = document.querySelector(".contenedor");

  if (contenedor) {
    contenedor.prepend(botonTema);
  }

  // Aplicar tema guardado al cargar
  const temaGuardado = localStorage.getItem("tema");
  if (temaGuardado === "light") {
    document.body.classList.add("light-mode");
  }

  // Evento click
  botonTema.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
    const esClaro = document.body.classList.contains("light-mode");
    localStorage.setItem("tema", esClaro ? "light" : "dark");
  });

  // ═══════════════════════════════════════
  // SALUDO DINÁMICO
  // ═══════════════════════════════════════
  const hora = new Date().getHours();
  let saludo;

  if (hora < 12) saludo = "Buenos días";
  else if (hora < 18) saludo = "Buenas tardes";
  else saludo = "Buenas noches";

  const titulo = document.querySelector("h1");

  if (titulo) {
    // Identidad actualizada: Orisono728
    titulo.textContent = `${saludo}, soy Orisono728 ⌬ħ`;
  }

  // ═══════════════════════════════════════
  // CONFIRMACIÓN DE FORMULARIO
  // ═══════════════════════════════════════
  const form = document.querySelector("form");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Sistemas en línea: Formulario procesado correctamente.");
      form.reset();
    });
  }

  // ═══════════════════════════════════════
  // EFECTO HOVER EN PROYECTOS
  // ═══════════════════════════════════════
  const filas = document.querySelectorAll("tbody tr");

  filas.forEach((fila) => {
    fila.addEventListener("mouseenter", () => {
      fila.style.transform = "scale(1.015)";
      fila.style.transition = "transform 0.2s ease-in-out";
      fila.style.cursor = "pointer";
    });

    fila.addEventListener("mouseleave", () => {
      fila.style.transform = "scale(1)";
    });
  });
});
