 const btnRastrear = document.getElementById("btnRastrear");
const numeroGuia = document.getElementById("numeroGuia");
const resultadoRastreo = document.getElementById("resultadoRastreo");

btnRastrear.addEventListener("click", function () {

    const guia = numeroGuia.value.trim();

    if (guia === "") {

        resultadoRastreo.innerHTML = `
            <div style="
                margin-top:15px;
                padding:14px;
                border-radius:14px;
                background:#fff3e3;
                color:#9b5a11;
                font-weight:700;
            ">
                Ingresa un número de guía para continuar.
            </div>
        `;

        return;
    }

    resultadoRastreo.innerHTML = `
        <div style="
            margin-top:15px;
            padding:18px;
            border-radius:16px;
            background:#eaf6f8;
            color:#123f5f;
            text-align:left;
            border:1px solid #cce4e9;
        ">

            <strong>
                Guía: ${guia}
            </strong>

            <p style="margin-top:8px;">
                Estado actual:
                <strong>En tránsito</strong>
            </p>

            <p style="margin-top:6px;">
                Tu envío se encuentra en proceso dentro de nuestra red logística del Caribe.
            </p>

        </div>
    `;

});
("menuToggle");
 const menuToggle = document.getElementById("menuToggle");
const menu = document.getElementById("menu");

menuToggle.addEventListener("click", function () {

    menu.classList.toggle("activo");

    if (menu.classList.contains("activo")) {
        menuToggle.textContent = "✕";
    } else {
        menuToggle.textContent = "☰";
    }

});

document.querySelectorAll("#menu a").forEach(function (enlace) {

    enlace.addEventListener("click", function () {

        menu.classList.remove("activo");
        menuToggle.textContent = "☰";

    });

});
const botonesDepartamento = document.querySelectorAll(".departamento");
const coberturaInfo = document.getElementById("coberturaInfo");

const datosCobertura = {
    atlantico: {
        titulo: "Departamento de Atlántico",
        descripcion: "Desde nuestra sede en Calle 77 # 38A - 20 coordinamos el centro de clasificación metropolitano con entregas en el mismo día para toda el área metropolitana de Barranquilla.",
        hub: "Hub Central Logístico Caribe",
        municipios: [
            "Barranquilla (Capital)",
            "Soledad",
            "Malambo",
            "Sabanalarga",
            "Baranoa",
            "Puerto Colombia",
            "Galapa"
        ],
        tiempo: "Mismo Día / 12 Horas",
        frecuencia: "Despachos continuos cada 2 horas",
        sede: "Barranquilla (Sede Central SERLOG)"
    },

    bolivar: {
        titulo: "Departamento de Bolívar",
        descripcion: "Operamos rutas directas hacia Cartagena y municipios estratégicos de Bolívar con conexión permanente a la red logística del Caribe.",
        hub: "Hub Logístico Bolívar",
        municipios: [
            "Cartagena (Capital)",
            "Turbaco",
            "Arjona",
            "Magangué",
            "El Carmen de Bolívar",
            "Santa Rosa"
        ],
        tiempo: "24 Horas",
        frecuencia: "3 despachos diarios",
        sede: "Cartagena (Enlace Regional SERLOG)"
    },

    magdalena: {
        titulo: "Departamento de Magdalena",
        descripcion: "Nuestra red conecta Santa Marta y los principales municipios del Magdalena con despachos programados durante la semana.",
        hub: "Hub Logístico Magdalena",
        municipios: [
            "Santa Marta (Capital)",
            "Ciénaga",
            "Fundación",
            "Aracataca",
            "Zona Bananera"
        ],
        tiempo: "12 - 24 Horas",
        frecuencia: "Despachos diarios",
        sede: "Santa Marta"
    },

    cesar: {
        titulo: "Departamento del Cesar",
        descripcion: "Atendemos rutas hacia Valledupar y municipios estratégicos del Cesar mediante conexiones directas desde nuestros hubs regionales.",
        hub: "Hub Logístico Cesar",
        municipios: [
            "Valledupar (Capital)",
            "Aguachica",
            "Bosconia",
            "Curumaní",
            "La Paz"
        ],
        tiempo: "24 - 36 Horas",
        frecuencia: "2 despachos diarios",
        sede: "Valledupar"
    },

    cordoba: {
        titulo: "Departamento de Córdoba",
        descripcion: "Brindamos cobertura logística en Montería y corredores estratégicos del departamento de Córdoba.",
        hub: "Hub Logístico Córdoba",
        municipios: [
            "Montería (Capital)",
            "Cereté",
            "Sahagún",
            "Lorica",
            "Planeta Rica"
        ],
        tiempo: "24 - 36 Horas",
        frecuencia: "Despachos diarios",
        sede: "Montería"
    },

    sucre: {
        titulo: "Departamento de Sucre",
        descripcion: "Nuestra operación regional conecta Sincelejo con los municipios de mayor actividad comercial del departamento.",
        hub: "Hub Logístico Sucre",
        municipios: [
            "Sincelejo (Capital)",
            "Corozal",
            "Sampués",
            "Tolú",
            "San Marcos"
        ],
        tiempo: "24 - 36 Horas",
        frecuencia: "Despachos diarios",
        sede: "Sincelejo"
    },

    guajira: {
        titulo: "Departamento de La Guajira",
        descripcion: "Nuestra red cubre Riohacha y los principales corredores logísticos de La Guajira con conexiones programadas.",
        hub: "Hub Logístico La Guajira",
        municipios: [
            "Riohacha (Capital)",
            "Maicao",
            "Uribia",
            "Manaure",
            "Fonseca"
        ],
        tiempo: "24 - 48 Horas",
        frecuencia: "Despachos programados",
        sede: "Riohacha"
    }
};

