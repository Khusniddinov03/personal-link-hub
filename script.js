/**
 * ==============================================================================
 * OTABEK XUSNIDDINOV — WORLD-CLASS PERSONAL LINK HUB & DIGITAL ECOSYSTEM
 * ==============================================================================
 * Barcha ma'lumotlar quyidagi `profileData` obyektida jamlangan.
 * Sahifa 3 ta tilda (UZ / EN / RU) to'liq ishlaydi.
 */

// ==========================================
// 1. ASOSIY MA'LUMOTLAR BAZASI (SINGLE SOURCE OF TRUTH)
// ==========================================
const profileData = {
  name: "Otabek Xusniddinov",
  title: "Junior Frontend Engineer & Vibe coder",
  
  // Dinamik yoziluvchi unvonlar (Typewriter)
  rotatingRoles: [
    "Junior Frontend Engineer & Vibe coder",
    "Telegram Bot & WebApp Architect",
    "React.js & Modern UI Developer",
    "Full-Cycle Digital Creator"
  ],

  // Erkak kishi professional portreti
  avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&h=600&q=80",
  
  location: "Tashkent, UZ",
  email: "xusniddinovotabek00@gmail.com",
  telegramUsername: "Otabek_Khusniddinov",
  portfolioUrl: "https://otabek-xusniddinov.vercel.app/",
  githubUrl: "https://github.com/husniddinov03/",

  // Ko'p tilli bio va status
  i18nBio: {
    uz: "Zamonaviy veb ilovalar va Telegram botlarni professional tarzda yarataman. Har bir loyihada toza arxitektura, yuqori tezlik va mukammal UI/UX uyg'unligini ta'minlayman.",
    en: "I professionally build modern web applications and Telegram bots. Delivering clean architecture, blazing-fast performance, and pixel-perfect UI/UX in every project.",
    ru: "Профессионально создаю современные веб-приложения и Telegram-ботов. Чистая архитектура, высокая скорость и безупречный UI/UX в каждом проекте."
  },

  status: {
    available: true,
    text: {
      uz: "Loyihalar uchun ochiq",
      en: "Available for new projects",
      ru: "Открыт для новых проектов"
    },
    response: {
      uz: "Javob vaqti: ~15 daqiqa",
      en: "Response time: ~15 mins",
      ru: "Время ответа: ~15 минут"
    }
  },

  // Jonli ko'rsatkichlar (Bento Metrics)
  metrics: [
    {
      value: "5+",
      label: { uz: "Muvaffaqiyatli Loyihalar", en: "Completed Projects", ru: "Успешных проектов" }
    },
    {
      value: "100%",
      label: { uz: "Toza Kod & Sifat", en: "Clean Code & Quality", ru: "Clean Code & Quality" }
    },
    {
      value: "24/7",
      label: { uz: "Doimiy Qo'llab-quvvatlash", en: "Active Support", ru: "Поддержка на связи" }
    }
  ],

  // Ijtimoiy tarmoqlar (Dock Bar)
  socialLinks: [
    { platform: "Telegram", icon: "telegram", url: "https://t.me/Otabek_Khusniddinov" },
    { platform: "GitHub", icon: "github", url: "https://github.com/husniddinov03/" },
    { platform: "Portfolio", icon: "globe", url: "https://otabek-xusniddinov.vercel.app/" },
    { platform: "LinkedIn", icon: "linkedin", url: "" },
    { platform: "Email", icon: "email", url: "mailto:xusniddinovotabek00@gmail.com" }
  ],

  // Asosiy Havolalar (Links Hub)
  links: [
    {
      id: "portfolio",
      title: {
        uz: "Mening Shaxsiy Portfoliom",
        en: "My Personal Portfolio Website",
        ru: "Моё Личное Портфолио"
      },
      subtitle: {
        uz: "Barcha mualliflik loyihalarim, jonli demolar va keyslar",
        en: "All my featured projects, live demos, and case studies",
        ru: "Все мои авторские проекты, демо и кейсы"
      },
      url: "https://otabek-xusniddinov.vercel.app/",
      icon: "portfolio",
      featured: true,
      badge: "ASOSIY • LIVE"
    },
    {
      id: "tg-channel",
      title: {
        uz: "Telegram Blogim & Community",
        en: "Telegram Tech Blog & Community",
        ru: "Мой Telegram-блог и Сообщество"
      },
      subtitle: {
        uz: "O'z sohamdagi amaliy tajribamdan kelib chiqilgan kuchli tavsiyalar",
        en: "Practical insights, frontend tips, and vibe coding workflows",
        ru: "Практический опыт, советы по разработке и инсайты"
      },
      url: "https://t.me/Otabek_Khusniddinov",
      icon: "telegram",
      featured: false,
      badge: "BLOG"
    },
    {
      id: "tg-bot-order",
      title: {
        uz: "Telegram Bot & WebApp Buyurtma Qilish",
        en: "Order Custom Telegram Bot & Mini App",
        ru: "Заказать Telegram-бота / WebApp"
      },
      subtitle: {
        uz: "Biznesni avtomatlashtirish, to'lov tizimlari va murakkab botlar",
        en: "Business automation, payment integrations & Telegram WebApps",
        ru: "Автоматизация бизнеса, платежи и современные Mini Apps"
      },
      url: "https://t.me/Otabek_Khusniddinov",
      icon: "bot",
      featured: false,
      badge: "PRO SERVICE"
    },
    {
      id: "github-repos",
      title: {
        uz: "GitHub Repozitoriylarim (@husniddinov03)",
        en: "GitHub Repositories (@husniddinov03)",
        ru: "GitHub Репозитории (@husniddinov03)"
      },
      subtitle: {
        uz: "Ochiq kodli loyihalarim, arxitektura va kod namunalari",
        en: "Open-source projects, clean code architecture & templates",
        ru: "Исходный код проектов, шаблоны и архитектура"
      },
      url: "https://github.com/husniddinov03/",
      icon: "github",
      featured: false,
      badge: "CODE"
    },
    {
      id: "cv-modal-trigger",
      title: {
        uz: "Rezyume / CV (Interaktiv ko'rish & PDF)",
        en: "Resume / CV (Interactive View & PDF)",
        ru: "Резюме / CV (Интерактивный просмотр и PDF)"
      },
      subtitle: {
        uz: "Ish tajribam, texnik ko'nikmalarim va ma'lumotlarim",
        en: "My work experience, technical stack, and background",
        ru: "Мой опыт работы, технические навыки и образование"
      },
      url: "#open-cv",
      icon: "doc",
      featured: false,
      badge: "PDF / CV"
    }
  ],

  // Tanlangan Mualliflik Loyihalarim (Projects Showcase)
  projects: [
    {
      title: "Otabek.dev — Interactive Portfolio",
      desc: {
        uz: "Yuqori tezlikdagi zamonaviy shaxsiy brend platformasi va loyihalar vitrinasi.",
        en: "High-performance personal portfolio and interactive project showcase.",
        ru: "Высокоскоростное портфолио и интерактивная витрина проектов."
      },
      badge: "Live Production",
      tags: ["React", "Modern CSS", "Vercel", "UI/UX"],
      url: "https://otabek-xusniddinov.vercel.app/"
    },
    {
      title: "Smart Commerce Telegram Mini App",
      desc: {
        uz: "Katalog, savatcha va tezkor buyurtma tizimiga ega Telegram WebApp savdo boti.",
        en: "Full-featured Telegram WebApp bot with catalog, cart, and order management.",
        ru: "Telegram WebApp магазин с каталогом, корзиной и системой заказов."
      },
      badge: "Telegram Bot",
      tags: ["Node.js", "Telegram API", "JavaScript", "WebApp"],
      url: "https://t.me/Otabek_Khusniddinov"
    },
    {
      title: "AI Vibe Assistant & Workflow Bot",
      desc: {
        uz: "Foydalanuvchi so'rovlarini tahlil qiluvchi va avtomatik javob beruvchi aqlli bot.",
        en: "Intelligent Telegram bot powered by AI for automated customer workflows.",
        ru: "Умный AI-бот для автоматизации ответов и бизнес-процессов."
      },
      badge: "AI Powered",
      tags: ["AI API", "Node.js", "REST API", "Automation"],
      url: "https://github.com/husniddinov03/"
    },
    {
      title: "Analytics & FinTech Dashboard UI",
      desc: {
        uz: "Dark Glassmorphism uslubidagi responsiv boshqaruv paneli va grafiklar.",
        en: "Responsive analytics dashboard interface with dark glassmorphism aesthetics.",
        ru: "Адаптивная панель управления в стиле Dark Glassmorphism."
      },
      badge: "Frontend UI",
      tags: ["TypeScript", "Tailwind CSS", "Responsive", "Charts"],
      url: "https://github.com/husniddinov03/"
    }
  ],

  // Professional Xizmatlar (Services)
  services: [
    {
      id: "Veb-sayt / Frontend ilova",
      title: {
        uz: "🌐 Zamonaviy Veb-Saytlar va Web Ilovalar",
        en: "🌐 Modern Websites & Web Applications",
        ru: "🌐 Современные Веб-сайты и Веб-приложения"
      },
      price: "Fast & Scalable",
      desc: {
        uz: "Landing page, korporativ saytlar, shaxsiy brend sahifalari va murakkab SPA ilovalarni mobil qurilmalarga 100% moslab yaratish.",
        en: "Custom landing pages, corporate portals, personal hubs, and SPA web apps with 100% mobile responsiveness.",
        ru: "Разработка лендингов, корпоративных сайтов и SPA-приложений с идеальной мобильной адаптацией."
      },
      perks: ["100% Responsive", "SEO Optimal", "Clean Architecture"]
    },
    {
      id: "Telegram Bot / WebApp",
      title: {
        uz: "🤖 Mukammal Telegram Botlar & Mini Apps",
        en: "🤖 Custom Telegram Bots & Mini Apps",
        ru: "🤖 Профессиональные Telegram-боты и Mini Apps"
      },
      price: "Turnkey Bot",
      desc: {
        uz: "Savdo-sotiq botlari, admin panelli tizimlar, obuna nazorati va Telegram ichida ochiluvchi WebApp ilovalar.",
        en: "E-commerce bots, admin dashboards, subscription systems, and seamless Telegram Mini Apps.",
        ru: "Боты для продаж, админ-панели, платежные интеграции и полноценные Telegram WebApps."
      },
      perks: ["Admin Panel", "24/7 Barqaror", "API Integratsiya"]
    },
    {
      id: "UI/UX & Redesign",
      title: {
        uz: "🎨 UI/UX Redesign & Vibe Coding Prototiplash",
        en: "🎨 UI/UX Redesign & Rapid Prototyping",
        ru: "🎨 UI/UX Редизайн и Быстрое Прототипирование"
      },
      price: "Premium UI",
      desc: {
        uz: "Mavjud saytlarni zamonaviy Glassmorphism va minimalizm uslubida yangilash hamda yuklanish tezligini maksimal darajaga olib chiqish.",
        en: "Transforming outdated interfaces into sleek glassmorphic experiences with maximum performance.",
        ru: "Обновление устаревших сайтов до мировых стандартов дизайна и максимальной скорости."
      },
      perks: ["Glassmorphism", "Micro-Animations", "0ms Lag"]
    }
  ],

  // Texnik Arsenal (Skills)
  skills: [
    { name: "HTML5 / CSS3 / Tailwind", level: 95 },
    { name: "JavaScript (ES6+) / TypeScript", level: 90 },
    { name: "React.js / Next.js", level: 86 },
    { name: "Telegram Bot API & WebApps", level: 92 },
    { name: "Node.js & REST API", level: 84 },
    { name: "Git / GitHub & AI Vibe Coding", level: 96 }
  ]
};

