const translations = {
  ru: {
    page_title: "LEVENTUL — Швейная студия",
    meta_description: "Leventul — швейная студия в Ташкенте. Пошив одежды, мерча и униформы для бизнеса и брендов.",
    language_selector: "Выбор языка",
    hero_title: "Производство с характером.",
    hero_text: "Швейная студия в Ташкенте — пошив под задачи бизнеса и брендов",
    about_title: "О нас",
    about_intro: "Мы — швейная студия в Ташкенте, которая работает с брендами, компаниями и частными клиентами.",
    about_task_intro: "Делаем не «просто пошив», а решаем задачу:",
    about_task_1: "Запустить коллекцию",
    about_task_2: "Отшить партию",
    about_task_3: "Создать униформу",
    about_task_4: "Реализовать сложную идею",
    about_summary: "От идеи до готового изделия: малые и крупные партии, униформа, индивидуальный пошив и производство одежды под ключ.",
    production_title: "Почему выбирают нас",
    card1_title: "Производство в Ташкенте",
    card2_title: "Работаем быстро и по договору",
    card3_title: "Контроль качества на каждом этапе",
    card4_title: "Помогаем с выбором ткани и конструкцией изделия",
    card5_title: "Гибкость: от 1 образца до партии",
    contact_title: "Контакты",
    phone_label: "Телефон:",
    accent_phrase: "..."
  },
  en: {
    page_title: "LEVENTUL — Production Studio",
    meta_description: "Leventul is a production studio in Tashkent creating clothing, branded merchandise and uniforms for businesses and brands.",
    language_selector: "Language selection",
    hero_title: "Production with character.",
    hero_text: "Production studio in Tashkent. Designer clothing, merch and uniforms.",
    about_title: "About us",
    about_intro: "We are a sewing studio in Tashkent working with brands, companies and private clients.",
    about_task_intro: "We do more than just sewing — we solve a specific task:",
    about_task_1: "Launch a collection",
    about_task_2: "Produce a batch",
    about_task_3: "Create uniforms",
    about_task_4: "Bring a complex idea to life",
    about_summary: "From idea to finished product: small and large batches, uniforms, bespoke tailoring and full-cycle clothing production.",
    production_title: "Services",
    card1_title: "Designer clothing",
    card2_title: "Branded merch",
    card3_title: "Pattern development",
    card4_title: "Corporate uniform",
    card5_title: "Flexible production: from one sample to a full batch",
    contact_title: "Contacts",
    phone_label: "Phone:",
    accent_phrase: "..."
  },
  uz: {
    page_title: "LEVENTUL — Tikuvchilik studiyasi",
    meta_description: "Leventul — Toshkentdagi tikuvchilik studiyasi. Biznes va brendlar uchun kiyim, merch va uniforma ishlab chiqarish.",
    language_selector: "Tilni tanlash",
    hero_title: "Xarakterli ishlab chiqarish.",
    hero_text: "Toshkentdagi ishlab chiqarish studiyasi.",
    about_title: "Biz haqimizda",
    about_intro: "Biz Toshkentdagi tikuvchilik studiyasimiz, brendlar, kompaniyalar va xususiy mijozlar bilan ishlaymiz.",
    about_task_intro: "Biz shunchaki tikmaymiz — aniq vazifani hal qilamiz:",
    about_task_1: "Kolleksiyani ishga tushirish",
    about_task_2: "Partiyani tikish",
    about_task_3: "Uniforma yaratish",
    about_task_4: "Murakkab g‘oyani amalga oshirish",
    about_summary: "G‘oyadan tayyor mahsulotgacha: kichik va katta partiyalar, uniforma, individual tikuvchilik va kiyim-kechakni to‘liq siklda ishlab chiqarish.",
    production_title: "Yo‘nalishlar",
    card1_title: "Dizayner kiyimlar",
    card2_title: "Brend merch",
    card3_title: "Lekalo ishlab chiqish",
    card4_title: "Korporativ forma",
    card5_title: "Moslashuvchanlik: 1 ta namunadan partiyagacha",
    contact_title: "Aloqa",
    phone_label: "Telefon:",
    accent_phrase: "..."
  }
};

function setLanguage(lang) {
  const selectedLang = translations[lang] ? lang : "ru";

  localStorage.setItem("lang", selectedLang);
  document.documentElement.lang = selectedLang;
  document.title = translations[selectedLang].page_title;

  const description = document.querySelector('meta[name="description"]');
  if (description) {
    description.setAttribute("content", translations[selectedLang].meta_description);
  }

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[selectedLang][key]) {
      el.textContent = translations[selectedLang][key];
    }
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach(el => {
    const key = el.getAttribute("data-i18n-aria-label");
    if (translations[selectedLang][key]) {
      el.setAttribute("aria-label", translations[selectedLang][key]);
    }
  });

  document.querySelectorAll("[data-lang]").forEach(button => {
    const isActive = button.getAttribute("data-lang") === selectedLang;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("lang") || "ru";
  setLanguage(savedLang);

  const buttons = document.querySelectorAll("[data-lang]");
  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const lang = button.getAttribute("data-lang");
      setLanguage(lang);
    });
  });
});