botonesDepartamento.forEach((boton) => {
    boton.addEventListener("click", function () {

        botonesDepartamento.forEach((btn) => {
            btn.classList.remove("activo");
        });

        this.classList.add("activo");

        const departamento = this.dataset.departamento;
        const datos = datosCobertura[departamento];

        coberturaInfo.innerHTML = `
            <h3>${datos.titulo}</h3>

            <p class="descripcion-departamento">
                ${datos.descripcion}
            </p>

            <span class="hub-badge">
                <span>●</span>
                ${datos.hub}
            </span>

            <hr>

            <h4>
                MUNICIPIOS Y PUNTOS CON COBERTURA DIRECTA:
            </h4>

            <div class="municipios-grid">
                ${datos.municipios.map((municipio, index) => `
                    <span class="municipio ${index === 0 ? "destacado" : ""}">
                        ⊙ ${municipio}
                    </span>
                `).join("")}
            </div>

            <div class="datos-cobertura">

                <div>
                    <span>TIEMPO ESTIMADO</span>
                    <strong>${datos.tiempo}</strong>
                </div>

                <div>
                    <span>FRECUENCIA DE DESPACHO</span>
                    <strong>${datos.frecuencia}</strong>
                </div>

                <div>
                    <span>SEDE / ENLACE</span>
                    <strong>${datos.sede}</strong>
                </div>

            </div>
        `;
    });
});
const origen = document.getElementById("origen");
const destino = document.getElementById("destino");
const tipoEnvio = document.getElementById("tipoEnvio");
const btnCalcularRuta = document.getElementById("btnCalcularRuta");
const resultadoRuta = document.getElementById("resultadoRuta");

const rutasCaribe = {
    "Barranquilla-Cartagena": {
        ruta: "Ruta Directa Vía al Mar / Troncal del Caribe",
        frecuencia: "3 Frecuencias Diarias (Vía al Mar)",
        tiempo: "Entrega Estimada: 24 Horas Hábiles"
    },

    "Barranquilla-Santa Marta": {
        ruta: "Ruta Directa por Troncal del Caribe",
        frecuencia: "4 Frecuencias Diarias",
        tiempo: "Entrega Estimada: 12 - 24 Horas Hábiles"
    },

    "Barranquilla-Valledupar": {
        ruta: "Corredor Barranquilla - Bosconia - Valledupar",
        frecuencia: "2 Frecuencias Diarias",
        tiempo: "Entrega Estimada: 24 Horas Hábiles"
    },

    "Barranquilla-Monteria": {
        ruta: "Ruta Barranquilla - Sincelejo - Montería",
        frecuencia: "2 Frecuencias Diarias",
        tiempo: "Entrega Estimada: 24 - 36 Horas Hábiles"
    },

    "Barranquilla-Sincelejo": {
        ruta: "Ruta Directa por corredor Caribe",
        frecuencia: "2 Frecuencias Diarias",
        tiempo: "Entrega Estimada: 24 Horas Hábiles"
    },

    "Barranquilla-Riohacha": {
        ruta: "Ruta Barranquilla - Santa Marta - Riohacha",
        frecuencia: "2 Frecuencias Diarias",
        tiempo: "Entrega Estimada: 24 - 36 Horas Hábiles"
    }
};