// ==========================================
// 2. UI TARJIMALAR LUG'ATI (UZ / EN / RU)
// ==========================================
const UI_TEXTS = {
  uz: {
    btn_cv: "Rezyume / CV",
    btn_hire: "Bog'lanish",
    tab_all: "Barchasi",
    tab_links: "Havolalar",
    tab_projects: "Loyihalar",
    tab_services: "Xizmatlar",
    tab_stack: "Texnologiyalar",
    sec_links_title: "Asosiy Havolalar & Tarmoqlar",
    sec_projects_title: "Tanlangan Mualliflik Loyihalarim",
    view_all_portfolio: "Portfolio",
    sec_services_title: "Professional Xizmatlar",
    sec_services_sub: "Sifat kafolati",
    sec_stack_title: "Texnik Arsenal & Kod Faolligi",
    gh_subtitle: "Yillik kod yozish va commitlar faolligi",
    gh_btn: "GitHub Profil",
    gh_less: "Kam",
    gh_more: "Ko'p",
    contact_badge: "TEZKOR ALOQA",
    contact_title: "Yangi loyiha ustida ishlaymizmi?",
    contact_desc: "Loyiha turini tanlang va 1 bosish orqali men bilan Telegram yoki Emailda bog'laning.",
    form_name_label: "Ismingiz",
    form_service_label: "Xizmat yo'nalishi",
    form_msg_label: "Loyiha haqida qisqacha",
    form_send_tg: "Telegram orqali yuborish",
    form_copy_email: "Email nusxalash",
    order_btn: "Buyurtma berish",
    links_count_suffix: "ta havola",
    footer: "© 2026 Otabek Xusniddinov. Barcha huquqlar himoyalangan."
  },
  en: {
    btn_cv: "Resume / CV",
    btn_hire: "Hire Me",
    tab_all: "All",
    tab_links: "Links",
    tab_projects: "Projects",
    tab_services: "Services",
    tab_stack: "Tech Stack",
    sec_links_title: "Primary Links & Channels",
    sec_projects_title: "Featured Projects Showcase",
    view_all_portfolio: "Portfolio",
    sec_services_title: "Professional Services",
    sec_services_sub: "Top Quality",
    sec_stack_title: "Technical Arsenal & GitHub Activity",
    gh_subtitle: "Annual code contributions and commit velocity",
    gh_btn: "GitHub Profile",
    gh_less: "Less",
    gh_more: "More",
    contact_badge: "QUICK CONNECT",
    contact_title: "Ready to build something great?",
    contact_desc: "Select a service and reach out directly via Telegram or Email in one click.",
    form_name_label: "Your Name",
    form_service_label: "Service Type",
    form_msg_label: "Project Details",
    form_send_tg: "Send via Telegram",
    form_copy_email: "Copy Email",
    order_btn: "Request Service",
    links_count_suffix: "links",
    footer: "© 2026 Otabek Xusniddinov. Crafted with Precision & Vibe."
  },
  ru: {
    btn_cv: "Резюме / CV",
    btn_hire: "Связаться",
    tab_all: "Все",
    tab_links: "Ссылки",
    tab_projects: "Проекты",
    tab_services: "Услуги",
    tab_stack: "Технологии",
    sec_links_title: "Основные ссылки и Контакты",
    sec_projects_title: "Избранные Авторские Проекты",
    view_all_portfolio: "Портфолио",
    sec_services_title: "Профессиональные Услуги",
    sec_services_sub: "Гарантия качества",
    sec_stack_title: "Технический стек и Активность",
    gh_subtitle: "Годовая активность кода и коммитов",
    gh_btn: "Профиль GitHub",
    gh_less: "Меньше",
    gh_more: "Больше",
    contact_badge: "БЫСТРАЯ СВЯЗЬ",
    contact_title: "Обсудим ваш новый проект?",
    contact_desc: "Выберите направление и напишите мне напрямую в Telegram или на Email.",
    form_name_label: "Ваше имя",
    form_service_label: "Направление",
    form_msg_label: "Коротко о задаче",
    form_send_tg: "Отправить в Telegram",
    form_copy_email: "Скопировать Email",
    order_btn: "Заказать",
    links_count_suffix: "ссылок",
    footer: "© 2026 Отабек Хусниддинов. Все права защищены."
  }
};

