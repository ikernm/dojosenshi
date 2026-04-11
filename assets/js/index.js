// MENÚ HAMBURGUESA
const hamburger = document.querySelector('.hamburger');
const navLinks  = document.querySelector('.nav-links');
const navOverlay = document.querySelector('.nav-overlay');

if (hamburger && navLinks) {

  function toggleMenu() {
    const isOpen = navLinks.classList.toggle('is-open');
    hamburger.classList.toggle('is-active');
    if (navOverlay) navOverlay.classList.toggle('is-visible');
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }

  function closeMenu() {
    navLinks.classList.remove('is-open');
    hamburger.classList.remove('is-active');
    if (navOverlay) navOverlay.classList.remove('is-visible');
    document.body.style.overflow = '';
  }

  hamburger.addEventListener('click', toggleMenu);
  if (navOverlay) navOverlay.addEventListener('click', closeMenu);

  // Cerrar menú al hacer click en un enlace
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Cerrar con Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });
}


// PRECIOS Y HORARIOS
const btnAdultos = document.getElementById("btnAdultos");
const btnInfantil = document.getElementById("btnInfantil");

if (btnAdultos && btnInfantil) {

    const tablaAdultos = document.getElementById("tablaAdultos");
    const tablaInfantil = document.getElementById("tablaInfantil");
    const tarifasAdultos = document.getElementById("tarifasAdultos");
    const tarifasInfantil = document.getElementById("tarifasInfantil");
    const tituloTarifas = document.getElementById("tituloTarifas");
    const tituloHorarios = document.getElementById("tituloHorarios");

    function mostrarAdultos() {
        tablaAdultos.classList.remove("is-hidden");
        tarifasAdultos.classList.remove("is-hidden");
        tablaInfantil.classList.add("is-hidden");
        tarifasInfantil.classList.add("is-hidden");
        btnAdultos.classList.add("is-active");
        btnInfantil.classList.remove("is-active");
        tituloHorarios.textContent = "Horarios Adultos";
        tituloTarifas.textContent = "Tarifas Adultos";
    }

    function mostrarInfantil() {
        tablaInfantil.classList.remove("is-hidden");
        tarifasInfantil.classList.remove("is-hidden");
        tablaAdultos.classList.add("is-hidden");
        tarifasAdultos.classList.add("is-hidden");
        btnInfantil.classList.add("is-active");
        btnAdultos.classList.remove("is-active");
        tituloHorarios.textContent = "Horarios Infantil";
        tituloTarifas.textContent = "Tarifas Infantil";
    }

    btnAdultos.addEventListener("click", mostrarAdultos);
    btnInfantil.addEventListener("click", mostrarInfantil);
}

 // FAQ ACORDEÓN
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const pregunta = item.querySelector('.faq-pregunta');
    const respuesta = item.querySelector('.faq-respuesta');

    pregunta.addEventListener('click', () => {
        const estaAbierto = item.classList.contains('is-open');

        // Cierra todos los items abiertos
        faqItems.forEach(i => {
            i.classList.remove('is-open');
            i.querySelector('.faq-respuesta').style.maxHeight = null;
        });

        // Si no estaba abierto, ábrelo
        if (!estaAbierto) {
            item.classList.add('is-open');
            respuesta.style.maxHeight = respuesta.scrollHeight + 'px';
        }
    });
});


  