btnCalcularRuta.addEventListener("click", function () {

    const ciudadOrigen = origen.value;
    const ciudadDestino = destino.value;
    const envio = tipoEnvio.value;

    if (ciudadOrigen === ciudadDestino) {

        resultadoRuta.innerHTML = `
            <h3>${ciudadOrigen} → ${ciudadDestino}</h3>

            <p>
                ✓ Trayecto urbano / metropolitano
            </p>

            <strong>
                Despachos continuos durante el día
            </strong>

            <span>
                Entrega Estimada: Mismo Día
            </span>
        `;

        return;
    }

    const clave = `${ciudadOrigen}-${ciudadDestino}`;

    const datos = rutasCaribe[clave];

    if (datos) {

        resultadoRuta.innerHTML = `
            <h3>
                ${ciudadOrigen} → ${ciudadDestino}
            </h3>

            <p>
                ✓ ${datos.ruta}
            </p>

            <strong>
                ${datos.frecuencia}
            </strong>

            <span>
                ${datos.tiempo}
            </span>
        `;

    } else {

        let tiempoGeneral = "Entrega Estimada: 24 - 48 Horas Hábiles";

        if (envio === "documentos") {
            tiempoGeneral = "Entrega Estimada: 24 - 36 Horas Hábiles";
        }

        if (envio === "empresarial") {
            tiempoGeneral = "Entrega Estimada según programación empresarial";
        }

        resultadoRuta.innerHTML = `
            <h3>
                ${ciudadOrigen} → ${ciudadDestino}
            </h3>

            <p>
                ✓ Conexión mediante la Red Logística SERLOG Caribe
            </p>

            <strong>
                Despachos programados según corredor regional
            </strong>

            <span>
                ${tiempoGeneral}
            </span>
        `;
    }

});
 const btnCotizacion = document.querySelector(".btn-cotizacion");

const ciudadContacto = document.getElementById("ciudad");
const requerimientoContacto = document.getElementById("requerimiento");
const mensajeContacto = document.getElementById("mensaje");

btnCotizacion.addEventListener("click", function (e) {

    e.preventDefault();

    const ciudadOrigen = origen.value;
    const ciudadDestino = destino.value;
    const tipo = tipoEnvio.options[tipoEnvio.selectedIndex].text;

    ciudadContacto.value = ciudadDestino;

    requerimientoContacto.value = "Cotización";

    mensajeContacto.value =
        `Solicito cotización y recolección para el trayecto ${ciudadOrigen} → ${ciudadDestino}. Tipo de envío: ${tipo}.`;

    document.getElementById("contacto").scrollIntoView({
        behavior: "smooth"
    });

});
const preguntasFAQ = document.querySelectorAll(".faq-pregunta");

preguntasFAQ.forEach(function (pregunta) {

    pregunta.addEventListener("click", function () {

        const item = this.parentElement;

        item.classList.toggle("abierto");

        const simbolo = this.querySelector("span");

        if (item.classList.contains("abierto")) {
            simbolo.textContent = "−";
        } else {
            simbolo.textContent = "+";
        }

    });

});
 const formContacto = document.getElementById("formContacto");

formContacto.addEventListener("submit", function (e) {

    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const ciudad = document.getElementById("ciudad").value;
    const requerimiento = document.getElementById("requerimiento").value;
    const mensaje = document.getElementById("mensaje").value.trim();

    if (nombre === "" || mensaje === "") {
        alert("Por favor completa los campos obligatorios.");
        return;
    }

    const numeroWhatsApp = "573008037905";

    const textoWhatsApp =
`Hola, quiero solicitar un servicio.

Nombre / Empresa: ${nombre}
Ciudad: ${ciudad}
Requerimiento: ${requerimiento}

Detalle:
${mensaje}`;

    const enlaceWhatsApp =
        "https://wa.me/" +
        numeroWhatsApp +
        "?text=" +
        encodeURIComponent(textoWhatsApp);

    window.open(enlaceWhatsApp, "_blank");

});
const btnRastreoFinal = document.querySelector(".cta-final a[href='#rastreo']");

btnRastreoFinal.addEventListener("click", function () {

    setTimeout(function () {
        numeroGuia.focus();
    }, 500);

});
numeroGuia.addEventListener("keydown", function (e) {

    if (e.key === "Enter") {
        btnRastrear.click();
    }

});
// HACER SELECCIONABLES LOS MUNICIPIOS DE COBERTURA

coberturaInfo.addEventListener("click", function (e) {

    const municipio = e.target.closest(".municipio");

    if (!municipio) {
        return;
    }

    const municipios = coberturaInfo.querySelectorAll(".municipio");

    municipios.forEach(function (item) {
        item.classList.remove("destacado");
    });

    municipio.classList.add("destacado");

});
