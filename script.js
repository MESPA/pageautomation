// LOGIN
document.addEventListener("DOMContentLoaded", () => {
//   const loginForm = document.getElementById("loginForm");
//   if (loginForm) {
//     loginForm.addEventListener("submit", e => {
//       e.preventDefault();
//       alert("Inicio de sesión exitoso (login estático)");
//       loginForm.reset();
//     });
//   }

  // FORMULARIO PRINCIPAL
  const formPrueba = document.getElementById("formPrueba");
  if (formPrueba) {
    formPrueba.addEventListener("submit", e => {
      e.preventDefault();
      alert("Formulario enviado satisfactoriamente");
      formPrueba.reset();
    });
  }

  // BOTÓN CAMBIAR TEXTO
  const btnCambiar = document.getElementById("btnCambiarTexto");
  if (btnCambiar) {
    btnCambiar.addEventListener("click", () => {
      btnCambiar.textContent = "¡Texto cambiado!";
      alert("El texto del botón ha cambiado");
    });
  }

  // VALIDACIÓN EMAIL
  const btnValidar = document.getElementById("btnValidarEmail");
  if (btnValidar) {
    btnValidar.addEventListener("click", () => {
      const email = document.getElementById("campoEmail").value;
      const msg = document.getElementById("mensajeEmail");
      if (!email.includes("@")) {
        msg.textContent = "❌ Correo inválido";
      } else {
        msg.textContent = "✅ Correo válido";
        alert("Correo validado correctamente");
      }
    });
  }

  // MOSTRAR ELEMENTO OCULTO
  const btnMostrar = document.getElementById("btnMostrar");
  if (btnMostrar) {
    btnMostrar.addEventListener("click", () => {
      document.getElementById("mensajeOculto").style.display = "block";
      alert("Elemento mostrado correctamente");
    });
  }

  // MODAL
  const modal = document.getElementById("miModal");
  const btnAbrir = document.getElementById("abrirModal");
  const spanCerrar = document.querySelector(".cerrar");

  if (btnAbrir) {
    btnAbrir.onclick = () => (modal.style.display = "block");
  }
  if (spanCerrar) {
    spanCerrar.onclick = () => (modal.style.display = "none");
  }
  window.onclick = event => {
    if (event.target === modal) modal.style.display = "none";
  };

  // TABLA DINÁMICA
  const botonesEditar = document.querySelectorAll(".editar");
  botonesEditar.forEach(b => {
    b.addEventListener("click", () => {
      alert("Modo edición activado para este usuario");
    });
  });

  // REDIRECCIÓN DE FORMULARIO
  document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Login exitoso');
    window.location.href = 'formularios.html';
  });
});


document.addEventListener("DOMContentLoaded", () => {
//   // --- BOTÓN CAMBIANTE ---
//   const btnCambiar = document.getElementById("btnCambiarTexto");
//   if (btnCambiar) {
//     btnCambiar.addEventListener("click", () => {
//       btnCambiar.textContent = "¡Texto cambiado!";
//       alert("El texto del botón ha cambiado correctamente.");
//     });
//   }

//   // --- VALIDACIÓN EMAIL ---
//   const btnValidar = document.getElementById("btnValidarEmail");
//   if (btnValidar) {
//     btnValidar.addEventListener("click", () => {
//       const email = document.getElementById("campoEmail").value;
//       const msg = document.getElementById("mensajeEmail");
//       if (!email.includes("@") || !email.includes(".")) {
//         msg.textContent = "❌ Correo inválido";
//         msg.style.color = "red";
//       } else {
//         msg.textContent = "✅ Correo válido";
//         msg.style.color = "green";
//         alert("Correo validado correctamente.");
//       }
//     });
//   }

//   // --- ELEMENTO OCULTO ---
//   const btnMostrar = document.getElementById("btnMostrar");
//   if (btnMostrar) {
//     btnMostrar.addEventListener("click", () => {
//       const msg = document.getElementById("mensajeOculto");
//       msg.style.display = msg.style.display === "none" ? "block" : "none";
//       alert("Visibilidad cambiada del elemento oculto.");
//     });
//   }

  // --- TABLA DINÁMICA: EDICIÓN ---
  const tabla = document.getElementById("tablaUsuarios");
  if (tabla) {
    tabla.addEventListener("click", e => {
      if (e.target.classList.contains("editar")) {
        const fila = e.target.closest("tr");
        const nombre = fila.children[0].textContent;
        const correo = fila.children[1].textContent;

        // Crear formulario de edición
        const form = document.createElement("form");
        form.innerHTML = `
          <label>Editar correo para ${nombre}:</label>
          <input type="email" value="${correo}" required>
          <button type="submit">Guardar</button>
          <button type="button" class="cancelar">Cancelar</button>
        `;
        fila.after(form);

        // Evento submit
        form.addEventListener("submit", ev => {
          ev.preventDefault();
          const nuevoCorreo = form.querySelector("input").value;
          fila.children[1].textContent = nuevoCorreo;
          form.remove();
          alert(`Correo de ${nombre} actualizado correctamente.`);
        });

        // Evento cancelar
        form.querySelector(".cancelar").addEventListener("click", () => {
          form.remove();
          alert("Edición cancelada.");
        });
      }
    });
  }

  // --- MODAL ---
  const modal = document.getElementById("miModal");
  const btnAbrir = document.getElementById("abrirModal");
  const spanCerrar = document.querySelector(".cerrar");

  if (btnAbrir) btnAbrir.onclick = () => (modal.style.display = "block");
  if (spanCerrar) spanCerrar.onclick = () => (modal.style.display = "none");
  window.onclick = e => { if (e.target === modal) modal.style.display = "none"; };

  // --- FORMULARIO DENTRO DEL MODAL ---
  const formModal = document.getElementById("formModal");
  if (formModal) {
    formModal.addEventListener("submit", e => {
      e.preventDefault();
      const nombre = document.getElementById("modalNombre").value.trim();
      const correo = document.getElementById("modalCorreo").value.trim();

      if (!nombre || !correo.includes("@")) {
        alert("Por favor, ingrese datos válidos.");
        return;
      }

      alert(`Datos enviados desde el modal:\nNombre: ${nombre}\nCorreo: ${correo}`);
      formModal.reset();
      modal.style.display = "none";
    });
  }
});