// ==========================================
// 3. SVG IKONKALAR KUTUBXONASI
// ==========================================
const ICONS = {
  telegram: `<svg viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/></svg>`,
  github: `<svg viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>`,
  linkedin: `<svg viewBox="0 0 24 24"><path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.77v8.37H6.46v-8.37M7.85 6.25a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z"/></svg>`,
  email: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>`,
  globe: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>`,
  portfolio: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>`,
  bot: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="10" rx="2"></rect><circle cx="12" cy="5" r="2"></circle><path d="M12 7v4"></path><line x1="8" y1="16" x2="8.01" y2="16"></line><line x1="16" y1="16" x2="16.01" y2="16"></line></svg>`,
  doc: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg>`,
  arrowUpRight: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>`,
  sun: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`,
  moon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`,
  soundOn: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path><path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path></svg>`,
  soundOff: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg>`
};

// ==========================================
// 4. GLOBAL HOLAT (STATE)
// ==========================================
let currentLang = localStorage.getItem("otabek_lang") || "uz";
let soundEnabled = localStorage.getItem("otabek_sound") !== "off";

// ==========================================
// 5. INITIALIZATION
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  initHeroProfile();
  renderAllContent();
  initLiveClock();
  initTypewriter();
  initGitHubHeatmap();
  initTabs();
  initLanguageSwitcher();
  initTheme();
  initSoundToggle();
  initShareAndEmail();
  initContactForm();
  initModals();
  initSpotlightTracking();
});

