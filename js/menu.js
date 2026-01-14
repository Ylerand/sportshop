document.addEventListener('DOMContentLoaded', () => {
    
    // ================= VARIABLES GLOBALES =================
    let contadorCarrito = 0;
    const textoCarrito = document.querySelector('.iconos-usuario .item-icono:last-child span');
    const botonesAgregar = document.querySelectorAll('.btn-agregar');
    const botonComprarOferta = document.querySelector('.btn-comprar');
    const formBusqueda = document.querySelector('.buscar-form');

    // ================= FUNCIÓN: AGREGAR AL CARRITO =================
    botonesAgregar.forEach(boton => {
        boton.addEventListener('click', (evento) => {
            // 1. Identificar el producto
            const tarjetaProducto = evento.target.closest('.producto');
            const nombreProducto = tarjetaProducto.querySelector('h3').innerText;
            const precioProducto = tarjetaProducto.querySelector('.precio').innerText;

            // 2. Aumentar contador
            contadorCarrito++;
            
            // 3. Actualizar texto del carrito en el header
            textoCarrito.innerText = `Carrito (${contadorCarrito})`;

            // 4. Feedback al usuario (Alerta visual)
            alert(`✅ ¡${nombreProducto} se agregó al carrito!\nPrecio: ${precioProducto}`);
            
            // Opcional: Cambiar texto del botón temporalmente
            const textoOriginal = evento.target.innerText;
            evento.target.innerText = "¡Agregado!";
            evento.target.style.backgroundColor = "#28a745"; // Verde
            
            setTimeout(() => {
                evento.target.innerText = textoOriginal;
                evento.target.style.backgroundColor = ""; // Volver al original
            }, 2000);
        });
    });

    // ================= FUNCIÓN: BOTÓN OFERTA ESPECIAL =================
    if(botonComprarOferta) {
        botonComprarOferta.addEventListener('click', () => {
            contadorCarrito++;
            textoCarrito.innerText = `Carrito (${contadorCarrito})`;
            alert("🚀 ¡Has aprovechado la Oferta Relámpago!");
        });
    }

    // ================= FUNCIÓN: BUSCADOR =================
    if(formBusqueda) {
        formBusqueda.addEventListener('submit', (e) => {
            e.preventDefault(); // Evita que la página se recargue
            const input = formBusqueda.querySelector('input');
            const busqueda = input.value.trim();

            if (busqueda !== "") {
                alert(`🔍 Buscando productos relacionados con: "${busqueda}"...`);
                input.value = ""; // Limpiar campo
            } else {
                alert("⚠️ Por favor escribe algo para buscar.");
            }
        });
    }

    // ================= EXTRAS: MENÚ MÓVIL (Opcional) =================
    // Si quisieras agregar funcionalidad al menú en móviles, iría aquí.
    console.log("Tienda Sport Shop cargada correctamente 🏋️‍♂️");
});