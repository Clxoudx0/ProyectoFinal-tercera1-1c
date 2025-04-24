// Función para cambiar el idioma
function changeLanguage() {
  const currentLang = localStorage.getItem("lang") || "es"; 
  const newLang = currentLang === "es" ? "en" : "es"; 

  localStorage.setItem("lang", newLang); 

  
  updateText(newLang);
}

// Función para actualizar los textos de la página
function updateText(lang) {
  const texts = {
      es: {
          servicios: "Servicios",
          promociones: "Productos Destacados",
          slogan: "Transformamos madera en bienestar, cuidando tu hogar y el planeta.",
          faq: "FAQ",
          sac: "SAC (Servicio al Cliente)",
          faqItems: ["¿Cómo comprar?", "Formas de pago", "Envíos"],
          sacItems: ["Contáctanos", "Soporte técnico", "Reclamos y devoluciones"],
          categoryButtons: [
              "Maderas",
              "Muebles",
              "Techos",
              "Hogar",
              "Herramientas"
          ]
      },
      en: {
          servicios: "Services",
          promociones: "Featured Products",
          slogan: "We transform wood into well-being, caring for your home and the planet.",
          faq: "FAQ",
          sac: "Customer Service",
          faqItems: ["How to buy?", "Payment methods", "Shipping"],
          sacItems: ["Contact Us", "Technical Support", "Claims and Returns"],
          categoryButtons: [
              "Wood",
              "Furniture",
              "Roofs",
              "Home",
              "Tools"
          ]
      }
  };

  
  const serviciosLink = document.getElementById("servicios-link");
  const promocionesLink = document.getElementById("promociones-link");

  if (serviciosLink && promocionesLink) {
      serviciosLink.textContent = texts[lang].servicios;
      promocionesLink.textContent = texts[lang].promociones;
  }

 
  const sloganElement = document.querySelector(".slogan");
  if (sloganElement) {
      sloganElement.textContent = texts[lang].slogan;
  }

  
  const buttons = document.querySelectorAll(".category-buttons button");
  buttons.forEach((button, index) => {
      if (texts[lang].categoryButtons[index]) {
          button.textContent = texts[lang].categoryButtons[index];
      }
  });

 
  const faqTitle = document.getElementById("faq-title");
  const sacTitle = document.getElementById("sac-title");

  if (faqTitle && sacTitle) {
      faqTitle.textContent = texts[lang].faq;
      sacTitle.textContent = texts[lang].sac;
  }

  const faqList = document.querySelectorAll("footer ul")[0]?.children;
  const sacList = document.querySelectorAll("footer ul")[1]?.children;

  if (faqList) {
      faqList[0].textContent = texts[lang].faqItems[0];
      faqList[1].textContent = texts[lang].faqItems[1];
      faqList[2].textContent = texts[lang].faqItems[2];
  }

  if (sacList) {
      sacList[0].textContent = texts[lang].sacItems[0];
      sacList[1].textContent = texts[lang].sacItems[1];
      sacList[2].textContent = texts[lang].sacItems[2];
  }

  
  const languageSwitch = document.getElementById("language-switch");
  if (languageSwitch) {
      languageSwitch.textContent = lang === "es" ? "ES | EN" : "EN | ES";
  }
}


document.addEventListener("DOMContentLoaded", function() {
  const lang = localStorage.getItem("lang") || "es";
  updateText(lang);
});