// ==========================================
// 6. PROFIL VA BARCHA BLOKLARNI RENDER QILISH
// ==========================================
function initHeroProfile() {
  const avatar = document.getElementById("profile-avatar");
  if (avatar) {
    avatar.src = profileData.avatarUrl;
    avatar.alt = profileData.name;
    avatar.onerror = () => {
      avatar.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(profileData.name)}&background=0284c7&color=fff&size=256`;
    };
  }
  document.getElementById("profile-name").textContent = profileData.name;
  document.getElementById("location-text").textContent = profileData.location;
}

function renderAllContent() {
  const t = UI_TEXTS[currentLang] || UI_TEXTS.uz;

  // Statik data-i18n elementlarni yangilash
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (t[key]) el.textContent = t[key];
  });

  // Bio, Status va Footer
  document.getElementById("profile-bio").textContent = profileData.i18nBio[currentLang];
  document.getElementById("status-text").textContent = profileData.status.text[currentLang];
  document.getElementById("response-time-text").textContent = profileData.status.response[currentLang];
  document.getElementById("footer-text").textContent = t.footer;
  document.getElementById("links-count-badge").textContent = `${profileData.links.length} ${t.links_count_suffix}`;

  renderSocialDock();
  renderMetrics();
  renderMainLinks();
  renderProjects();
  renderServices();
  renderSkills();
}

function renderSocialDock() {
  const container = document.getElementById("socials-container");
  if (!container) return;
  container.innerHTML = "";

  profileData.socialLinks.forEach(item => {
    const a = document.createElement("a");
    a.className = "dock-item";
    a.innerHTML = `${ICONS[item.icon] || ICONS.globe} <span>${item.platform}</span>`;

    if (!item.url || item.url.trim() === "") {
      a.href = "#";
      a.addEventListener("click", (e) => {
        e.preventDefault();
        playHaptic(420);
        showToast(`${item.platform} sahifasi tez orada ulanadi! ⏳`);
      });
    } else {
      a.href = item.url;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      a.addEventListener("click", () => playHaptic(560));
    }
    container.appendChild(a);
  });
}

function renderMetrics() {
  const container = document.getElementById("metrics-container");
  if (!container) return;
  container.innerHTML = "";

  profileData.metrics.forEach(m => {
    const div = document.createElement("div");
    div.className = "metric-card";
    div.innerHTML = `
      <span class="metric-value">${m.value}</span>
      <span class="metric-label">${m.label[currentLang]}</span>
    `;
    container.appendChild(div);
  });
}

function renderMainLinks() {
  const container = document.getElementById("links-container");
  if (!container) return;
  container.innerHTML = "";

  profileData.links.forEach(item => {
    const card = document.createElement("a");
    card.className = `bento-link-card ${item.featured ? "is-featured" : ""}`;
    card.setAttribute("role", "listitem");

    if (item.url === "#open-cv") {
      card.href = "#";
      card.addEventListener("click", (e) => {
        e.preventDefault();
        playHaptic(620);
        openModal("cv-modal");
      });
    } else if (!item.url || item.url.trim() === "") {
      card.href = "#";
      card.addEventListener("click", (e) => {
        e.preventDefault();
        playHaptic(400);
        showToast(`"${item.title[currentLang]}" tez orada yuklanadi!`);
      });
    } else {
      card.href = item.url;
      card.target = "_blank";
      card.rel = "noopener noreferrer";
      card.addEventListener("click", () => playHaptic(580));
    }

    card.innerHTML = `
      <div class="link-card-left">
        <div class="link-icon-frame">
          ${ICONS[item.icon] || ICONS.globe}
        </div>
        <div class="link-info">
          <div class="link-title-row">
            <span class="link-name">${escapeHtml(item.title[currentLang])}</span>
            ${item.badge ? `<span class="link-tag">${escapeHtml(item.badge)}</span>` : ""}
          </div>
          <span class="link-desc">${escapeHtml(item.subtitle[currentLang])}</span>
        </div>
      </div>
      <div class="link-action-right">
        ${ICONS.arrowUpRight}
      </div>
    `;
    container.appendChild(card);
  });
}

function renderProjects() {
  const container = document.getElementById("projects-container");
  if (!container) return;
  container.innerHTML = "";

  profileData.projects.forEach(proj => {
    const a = document.createElement("a");
    a.className = "project-card";
    a.href = proj.url;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.addEventListener("click", () => playHaptic(580));

    const tagsHtml = proj.tags.map(t => `<span class="proj-tag">${escapeHtml(t)}</span>`).join("");

    a.innerHTML = `
      <div>
        <div class="proj-top">
          <span class="proj-badge">${escapeHtml(proj.badge)}</span>
          <span class="proj-ext-icon">${ICONS.arrowUpRight}</span>
        </div>
        <h3 class="proj-title">${escapeHtml(proj.title)}</h3>
        <p class="proj-desc">${escapeHtml(proj.desc[currentLang])}</p>
      </div>
      <div class="proj-tags">${tagsHtml}</div>
    `;
    container.appendChild(a);
  });
}

function renderServices() {
  const container = document.getElementById("services-container");
  if (!container) return;
  container.innerHTML = "";
  const t = UI_TEXTS[currentLang] || UI_TEXTS.uz;

  profileData.services.forEach(srv => {
    const div = document.createElement("div");
    div.className = "service-card";

    const perksHtml = srv.perks.map(p => `<span class="srv-perk">${escapeHtml(p)}</span>`).join("");

    div.innerHTML = `
      <div class="srv-head">
        <h3 class="srv-title">${escapeHtml(srv.title[currentLang])}</h3>
        <span class="srv-price">${escapeHtml(srv.price)}</span>
      </div>
      <p class="srv-desc">${escapeHtml(srv.desc[currentLang])}</p>
      <div class="srv-bottom">
        <div class="srv-perks">${perksHtml}</div>
        <button type="button" class="srv-order-btn" data-service="${escapeHtml(srv.id)}">
          ${t.order_btn} &rarr;
        </button>
      </div>
    `;

    div.querySelector(".srv-order-btn").addEventListener("click", () => {
      playHaptic(640);
      const selectEl = document.getElementById("service-type");
      if (selectEl) selectEl.value = srv.id;
      document.getElementById("quick-project-section").scrollIntoView({ behavior: "smooth" });
      document.getElementById("client-name").focus();
    });

    container.appendChild(div);
  });
}

function renderSkills() {
  const container = document.getElementById("stack-container");
  if (!container) return;
  container.innerHTML = "";

  profileData.skills.forEach(sk => {
    const div = document.createElement("div");
    div.className = "skill-item";
    div.innerHTML = `
      <div class="skill-top">
        <span>${escapeHtml(sk.name)}</span>
        <span class="skill-pct">${sk.level}%</span>
      </div>
      <div class="skill-bar">
        <div class="skill-fill" style="width: ${sk.level}%"></div>
      </div>
    `;
    container.appendChild(div);
  });
}

// ==========================================
// 7. JONLI TOSHKENT SOATI & TYPEWRITER EFFEKTI
// ==========================================
function initLiveClock() {
  const clockEl = document.getElementById("live-clock");
  if (!clockEl) return;

  function updateClock() {
    try {
      const now = new Date();
      const timeStr = new Intl.DateTimeFormat("en-GB", {
        timeZone: "Asia/Tashkent",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false
      }).format(now);
      clockEl.textContent = `${timeStr} UTC+5`;
    } catch (e) {
      clockEl.textContent = "Tashkent UTC+5";
    }
  }
  updateClock();
  setInterval(updateClock, 1000);
}

function initTypewriter() {
  const roleEl = document.getElementById("profile-title");
  if (!roleEl) return;

  const roles = profileData.rotatingRoles;
  let roleIdx = 0;
  let charIdx = 0;
  let isDeleting = false;

  function tick() {
    const currentFull = roles[roleIdx];
    if (isDeleting) {
      charIdx--;
    } else {
      charIdx++;
    }

    roleEl.textContent = currentFull.substring(0, charIdx);

    let speed = isDeleting ? 35 : 70;

    if (!isDeleting && charIdx === currentFull.length) {
      speed = 2400; // To'liq yozilgach kutish
      isDeleting = true;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      roleIdx = (roleIdx + 1) % roles.length;
      speed = 400;
    }

    setTimeout(tick, speed);
  }

  setTimeout(tick, 1800);
}

// ==========================================
// 8. GITHUB CONTRIBUTION HEATMAP GENERATORI
// ==========================================
function initGitHubHeatmap() {
  const grid = document.getElementById("gh-heatmap");
  if (!grid) return;

  // 26 ustun x 5 qator = 130 katakcha (chiroyli dasturchi ritmi)
  const totalCells = 130;
  const pattern = [0, 1, 2, 3, 4, 2, 3, 1, 4, 3, 2, 4, 0, 2, 3, 4, 4, 2, 1, 3];

  for (let i = 0; i < totalCells; i++) {
    const cell = document.createElement("div");
    const lvl = pattern[(i * 7 + 3) % pattern.length];
    cell.className = `gh-cell lvl-${lvl}`;
    grid.appendChild(cell);
  }
}

// ==========================================
// 9. BO'LIMLAR TAB FILTRI & TIL ALMASHTIRGICH
// ==========================================
function initTabs() {
  const tabBtns = document.querySelectorAll(".tab-btn");
  const sections = document.querySelectorAll(".hub-section[data-section]");

  tabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      playHaptic(520);
      const target = btn.getAttribute("data-tab");

      tabBtns.forEach(b => {
        b.classList.remove("active");
        b.setAttribute("aria-selected", "false");
      });
      btn.classList.add("active");
      btn.setAttribute("aria-selected", "true");

      sections.forEach(sec => {
        const secType = sec.getAttribute("data-section");
        if (target === "all" || secType === target) {
          sec.classList.remove("hidden-sec");
        } else {
          sec.classList.add("hidden-sec");
        }
      });
    });
  });
}

function initLanguageSwitcher() {
  const langBtns = document.querySelectorAll(".lang-btn");

  langBtns.forEach(btn => {
    if (btn.getAttribute("data-lang") === currentLang) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }

    btn.addEventListener("click", () => {
      playHaptic(600);
      currentLang = btn.getAttribute("data-lang");
      localStorage.setItem("otabek_lang", currentLang);

      langBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      renderAllContent();
      showToast(`Til o'zgartirildi: ${currentLang.toUpperCase()} 🌐`);
    });
  });
}

