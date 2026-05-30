import type { SectorPageContent } from "@/dictionaries/types";
import type { SectorSlug } from "@/lib/sectors";

export const sectorPagesUz: Record<SectorSlug, SectorPageContent> = {
  nedvizhimost: {
    meta: {
      title: "Proklix ko'chmas mulk uchun | Ijara va sotuv CRM va workflow",
      description:
        "Toshkent va O'zbekistondagi ko'chmas mulk agentliklari uchun arizalar, ko'rsatuvlar, shartnomalar va to'lovlarni avtomatlashtirish.",
    },
    hero: {
      title: "Yo'qolgan arizalar va chat xaosisiz ko'chmas mulk",
      subtitle:
        "Proklix mijoz arizalari, ob'ektlar, ko'rsatuvlar, kelishuvlar va to'lovlarni Telegram bildirishnomalari bilan bitta panelda birlashtiradi.",
    },
    problem: {
      title: "Ko'chmas mulkdagi odatiy muammolar",
      items: [
        {
          title: "Arizalar agentlar o'rtasida yo'qoladi",
          description: "Mijoz Telegramga yozadi, menejer ta'tilga chiqadi — ariza unutiladi.",
        },
        {
          title: "Ko'rsatuvlar qayd etilmaydi",
          description: "Umumiy taqvim va statuslar yo'q: kim nima ko'rdi va mijoz nima qaror qildi.",
        },
        {
          title: "Shartnomalar haftalar davomida kelishiladi",
          description: "Ijara shartlari va chegirmalar nazoratsiz shaxsiy yozishmalarga tarqaladi.",
        },
      ],
    },
    solution: {
      title: "Proklix nimalarni avtomatlashtiradi",
      items: [
        {
          title: "Ob'ekt va mijoz CRM",
          description: "Mijoz kartochkalari, e'lonlar, bitim bosqichlari va ko'rsatuv tarixi.",
        },
        {
          title: "Ariza → ko'rsatuv → shartnoma yo'nalishi",
          description: "Har bir bosqichda mas'ul, muddat va Telegram bildirishnomasi.",
        },
        {
          title: "Rahbar paneli",
          description: "Agentlar yuklamasi, ko'rsatuv konversiyasi va jarayondagi tor joylar.",
        },
      ],
    },
    caseStudy: {
      title: "Keys: Toshkentdagi ijara agentligi",
      company: "Ijara kompaniyasi, 12 agent",
      challenge:
        "Arizalar 4 ta Telegram chatga kelardi, Excel haftada bir marta yangilanardi, rahbarlik voronkani ko'ra olmasdi.",
      solution:
        "3 haftada MVP: sayt va Telegram arizalari → CRM → shart kelishuvi → bildirishnomalar.",
      result: "Arizadan ko'rsatuvgacha vaqt 2 kundan 4 soatgacha qisqardi. Haftasiga 6+ soat qo'lda nazoratdan tejash.",
    },
    cta: {
      title: "Agentlik jarayoningizni tahlil qilamiz",
      description: "Bepul 20 daqiqalik tahlil: arizalar, ko'rsatuvlar va shartnomalar bugun qanday o'tadi.",
    },
  },
  "b2b-katalog": {
    meta: {
      title: "Proklix B2B katalog uchun | Arizalar, narxlar va takliflar",
      description:
        "Savdo kompaniyalari uchun CRM va workflow: katalog, arizalar, tijoriy takliflar va kelishuvlar.",
    },
    hero: {
      title: "Ariza va taklif nazorati bilan B2B katalog",
      subtitle:
        "Mahsulotlar, narxlar, mijoz arizalari va taklif tasdiqlash — Excel va chatlar o'rniga bitta tizimda.",
    },
    problem: {
      title: "Savdo kompaniyalari nazoratni qayerda yo'qotadi",
      items: [
        {
          title: "Katalog CRMdan alohida yashaydi",
          description: "Mijoz kutayotganda menejerlar narxlarni turli fayllardan qidiradi.",
        },
        {
          title: "Takliflar kelishuvsiz yuboriladi",
          description: "Chegirmalar va shartlar rahbar tasdig'idan oldin mijozga yetadi.",
        },
        {
          title: "Mijoz tarixi yo'q",
          description: "Qaysi takliflar yuborilgani va bitim qaysi bosqichda ekanligi noaniq.",
        },
      ],
    },
    solution: {
      title: "B2B savdo uchun yechim",
      items: [
        {
          title: "Katalog + sayt arizalari",
          description: "Mijoz mahsulot tanlaydi, menejer arizani panelda va Telegramda oladi.",
        },
        {
          title: "Taklif kelishuv workflow",
          description: "Menejer → rahbar → mijoz, har bir qadam qayd etiladi.",
        },
        {
          title: "Mijoz bazasi va statuslar",
          description: "Barcha kontaktlar, takliflar va bitim bosqichlari bir joyda.",
        },
      ],
    },
    caseStudy: {
      title: "Keys: ulgurji savdo kompaniyasi",
      company: "B2B distribyutor, 800+ SKU",
      challenge:
        "8 menejer Excel va WhatsAppda ishlardi, taklif kelishuvi 2–3 kun davom etardi, ba'zi arizalar yo'qolardi.",
      solution:
        "Arizali katalog sayti, CRM, narx kelishuv yo'nalishi va rahbarlik uchun Telegram ogohlantirishlari.",
      result: "Taklif kelishuvi bir necha soatgacha qisqardi. Jamoa haftasiga 8 soat tejaydi.",
    },
    cta: {
      title: "Katalogingiz uchun qanday ishlashini ko'rsatamiz",
      description: "Savdo jarayoningizni xaritalab, assortimentingizga mos MVP taklif qilamiz.",
    },
  },
  agro: {
    meta: {
      title: "Proklix agro va distribyutsiya uchun | Diler buyurtmalari",
      description:
        "Diler arizalari, buyurtmalar, ombor statuslari va mintaqaviy menejerlarni avtomatlashtirish.",
    },
    hero: {
      title: "Agro va distribyutsiya: buyurtmalar nazorat ostida",
      subtitle:
        "Diler arizalari, buyurtmalar, ombor, mintaqalar va mas'ul menejerlar — bitta panelda.",
    },
    problem: {
      title: "Agro distribyutsiyadagi muammolar",
      items: [
        {
          title: "Diler buyurtmalari messenjerlarda",
          description: "Buyurtmalar chatlarga keladi, ombor kech xabar topadi.",
        },
        {
          title: "Mintaqalarda shaffoflik yo'q",
          description: "Rahbarlik mintaqalar bo'yicha menejerlar yuklamasini ko'ra olmaydi.",
        },
        {
          title: "Buyurtma statuslari qo'lda yangilanadi",
          description: "Mijozlar buyurtma qayerdaligini bilish uchun qo'ng'iroq qiladi — yagona tizim yo'q.",
        },
      ],
    },
    solution: {
      title: "Agro biznes uchun Proklix",
      items: [
        {
          title: "Diler portali",
          description: "Veb-forma yoki Telegram bot orqali buyurtmalar CRMga qayd etiladi.",
        },
        {
          title: "Ombor va statuslar",
          description: "Bosqichlar: qabul qilindi → yig'ilmoqda → yuborildi — bildirishnomalar bilan.",
        },
        {
          title: "Mintaqaviy hisobotlar",
          description: "Menejerlar yuklamasi, mintaqalar bo'yicha hajmlar va tor joylar.",
        },
      ],
    },
    caseStudy: {
      title: "Keys: agrokimyo distribyutori",
      company: "Agro kompaniya, 5 mintaqa",
      challenge:
        "40+ diler buyurtmalarni Telegramda yozardi, ombor Excelda ishlardi, kechikishlar 2 kungacha cho'zilar edi.",
      solution:
        "Yagona buyurtma tizimi, status kuzatuvi, diler bildirishnomalari va mintaqaviy menejer paneli.",
      result: "Buyurtma qayta ishlash vaqti 60% qisqardi. Muvofiqlashtirishda haftasiga 10 soat tejash.",
    },
    cta: {
      title: "Agro jarayoningizni avtomatlashtiramiz",
      description: "Zanjirni tahlil qilamiz: diler → menejer → ombor → yetkazib berish.",
    },
  },
  oborudovanie: {
    meta: {
      title: "Proklix uskunalar uchun | Katalog, maslahat va takliflar",
      description:
        "Uskuna savdosi uchun CRM: katalog, to'plamlar, arizalar va tijoriy takliflar.",
    },
    hero: {
      title: "Texnik uskunalar: arizadan taklifgacha",
      subtitle:
        "Katalog, maslahatlar, to'plamlar, arizalar va taklif kelishuvi — chat xaosisiz.",
    },
    problem: {
      title: "Uskuna savdosining murakkabligi",
      items: [
        {
          title: "Uzoq maslahat tsikli",
          description: "Texnik savollar muhandis va savdo menejeri o'rtasida yo'qoladi.",
        },
        {
          title: "To'plamlar qo'lda hisoblanadi",
          description: "Taklif spetsifikatsiyasi Excelda yig'iladi, xatolar bo'ladi.",
        },
        {
          title: "Marja nazoratisiz takliflar",
          description: "Chegirmalar og'zaki kelishiladi, rahbar keyin biladi.",
        },
      ],
    },
    solution: {
      title: "Texnik savdo uchun tizim",
      items: [
        {
          title: "To'plamli katalog",
          description: "Mahsulotlar, moslik, standart to'plamlar va tez takliflar.",
        },
        {
          title: "Ariza → hisob → kelishuv",
          description: "Muhandis aniqlashtiradi, menejer hisoblaydi, rahbar tasdiqlaydi.",
        },
        {
          title: "Loyiha tarixi",
          description: "Har bir mijoz bo'yicha barcha taklif versiyalari va muloqot.",
        },
      ],
    },
    caseStudy: {
      title: "Keys: sanoat uskunalari yetkazib beruvchi",
      company: "B2B, 15 muhandis va menejer",
      challenge:
        "Maslahatlar Telegramda, takliflar Wordda, marja kelishuvi 3–5 kun davom etardi.",
      solution:
        "Texnik kartochkali CRM, taklif workflow va har bir bosqichda Telegram ogohlantirishlari.",
      result: "Taklif tsikli 1 kungacha qisqardi. Jamoa haftasiga 7 soat tejaydi.",
    },
    cta: {
      title: "Uskunangizga mos jarayonni sozlaymiz",
      description: "Maslahatlar, hisob-kitob va kelishuvlar bugun qanday o'tishini tahlil qilamiz.",
    },
  },
  logistika: {
    meta: {
      title: "Proklix logistika uchun | Arizalar, hujjatlar va yetkazish statusi",
      description:
        "Logistika va TIT uchun workflow: arizalar, hujjatlar, yetkazish bosqichlari va mijoz bildirishnomalari.",
    },
    hero: {
      title: "Logistika va TIT: har bir bosqich nazorat ostida",
      subtitle:
        "Arizalar, hujjatlar, yetkazish bosqichlari, statuslar va mijoz bildirishnomalari — bitta tizimda.",
    },
    problem: {
      title: "Logistika jarayoni qayerda buziladi",
      items: [
        {
          title: "Hujjatlar har joyda",
          description: "Yuk xati, deklaratsiyalar va yozishmalar ariza bilan bog'lanmagan.",
        },
        {
          title: "Mijoz statusni bilmaydi",
          description: "Menejerlar yuk joyi haqidagi bir xil savollarga qayta-qayta javob beradi.",
        },
        {
          title: "Bosqichlar qayd etilmaydi",
          description: "Kechikish qayerda noaniq: bojxona, ombor yoki yetkazish.",
        },
      ],
    },
    solution: {
      title: "Logistika uchun Proklix",
      items: [
        {
          title: "Bosqich kuzatuvi",
          description: "Har bir bosqichda mas'ul, muddat va avtomatik bildirishnoma.",
        },
        {
          title: "Yuk tashish bo'yicha hujjatlar",
          description: "Barcha fayllar va statuslar aniq yuk tashishga bog'langan.",
        },
        {
          title: "Mijoz portali",
          description: "Mijoz menejerga qo'ng'iroq qilmasdan statusni ko'radi.",
        },
      ],
    },
    caseStudy: {
      title: "Keys: logistika kompaniyasi",
      company: "Xalqaro yuk tashish, 20 menejer",
      challenge:
        "Statuslar Excelda yangilanardi, mijozlar har bir yuk tashish bo'yicha 3–4 marta qo'ng'iroq qilardi.",
      solution:
        "Yetkazish bosqichli CRM, hujjat yuklash va mijozlarga Telegram/SMS bildirishnomalari.",
      result: "'Yukim qayerda' so'rovlari 70% kamaydi. Muloqotda haftasiga 12 soat tejash.",
    },
    cta: {
      title: "Logistika jarayoningizni raqamlashtiramiz",
      description: "Arizadan yetkazishgacha zanjir va avtomatlashtirish nuqtalarini tahlil qilamiz.",
    },
  },
  stroitelstvo: {
    meta: {
      title: "Proklix qurilish uchun | Vazifalar, kelishuvlar va maydon hisobotlari",
      description:
        "Qurilish maydonlarida vazifa boshqaruvi, kelishuvlar, foto hisobotlar va arizalar.",
    },
    hero: {
      title: "Qurilish: maydonda vazifalar va kelishuvlar",
      subtitle:
        "Vazifalar, kelishuvlar, foto hisobotlar, arizalar va bajarish nazorati — ofissiz ham.",
    },
    problem: {
      title: "Qurilish loyihalaridagi muammolar",
      items: [
        {
          title: "Vazifalar WhatsAppda",
          description: "Usta chatda beradi — hech kim bajarilishni kuzatmaydi.",
        },
        {
          title: "Qog'ozdagi kelishuvlar",
          description: "Loyiha o'zgarishlari kunlar davomida imzo kutadi, ishlar to'xtaydi.",
        },
        {
          title: "Foto hisobotlar yo'qoladi",
          description: "Maydon suratlari chatlarga tarqalgan, yagona tarix yo'q.",
        },
      ],
    },
    solution: {
      title: "Qurilish uchun Proklix",
      items: [
        {
          title: "Mas'ullari bilan vazifalar",
          description: "Topshiriq, muddat, foto tasdiq va Telegram bildirishnomasi.",
        },
        {
          title: "Raqamli kelishuvlar",
          description: "Yo'nalish: usta → muhandis → rahbar — qaror tarixi bilan.",
        },
        {
          title: "Ob'ekt bo'yicha foto hisobotlar",
          description: "Barcha suratlar ob'ekt, bosqich va sanaga bog'langan.",
        },
      ],
    },
    caseStudy: {
      title: "Keys: general pudratchi",
      company: "Qurilish kompaniyasi, 6 ob'ekt",
      challenge:
        "Vazifalar 5 chatda, o'zgarish kelishuvlari bir haftagacha cho'zilar edi, rahbar har bir ob'ektga borardi.",
      solution:
        "Mobil vazifa paneli, kelishuv workflow va Telegram ogohlantirishli foto hisobotlar.",
      result: "O'zgarish kelishuvi 5 kun o'rniga 1 kun. Nazoratda haftasiga 9 soat tejash.",
    },
    cta: {
      title: "Ob'ektlaringizda tartib o'rnatamiz",
      description: "Vazifalar, kelishuvlar va hisobotlar bugun qanday o'tishini tahlil qilamiz.",
    },
  },
};
