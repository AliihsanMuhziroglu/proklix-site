import type { BlogArticle } from "@/dictionaries/types";
import type { BlogSlug } from "@/lib/blog";

export const blogArticlesUz: Record<BlogSlug, BlogArticle> = {
  "crm-nedir": {
    meta: {
      title: "CRM nima? | Proklix Blog",
      description:
        "CRM nima, O'zbekistondagi B2B kompaniyalar nima uchun kerak va murakkab ERPsiz qanday boshlash mumkin.",
    },
    title: "CRM nima? B2B biznes uchun sodda tushuntirish",
    excerpt:
      "CRM, bu mavhum 'katta tizim' emas, balki mijozlar, arizalar va bitim tarixi yashaydigan joy.",
    date: "2026-05-15",
    readTime: "5 daqiqa",
    sections: [
      {
        paragraphs: [
          "CRM (Customer Relationship Management), mijozlar bilan munosabatlarni boshqarish tizimi. B2Bda bu birinchi navbatda quyidagilarni anglatadi: mijoz kim, qanday arizalar qoldirgan, bitim qaysi bosqichda va qaysi menejer mas'ul.",
          "O'zbekistondagi ko'plab kompaniyalar mijozlarni Excel va Telegramda yuritadi. Ariza kam bo'lganda bu ishlaydi. Kuniga 20–30 arizaga yetganda nazorat yo'qoladi: arizalar yo'qoladi, rahbarlik voronkani ko'ra olmaydi, tarix chatlarga tarqaladi.",
        ],
      },
      {
        heading: "CRM Exceldan qanday farq qiladi",
        paragraphs: [
          "Excel, jadval. CRM, jarayon: ariza → mas'ul → bosqich → bildirishnoma → tarix. CRMda har bir harakat qayd etiladi, katakchaga yozib qayta yozilmaydi.",
          "Mahalliy B2B uchun yaxshi CRM bir yillik joriy etishni talab qilmaydi. Bitta jarayondan boshlang, masalan, saytdan keladigan arizalar, va o'sib borishingiz bilan kengayting.",
        ],
      },
      {
        heading: "Qayerdan boshlash kerak",
        paragraphs: [
          "1. Bitta jarayonni aniqlang: arizalar, takliflar yoki kelishuvlar.",
          "2. Chatlardan Telegram bildirishnomali tizimga o'tkazing.",
          "3. Rollarni qo'shing: menejer, rahbar, hisobotlar.",
          "Proklix aynan shunday tizimlarni quradi, 'bir yillik platforma' emas, MVPdan boshlab.",
        ],
      },
    ],
  },
  "telegram-avtomatizasyon": {
    meta: {
      title: "Telegram orqali biznes avtomatlashtirish | Proklix Blog",
      description:
        "Telegramni biznes avtomatlashtirish uchun qanday ishlatish: bildirishnomalar, arizalar va jarayon nazorati.",
    },
    title: "Telegram orqali biznes avtomatlashtirish: amaliy yondashuv",
    excerpt:
      "Telegram, O'zbekistonda biznesning asosiy messenjeri. Faqat yozishma uchun emas, jarayonlarni avtomatlashtirish uchun ham foydalaning.",
    date: "2026-05-20",
    readTime: "6 daqiqa",
    sections: [
      {
        paragraphs: [
          "O'zbekistonda B2B muloqotning ko'p qismi Telegram orqali o'tadi. Menejerlar arizalarni guruh chatlarida oladi, rahbarlar narxlarni shaxsiy xabarlarda kelishadi, ombor buyurtmalar haqida kech xabar topadi.",
          "Muammo Telegramda emas, muammo jarayon faqat yozishmalarda yashashida. Yechim: Telegram bildirishnoma kanali + veb-panel haqiqat manbai sifatida.",
        ],
      },
      {
        heading: "Telegram orqali nimalarni avtomatlashtirish kerak",
        paragraphs: [
          "• Yangi ariza → mas'ul menejerga bildirishnoma",
          "• Taklif kelishuv kutmoqda → rahbarga signal",
          "• Buyurtma statusi o'zgardi → mijoz yoki dilerga xabar",
          "• Vazifa muddati o'tdi → ijrochiga eslatma",
        ],
      },
      {
        heading: "Telegram + CRM: to'g'ri bog'lanish",
        paragraphs: [
          "Telegram CRM o'rnini bosmaydi, uni to'ldiradi. Barcha ma'lumotlar, tarix va hisobotlar panelda. Telegram tez signallar va harakatlar uchun.",
          "Proklix Telegram-first tizimlar quradi: jamoa odatdagi vositadan foydalanadi, rahbarlik panel orqali nazorat oladi.",
        ],
      },
    ],
  },
  "b2b-katalog": {
    meta: {
      title: "B2B katalog qanday quriladi? | Proklix Blog",
      description:
        "Arizalar, narxlar va CRM bilan B2B katalog yaratish, savdo kompaniyalari uchun bosqichma-bosqich yo'l.",
    },
    title: "B2B katalog qanday quriladi? Bosqichma-bosqich reja",
    excerpt:
      "B2B katalog, bu saytdagi oddiy mahsulot ro'yxati emas. Bu arizalar, narxlar va tijoriy takliflar uchun kirish nuqtasi.",
    date: "2026-05-25",
    readTime: "7 daqiqa",
    sections: [
      {
        paragraphs: [
          "Savdo kompaniyalari ko'pincha PDF narx ro'yxati yoki Excel jadvalidan boshlaydi. Mijoz qo'ng'iroq qiladi, menejer narx qidiradi, Wordda taklif tayyorlaydi, jarayon soatlar oladi.",
          "Zamonaviy B2B katalog uch vazifani hal qiladi: assortimentni ko'rsatish, ariza qabul qilish va uni CRM hamda kelishuv jarayoniga bog'lash.",
        ],
      },
      {
        heading: "B2B katalog tuzilmasi",
        paragraphs: [
          "1. Kategoriyalar va filtrlar, mijoz kerakli mahsulotni tez topadi",
          "2. Mahsulot kartochkasi, tavsif, xususiyatlar, mavjudligi",
          "3. Ariza formasi yoki 'narx so'rash', qo'ng'iroqsiz",
          "4. Mijoz kabineti (ixtiyoriy), ariza tarixi va statuslar",
        ],
      },
      {
        heading: "CRM va workflow bilan bog'lanish",
        paragraphs: [
          "Katalog arizasi avtomatik CRMga tushishi kerak: mas'ul, status, muddat. Narx kelishuvi kerak bo'lsa, yo'nalish menejer → rahbar → mijoz.",
          "Proklix to'liq integratsiyali kataloglar quradi: sayt + CRM + Telegram + kelishuvlar. MVP bir necha haftada ishga tushirilishi mumkin.",
        ],
      },
    ],
  },
};