// ==========================================
// 10. MAVZU (DARK / LIGHT) VA AUDIO HAPTICS
// ==========================================
function initTheme() {
  const btn = document.getElementById("theme-toggle-btn");
  const iconEl = document.getElementById("theme-icon");
  if (!btn || !iconEl) return;

  let theme = localStorage.getItem("otabek_theme") || "dark";
  applyTheme(theme);

  btn.addEventListener("click", () => {
    playHaptic(540);
    theme = theme === "dark" ? "light" : "dark";
    applyTheme(theme);
    localStorage.setItem("otabek_theme", theme);
    showToast(theme === "dark" ? "Dark Mode faol 🌙" : "Light Mode faol ☀️");
  });

  function applyTheme(val) {
    document.documentElement.setAttribute("data-theme", val);
    iconEl.innerHTML = val === "dark" ? ICONS.sun : ICONS.moon;
  }
}

function initSoundToggle() {
  const btn = document.getElementById("sound-toggle-btn");
  const iconEl = document.getElementById("sound-icon");
  if (!btn || !iconEl) return;

  updateIcon();

  btn.addEventListener("click", () => {
    soundEnabled = !soundEnabled;
    localStorage.setItem("otabek_sound", soundEnabled ? "on" : "off");
    updateIcon();
    if (soundEnabled) playHaptic(660);
    showToast(soundEnabled ? "Interaktiv ovozlar yoqildi 🔊" : "Ovozlar o'chirildi 🔇");
  });

  function updateIcon() {
    iconEl.innerHTML = soundEnabled ? ICONS.soundOn : ICONS.soundOff;
    btn.classList.toggle("active", soundEnabled);
  }
}

