

const translations = {
  ru: {
    hero_title: "Производство с характером.",
    hero_text: "Производственная студия в Ташкенте. Дизайнерская одежда, мерч и униформа.",
    production_title: "Направления",
    card1_title: "Дизайнерская одежда",
    card2_title: "Брендированный мерч",
    card3_title: "Разработка лекал",
    card4_title: "Корпоративная униформа",
    contact_title: "Контакты",
    phone_label: "Телефон:",
    accent_phrase: "Создаём продукт для брендов, которые мыслят дальше."
  },
  en: {
    hero_title: "Production with character.",
    hero_text: "Production studio in Tashkent. Designer clothing, merch and uniforms.",
    production_title: "Services",
    card1_title: "Designer clothing",
    card2_title: "Branded merch",
    card3_title: "Pattern development",
    card4_title: "Corporate uniform",
    contact_title: "Contacts",
    phone_label: "Phone:",
    accent_phrase: "Built for brands that think further."
  },
  uz: {
    hero_title: "Xarakterli ishlab chiqarish.",
    hero_text: "Toshkentdagi ishlab chiqarish studiyasi.",
    production_title: "Yo‘nalishlar",
    card1_title: "Dizayner kiyimlar",
    card2_title: "Brend merch",
    card3_title: "Lekalo ishlab chiqish",
    card4_title: "Korporativ forma",
    contact_title: "Aloqa",
    phone_label: "Telefon:",
    accent_phrase: "Oldinga fikrlaydigan brendlar uchun yaratilgan."
  }
};

/* ГЛОБАЛЬНАЯ функция */
function setLang(lang) {
  localStorage.setItem("lang", lang);
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
}

/* Инициализация после загрузки */
document.addEventListener("DOMContentLoaded", function () {
  const savedLang = localStorage.getItem("lang") || "ru";
  setLang(savedLang);
});


