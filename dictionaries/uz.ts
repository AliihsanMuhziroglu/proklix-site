import type { DictionaryEntry } from "./types";

export const uz: DictionaryEntry = {
  meta: {
    title:
      "Proklix: CRM, workflow, arizalar, tasdiqlashlar va Telegram integratsiyalari O'zbekiston biznesi uchun",
    description:
      "Proklix O'zbekistondagi kompaniyalarga arizalar, tasdiqlashlar, vazifalar, Telegram bildirishnomalari va mavjud tizimlar bilan integratsiyani boshqarishga yordam beradi.",
  },
  header: {
    platform: "Platforma",
    integrations: "Integratsiyalar",
    processes: "Jarayonlar",
    forWhom: "Kimlar uchun",
    pricing: "Tariflar",
    faq: "FAQ",
    blog: "Blog",
    contact: "Aloqa",
    cta: "Telegram'da yozish",
    phone: "+998 77 257 43 54",
  },
  hero: {
    title: "Arizalar, tasdiqlashlar, vazifalar va integratsiyalar bitta Telegram markazli tizimda",
    subtitle:
      "Proklix arizalar, formalar, tasdiqlashlar, vazifalar, fayllar va harakatlar tarixini bitta oqimda birlashtiradi. Mavjud CRM, veb-sayt, ombor, Excel yoki maxsus API tizimlaringizga ulanib, operatsiyani Telegram orqali boshqaring.",
    trustTag: "Toshkent va O'zbekiston kompaniyalari uchun",
    ctaTelegram: "Telegram'da yozish",
    ctaAnalysis: "Jarayonni bepul tahlil qilish",
    integrationChips: ["CRM", "Veb-sayt", "Ombor", "Excel", "Maxsus API", "Telegram"],
    ctaHelper: "Birinchi uchrashuvda bir jarayoningizni birgalikda chizamiz.",
  },
  positioning: {
    title: "Oddiy CRM emas. Oddiy bot emas. To'liq operatsion jarayon.",
    subtitle:
      "Proklix arizalarni yig'adi, mas'ullarga vazifa beradi, tasdiqlashlarni boshqaradi, mavjud tizimlardan ma'lumot oladi va har bir jarayon tarixini saqlaydi.",
    flowSteps: [
      {
        title: "Ma'lumot keladi",
        description: "Manbalar: veb-sayt, CRM, Excel, ombor, maxsus API",
      },
      {
        title: "Jarayon boshlanadi",
        description: "Forma, ariza, yozuv yoki mijoz harakati yaratiladi",
      },
      {
        title: "Vazifa tayinlanadi",
        description: "Mas'ul shaxs Telegram'da bildirishnoma oladi",
      },
      {
        title: "Tasdiqlanadi",
        description: "Rahbar tasdiqlaydi, rad etadi yoki qayta ishlash so'raydi",
      },
      {
        title: "Natija saqlanadi",
        description: "Status, fayllar, izohlar va tarix saqlanadi",
      },
    ],
    items: [
      {
        badge: "Form",
        title: "Arizalar va formalar",
        description:
          "Veb-sayt, Telegram yoki ichki ekranlardan kelgan arizalarni standart formaga aylantiring. Maydonlar, fayllar va tavsiflar yo'qolmaydi.",
      },
      {
        badge: "Approval",
        title: "Tasdiqlash oqimlari",
        description:
          "Xarid, taklif, xarajat yoki servis kabi jarayonlarni bosqichma-bosqich boshqaring. Har bosqichda kim qaror qilishini bilasiz.",
      },
      {
        badge: "Task",
        title: "Vazifa boshqaruvi",
        description:
          "Har bir ish mas'ulga tayinlanadi. Vazifalar shaxsiy chatlarda yo'qolmaydi; status, muddat va tarix kuzatiladi.",
      },
      {
        badge: "Telegram",
        title: "Telegram bildirishnomalari",
        description:
          "Xodimlar yangi vazifalar, tasdiqlashlar va javoblarni to'g'ridan-to'g'ri Telegram'da ko'radi. Qo'shimcha ilova o'rganish yuki kamayadi.",
      },
      {
        badge: "Integration",
        title: "Mavjud tizim integratsiyasi",
        description:
          "CRM, veb-sayt, ombor, Excel yoki maxsus API manbalaridan ma'lumot olib, jarayonlarga ulang.",
      },
      {
        badge: "Audit",
        title: "Nazorat va tarix",
        description:
          "Har bir arizaning statusi, kimda ekanligi, qanday qarorlar qabul qilingani va qaysi fayllar qo'shilgani bitta joydan kuzatiladi.",
      },
    ],
  },
  integration: {
    title: "Mavjud tizimlaringiz ustida ishlaydi",
    subtitle:
      "Siz darhol sayt, CRM, ombor dasturi yoki Excel'ni almashtirishingiz shart emas. Proklix mavjud ma'lumotlarga ulanib, jarayonlarni ishga tushirishi va natijani qaytarishi mumkin.",
    flowLabels: [
      "Sayt / CRM / Ombor / Excel",
      "Proklix jarayoni",
      "Telegram vazifasi",
      "Natija va tarix",
      "Ma'lumot yangilanishi",
    ],
    items: [
      {
        title: "Sayt / e-commerce",
        description:
          "Arizalar, mahsulotlar, buyurtmalar va mijoz formasi, API yoki import orqali ulanishi mumkin.",
      },
      {
        title: "CRM",
        description:
          "Mijozlar, statuslar, menejerlar va muloqot tarixi, CRM bilan loyiha bo'yicha integratsiya qilinishi mumkin.",
      },
      {
        title: "Ombor / qoldiqlar",
        description:
          "Qoldiqlar, inventarizatsiya, ko'chirishlar va foto hisobotlar, API, eksport yoki qo'lda almashinuv orqali.",
      },
      {
        title: "ERP / buxgalteriya",
        description:
          "Xaridlar, xarajatlar, hisob-fakturalar va tasdiqlashlar, aniq jarayon va kirish huquqi bo'yicha ulanadi.",
      },
      {
        title: "Google Sheets / Excel",
        description:
          "Ma'lumotlar hali jadvalda bo'lgan kompaniyalar uchun tez start, Excel'ni almashtirmasdan import/eksport.",
      },
      {
        title: "Custom API",
        description:
          "Joriy tizimingiz uchun maxsus integratsiyalar, jarayon tahlilidan keyin muhokama qilinadi.",
      },
    ],
  },
  useCases: {
    title: "Proklix'da qanday jarayonlarni yuritish mumkin?",
    flowHint: "Forma → Tasdiqlash → Vazifa → Natija",
    items: [
      {
        title: "Mijoz arizasi",
        description:
          "Mijoz sayt yoki Telegram orqali ariza qoldiradi. Menejer vazifa oladi, status rahbar ko'radi.",
      },
      {
        title: "Tijorat taklifini tasdiqlash",
        description:
          "Menejer TT shakllantiradi, rahbar Telegram'da tasdiqlaydi, mijoz yakuniy versiyani oladi.",
      },
      {
        title: "Xarid arizasi",
        description:
          "Xodim xarid arizasi beradi, rahbar va buxgalteriya qadam-baqadam tasdiqlaydi, tarix saqlanadi.",
      },
      {
        title: "Xarajatlarni tasdiqlash",
        description:
          "Xarajat chek bilan qayd etiladi, tasdiqlash zanjir bo'ylab ketadi, natija hisobotga tushadi.",
      },
      {
        title: "Inventarizatsiya",
        description:
          "Mahsulot ro'yxati ombor yoki saytdan keladi. Xodim Telegram'da sanaydi, foto biriktiradi, rahbar natijani ko'radi.",
      },
      {
        title: "Mahsulot ko'chirish",
        description:
          "Omborlar o'rtasida ko'chirish arizasi, tasdiqlash, omborchiga vazifa, tarixda qayd.",
      },
      {
        title: "Maydon vazifalari va chek-listlar",
        description:
          "Maydonga chiqadigan xodimga Telegram vazifasi: chek-list, foto, bajarilish statusi, rahbarga hisobot.",
      },
      {
        title: "Servis arizasi",
        description:
          "Mijoz yoki menejer ariza yaratadi, ijrochi tayinlanadi, status va tarix bir ekranda.",
      },
      {
        title: "Hujjatlarni tasdiqlash",
        description:
          "Hujjat tasdiqlash bosqichlaridan o'tadi, ishtirokchilar bildirishnoma oladi, versiyalar saqlanadi.",
      },
      {
        title: "Ichki HR/admin arizalar",
        description:
          "Ta'til, xarid, kirish, ma'lumotnomalar, ichki arizalar tasdiqlash marshruti va tarix bilan.",
      },
    ],
  },
  beforeAfter: {
    title: "Proklix'dan keyin nima o'zgaradi",
    without: {
      title: "Proklix'siz",
      items: [
        "Arizalar chatlarda yo'qoladi",
        "Excel yangilanmaydi",
        "Kim mas'ul, noaniq",
        "Tasdiqlashlar qo'lda ketadi",
        "Fayllar xabarlar bo'ylab tarqalgan",
        "To'liq harakatlar tarixi yo'q",
        "Ma'lumotlar tizimlar o'rtasida qo'lda nusxalanadi",
      ],
    },
    with: {
      title: "Proklix bilan",
      items: [
        "Har bir ariza statusga ega",
        "Mas'ul tayinlangan",
        "Tasdiqlash qadam-baqadam ketadi",
        "Telegram ishtirokchilarni xabardor qiladi",
        "Fayllar jarayonga biriktirilgan",
        "Harakatlar tarixi saqlanadi",
        "Ma'lumotlarni mavjud tizimlar bilan bog'lash mumkin",
      ],
    },
  },
  sectors: {
    title: "Qo'lda nazorat ko'p bo'lgan kompaniyalar uchun",
    viewSector: "Sektor haqida batafsil",
    items: [
      {
        title: "B2B kataloglar va savdo",
        description:
          "Arizalar, mahsulotlar, narxlar, tijorat takliflari, tasdiqlashlar va Telegram bildirishnomalari.",
        sectorSlug: "b2b-katalog",
      },
      {
        title: "Tozalash va maydon xizmati",
        description:
          "Mijoz arizalari, maydon vazifalari, chek-listlar, foto hisobotlar va bajarilish nazorati.",
      },
      {
        title: "Omborlar va distribyutorlar",
        description:
          "Qoldiqlar, inventarizatsiya, ko'chirishlar, diler arizalari va yetkazib berish statuslari.",
        sectorSlug: "agro",
      },
      {
        title: "Uskunalar savdosi",
        description:
          "Katalog, maslahatlar, arizalar, tijorat takliflari va tasdiqlashlar.",
        sectorSlug: "oborudovanie",
      },
      {
        title: "Qurilish va maydon brigadalari",
        description:
          "Ob'ektdagi vazifalar, tasdiqlashlar, foto hisobotlar, arizalar va muddat nazorati.",
        sectorSlug: "stroitelstvo",
      },
      {
        title: "Logistika va tashqi savdo",
        description:
          "Arizalar, hujjatlar, yetkazib berish bosqichlari, statuslar va ishtirokchilarga bildirishnomalar.",
        sectorSlug: "logistika",
      },
      {
        title: "Ko'chmas mulk va ijaraga berish",
        description:
          "Arizalar, ob'ektlar, ko'rishlar, shartnomalar, to'lovlar va muloqot tarixi.",
        sectorSlug: "nedvizhimost",
      },
      {
        title: "Klinikalar va xizmat biznesi",
        description:
          "Yozuvlar, ichki arizalar, xodimlarga vazifalar, tasdiqlashlar va hisobotlar.",
      },
      {
        title: "Restoranlar va kafelar",
        description:
          "Xarid arizalari, smenalar, ta'mirlash, tasdiqlashlar va nazorat.",
      },
      {
        title: "Kichik ishlab chiqarish",
        description:
          "Xom ashyo arizalari, tasdiqlashlar, brigadalarga vazifalar, hisob va operatsiyalar tarixi.",
      },
    ],
  },
  sectorPageLabels: {
    breadcrumbHome: "Proklix",
    breadcrumbSectors: "Sektorlar",
    before: "Oldin",
    after: "Keyin",
    step: "Qadam",
  },
  howWeStart: {
    title: "Bitta jarayondan boshlaymiz",
    steps: [
      {
        title: "Joriy jarayonni tahlil qilamiz",
        description:
          "Hozir arizalar, vazifalar va tasdiqlashlar qayerda yo'qolayotganini ko'rib chiqamiz.",
      },
      {
        title: "Birinchi workflow yaratamiz",
        description:
          "Forma, qadamlar, mas'ullar, statuslar va bildirishnomalarni yaratamiz.",
      },
      {
        title: "Ma'lumot va tizimlarni ulaymiz",
        description:
          "Kerak bo'lsa sayt, CRM, ombor, Excel yoki API ulaymiz.",
      },
      {
        title: "Telegram'da ishga tushiramiz",
        description:
          "Xodimlar vazifalar va tasdiqlashlarni to'g'ridan-to'g'ri Telegram'da oladi.",
      },
      {
        title: "Yaxshilaymiz va kengaytiramiz",
        description:
          "Yangi jarayonlar, hisobotlar, rollar va integratsiyalar qo'shamiz.",
      },
    ],
  },
  modules: {
    title: "Proklix nimalardan iborat",
    items: [
      {
        title: "Dinamik formalar",
        description: "Jarayoningiz uchun maydonlar, fayllar va shartlar bilan forma konstruktori.",
      },
      {
        title: "Workflow builder",
        description: "Qadamlar, statuslar, tasdiqlash marshrutlari va o'tish qoidalari.",
      },
      {
        title: "Vazifalar inbox",
        description: "Shaxsiy va jamoa inbox: nima tayinlangan, nima harakat talab qiladi.",
      },
      {
        title: "Arizalarni kuzatish",
        description: "Har bir ariza raqam, status, mas'ul va tarix bilan.",
      },
      {
        title: "Telegram bildirishnomalari",
        description: "Yangi arizalar, tasdiqlashlar va vazifalar haqida Telegram bildirishnomalari.",
      },
      {
        title: "Fayl va foto yuklash",
        description: "Fayllar va fotolar jarayonga biriktiriladi, chatlarda yo'qolmaydi.",
      },
      {
        title: "Jarayonlar tarixi",
        description: "To'liq audit trail: kim, qachon va nima o'zgartirdi.",
      },
      {
        title: "Hisobotlar va dashboard",
        description: "Arizalar, tasdiqlashlar, vazifalar va tor joylar bo'yicha umumiy ko'rinish.",
      },
      {
        title: "Foydalanuvchilarni boshqarish",
        description: "Rollar, kirish huquqlari, bo'limlar va multi-tenant tuzilma.",
      },
      {
        title: "Maxsus integratsiyalar",
        description: "Sayt, CRM, ombor, Excel yoki API ga loyiha bo'yicha ulanish.",
      },
    ],
  },
  workflow: {
    title: "Ish jarayoni misoli",
    tabs: [
      {
        id: "proposal",
        label: "Tijorat taklifi",
        steps: [
          {
            title: "Trigger",
            description: "Mijoz sayt, Telegram yoki forma orqali ariza qoldiradi.",
          },
          {
            title: "Ma'lumot manbasi",
            description: "Mijoz ma'lumotlari va mahsulotlar CRM yoki katalogdan olinadi.",
          },
          {
            title: "Mas'ul",
            description: "Menejer vazifa oladi, tafsilotlarni aniqlaydi va TT shakllantiradi.",
          },
          {
            title: "Tasdiqlash",
            description: "Rahbar narx va shartlarni tekshiradi, tasdiqlaydi yoki qaytaradi.",
          },
          {
            title: "Telegram bildirishnomasi",
            description: "Ishtirokchilar har bir muhim bosqichda bildirishnoma oladi.",
          },
          {
            title: "Natija",
            description: "Mijoz yakuniy taklifni oladi, status yangilanadi.",
          },
          {
            title: "Tarix",
            description: "Barcha versiyalar va harakatlar audit va hisobotlar uchun saqlanadi.",
          },
        ],
      },
      {
        id: "stock",
        label: "Inventarizatsiya",
        steps: [
          {
            title: "Ma'lumot manbasi",
            description: "Mahsulot ro'yxati sayt, ombor yoki jadvaldan olinadi.",
          },
          {
            title: "Telegram vazifasi",
            description: "Mas'ul inventarizatsiya vazifasini Telegram'da oladi.",
          },
          {
            title: "Bajarish",
            description: "Xodim mahsulotlarni sanaydi va foto biriktiradi.",
          },
          {
            title: "Tasdiqlash",
            description: "Rahbar natija va farqlarni tekshiradi.",
          },
          {
            title: "Natija",
            description: "Yakun tarixda saqlanadi va tizimga qaytarilishi mumkin.",
          },
        ],
      },
      {
        id: "purchase",
        label: "Xarid tasdiqlash",
        steps: [
          {
            title: "Trigger",
            description: "Xodim forma orqali xarid arizasi beradi.",
          },
          {
            title: "Tasdiqlash",
            description: "Rahbar va buxgalteriya qadam-baqadam tasdiqlaydi.",
          },
          {
            title: "Telegram bildirishnomasi",
            description: "Har bir ishtirokchi o'z bosqichi uchun vazifa oladi.",
          },
          {
            title: "Natija",
            description: "Xarid tasdiqlanadi yoki izoh bilan rad etiladi.",
          },
          {
            title: "Tarix",
            description: "To'liq tasdiqlash zanjiri audit uchun saqlanadi.",
          },
        ],
      },
      {
        id: "service",
        label: "Servis vazifasi",
        steps: [
          {
            title: "Trigger",
            description: "Mijoz yoki menejer servis arizasi yaratadi.",
          },
          {
            title: "Mas'ul",
            description: "Ijrochi tayinlanadi, vazifa Telegram'ga ketadi.",
          },
          {
            title: "Bajarish",
            description: "Ijrochi ishni bajaradi, foto va status biriktiradi.",
          },
          {
            title: "Telegram bildirishnomasi",
            description: "Mijoz va menejer jarayon yangilanishlarini oladi.",
          },
          {
            title: "Natija",
            description: "Ariza yopiladi, tarix va fayllar saqlanadi.",
          },
        ],
      },
    ],
  },
  projects: {
    title: "Real B2B jarayonlaridagi tajriba",
    subtitle:
      "B2B kompaniyalar uchun arizalar, kataloglar, integratsiyalar va operatsion jarayonlar qurilgan loyihalar misollari.",
    cta: "Saytni ochish",
    items: [
      {
        title: "Clemar",
        website: "clemar.uz",
        url: "https://clemar.uz",
        category: "B2B tozalash uskunalari katalogi",
        description:
          "Mahsulot katalogi, ko'p tilli tuzilma, SEO va B2B savdo uchun Telegram ariza oqimi.",
        badges: ["B2B katalog", "Telegram arizalar", "RU / UZ"],
      },
      {
        title: "Tozago",
        website: "tozago.uz",
        url: "https://tozago.uz",
        category: "Tozalash xizmatlari sayti",
        description:
          "Toshkentda tozalash xizmatlari uchun Telegram arizali ko'p tilli sayt.",
        badges: ["Arizalar", "Telegram", "Mahalliy SEO"],
      },
      {
        title: "Klinidex",
        website: "klinidex.com",
        url: "https://klinidex.com",
        category: "Klinikalar uchun platforma",
        description:
          "Bemorlar, yozuvlar va klinika operatsion jarayonlarini boshqarish uchun raqamli platforma.",
        badges: ["SaaS", "Jarayonlar", "Demo ariza"],
      },
    ],
  },
  pricing: {
    title: "Proklix paketlari",
    subtitle:
      "Hajm va muddatlar jarayon tahlilidan keyin belgilanadi. Har bir paket tarkibi:",
    plans: [
      {
        name: "Birinchi jarayon",
        description: "Bitta workflow kerak bo'lgan kompaniyalar uchun: arizalar, tasdiqlashlar yoki TT.",
        features: [
          "1 asosiy jarayon",
          "Telegram bildirishnomalari",
          "Asosiy dashboard",
          "Cheklangan foydalanuvchilar soni",
          "Hajm tahlildan keyin belgilanadi",
        ],
        cta: "Taklif olish",
      },
      {
        name: "Bir nechta jarayon + integratsiyalar",
        description: "2–3 jarayon, hisobotlar va bir yoki bir nechta integratsiya kerak bo'lgan kompaniyalar uchun.",
        features: [
          "Bir nechta bog'langan jarayonlar",
          "CRM / katalog / ariza oqimi",
          "Hisobotlar va dashboard",
          "Asosiy integratsiya yoki import/eksport",
          "Hajm tahlildan keyin belgilanadi",
        ],
        cta: "Taklif olish",
        highlighted: true,
      },
      {
        name: "Biznes uchun operatsion tizim",
        description: "Maxsus CRM, workflow, integratsiyalar va hisobot kerak bo'lgan kompaniyalar uchun.",
        features: [
          "Maxsus API integratsiyalari",
          "Rollar, audit, hisobotlar",
          "Bir nechta bo'lim",
          "O'qitish va qo'llab-quvvatlash",
          "Hajm tahlildan keyin belgilanadi",
        ],
        cta: "Taklif olish",
      },
    ],
  },
  faq: {
    title: "Tez-tez beriladigan savollar",
    items: [
      {
        question: "Proklix: bu CRM, bot yoki ERP?",
        answer:
          "Proklix hammasini birdan almashtirmaydi. Bu workflow platformasi: arizalar, formalar, tasdiqlashlar, vazifalar, bildirishnomalar va mavjud tizimlar bilan integratsiyalar.",
      },
      {
        question: "Saytimiz, CRM yoki omborni ulash mumkinmi?",
        answer:
          "Ha, agar API, eksport/import yoki boshqa texnik kirish bo'lsa. Integratsiyalar aniq jarayon bo'yicha muhokama qilinadi.",
      },
      {
        question: "Bitta jarayondan boshlash mumkinmi?",
        answer:
          "Ha. Odatda bitta jarayondan boshlash yaxshi: arizalar, TT, xaridlar, inventarizatsiya yoki xarajatlarni tasdiqlash.",
      },
      {
        question: "Xodimlar yangi ilova o'rnatishi kerakmi?",
        answer:
          "Asosiy harakatlar Telegram/WebApp orqali qilinadi. Bu allaqachon Telegram'da ishlaydigan jamoalar uchun qulay.",
      },
      {
        question: "Rus va o'zbek tillari qo'llab-quvvatlanadimi?",
        answer:
          "Ha, sayt va jarayonlar loyiha bo'yicha RU / UZ / EN / TR tillarida qilinishi mumkin.",
      },
      {
        question: "Bu faqat savdo uchunmi?",
        answer:
          "Yo'q. Proklix har qanday takrorlanadigan jarayonlar uchun mos: arizalar, tasdiqlashlar, vazifalar, ombor, servis, hujjatlar, xaridlar, xarajatlar.",
      },
    ],
  },
  cta: {
    title: "Bitta tartibsiz jarayoningizni ko'rsating, biz uni Proklix'da qanday yig'ishni ko'rsatamiz",
    description:
      "20 daqiqada jarayoningizni ko'rib chiqamiz va MVP uchun qayerdan boshlashni taklif qilamiz. Majburiyat yo'q.",
    ctaTelegram: "Telegram'da yozish",
    ctaCall: "Qo'ng'iroq qilish",
    phone: "+998 77 257 43 54",
    formTitle: "Yoki ariza qoldiring",
  },
  contactForm: {
    name: "Ism",
    company: "Kompaniya",
    phone: "Telefon",
    process: "Qaysi jarayonni nazorat qilmoqchisiz?",
    processPlaceholder: "Jarayonni tanlang",
    processOptions: [
      "Arizalar / CRM",
      "Tijorat takliflari",
      "Tasdiqlashlar",
      "Ombor / inventarizatsiya",
      "Maydon vazifalari",
      "Sayt / e-commerce integratsiyasi",
      "Boshqa",
    ],
    submit: "Arizani yuborish",
    submitting: "Yuborilmoqda…",
    success: "Rahmat! Tez orada siz bilan bog'lanamiz.",
    error: "Yuborib bo'lmadi. Telegram'da yozing.",
  },
  blog: {
    meta: {
      title: "Proklix blogi | CRM, avtomatizatsiya va B2B",
      description:
        "O'zbekistondagi biznes uchun CRM, Telegram avtomatizatsiyasi va B2B kataloglar haqida maqolalar.",
    },
    title: "Proklix blogi",
    subtitle: "B2B uchun CRM, avtomatizatsiya va raqamli jarayonlar bo'yicha amaliy materiallar.",
    readMore: "O'qish",
    backToBlog: "Barcha maqolalar",
  },
  mobileCta: {
    telegram: "Telegram",
    call: "Qo'ng'iroq",
  },
  footer: {
    tagline:
      "Telegram-first workflow platformasi: arizalar, tasdiqlashlar, vazifalar va mavjud tizimlar bilan integratsiyalar.",
    phone: "+998 77 257 43 54",
    telegram: "Telegram",
    location: "Toshkent / O'zbekiston",
    blog: "Blog",
  },
  dashboard: {
    title: "Proklix operatsion paneli",
    flowLabels: [
      "CRM / Web / Excel",
      "Proklix jarayoni",
      "Telegram vazifasi",
      "Tasdiqlash",
      "Natija saqlandi",
    ],
    sourceLabel: "Manba",
    metricRequests: "24 faol ariza",
    metricInProgress: "8 davom etayotgan vazifa",
    metricPendingApproval: "5 tasdiqlash kutilmoqda",
    metricCompleted: "11 yakunlangan",
    cards: [
      { title: "Yangi mijoz arizasi", source: "Veb-sayt", statusKey: "new" },
      { title: "Ombor hisobi", source: "Ombor tizimi", statusKey: "telegram" },
      { title: "Xarid tasdiqlash", source: "Excel / API", statusKey: "pending" },
      { title: "Servis vazifasi", source: "CRM", statusKey: "completed" },
    ],
    statusNew: "Yangi ariza",
    statusPending: "Tasdiqlash kutilmoqda",
    statusTelegram: "Telegram vazifasi",
    statusCompleted: "Yakunlangan",
    statusIntegrated: "Integratsiya ma'lumoti",
  },
};
