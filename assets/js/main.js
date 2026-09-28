document.addEventListener("DOMContentLoaded", () => {
  /* ============================================================
     GSAP setup
     ============================================================ */
  gsap.registerPlugin(ScrollTrigger);

  /* ------------------------------------------------------------
     1) Animación de entrada del Hero
     ------------------------------------------------------------ */
  const heroTimeline = gsap.timeline({ defaults: { ease: "power3.out" } });

  heroTimeline
    .from(".badge", { opacity: 0, y: -20, duration: 0.6 })
    .from(".hero__headline", { opacity: 0, y: 30, duration: 0.8 }, "-=0.3")
    .from(".hero__subtitle", { opacity: 0, y: 20, duration: 0.7 }, "-=0.5")
    .from(
      ".hero__ctas .btn",
      { opacity: 0, y: 20, duration: 0.6, stagger: 0.15 },
      "-=0.4",
    )
    .from(".scroll-indicator", { opacity: 0, duration: 0.6 }, "-=0.3");

  /* ------------------------------------------------------------
     Navbar: barra a lo ancho arriba, píldora al scrollear
     ------------------------------------------------------------ */
  const siteHeader = document.getElementById("site-header");
  const updateHeader = () =>
    siteHeader.classList.toggle("is-scrolled", window.scrollY > 40);

  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });

  /* ------------------------------------------------------------
     Menú mobile (hamburguesa)
     ------------------------------------------------------------ */
  const navToggle = document.querySelector(".navbar__toggle");

  const setMenu = (open) => {
    siteHeader.classList.toggle("is-menu-open", open);
    navToggle.setAttribute("aria-expanded", String(open));
    navToggle.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
  };

  navToggle.addEventListener("click", () =>
    setMenu(!siteHeader.classList.contains("is-menu-open")),
  );
  document
    .querySelectorAll(".navbar__menu a")
    .forEach((link) => link.addEventListener("click", () => setMenu(false)));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") setMenu(false);
  });
  document.addEventListener("click", (e) => {
    if (!siteHeader.contains(e.target)) setMenu(false);
  });
  window.matchMedia("(min-width: 860px)").addEventListener("change", (e) => {
    if (e.matches) setMenu(false);
  });

  /* ------------------------------------------------------------
     Hero: frases rotativas con fundido cruzado
     (la nueva entra mientras la anterior se desvanece)
     ------------------------------------------------------------ */
  const heroPhrases = [
    ["Soluciones digitales que", "impulsan tu negocio"],
    ["Tiendas online que", "venden las 24 horas"],
    ["Sistemas a medida que", "ordenan tu empresa"],
  ];
  const heroHeadline = document.querySelector(".hero__headline");
  const heroLayers = [heroHeadline.querySelector("h1")];

  // El H1 real queda intacto para SEO; las otras frases se suman como capas
  heroPhrases.forEach(([first, second]) => {
    const layer = document.createElement("p");
    layer.className = "hero__title hero__phrase";
    layer.setAttribute("aria-hidden", "true");
    layer.innerHTML = `<span class="hero__line"></span><span class="hero__line hero__title-gradient"></span>`;
    layer.children[0].textContent = first;
    layer.children[1].textContent = second;
    heroHeadline.appendChild(layer);
    heroLayers.push(layer);
  });

  let currentLayer = 0;

  const rotatePhrase = () => {
    const prev = heroLayers[currentLayer];
    currentLayer = (currentLayer + 1) % heroLayers.length;
    const next = heroLayers[currentLayer];

    gsap.to(prev, {
      autoAlpha: 0,
      y: -16,
      filter: "blur(10px)",
      duration: 1,
      ease: "power2.inOut",
    });
    gsap.fromTo(
      next,
      { autoAlpha: 0, y: 16, filter: "blur(10px)" },
      {
        autoAlpha: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 1,
        delay: 0.2,
        ease: "power2.inOut",
      },
    );
  };

  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    gsap.delayedCall(4, function tick() {
      rotatePhrase();
      gsap.delayedCall(4, tick);
    });
  }

  gsap.from(".site-header .navbar", {
    opacity: 0,
    y: -30,
    duration: 0.8,
    ease: "power3.out",
    delay: 0.2,
  });

  /* ------------------------------------------------------------
     2) Scroll indicator: loop sutil del punto
     ------------------------------------------------------------ */
  gsap.to(".scroll-indicator__dot", {
    y: 10,
    duration: 1,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
  });

  /* ------------------------------------------------------------
     3) Reveal de secciones al hacer scroll
     ------------------------------------------------------------ */
  const sectionHeaders = gsap.utils.toArray(".section-header");
  sectionHeaders.forEach((el) => {
    gsap.from(el, {
      opacity: 0,
      y: 40,
      duration: 0.9,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    });
  });

  /* ------------------------------------------------------------
     Carrusel de marcas: clona la lista para que el loop no tenga cortes
     ------------------------------------------------------------ */
  const brandsTrack = document.querySelector(".brands__track");
  if (brandsTrack) {
    const brandsList = brandsTrack.querySelector(".brands__list");
    const clone = brandsList.cloneNode(true);
    clone.setAttribute("aria-hidden", "true");
    clone.querySelectorAll("img").forEach((img) => (img.alt = ""));
    brandsTrack.appendChild(clone);

    gsap.from(".brands", {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".brands",
        start: "top 90%",
        toggleActions: "play none none reverse",
      },
    });
  }

  const bentoItems = gsap.utils.toArray(".bento-item");
  gsap.from(bentoItems, {
    opacity: 0,
    y: 50,
    duration: 0.8,
    ease: "power3.out",
    stagger: 0.12,
    scrollTrigger: {
      trigger: ".bento-grid",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });

  const serviceCards = gsap.utils.toArray(".service-card");
  gsap.from(serviceCards, {
    opacity: 0,
    y: 40,
    duration: 0.7,
    ease: "power3.out",
    stagger: 0.1,
    scrollTrigger: {
      trigger: ".services-grid",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });

  const trustItems = gsap.utils.toArray(".trust__item");
  gsap.from(trustItems, {
    opacity: 0,
    y: 30,
    duration: 0.6,
    ease: "power3.out",
    stagger: 0.1,
    scrollTrigger: {
      trigger: ".trust",
      start: "top 90%",
      toggleActions: "play none none reverse",
    },
  });

  const priceCards = gsap.utils.toArray(".pricing-grid .price-card");
  gsap.from(priceCards, {
    opacity: 0,
    y: 50,
    duration: 0.8,
    ease: "power3.out",
    stagger: 0.15,
    scrollTrigger: {
      trigger: ".pricing-grid",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });

  gsap.from(".pricing-note", {
    opacity: 0,
    y: 30,
    duration: 0.7,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".pricing-note",
      start: "top 90%",
      toggleActions: "play none none reverse",
    },
  });

  gsap.from([".compare", ".pricing-custom"], {
    opacity: 0,
    y: 30,
    duration: 0.7,
    ease: "power3.out",
    stagger: 0.15,
    scrollTrigger: {
      trigger: ".compare",
      start: "top 90%",
      toggleActions: "play none none reverse",
    },
  });

  gsap.from(".maint__grid .price-card", {
    opacity: 0,
    y: 40,
    duration: 0.7,
    ease: "power3.out",
    stagger: 0.15,
    scrollTrigger: {
      trigger: ".maint__grid",
      start: "top 85%",
      toggleActions: "play none none reverse",
    },
  });

  const processSteps = gsap.utils.toArray(".process__step");
  gsap.from(processSteps, {
    opacity: 0,
    y: 40,
    duration: 0.7,
    ease: "power3.out",
    stagger: 0.12,
    scrollTrigger: {
      trigger: ".process__list",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });

  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".about",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    })
    .from(".about__card", {
      opacity: 0,
      y: 40,
      duration: 0.8,
      ease: "power3.out",
    })
    .from(
      ".about__sticker",
      {
        opacity: 0,
        scale: 0.6,
        rotation: -20,
        duration: 0.6,
        ease: "back.out(1.8)",
      },
      "-=0.35",
    );

  // Hover en toda la tarjeta: la etiqueta se endereza
  const aboutCard = document.querySelector(".about__card");
  const aboutSticker = document.querySelector(".about__sticker");
  if (window.matchMedia("(hover: hover)").matches) {
    aboutCard.addEventListener("mouseenter", () =>
      gsap.to(aboutSticker, {
        rotation: 0,
        duration: 0.5,
        ease: "back.out(2)",
        overwrite: "auto",
      }),
    );
    aboutCard.addEventListener("mouseleave", () =>
      gsap.to(aboutSticker, {
        rotation: -6,
        duration: 0.5,
        ease: "back.out(2)",
        overwrite: "auto",
      }),
    );
  }

  const faqItems = gsap.utils.toArray(".faq-item");
  gsap.from(faqItems, {
    opacity: 0,
    y: 30,
    duration: 0.6,
    ease: "power3.out",
    stagger: 0.1,
    scrollTrigger: {
      trigger: ".faq-list",
      start: "top 85%",
      toggleActions: "play none none reverse",
    },
  });

  gsap.from(".contact-info", {
    opacity: 0,
    x: -40,
    duration: 0.8,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".contact-grid",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });

  gsap.from(".contact-form-wrap", {
    opacity: 0,
    x: 40,
    duration: 0.8,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".contact-grid",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });

  /* ============================================================
     WhatsApp: todos los [data-wa-msg] abren el chat con el
     mensaje ya escrito
     ============================================================ */
  const WHATSAPP_NUMBER = "5491123589249";
  const waLink = (msg) =>
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;

  document.querySelectorAll("[data-wa-msg]").forEach((el) => {
    el.href = waLink(el.dataset.waMsg);
    el.target = "_blank";
    el.rel = "noopener noreferrer";
  });

  /* ============================================================
     4) Selector de moneda (ARS / USD)
     ============================================================ */
  const currencyButtons = document.querySelectorAll(".currency-toggle__btn");
  const priceElements = document.querySelectorAll(".price-val");

  function setCurrency(currency) {
    currencyButtons.forEach((btn) => {
      const isActive = btn.dataset.currency === currency;
      btn.classList.toggle("currency-toggle__btn--active", isActive);
      btn.setAttribute("aria-pressed", String(isActive));
    });

    priceElements.forEach((el) => {
      const newValue =
        currency === "USD"
          ? el.getAttribute("data-usd")
          : el.getAttribute("data-ars");

      gsap.to(el, {
        opacity: 0,
        y: -6,
        duration: 0.15,
        ease: "power1.in",
        onComplete: () => {
          el.textContent = newValue;
          gsap.fromTo(
            el,
            { opacity: 0, y: 6 },
            { opacity: 1, y: 0, duration: 0.2, ease: "power1.out" },
          );
        },
      });
    });
  }

  currencyButtons.forEach((btn) => {
    btn.addEventListener("click", () => setCurrency(btn.dataset.currency));
  });

  /* ============================================================
     5) Acordeón de FAQ (con animación de altura vía GSAP)
     ============================================================ */
  const faqButtons = document.querySelectorAll(".faq-item__question");

  faqButtons.forEach((button) => {
    const item = button.closest(".faq-item");
    const answer = item.querySelector(".faq-item__answer");
    const inner = item.querySelector(".faq-item__answer-inner");

    button.addEventListener("click", () => {
      const isOpen = item.classList.contains("is-open");

      // Cerrar todos los demás
      document.querySelectorAll(".faq-item.is-open").forEach((openItem) => {
        if (openItem !== item) {
          const openAnswer = openItem.querySelector(".faq-item__answer");
          openItem.classList.remove("is-open");
          openItem
            .querySelector(".faq-item__question")
            .setAttribute("aria-expanded", "false");
          gsap.to(openAnswer, {
            height: 0,
            duration: 0.35,
            ease: "power2.inOut",
          });
        }
      });

      button.setAttribute("aria-expanded", String(!isOpen));

      if (isOpen) {
        item.classList.remove("is-open");
        gsap.to(answer, { height: 0, duration: 0.35, ease: "power2.inOut" });
      } else {
        item.classList.add("is-open");
        gsap.set(answer, { height: "auto" });
        const fullHeight = answer.offsetHeight;
        gsap.fromTo(
          answer,
          { height: 0 },
          {
            height: fullHeight,
            duration: 0.4,
            ease: "power2.inOut",
            onComplete: () => gsap.set(answer, { height: "auto" }),
          },
        );
      }
    });
  });

  /* ============================================================
     6) Campo condicional "OTRO" en el formulario
     ============================================================ */
  const consultaSelect = document.getElementById("consulta");
  const campoPersonalizado = document.getElementById("campo-personalizado");
  const consultaCustomInput = document.getElementById("consulta_custom");

  function checkCustomOption(value) {
    if (value === "OTRO") {
      campoPersonalizado.classList.add("is-visible");
      consultaCustomInput.setAttribute("required", "required");
      gsap.fromTo(
        campoPersonalizado,
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" },
      );
    } else {
      campoPersonalizado.classList.remove("is-visible");
      consultaCustomInput.removeAttribute("required");
    }
  }

  consultaSelect.addEventListener("change", (e) =>
    checkCustomOption(e.target.value),
  );

  /* ============================================================
     7) Envío del formulario: arma el mensaje y abre WhatsApp
     ============================================================ */
  const contactForm = document.getElementById("contact-form");
  const submitButton = document.getElementById("btn-submit");
  const formFeedback = document.getElementById("form-feedback");

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const negocio = document.getElementById("negocio").value.trim();
    const consulta = consultaSelect.value;
    const custom = consultaCustomInput.value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    const lines = [`¡Hola! Soy ${nombre}.`];
    if (negocio) lines.push(`Negocio / rubro: ${negocio}`);
    lines.push(`Me interesa: ${consulta === "OTRO" ? custom : consulta}`);
    lines.push("", mensaje);

    const url = waLink(lines.join("\n"));
    const win = window.open(url, "_blank");
    if (win) win.opener = null;
    else window.location.href = url;

    submitButton.classList.add("is-sent");
    formFeedback.classList.add("is-visible");

    gsap.fromTo(
      formFeedback,
      { opacity: 0, y: -8 },
      { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" },
    );
    gsap.fromTo(
      submitButton,
      { scale: 1 },
      {
        scale: 1.03,
        duration: 0.15,
        yoyo: true,
        repeat: 1,
        ease: "power1.inOut",
      },
    );

    contactForm.reset();
    campoPersonalizado.classList.remove("is-visible");
  });

  /* ============================================================
     9) Botón flotante de WhatsApp: pequeño "latido"
     ============================================================ */
  gsap.to(".whatsapp-float", {
    scale: 1.08,
    duration: 1.1,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
    delay: 2,
  });
});
