 console.log("btnRastrear:", document.getElementById("btnRastrear"));
console.log("numeroGuia:", document.getElementById("numeroGuia"));
console.log("resultadoRastreo:", document.getElementById("resultadoRastreo"));
const btnRastrear = document.getElementById("btnRastrear");
const numeroGuia = document.getElementById("numeroGuia");
const resultadoRastreo = document.getElementById("resultadoRastreo");

btnRastrear.addEventListener("click", function () {
    alert("BOTÓN FUNCIONA");
    const guia = numeroGuia.value.trim();

    if (guia === "") {
        resultadoRastreo.innerHTML = `
            <div class="alerta-guia">
                Ingresa un número de guía para continuar.
            </div>
        `;
        return;
    }

        resultadoRastreo.innerHTML = `
        <div class="guia-no-encontrada">

            <div class="icono-error">!</div>

            <h3>No encontramos esta guía</h3>

            <p>
                No registramos información para la guía
                <strong>${guia}</strong>.
                Verifica el número ingresado en tu comprobante
                e inténtalo nuevamente.
            </p>

            <button type="button" class="btn-intentar" id="btnIntentar">
                Intentar nuevamente
            </button>

            <a href="#contacto" class="btn-asesor">
                Contactar a un asesor
            </a>

        </div>
    `;

    const btnIntentar = document.getElementById("btnIntentar");

    btnIntentar.addEventListener("click", function () {
        numeroGuia.value = "";
        resultadoRastreo.innerHTML = "";
        numeroGuia.focus();
    });

});
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
/* AJUSTES PROFESIONALES PARA CELULAR */
@media (max-width:600px){

    .contenedor{
        width:90%;
    }

    .barra-superior{
        padding:10px 12px 12px;
    }

    .barra-superior span{
        font-size:10px;
        padding:4px 10px;
    }

    .barra-superior p{
        font-size:11px;
    }

    .navbar{
        min-height:72px;
    }

    .logo{
        gap:10px;
    }

    .logo-icono{
        width:44px;
        height:44px;
        border-radius:11px;
    }

    .logo-icono span{
        font-size:16px;
    }

    .logo-icono small{
        font-size:9px;
    }

    .logo-texto strong{
        font-size:21px;
    }

    .logo-texto span{
        font-size:8px;
        max-width:155px;
        line-height:1.1;
    }

    .menu-toggle{
        width:46px;
        height:46px;
        border-radius:11px;
        font-size:24px;
    }

    .menu.activo{
        top:72px;
    }

    .hero-contenido{
        width:92%;
        padding:42px 0 50px;
    }

    .hero-etiqueta{
        font-size:11px;
        padding:8px 12px;
    }

    .hero h1{
        margin-top:22px;
        font-size:34px;
        line-height:1.08;
        letter-spacing:-1.2px;
    }

    .hero-descripcion{
        margin-top:16px;
        font-size:15px;
        line-height:1.5;
    }

    .rastreo-card{
        margin-top:25px;
        padding:12px;
        border-radius:18px;
    }

    .rastreo-input{
        border-radius:13px;
        padding:0 14px;
    }

    .rastreo-icono{
        font-size:20px;
    }

    .rastreo-input input{
        padding:14px 0;
        font-size:15px;
    }

    .btn-rastrear{
        margin-top:10px;
        padding:14px;
        font-size:16px;
        border-radius:13px;
    }

    .rastreo-ayuda{
        margin-top:12px;
        font-size:12px;
    }

    .seccion{
        padding:52px 0;
    }

    .titulo-centro{
        margin-bottom:30px;
    }

    .titulo-centro h2{
        margin-top:14px;
        font-size:34px;
        line-height:1.08;
    }

    .titulo-centro p{
        margin-top:12px;
        font-size:15px;
    }

    .etiqueta-seccion{
        font-size:10px;
        padding:7px 13px;
    }

    .nosotros-card{
        padding:22px;
        border-radius:18px;
    }

    .nosotros-card h3{
        font-size:24px;
    }

    .nosotros-card p{
        font-size:14px;
    }

    .nosotros-valores article{
        padding:16px;
        border-radius:15px;
    }

    .estadisticas-identidad strong{
        font-size:30px;
    }

    .estadisticas-identidad div{
        padding:22px 15px;
    }

    .departamento{
        padding:9px 13px;
        font-size:13px;
        border-radius:12px;
    }

    .departamento-card,
    .planificador-card,
    .contacto-card{
        padding:20px;
        border-radius:20px;
    }

    .departamento-card h3{
        font-size:25px;
    }

    .descripcion-departamento{
        font-size:14px;
    }

    .hub-badge{
        font-size:12px;
        padding:8px 12px;
    }

    .municipio{
        font-size:13px;
        padding:9px 11px;
        border-radius:12px;
    }

    .datos-cobertura{
        margin-top:25px;
    }

    .datos-cobertura div{
        padding:17px;
        border-radius:15px;
    }

    .datos-cobertura strong{
        font-size:16px;
    }

    .campo{
        margin-bottom:17px;
    }

    .campo input,
    .campo select,
    .campo textarea{
        padding:14px;
        border-radius:13px;
        font-size:14px;
    }

    .resultado-planificador{
        padding:18px;
        border-radius:17px;
    }

    .resultado-planificador h3{
        font-size:23px;
    }

    .resultado-planificador p{
        font-size:14px;
    }

    .resultado-planificador strong{
        font-size:17px;
    }

    .btn-azul,
    .btn-enviar{
        padding:14px;
        font-size:15px;
        border-radius:13px;
    }

    .servicios-grid article{
        padding:20px;
    }

    .confianza{
        padding:55px 0;
    }

    .confianza-texto h2{
        font-size:34px;
    }

    .confianza-texto p,
    .confianza-texto li{
        font-size:15px;
    }

    .red-despacho{
        padding:20px;
        border-radius:20px;
    }

    .faq-pregunta{
        padding:15px 16px;
        font-size:14px;
    }

    .faq-respuesta{
        padding:0 16px 16px;
        font-size:14px;
    }

    .contacto-datos strong{
        font-size:16px;
    }

    .contacto-datos p{
        font-size:14px;
    }

    .cta-final{
        padding:50px 0;
    }

    .cta-final .contenedor{
        padding:38px 20px;
        border-radius:22px;
    }

    .cta-final h2{
        font-size:31px;
    }

    .cta-final p{
        font-size:15px;
    }

    .footer-grid{
        padding:45px 0;
        gap:30px;
    }

    .guia-no-encontrada{
        margin-top:20px;
        padding:30px 20px;
        border-radius:20px;
    }

    .icono-error{
        width:62px;
        height:62px;
        font-size:32px;
        margin-bottom:20px;
    }

    .guia-no-encontrada h3{
        font-size:25px;
        line-height:1.15;
    }

    .guia-no-encontrada p{
        font-size:15px;
        line-height:1.5;
    }

    .btn-intentar,
    .btn-asesor{
        width:100%;
        max-width:280px;
        padding:13px 18px;
        font-size:14px;
    }
}

@media (max-width:380px){

    .hero h1{
        font-size:30px;
    }

    .logo-texto strong{
        font-size:19px;
    }

    .logo-texto span{
        font-size:7px;
        max-width:135px;
    }

    .titulo-centro h2{
        font-size:30px;
    }
}
