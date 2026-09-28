<div align="center">

<img src="assets/img/brand/logo.webp" alt="IntercomSite" width="88" />

# IntercomSite

**Diseño y desarrollo de páginas web a medida · Buenos Aires, Argentina**

[intercomsite.com.ar](https://www.intercomsite.com.ar)

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![GSAP](https://img.shields.io/badge/GSAP-88CE02?style=flat-square&logo=greensock&logoColor=black)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white)

<img src="assets/img/og-image.jpg" alt="IntercomSite — Páginas web que te consiguen clientes" width="100%" />

</div>

---

## Sobre el proyecto

IntercomSite es el sitio comercial de un estudio de desarrollo web que diseña y programa
**landing pages, sitios institucionales, tiendas online y sistemas a medida** para negocios
de Argentina.

La web está pensada como una herramienta de ventas: cada sección busca que el visitante
entienda qué recibe, cuánto cuesta y cómo empezar, y lo lleva a una conversación por
WhatsApp en un solo clic.

Está construida **sin frameworks ni plantillas**, con HTML, CSS y JavaScript escritos a mano,
el mismo enfoque que ofrece a sus clientes.

## Características

### Orientada a la conversión
- **Precios públicos y transparentes**: cuatro planes con alcance, plazos y soporte detallados, más una tabla comparativa.
- **Contacto sin fricción**: cada botón abre WhatsApp con un mensaje ya escrito según el plan elegido.
- **Formulario conectado a WhatsApp**: arma la consulta con los datos del cliente y la deja lista para enviar.
- **Señales de confianza**: portfolio con proyectos reales en producción, proceso de trabajo en 4 pasos y respuestas a las dudas frecuentes antes de contratar.
- **Planes de mantenimiento mensual** como servicio recurrente.
- **Precios en ARS y USD** con un selector animado para clientes locales y del exterior.

### Experiencia de usuario
- Navbar que ocupa todo el ancho arriba de la página y se transforma en una barra flotante al scrollear.
- Animaciones de entrada y de scroll con GSAP y ScrollTrigger.
- Estética *glassmorphism* sobre una paleta azul noche, con tipografía Plus Jakarta Sans.
- Diseño 100% responsive, del celular a pantallas grandes.
- Página 404 propia con la identidad del sitio.

### SEO técnico
- HTML semántico con una jerarquía de títulos limpia: un único `H1` y secciones con `H2`/`H3`.
- **Datos estructurados Schema.org (JSON-LD)**: `ProfessionalService` con catálogo de servicios y precios, `WebSite`, `WebPage` y `FAQPage`.
- Open Graph y Twitter Cards con imagen propia de 1200×630.
- URL canónica, `hreflang` para `es-AR`, `sitemap.xml` con imágenes y `robots.txt`.
- Contenido y títulos escritos alrededor de las búsquedas reales de los clientes.

### Rendimiento
- Imágenes en **WebP** con dimensiones declaradas, para que la página no salte mientras carga.
- Carga diferida de imágenes y scripts, sin bloquear el renderizado.
- Todo el sitio publicado pesa **menos de 500 KB**.
- Sin dependencias de build: se sirve como sitio estático desde el CDN de Vercel.

### Accesibilidad y seguridad
- Enlace para saltar al contenido, foco visible y navegación completa con teclado.
- Acordeón de preguntas frecuentes y selector de moneda con atributos ARIA.
- Soporte para la preferencia de *movimiento reducido* del sistema.
- Encabezados de seguridad HTTP (HSTS, `X-Frame-Options`, `nosniff`, `Referrer-Policy` y `Permissions-Policy`).

## Stack

| Área | Tecnología |
|---|---|
| Maquetado | HTML5 semántico |
| Estilos | CSS3 (custom properties, Grid, Flexbox), sin frameworks |
| Interacción | JavaScript vanilla |
| Animaciones | GSAP 3 + ScrollTrigger |
| SEO | Schema.org JSON-LD, Open Graph, sitemap XML |
| Hosting | Vercel |

## Estructura

```
├── index.html          Página principal
├── 404.html            Página de error
├── vercel.json         Encabezados de seguridad y caché
├── sitemap.xml
├── robots.txt
└── assets/
    ├── css/            Estilos
    ├── js/             Interacciones y animaciones
    ├── icons/          Favicons e íconos de la app
    └── img/            Marca, portfolio e imagen para redes
```

## Proyectos destacados en el portfolio

| Proyecto | Tipo | Sitio |
|---|---|---|
| ComputerSell | Tienda online de hardware | [computersell.com.ar](https://computersell.com.ar) |
| Gestor Financiero | Sistema web de finanzas personales | [gmensuales.vercel.app](https://gmensuales.vercel.app) |
| Reinos de Cintra | Landing para una comunidad gamer | [reinosdecintra.com.ar](https://reinosdecintra.com.ar) |
| Nicolás Corera | Portfolio profesional | [nicolascorera.com.ar](https://nicolascorera.com.ar) |

## Autor

**Nicolás Corera** — Desarrollador Full Stack

[nicolascorera.com.ar](https://nicolascorera.com.ar) · [WhatsApp](https://wa.me/5491123589249)

---

<div align="center">
<sub>© 2026 IntercomSite · Todos los derechos reservados.</sub>
</div>
