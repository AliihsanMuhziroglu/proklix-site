import type { SectorPageContent } from "@/dictionaries/types";

export const nedvizhimostUz: SectorPageContent = {
  meta: {
    title: "Ko'chmas mulk CRM va workflow tizimi | Proklix",
    description:
      "Proklix ko'chmas mulk agentliklari uchun mijoz so'rovlari, obyektlar, ko'rsatishlar, ijara jarayoni, vazifalar va Telegram bildirishnomalarini bitta web panelda boshqarishga yordam beradi.",
  },
  breadcrumb: { sectorName: "Ko'chmas mulk" },
  hero: {
    title:
      "Ko'chmas mulk biznesi uchun talab, obyekt, ko'rsatish va ijara jarayonlarini bitta tizimda boshqaring.",
    subtitle:
      "Proklix ko'chmas mulk agentliklari va rieltorlar uchun mijoz so'rovlari, obyektlar, ko'rsatishlar, ijara kelishuvlari, to'lovlar va ichki vazifalarni web panel va Telegram bildirishnomalari orqali tartibga soladi.",
    mockupFeed: [
      "Yangi mijoz so'rovi",
      "Ko'rsatish rejalashtirildi",
      "Shartnoma tayyorlanmoqda",
      "To'lov eslatmasi yuborildi",
      "Telegram bildirishnomasi yuborildi",
    ],
  },
  problem: {
    title: "Muammo: hamma narsa Telegram, qo'ng'iroq va eslatmalarda qolib ketadi.",
    items: [
      {
        title: "Mijoz so'rovlari chatlarda yo'qoladi",
        description:
          "Telegram va qo'ng'iroqlar orasida arizalar tarqaladi, mas'ul shaxs va holat aniq emas.",
      },
      {
        title: "Qaysi obyekt kimga ko'rsatilgani aniq emas",
        description:
          "Ko'rsatish tarixi alohida yozuvlarda qoladi, qayta taklif qilish qiyinlashadi.",
      },
      {
        title: "Rieltorlar vazifalarni qo'lda kuzatadi",
        description:
          "Eslatmalar xotirada yoki shaxsiy chatlarda — muddatlar o'tkazib yuboriladi.",
      },
      {
        title: "Ijara shartnomalari va to'lovlar alohida yuritiladi",
        description:
          "Shartlar, depozit va to'lovlar CRMdan ajralgan fayllarda saqlanadi.",
      },
      {
        title: "Rahbar real holatni ko'ra olmaydi",
        description:
          "Voronka, yuklama va kechikishlar bir panelda emas — faqat so'rov bilan bilinadi.",
      },
      {
        title: "Mijozga qayta aloqa kechikadi",
        description:
          "Javob vaqtini kuzatish tizimi yo'q, mijozlar kutishdan ketadi.",
      },
    ],
  },
  solution: {
    title: "Proklix ko'chmas mulk jamoasi uchun nima quradi?",
    items: [
      {
        title: "Mijoz so'rovlari CRM'i",
        description: "Har bir so'rov kartochkada: manba, budjet, hudud, mas'ul rieltor.",
      },
      {
        title: "Obyekt va portfel boshqaruvi",
        description: "E'lonlar, statuslar, narx o'zgarishlari va obyekt tarixi bir joyda.",
      },
      {
        title: "Ko'rsatish / uchrashuv rejalashtirish",
        description: "Vaqt, joy, ishtirokchilar va natija qayd etiladi.",
      },
      {
        title: "Shartnoma va ijara jarayoni",
        description: "Shartlar kelishuvi, hujjat bosqichlari va tasdiqlash yo'nalishi.",
      },
      {
        title: "To'lov va eslatma nazorati",
        description: "Depozit, oylik to'lov va eslatmalar avtomatik kuzatiladi.",
      },
      {
        title: "Telegram bildirishnomalari",
        description: "Yangi so'rov, ko'rsatish va shartnoma bosqichlarida tez xabar.",
      },
      {
        title: "Rahbar paneli va hisobotlar",
        description: "Agent yuklamasi, konversiya va jarayondagi tor joylar ko'rinadi.",
      },
      {
        title: "Vazifa va mas'ul shaxslar nazorati",
        description: "Har bir bosqichda mas'ul, muddat va bajarilish holati.",
      },
    ],
  },
  workflow: {
    title: "Misol: mijozdan ijara shartnomasigacha bo'lgan jarayon",
    steps: [
      {
        title: "Mijoz so'rov yuboradi",
        description: "Sayt, Telegram yoki qo'ng'iroq orqali kelgan so'rov tizimga tushadi.",
      },
      {
        title: "Rieltor budjet, hudud va xonalar sonini kiritadi",
        description: "Talab parametrlari kartochkada saqlanadi, mas'ul belgilanadi.",
      },
      {
        title: "Mos obyektlar tanlanadi",
        description: "Portfeldan filtrlash va mijozga mos variantlar qo'shiladi.",
      },
      {
        title: "Ko'rsatish vaqti belgilanadi",
        description: "Uchrashuv vaqti, joyi va ishtirokchilar rejalashtiriladi.",
      },
      {
        title: "Mijoz qaror qiladi",
        description: "Tanlov, rad etish yoki qo'shimcha variant so'rovi qayd etiladi.",
      },
      {
        title: "Shartnoma va to'lov bosqichi ochiladi",
        description: "Shartlar, depozit va to'lov jadvali workflowga bog'lanadi.",
      },
      {
        title: "Rahbar panelda barcha jarayonni ko'radi",
        description: "Har bir bitim bosqichi va kechikishlar bir ko'rinishda.",
      },
      {
        title: "Telegram orqali bildirishnomalar yuboriladi",
        description: "Jamoa va rahbar muhim o'zgarishlardan darhol xabar topadi.",
      },
    ],
  },
  useCases: {
    title: "Qaysi jarayonlarni raqamlashtirish mumkin?",
    items: [
      {
        title: "Kiralik uy so'rovlari",
        description: "Kiruvchi talablar, filtrlash va tez javob jarayoni.",
      },
      {
        title: "Sotuvdagi obyektlar",
        description: "E'lonlar, narx va ko'rsatishlar bilan bog'langan portfel.",
      },
      {
        title: "Rieltor vazifalari",
        description: "Kunlik topshiriqlar, muddatlar va mas'ullik.",
      },
      {
        title: "Mijoz bilan aloqa tarixi",
        description: "Qo'ng'iroq, uchrashuv va yozishmalar bir kartochkada.",
      },
      {
        title: "Ko'rsatish jadvali",
        description: "Agentlar va obyektlar bo'yicha umumiy taqvim.",
      },
      {
        title: "Depozit va to'lov eslatmalari",
        description: "Muddat yaqinlashganda avtomatik eslatmalar.",
      },
      {
        title: "Hujjatlar va fayllar",
        description: "Shartnomalar va hujjatlar ob'ekt va mijozga bog'langan.",
      },
      {
        title: "Rahbar nazorati",
        description: "Yuklama, konversiya va jarayon holati bir panelda.",
      },
    ],
  },
  beforeAfter: {
    title: "Oldin va keyin",
    before: {
      title: "Oldin",
      items: [
        "Telegram chatlarida tarqoq xabarlar",
        "Excel doim yangilanmaydi",
        "Vazifalar xotirada qoladi",
        "Rahbar kech biladi",
        "Mijozga javob kechikadi",
      ],
    },
    after: {
      title: "Keyin",
      items: [
        "Har bir so'rov tizimga tushadi",
        "Mas'ul shaxs belgilanadi",
        "Har bir bosqich kuzatiladi",
        "Telegram bildirishnomasi bor",
        "Rahbar real holatni ko'radi",
      ],
    },
  },
  miniOffer: {
    title: "Birinchi qadam: bepul jarayon tahlili",
    description:
      "20 daqiqalik suhbatda hozir mijoz so'rovlari, obyektlar, ko'rsatishlar va ijara jarayoni qanday yuritilayotganini ko'rib chiqamiz. Keyin qaysi qismni birinchi bo'lib avtomatlashtirish mumkinligini aniq aytamiz.",
  },
  relatedSectors: {
    title: "Boshqa sohalar uchun ham mos",
    items: [
      { title: "B2B kataloglar", sector: "b2b-katalog" },
      { title: "Agro distribyutorlar", sector: "agro" },
      { title: "Tozalash uskunalari", sector: "oborudovanie" },
      { title: "Logistika", sector: "logistika" },
      { title: "Qurilish", sector: "stroitelstvo" },
      { title: "Servis kompaniyalari", sector: "b2b-katalog" },
    ],
  },
  finalCta: {
    title: "Ko'chmas mulk jarayonlaringizni tartibga solamiz.",
    description:
      "Talab, obyekt, ko'rsatish, shartnoma va to'lov nazoratini bitta panelda yuriting. Jamoa Telegram orqali tez xabar oladi, rahbar esa jarayonni aniq ko'radi.",
  },
};
