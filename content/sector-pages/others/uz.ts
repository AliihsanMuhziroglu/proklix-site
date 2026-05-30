import type { SectorPageContent } from "@/dictionaries/types";
import type { SectorSlug } from "@/lib/sectors";
import {
  createSectorPage,
  defaultRelatedUz,
  makeBeforeAfter,
  makeUseCases,
  makeWorkflowSteps,
  relatedExcept,
} from "../templates";

const beforeItems = [
  "Telegram chatlarida tarqoq xabarlar",
  "Excel doim yangilanmaydi",
  "Vazifalar xotirada qoladi",
  "Rahbar kech biladi",
  "Mijozga javob kechikadi",
];

const afterItems = [
  "Har bir so'rov tizimga tushadi",
  "Mas'ul shaxs belgilanadi",
  "Har bir bosqich kuzatiladi",
  "Telegram bildirishnomasi bor",
  "Rahbar real holatni ko'radi",
];

export const otherSectorsUz: Record<
  Exclude<SectorSlug, "nedvizhimost">,
  SectorPageContent
> = {
  "b2b-katalog": createSectorPage({
    meta: {
      title: "B2B katalog CRM va workflow | Proklix",
      description:
        "Proklix savdo kompaniyalari uchun katalog, mijoz so'rovlari, tijoriy takliflar va kelishuv jarayonini bitta panelda boshqarishga yordam beradi.",
    },
    breadcrumb: { sectorName: "B2B katalog" },
    hero: {
      title: "B2B katalog, so'rov va taklif jarayonlarini bitta tizimda boshqaring.",
      subtitle:
        "Proklix savdo kompaniyalari uchun mahsulot katalogi, mijoz so'rovlari, narx kelishuvi, tasdiqlar va Telegram bildirishnomalarini birlashtiradi.",
      mockupFeed: [
        "Yangi katalog so'rovi",
        "Taklif tayyorlanmoqda",
        "Rahbar tasdig'i kutilmoqda",
        "Mijozga yuborildi",
        "Telegram bildirishnomasi yuborildi",
      ],
    },
    problem: {
      title: "Muammo: katalog, so'rovlar va takliflar alohida yuritiladi.",
      items: [
        { title: "Katalog CRMdan ajralgan", description: "Menejerlar narxlarni turli fayllardan qidiradi." },
        { title: "Takliflar kelishuvsiz yuboriladi", description: "Chegirmalar rahbar tasdig'idan oldin mijozga yetadi." },
        { title: "Mijoz tarixi yo'q", description: "Qaysi takliflar yuborilgani va bitim holati noaniq." },
        { title: "So'rovlar chatlarda yo'qoladi", description: "Sayt va Telegram arizalari tartibsiz qabul qilinadi." },
        { title: "Rahbar real holatni ko'rmaydi", description: "Taklif va tasdiq bosqichlari bir panelda emas." },
        { title: "Javob vaqt kechikadi", description: "Mas'ul shaxs va muddat aniq belgilanmaydi." },
      ],
    },
    solution: {
      title: "Proklix B2B savdo jamoasi uchun nima quradi?",
      items: [
        { title: "Katalog va sayt so'rovlari", description: "Mahsulot tanlash va ariza to'g'ridan-to'g'ri CRMga tushadi." },
        { title: "Mijozlar bazasi", description: "Kontaktlar, takliflar va bitim tarixi bir joyda." },
        { title: "Taklif kelishuv workflow", description: "Menejer → rahbar → mijoz, har qadam qayd etiladi." },
        { title: "Narx va chegirma nazorati", description: "Tasdiqlashsiz chegirma yuborilmaydi." },
        { title: "Telegram bildirishnomalari", description: "Yangi so'rov va tasdiq bosqichlarida tez xabar." },
        { title: "Rahbar paneli", description: "Takliflar, konversiya va kechikishlar ko'rinadi." },
        { title: "Vazifa va mas'ullik", description: "Har bir so'rov uchun mas'ul va muddat." },
        { title: "Hisobotlar", description: "Savdo voronkasi va menejer yuklamasi." },
      ],
    },
    workflow: makeWorkflowSteps("Misol: katalog so'rovidan taklifgacha", [
      ["Mijoz katalogdan so'rov yuboradi", "Sayt yoki Telegram orqali ariza tizimga tushadi."],
      ["Menejer mahsulot va miqdorni kiritadi", "Narx va shartlar kartochkada saqlanadi."],
      ["Tijoriy taklif tayyorlanadi", "Standart shablon va narx jadvali ishlatiladi."],
      ["Rahbar tasdiqlaydi", "Chegirma va shartlar workflow orqali kelishiladi."],
      ["Taklif mijozga yuboriladi", "Versiya va vaqt qayd etiladi."],
      ["Mijoz javob beradi", "Qabul, rad yoki qo'shimcha savollar qayd etiladi."],
      ["Rahbar panelda jarayonni ko'radi", "Barcha bosqichlar va kechikishlar bir ko'rinishda."],
      ["Telegram bildirishnomalari yuboriladi", "Jamoa muhim o'zgarishlardan xabar topadi."],
    ]),
    useCases: makeUseCases("Qaysi jarayonlarni raqamlashtirish mumkin?", [
      ["Katalog so'rovlari", "Saytdan va messenjerlardan kelgan arizalar."],
      ["Tijoriy takliflar", "Versiyalar, tasdiq va yuborish tarixi."],
      ["Narx kelishuvi", "Chegirma va shartlar workflowi."],
      ["Mijoz aloqa tarixi", "Qo'ng'iroq, taklif va yozishmalar."],
      ["Menejer vazifalari", "Kunlik topshiriqlar va muddatlar."],
      ["Rahbar tasdiqlari", "Kutilayotgan qarorlar ro'yxati."],
      ["Hujjatlar va fayllar", "Taklif va shartnomalar biriktirilgan."],
      ["Savdo hisobotlari", "Voronka va konversiya ko'rsatkichlari."],
    ]),
    beforeAfter: makeBeforeAfter("Oldin va keyin", "Oldin", "Keyin", beforeItems, afterItems),
    miniOffer: {
      title: "Birinchi qadam: bepul jarayon tahlili",
      description:
        "20 daqiqada katalog, so'rov va taklif jarayoningizni ko'rib chiqamiz. Qaysi qismni birinchi avtomatlashtirish mumkinligini aniq aytamiz.",
    },
    relatedSectors: {
      title: "Boshqa sohalar uchun ham mos",
      items: relatedExcept("b2b-katalog", defaultRelatedUz).slice(0, 6),
    },
    finalCta: {
      title: "B2B savdo jarayonlaringizni tartibga solamiz.",
      description:
        "Katalog, so'rov, taklif va tasdiq nazoratini bitta panelda yuriting. Jamoa Telegram orqali tez xabar oladi.",
    },
  }),
  agro: createSectorPage({
    meta: {
      title: "Agro distribyutsiya CRM va workflow | Proklix",
      description:
        "Proklix agro kompaniyalari uchun diler buyurtmalari, ombor statuslari, mintaqaviy menejerlar va Telegram bildirishnomalarini bitta panelda boshqaradi.",
    },
    breadcrumb: { sectorName: "Agro distribyutsiya" },
    hero: {
      title: "Diler buyurtmalari, ombor va mintaqaviy jarayonlarni bitta tizimda boshqaring.",
      subtitle:
        "Proklix agro distribyutorlari uchun buyurtmalar, ombor statuslari, mintaqaviy menejerlar va ichki vazifalarni web panel va Telegram orqali tartibga soladi.",
      mockupFeed: [
        "Yangi diler buyurtmasi",
        "Omborda yig'ilmoqda",
        "Yetkazib berish rejalashtirildi",
        "Status yangilandi",
        "Telegram bildirishnomasi yuborildi",
      ],
    },
    problem: {
      title: "Muammo: buyurtmalar messenjerda, ombor alohida ishlaydi.",
      items: [
        { title: "Buyurtmalar chatlarda", description: "Diler yozadi, ombor kech xabar topadi." },
        { title: "Mintaqalarda shaffoflik yo'q", description: "Menejer yuklamasi va hajmlar ko'rinmaydi." },
        { title: "Statuslar qo'lda yangilanadi", description: "Mijozlar qo'ng'iroq qilib holat so'raydi." },
        { title: "Ombor va savdo alohida", description: "Excel va chatlar sinxron emas." },
        { title: "Rahbar kech biladi", description: "Kechikish sabablari va tor joylar aniq emas." },
        { title: "Vazifalar tarqalgan", description: "Mas'ul shaxs va muddat belgilanmaydi." },
      ],
    },
    solution: {
      title: "Proklix agro jamoasi uchun nima quradi?",
      items: [
        { title: "Diler buyurtma portali", description: "Veb-forma yoki Telegram orqali buyurtmalar CRMga tushadi." },
        { title: "Ombor va status kuzatuvi", description: "Qabul → yig'ish → yuborish bosqichlari." },
        { title: "Mintaqaviy menejer paneli", description: "Hududlar bo'yicha yuklama va hajmlar." },
        { title: "Telegram bildirishnomalari", description: "Yangi buyurtma va status o'zgarishlarida xabar." },
        { title: "Mijoz aloqa tarixi", description: "Diler kartochkasi va barcha buyurtmalar." },
        { title: "Vazifa nazorati", description: "Mas'ul, muddat va bajarilish holati." },
        { title: "Rahbar hisobotlari", description: "Mintaqalar, kechikishlar va tor joylar." },
        { title: "Hujjatlar va fayllar", description: "Buyurtma hujjatlari biriktirilgan." },
      ],
    },
    workflow: makeWorkflowSteps("Misol: diler buyurtmasidan yetkazishgacha", [
      ["Diler buyurtma yuboradi", "Portal yoki Telegram orqali ariza tizimga tushadi."],
      ["Menejer buyurtmani tasdiqlaydi", "Miqdor, narx va yetkazish shartlari kiritiladi."],
      ["Omborga vazifa beriladi", "Yig'ish va tayyorlash bosqichi ochiladi."],
      ["Status yangilanadi", "Har bir bosqichda mas'ul va vaqt qayd etiladi."],
      ["Yetkazib berish rejalashtiriladi", "Marshrut va sana belgilanadi."],
      ["Diler xabar oladi", "Telegram orqali status bildirishnomasi yuboriladi."],
      ["Rahbar panelda ko'radi", "Mintaqalar bo'yicha buyurtmalar va kechikishlar."],
      ["Hisobot va tahlil", "Hajm, vaqt va tor joylar tahlil qilinadi."],
    ]),
    useCases: makeUseCases("Qaysi jarayonlarni raqamlashtirish mumkin?", [
      ["Diler buyurtmalari", "Kiruvchi talab va tasdiqlash."],
      ["Ombor statuslari", "Yig'ish, tayyorlash, yuborish."],
      ["Mintaqaviy savdo", "Menejer yuklamasi va hajmlar."],
      ["Yetkazib berish", "Marshrut va vaqt rejalashtirish."],
      ["Mijoz aloqa tarixi", "Diler kartochkalari va buyurtmalar."],
      ["Ichki vazifalar", "Ombor va savdo o'rtasidagi koordinatsiya."],
      ["Rahbar nazorati", "Kechikishlar va tor joylar."],
      ["Telegram bildirishnomalar", "Tez status xabarlari."],
    ]),
    beforeAfter: makeBeforeAfter("Oldin va keyin", "Oldin", "Keyin", beforeItems, afterItems),
    miniOffer: {
      title: "Birinchi qadam: bepul jarayon tahlili",
      description:
        "20 daqiqada diler → menejer → ombor → yetkazish zanjirini ko'rib chiqamiz va avtomatlashtirish nuqtalarini aniqlaymiz.",
    },
    relatedSectors: {
      title: "Boshqa sohalar uchun ham mos",
      items: relatedExcept("agro", defaultRelatedUz).slice(0, 6),
    },
    finalCta: {
      title: "Agro distribyutsiya jarayonlaringizni tartibga solamiz.",
      description: "Buyurtma, ombor va yetkazish nazoratini bitta panelda yuriting.",
    },
  }),
  oborudovanie: createSectorPage({
    meta: {
      title: "Uskuna savdosi CRM va workflow | Proklix",
      description:
        "Proklix uskuna savdosi uchun katalog, maslahat, hisob-kitob, taklif kelishuvi va Telegram bildirishnomalarini bitta panelda boshqaradi.",
    },
    breadcrumb: { sectorName: "Uskuna savdosi" },
    hero: {
      title: "Texnik uskuna savdosida maslahat, hisob va taklif jarayonlarini bitta tizimda boshqaring.",
      subtitle:
        "Proklix uskuna yetkazib beruvchilari uchun katalog, texnik maslahat, to'plamlar, tijoriy takliflar va tasdiqlash workflowini birlashtiradi.",
      mockupFeed: [
        "Yangi texnik so'rov",
        "Muhandis tekshiruvi",
        "Taklif hisoblanmoqda",
        "Rahbar tasdig'i",
        "Telegram bildirishnomasi yuborildi",
      ],
    },
    problem: {
      title: "Muammo: maslahat, hisob va taklif alohida yuritiladi.",
      items: [
        { title: "Uzoq maslahat tsikli", description: "Texnik savollar muhandis va menejer o'rtasida yo'qoladi." },
        { title: "To'plamlar qo'lda hisoblanadi", description: "Excelda yig'iladi, xatolar bo'ladi." },
        { title: "Marja nazoratisiz takliflar", description: "Chegirmalar og'zaki kelishiladi." },
        { title: "Versiyalar aralashadi", description: "Taklifning qaysi versiyasi yuborilgani noaniq." },
        { title: "Rahbar kech biladi", description: "Kelishuv va marja holati bir panelda emas." },
        { title: "Mijozga javob kechikadi", description: "Texnik tekshiruv va hisob vaqt oladi." },
      ],
    },
    solution: {
      title: "Proklix uskuna savdo jamoasi uchun nima quradi?",
      items: [
        { title: "To'plamli katalog", description: "Mahsulotlar, moslik va standart to'plamlar." },
        { title: "Ariza → hisob → kelishuv", description: "Muhandis, menejer va rahbar workflowi." },
        { title: "Texnik kartochkalar", description: "Spetsifikatsiya va maslahat tarixi." },
        { title: "Taklif versiyalari", description: "Har bir versiya va o'zgarish qayd etiladi." },
        { title: "Telegram bildirishnomalari", description: "Tekshiruv va tasdiq bosqichlarida xabar." },
        { title: "Marja nazorati", description: "Tasdiqlashsiz chegirma yuborilmaydi." },
        { title: "Rahbar paneli", description: "Takliflar, marja va kechikishlar." },
        { title: "Loyiha tarixi", description: "Mijoz bo'yicha barcha taklif va muloqot." },
      ],
    },
    workflow: makeWorkflowSteps("Misol: texnik so'rovdan taklifgacha", [
      ["Mijoz texnik so'rov yuboradi", "Katalog yoki sayt orqali ariza tushadi."],
      ["Muhandis spetsifikatsiyani tekshiradi", "Moslik va to'plam aniqlanadi."],
      ["Menejer narx hisoblaydi", "Marja va shartlar kiritiladi."],
      ["Rahbar tasdiqlaydi", "Chegirma va yakuniy taklif kelishiladi."],
      ["Taklif mijozga yuboriladi", "Versiya va vaqt qayd etiladi."],
      ["Mijoz javob beradi", "Qo'shimcha savollar yoki qabul qayd etiladi."],
      ["Rahbar panelda ko'radi", "Barcha loyihalar va bosqichlar bir joyda."],
      ["Telegram bildirishnomalari", "Jamoa muhim o'zgarishlardan xabar topadi."],
    ]),
    useCases: makeUseCases("Qaysi jarayonlarni raqamlashtirish mumkin?", [
      ["Texnik maslahatlar", "Savollar va javoblar tarixi."],
      ["To'plam hisob-kitoblari", "Standart va maxsus to'plamlar."],
      ["Tijoriy takliflar", "Versiyalar va tasdiq."],
      ["Marja kelishuvi", "Chegirma workflowi."],
      ["Mijoz loyiha tarixi", "Barcha taklif va muloqot."],
      ["Muhandis vazifalari", "Tekshiruv va muddatlar."],
      ["Rahbar nazorati", "Marja va konversiya."],
      ["Hujjatlar", "Spetsifikatsiya va taklif fayllari."],
    ]),
    beforeAfter: makeBeforeAfter("Oldin va keyin", "Oldin", "Keyin", beforeItems, afterItems),
    miniOffer: {
      title: "Birinchi qadam: bepul jarayon tahlili",
      description:
        "Maslahat, hisob-kitob va kelishuvlar bugun qanday o'tishini ko'rib chiqamiz va avtomatlashtirish rejasini tuzamiz.",
    },
    relatedSectors: {
      title: "Boshqa sohalar uchun ham mos",
      items: relatedExcept("oborudovanie", defaultRelatedUz).slice(0, 6),
    },
    finalCta: {
      title: "Uskuna savdo jarayonlaringizni tartibga solamiz.",
      description: "Maslahat, hisob, taklif va tasdiq nazoratini bitta panelda yuriting.",
    },
  }),
  logistika: createSectorPage({
    meta: {
      title: "Logistika CRM va workflow | Proklix",
      description:
        "Proklix logistika kompaniyalari uchun arizalar, hujjatlar, yetkazish bosqichlari va Telegram bildirishnomalarini bitta panelda boshqaradi.",
    },
    breadcrumb: { sectorName: "Logistika" },
    hero: {
      title: "Yuk tashish arizalari, hujjatlar va yetkazish bosqichlarini bitta tizimda boshqaring.",
      subtitle:
        "Proklix logistika va TIT kompaniyalari uchun arizalar, hujjatlar, yetkazish statuslari va mijoz bildirishnomalarini web panel va Telegram orqali tartibga soladi.",
      mockupFeed: [
        "Yangi yuk tashish arizasi",
        "Hujjatlar yuklandi",
        "Bojxonada",
        "Yetkazib berishda",
        "Telegram bildirishnomasi yuborildi",
      ],
    },
    problem: {
      title: "Muammo: hujjatlar va statuslar tarqoq saqlanadi.",
      items: [
        { title: "Hujjatlar har joyda", description: "Yuk xati va deklaratsiyalar ariza bilan bog'lanmagan." },
        { title: "Mijoz statusni bilmaydi", description: "Menejerlar bir xil savollarga javob beradi." },
        { title: "Bosqichlar qayd etilmaydi", description: "Kechikish qayerda noaniq." },
        { title: "Koordinatsiya qiyin", description: "Ombor, bojxona va yetkazish alohida ishlaydi." },
        { title: "Rahbar kech biladi", description: "Yuk holati bir panelda emas." },
        { title: "Vazifalar tarqalgan", description: "Mas'ul va muddat aniq emas." },
      ],
    },
    solution: {
      title: "Proklix logistika jamoasi uchun nima quradi?",
      items: [
        { title: "Bosqich kuzatuvi", description: "Har bosqichda mas'ul, muddat va bildirishnoma." },
        { title: "Yuk hujjatlari", description: "Fayllar aniq yuk tashishga bog'langan." },
        { title: "Mijoz status portali", description: "Mijoz menejerga qo'ng'iroq qilmasdan ko'radi." },
        { title: "Telegram bildirishnomalari", description: "Status o'zgarishlarida tez xabar." },
        { title: "Ichki vazifalar", description: "Koordinatsiya va muddat nazorati." },
        { title: "Rahbar paneli", description: "Yuklar, kechikishlar va tor joylar." },
        { title: "Ariza tarixi", description: "Mijoz bo'yicha barcha yuk tashishlar." },
        { title: "Hisobotlar", description: "Vaqt, bosqich va kechikish tahlili." },
      ],
    },
    workflow: makeWorkflowSteps("Misol: arizadan yetkazishgacha", [
      ["Mijoz yuk tashish arizasi yuboradi", "Sayt yoki Telegram orqali ariza tushadi."],
      ["Menejer shartlarni kiritadi", "Marshrut, hajm va muddat belgilanadi."],
      ["Hujjatlar yuklanadi", "Barcha fayllar yuk tashishga biriktiriladi."],
      ["Bosqichlar kuzatiladi", "Ombor, bojxona, yetkazish statuslari yangilanadi."],
      ["Mijoz xabar oladi", "Telegram orqali status bildirishnomasi."],
      ["Kechikish aniqlansa ogohlantirish", "Mas'ul shaxs va rahbar xabar topadi."],
      ["Rahbar panelda ko'radi", "Barcha yuklar va holat bir ko'rinishda."],
      ["Yakuniy hisobot", "Vaqt va bosqichlar tahlil qilinadi."],
    ]),
    useCases: makeUseCases("Qaysi jarayonlarni raqamlashtirish mumkin?", [
      ["Yuk tashish arizalari", "Kiruvchi talab va tasdiqlash."],
      ["Hujjat boshqaruvi", "Yuk xati, deklaratsiya, fayllar."],
      ["Yetkazish statuslari", "Bosqichlar va vaqt."],
      ["Mijoz bildirishnomalari", "Telegram va status portali."],
      ["Ichki koordinatsiya", "Ombor, bojxona, yetkazish."],
      ["Menejer vazifalari", "Mas'ul va muddatlar."],
      ["Rahbar nazorati", "Kechikishlar va tor joylar."],
      ["Mijoz tarixi", "Barcha yuk tashishlar bir joyda."],
    ]),
    beforeAfter: makeBeforeAfter("Oldin va keyin", "Oldin", "Keyin", beforeItems, afterItems),
    miniOffer: {
      title: "Birinchi qadam: bepul jarayon tahlili",
      description:
        "Arizadan yetkazishgacha zanjirni ko'rib chiqamiz va avtomatlashtirish nuqtalarini aniqlaymiz.",
    },
    relatedSectors: {
      title: "Boshqa sohalar uchun ham mos",
      items: relatedExcept("logistika", defaultRelatedUz).slice(0, 6),
    },
    finalCta: {
      title: "Logistika jarayonlaringizni tartibga solamiz.",
      description: "Ariza, hujjat va yetkazish nazoratini bitta panelda yuriting.",
    },
  }),
  stroitelstvo: createSectorPage({
    meta: {
      title: "Qurilish CRM va workflow | Proklix",
      description:
        "Proklix qurilish kompaniyalari uchun vazifalar, kelishuvlar, foto hisobotlar va Telegram bildirishnomalarini bitta panelda boshqaradi.",
    },
    breadcrumb: { sectorName: "Qurilish" },
    hero: {
      title: "Qurilish maydonida vazifalar, kelishuvlar va hisobotlarni bitta tizimda boshqaring.",
      subtitle:
        "Proklix qurilish kompaniyalari uchun vazifalar, o'zgarish kelishuvlari, foto hisobotlar va ichki tasdiqlarni web panel va Telegram orqali tartibga soladi.",
      mockupFeed: [
        "Yangi maydon vazifasi",
        "Foto hisobot yuklandi",
        "Kelishuv kutilmoqda",
        "Rahbar tasdiqladi",
        "Telegram bildirishnomasi yuborildi",
      ],
    },
    problem: {
      title: "Muammo: vazifalar chatda, kelishuvlar qog'ozda qoladi.",
      items: [
        { title: "Vazifalar WhatsAppda", description: "Usta chatda beradi — bajarilish kuzatilmaydi." },
        { title: "Qog'ozdagi kelishuvlar", description: "O'zgarishlar kunlar davomida imzo kutadi." },
        { title: "Foto hisobotlar yo'qoladi", description: "Suratlar chatlarga tarqalgan." },
        { title: "Rahbar kech biladi", description: "Ob'ekt holati bir panelda emas." },
        { title: "Mas'ul aniq emas", description: "Kim nima qilishi kerakligi noaniq." },
        { title: "Muddatlar buziladi", description: "Eslatmalar va nazorat tizimi yo'q." },
      ],
    },
    solution: {
      title: "Proklix qurilish jamoasi uchun nima quradi?",
      items: [
        { title: "Mas'ullari bilan vazifalar", description: "Topshiriq, muddat, foto tasdiq." },
        { title: "Raqamli kelishuvlar", description: "Usta → muhandis → rahbar workflowi." },
        { title: "Foto hisobotlar", description: "Suratlar ob'ekt va bosqichga bog'langan." },
        { title: "Telegram bildirishnomalari", description: "Vazifa va kelishuv bosqichlarida xabar." },
        { title: "Ob'ekt bo'yicha tarix", description: "Barcha vazifa va o'zgarishlar." },
        { title: "Rahbar paneli", description: "Ob'ektlar, kechikishlar va yuklama." },
        { title: "Mobil kirish", description: "Maydonda vazifa va foto yuklash." },
        { title: "Tasdiq workflow", description: "Har bir o'zgarish qayd etiladi." },
      ],
    },
    workflow: makeWorkflowSteps("Misol: vazifadan kelishuvgacha", [
      ["Rahbar yoki muhandis vazifa beradi", "Ob'ekt, mas'ul va muddat belgilanadi."],
      ["Usta vazifani qabul qiladi", "Telegram orqali bildirishnoma yuboriladi."],
      ["Ish bajariladi va foto yuklanadi", "Foto hisobot ob'ektga biriktiriladi."],
      ["O'zgarish kerak bo'lsa kelishuv ochiladi", "Yangi shartlar workflowga tushadi."],
      ["Muhandis tekshiradi", "Foto va bajarilish tasdiqlanadi."],
      ["Rahbar yakuniy qaror qiladi", "Qabul yoki qayta ishlash belgilanadi."],
      ["Rahbar panelda ko'radi", "Barcha ob'ektlar va holat bir ko'rinishda."],
      ["Telegram bildirishnomalari", "Jamoa muhim o'zgarishlardan xabar topadi."],
    ]),
    useCases: makeUseCases("Qaysi jarayonlarni raqamlashtirish mumkin?", [
      ["Maydon vazifalari", "Topshiriq, muddat, mas'ul."],
      ["O'zgarish kelishuvlari", "Raqamli tasdiq workflowi."],
      ["Foto hisobotlar", "Ob'ekt va bosqich bo'yicha suratlar."],
      ["Ichki tasdiqlar", "Muhandis va rahbar qarorlari."],
      ["Ob'ekt tarixi", "Barcha vazifa va o'zgarishlar."],
      ["Usta vazifalari", "Mobil topshiriqlar va eslatmalar."],
      ["Rahbar nazorati", "Ob'ektlar va kechikishlar."],
      ["Telegram bildirishnomalar", "Tez xabar va eslatmalar."],
    ]),
    beforeAfter: makeBeforeAfter("Oldin va keyin", "Oldin", "Keyin", beforeItems, afterItems),
    miniOffer: {
      title: "Birinchi qadam: bepul jarayon tahlili",
      description:
        "Vazifalar, kelishuvlar va hisobotlar bugun qanday o'tishini ko'rib chiqamiz va avtomatlashtirish rejasini tuzamiz.",
    },
    relatedSectors: {
      title: "Boshqa sohalar uchun ham mos",
      items: relatedExcept("stroitelstvo", defaultRelatedUz).slice(0, 6),
    },
    finalCta: {
      title: "Qurilish jarayonlaringizni tartibga solamiz.",
      description: "Vazifa, kelishuv va hisobot nazoratini bitta panelda yuriting.",
    },
  }),
};