function playHaptic(freq = 560) {
  if (!soundEnabled) return;
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(freq, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(280, ctx.currentTime + 0.035);

    gain.gain.setValueAtTime(0.035, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.035);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 0.035);
  } catch (e) {}
}

// ==========================================
// 11. TEZKOR LOYIHA BUYURTMA QILISH FORMASI
// ==========================================
function initContactForm() {
  const form = document.getElementById("quick-contact-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    playHaptic(680);

    const name = document.getElementById("client-name").value.trim();
    const service = document.getElementById("service-type").value;
    const msg = document.getElementById("client-msg").value.trim();

    const text = `Assalomu alaykum Otabek! 👋\n\n👤 Ismim: ${name}\n🎯 Yo'nalish: ${service}\n💬 Xabar: ${msg || "Loyiha bo'yicha gaplashmoqchiman."}`;
    const tgUrl = `https://t.me/${profileData.telegramUsername}?text=${encodeURIComponent(text)}`;

    showToast("Telegram orqali yo'naltirilmoqda... 🚀");
    setTimeout(() => {
      window.open(tgUrl, "_blank", "noopener,noreferrer");
    }, 350);
  });
}

function initShareAndEmail() {
  // Share
  const shareBtn = document.getElementById("share-hub-btn");
  if (shareBtn) {
    shareBtn.addEventListener("click", async () => {
      playHaptic(600);
      const shareData = {
        title: `${profileData.name} — Digital Link Hub`,
        text: `${profileData.name} (${profileData.title})`,
        url: window.location.href
      };
      if (navigator.share && window.isSecureContext) {
        try {
          await navigator.share(shareData);
          return;
        } catch (e) {}
      }
      copyToClipboard(window.location.href, "Sahifa havolasi nusxalandi! 📋");
    });
  }

  // Copy Email
  const emailBtn = document.getElementById("copy-email-cta");
  if (emailBtn) {
    emailBtn.addEventListener("click", () => {
      playHaptic(580);
      copyToClipboard(profileData.email, `Email nusxalandi: ${profileData.email} ✉️`);
    });
  }
}

