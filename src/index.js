
  const btnAdultos = document.getElementById("btnAdultos");
  const btnInfantil = document.getElementById("btnInfantil");

  const tablaAdultos = document.getElementById("tablaAdultos");
  const tablaInfantil = document.getElementById("tablaInfantil");

  const tituloHorarios = document.getElementById("tituloHorarios");

  function mostrarAdultos() {
    tablaAdultos.classList.remove("is-hidden");
    tablaInfantil.classList.add("is-hidden");

    btnAdultos.classList.add("is-active");
    btnInfantil.classList.remove("is-active");

    tituloHorarios.textContent = "Horarios Adultos";
  }

  function mostrarInfantil() {
    tablaInfantil.classList.remove("is-hidden");
    tablaAdultos.classList.add("is-hidden");

    btnInfantil.classList.add("is-active");
    btnAdultos.classList.remove("is-active");

    tituloHorarios.textContent = "Horarios Infantil";
  }

  btnAdultos.addEventListener("click", mostrarAdultos);
  btnInfantil.addEventListener("click", mostrarInfantil);