function copyToClipboard(str, toastMsg) {
  navigator.clipboard.writeText(str)
    .then(() => showToast(toastMsg))
    .catch(() => {
      const inp = document.createElement("input");
      inp.value = str;
      document.body.appendChild(inp);
      inp.select();
      document.execCommand("copy");
      document.body.removeChild(inp);
      showToast(toastMsg);
    });
}

// ==========================================
// 12. MODALLAR (CV, COMMAND PALETTE CTRL+K, QR CODE)
// ==========================================
function openModal(id) {
  const m = document.getElementById(id);
  if (m) m.classList.add("active");
}

function closeModal(id) {
  const m = document.getElementById(id);
  if (m) m.classList.remove("active");
}

function initModals() {
  // 1) CV Modal
  const openCvBtn = document.getElementById("open-cv-btn");
  const closeCvBtn = document.getElementById("close-cv-btn");
  const printCvBtn = document.getElementById("print-cv-btn");

  if (openCvBtn) openCvBtn.addEventListener("click", () => { playHaptic(600); openModal("cv-modal"); });
  if (closeCvBtn) closeCvBtn.addEventListener("click", () => closeModal("cv-modal"));
  if (printCvBtn) {
    printCvBtn.addEventListener("click", () => {
      playHaptic(640);
      window.print();
    });
  }

  // 2) QR Modal
  const qrBtn = document.getElementById("qr-modal-btn");
  const closeQrBtn = document.getElementById("close-qr-btn");
  const qrImg = document.getElementById("qr-image");
  const copyModalUrlBtn = document.getElementById("copy-modal-url-btn");

  if (qrBtn && qrImg) {
    qrBtn.addEventListener("click", () => {
      playHaptic(580);
      const url = encodeURIComponent(window.location.href);
      qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=${url}&margin=10`;
      openModal("qr-modal");
    });
  }
  if (closeQrBtn) closeQrBtn.addEventListener("click", () => closeModal("qr-modal"));
  if (copyModalUrlBtn) {
    copyModalUrlBtn.addEventListener("click", () => {
      copyToClipboard(window.location.href, "Havola nusxalandi! 📋");
      closeModal("qr-modal");
    });
  }

  // 3) Command Palette (Ctrl+K / Cmd+K)
  const openCmdTrigger = document.getElementById("open-cmd-trigger");
  const closeCmdBtn = document.getElementById("close-cmd-btn");
  const cmdInput = document.getElementById("cmd-input");
  const cmdResults = document.getElementById("cmd-results");

  const commands = [
    { label: "🌐 Mening Shaxsiy Portfoliomni ochish", type: "Portfolio", action: () => window.open(profileData.portfolioUrl, "_blank") },
    { label: "✈️ Telegram orqali yozish (@Otabek_Khusniddinov)", type: "Telegram", action: () => window.open(`https://t.me/${profileData.telegramUsername}`, "_blank") },
    { label: "💻 GitHub profilni ko'rish (@husniddinov03)", type: "GitHub", action: () => window.open(profileData.githubUrl, "_blank") },
    { label: "📄 Rezyume / CV ni ko'rish", type: "Resume", action: () => { closeModal("cmd-modal"); openModal("cv-modal"); } },
    { label: "✉️ Email manzilni nusxalash", type: "Email", action: () => { copyToClipboard(profileData.email, "Email nusxalandi!"); closeModal("cmd-modal"); } },
    { label: "🌓 Dark / Light mavzuni almashtirish", type: "Theme", action: () => { document.getElementById("theme-toggle-btn").click(); closeModal("cmd-modal"); } }
  ];

  function renderCmdList(filter = "") {
    if (!cmdResults) return;
    cmdResults.innerHTML = "";
    const q = filter.toLowerCase();
    commands
      .filter(c => c.label.toLowerCase().includes(q) || c.type.toLowerCase().includes(q))
      .forEach(c => {
        const div = document.createElement("div");
        div.className = "cmd-item";
        div.innerHTML = `<span>${c.label}</span><span class="cmd-item-type">${c.type}</span>`;
        div.addEventListener("click", () => {
          playHaptic(620);
          c.action();
        });
        cmdResults.appendChild(div);
      });
  }

  if (openCmdTrigger) {
    openCmdTrigger.addEventListener("click", () => {
      playHaptic(580);
      openModal("cmd-modal");
      renderCmdList();
      setTimeout(() => cmdInput && cmdInput.focus(), 100);
    });
  }
  if (closeCmdBtn) closeCmdBtn.addEventListener("click", () => closeModal("cmd-modal"));
  if (cmdInput) {
    cmdInput.addEventListener("input", (e) => renderCmdList(e.target.value));
  }

  // Klaviatura qisqa tugmalari (Ctrl+K va Escape)
  document.addEventListener("keydown", (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
      e.preventDefault();
      openModal("cmd-modal");
      renderCmdList();
      setTimeout(() => cmdInput && cmdInput.focus(), 100);
    } else if (e.key === "Escape") {
      closeModal("cv-modal");
      closeModal("cmd-modal");
      closeModal("qr-modal");
    }
  });

  // Backdrop ustiga bosganda yopish
  document.querySelectorAll(".modal-backdrop").forEach(bd => {
    bd.addEventListener("click", (e) => {
      if (e.target === bd) bd.classList.remove("active");
    });
  });
}

// ==========================================
// 13. INTERAKTIV SPOTLIGHT EFFECT
// ==========================================
function initSpotlightTracking() {
  document.addEventListener("mousemove", (e) => {
    const cards = document.querySelectorAll(".bento-link-card, .project-card, .service-card");
    cards.forEach(card => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
      card.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
    });
  });
}

// ==========================================
// 14. TOAST XABARNOMASI VA YORDAMCHI FUNKSIYA
// ==========================================
let toastTimeout;
function showToast(message) {
  const toast = document.getElementById("toast");
  const msg = document.getElementById("toast-message");
  if (!toast || !msg) return;

  msg.textContent = message;
  toast.classList.add("show");

  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove("show");
  }, 2700);
}

function escapeHtml(str) {
  if (typeof str !== "string") return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
