import type { DictionaryEntry } from "./types";

export const tr: DictionaryEntry = {
  meta: {
    title:
      "Proklix — CRM, workflow, talepler, onaylar ve Telegram entegrasyonları Özbekistan işletmeleri için",
    description:
      "Proklix, Özbekistan'daki işletmelerin talepleri, onayları, görevleri, Telegram bildirimlerini ve mevcut sistemlerle entegrasyonları yönetmesine yardımcı olur.",
  },
  header: {
    platform: "Platform",
    integrations: "Entegrasyonlar",
    processes: "Süreçler",
    forWhom: "Kimler İçin",
    pricing: "Fiyatlandırma",
    faq: "SSS",
    blog: "Blog",
    contact: "İletişim",
    cta: "Telegram'dan Yaz",
    phone: "+998 77 257 43 54",
  },
  hero: {
    title: "Talepler, onaylar, görevler ve entegrasyonlar — tek Telegram-first sistemde",
    subtitle:
      "Proklix, işletmelerin sohbet kaosunu yönetmeden operasyonları yürütmesine yardımcı olur: talepler, formlar, onaylar, görevler, dosyalar, işlem geçmişi, raporlar ve mevcut sistemlerle entegrasyon.",
    trustTag: "Taşkent ve Özbekistan'daki işletmeler için",
    ctaTelegram: "Telegram'dan Yaz",
    ctaAnalysis: "Ücretsiz süreç analizi al",
  },
  positioning: {
    title: "Sadece CRM değil. Sadece bot değil. Tam iş akışı.",
    items: [
      {
        title: "Formlar",
        description:
          "Web sitesi, Telegram veya dahili formlarla veri toplayın — alanlar ve dosyalar kaybolmaz.",
      },
      {
        title: "Onaylar",
        description:
          "Adım adım onay süreçleri: yönetici, depo, muhasebe, direktör — herkes kendi aşamasını görür.",
      },
      {
        title: "Görevler",
        description:
          "Sorumlulara deadline, durum ve geçmişle görev atayın — özel sohbetlerde kaybolmaz.",
      },
      {
        title: "Telegram",
        description:
          "Telegram bildirimleri gönderin: yeni talep, bekleyen onay, atanan görev.",
      },
      {
        title: "Entegrasyonlar",
        description:
          "Mevcut sistemleri API, import/export veya projeye özel kurulumla bağlayın.",
      },
      {
        title: "Kontrol",
        description:
          "Her sürecin durumunu, geçmişini ve sonucunu görün — yönetim tek ekranda genel resmi görür.",
      },
    ],
  },
  integration: {
    title: "Mevcut sistemlerinizin üzerinde çalışır",
    subtitle:
          "Web sitenizi, CRM'inizi, depo yazılımınızı veya Excel'i hemen değiştirmeniz gerekmez. Proklix mevcut verilere bağlanabilir, iş akışlarını çalıştırabilir ve sonuçları geri gönderebilir.",
    flowLabels: [
      "Web sitesi / CRM / Depo / Excel",
      "Proklix süreci",
      "Telegram görevi",
      "Sonuç ve geçmiş",
      "Veri güncelleme",
    ],
    items: [
      {
        title: "Web sitesi / e-ticaret",
        description:
          "Talepler, ürünler, siparişler ve müşteri formları — API veya import ile bağlanabilir.",
      },
      {
        title: "CRM",
        description:
          "Müşteriler, durumlar, yöneticiler ve iletişim geçmişi — CRM'inizle projeye göre entegre edilebilir.",
      },
      {
        title: "Depo / stok",
        description:
          "Stok seviyeleri, envanter, transferler ve foto raporlar — API, export veya manuel değişimle.",
      },
      {
        title: "ERP / muhasebe",
        description:
          "Satın almalar, giderler, faturalar ve onaylar — belirli süreç ve erişim seviyesine göre bağlanır.",
      },
      {
        title: "Google Sheets / Excel",
        description:
          "Verilerin hâlâ tablolarda olduğu işletmeler için hızlı başlangıç — Excel'i değiştirmeden import/export.",
      },
      {
        title: "Custom API",
        description:
          "Mevcut sisteminiz için özel entegrasyonlar — süreç analizinden sonra görüşülür.",
      },
    ],
  },
  useCases: {
    title: "Proklix'te hangi süreçler çalıştırılabilir?",
    flowHint: "Form → Onay → Görev → Sonuç",
    items: [
      {
        title: "Müşteri talebi",
        description:
          "Müşteri web sitesi veya Telegram'dan talep bırakır. Yönetici görev alır, durum yönetime görünür.",
      },
      {
        title: "Ticari teklif onayı",
        description:
          "Yönetici teklifi hazırlar, direktör Telegram'da onaylar, müşteri nihai versiyonu alır.",
      },
      {
        title: "Satın alma talebi",
        description:
          "Çalışan satın alma talebi verir, yönetici ve muhasebe adım adım onaylar, geçmiş kaydedilir.",
      },
      {
        title: "Gider onayı",
        description:
          "Gider fişle kaydedilir, onay zincir boyunca ilerler, sonuç raporlara gider.",
      },
      {
        title: "Envanter sayımı",
        description:
          "Ürün listesi depo veya web sitesinden gelir. Çalışan Telegram'da sayar, foto ekler, yönetici sonucu görür.",
      },
      {
        title: "Depo transferi",
        description:
          "Depolar arası transfer talebi, onay, depo personeline görev, geçmişe kayıt.",
      },
      {
        title: "Saha görevleri ve kontrol listeleri",
        description:
          "Saha çalışanına Telegram görevi: kontrol listesi, foto, tamamlanma durumu, yöneticiye rapor.",
      },
      {
        title: "Servis talebi",
        description:
          "Müşteri veya yönetici talep oluşturur, sorumlu atanır, durum ve geçmiş tek ekranda.",
      },
      {
        title: "Belge onayı",
        description:
          "Belge onay adımlarından geçer, katılımcılar bildirim alır, versiyonlar kaydedilir.",
      },
      {
        title: "İK / admin talepleri",
        description:
          "İzin, satın alma, erişim, belgeler — onay rotası ve geçmişi olan dahili talepler.",
      },
    ],
  },
  beforeAfter: {
    title: "Proklix'ten sonra ne değişir",
    without: {
      title: "Proklix olmadan",
      items: [
        "Talepler sohbetlerde kaybolur",
        "Excel güncellenmez",
        "Kim sorumlu belirsiz",
        "Onaylar manuel yapılır",
        "Dosyalar mesajlara dağılmış",
        "Tam işlem geçmişi yok",
        "Veriler sistemler arasında manuel kopyalanır",
      ],
    },
    with: {
      title: "Proklix ile",
      items: [
        "Her talebin durumu var",
        "Sorumlu atanmış",
        "Onay adım adım ilerler",
        "Telegram katılımcıları bilgilendirir",
        "Dosyalar sürece eklenmiş",
        "İşlem geçmişi kaydedilir",
        "Veriler mevcut sistemlerle bağlanabilir",
      ],
    },
  },
  sectors: {
    title: "Çok manuel kontrol gerektiren işletmeler için",
    viewSector: "Sektör hakkında",
    items: [
      {
        title: "B2B kataloglar ve ticaret",
        description:
          "Talepler, ürünler, fiyatlar, ticari teklifler, onaylar ve Telegram bildirimleri.",
        sectorSlug: "b2b-katalog",
      },
      {
        title: "Temizlik ve saha hizmeti",
        description:
          "Müşteri talepleri, saha görevleri, kontrol listeleri, foto raporlar ve uygulama kontrolü.",
      },
      {
        title: "Depolar ve distribütörler",
        description:
          "Stok, envanter, transferler, bayi talepleri ve teslimat durumları.",
        sectorSlug: "agro",
      },
      {
        title: "Ekipman satışı",
        description:
          "Katalog, danışmanlık, talepler, ticari teklifler ve onaylar.",
        sectorSlug: "oborudovanie",
      },
      {
        title: "İnşaat ve saha ekipleri",
        description:
          "Saha görevleri, onaylar, foto raporlar, talepler ve deadline kontrolü.",
        sectorSlug: "stroitelstvo",
      },
      {
        title: "Lojistik ve dış ticaret",
        description:
          "Talepler, belgeler, teslimat aşamaları, durumlar ve katılımcı bildirimleri.",
        sectorSlug: "logistika",
      },
      {
        title: "Emlak ve kiralama",
        description:
          "Talepler, mülkler, gösterimler, sözleşmeler, ödemeler ve etkileşim geçmişi.",
        sectorSlug: "nedvizhimost",
      },
      {
        title: "Klinikler ve hizmet işletmeleri",
        description:
          "Randevular, dahili talepler, personel görevleri, onaylar ve raporlar.",
      },
      {
        title: "Restoranlar ve kafeler",
        description:
          "Dahili satın alma talepleri, vardiyalar, onarım, onaylar ve kontrol.",
      },
      {
        title: "Küçük üretim tesisleri",
        description:
          "Hammadde talepleri, onaylar, ekip görevleri, takip ve operasyon geçmişi.",
      },
    ],
  },
  sectorPageLabels: {
    breadcrumbHome: "Proklix",
    breadcrumbSectors: "Sektörler",
    before: "Önce",
    after: "Sonra",
    step: "Adım",
  },
  howWeStart: {
    title: "Tek bir süreçle başlayın",
    steps: [
      {
        title: "Mevcut süreci analiz edin",
        description:
          "Taleplerin, görevlerin ve onayların şu an nerede kaybolduğunu inceleriz.",
      },
      {
        title: "İlk workflow'u oluşturun",
        description:
          "Form, adımlar, sorumlular, durumlar ve bildirimleri oluştururuz.",
      },
      {
        title: "Veri ve sistemleri bağlayın",
        description:
          "Gerekirse web sitesi, CRM, depo, Excel veya API bağlarız.",
      },
      {
        title: "Telegram'da başlatın",
        description:
          "Çalışanlar görevleri ve onayları doğrudan Telegram'da alır.",
      },
      {
        title: "Geliştirin ve genişletin",
        description:
          "Yeni süreçler, raporlar, roller ve entegrasyonlar ekleriz.",
      },
    ],
  },
  modules: {
    title: "Proklix nelerden oluşur",
    items: [
      {
        title: "Dinamik formlar",
        description: "Süreciniz için alanlar, dosyalar ve koşullarla form oluşturucu.",
      },
      {
        title: "Workflow builder",
        description: "Adımlar, durumlar, onay rotaları ve geçiş kuralları.",
      },
      {
        title: "Görev inbox'u",
        description: "Kişisel ve ekip inbox'u: ne atandı, ne aksiyon bekliyor.",
      },
      {
        title: "Talep takibi",
        description: "Her talep numara, durum, sorumlu ve geçmişle.",
      },
      {
        title: "Telegram bildirimleri",
        description: "Yeni talepler, onaylar ve görevler için Telegram bildirimleri.",
      },
      {
        title: "Dosya ve foto yükleme",
        description: "Dosyalar ve fotolar sürece eklenir, sohbetlerde kaybolmaz.",
      },
      {
        title: "Süreç geçmişi",
        description: "Tam audit trail: kim, ne zaman, ne değiştirdi.",
      },
      {
        title: "Raporlar ve dashboard",
        description: "Talepler, onaylar, görevler ve darboğazlar özeti.",
      },
      {
        title: "Kullanıcı yönetimi",
        description: "Roller, erişim hakları, departmanlar ve multi-tenant yapı.",
      },
      {
        title: "Özel entegrasyonlar",
        description: "Web sitesi, CRM, depo, Excel veya API'ye projeye göre bağlantı.",
      },
    ],
  },
  workflow: {
    title: "Örnek iş akışı",
    tabs: [
      {
        id: "proposal",
        label: "Ticari teklif",
        steps: [
          {
            title: "Tetikleyici",
            description: "Müşteri web sitesi, Telegram veya form ile talep bırakır.",
          },
          {
            title: "Veri kaynağı",
            description: "Müşteri verileri ve ürünler CRM veya katalogdan çekilir.",
          },
          {
            title: "Sorumlu",
            description: "Yönetici görev alır, detayları netleştirir ve teklifi hazırlar.",
          },
          {
            title: "Onay",
            description: "Direktör fiyat ve koşulları kontrol eder, onaylar veya geri gönderir.",
          },
          {
            title: "Telegram bildirimi",
            description: "Katılımcılar her kritik aşamada bildirim alır.",
          },
          {
            title: "Sonuç",
            description: "Müşteri nihai teklifi alır, durum güncellenir.",
          },
          {
            title: "Geçmiş",
            description: "Tüm versiyonlar ve işlemler audit ve raporlar için kaydedilir.",
          },
        ],
      },
      {
        id: "stock",
        label: "Envanter sayımı",
        steps: [
          {
            title: "Veri kaynağı",
            description: "Ürün listesi web sitesi, depo veya tablodan gelir.",
          },
          {
            title: "Telegram görevi",
            description: "Sorumlu envanter görevini Telegram'da alır.",
          },
          {
            title: "Uygulama",
            description: "Çalışan ürünleri sayar ve foto ekler.",
          },
          {
            title: "Onay",
            description: "Yönetici sonucu ve farkları kontrol eder.",
          },
          {
            title: "Sonuç",
            description: "Sonuç geçmişe kaydedilir ve sisteme geri gönderilebilir.",
          },
        ],
      },
      {
        id: "purchase",
        label: "Satın alma onayı",
        steps: [
          {
            title: "Tetikleyici",
            description: "Çalışan form ile satın alma talebi verir.",
          },
          {
            title: "Onay",
            description: "Yönetici ve muhasebe adım adım onaylar.",
          },
          {
            title: "Telegram bildirimi",
            description: "Her katılımcı kendi aşaması için görev alır.",
          },
          {
            title: "Sonuç",
            description: "Satın alma onaylanır veya yorumla reddedilir.",
          },
          {
            title: "Geçmiş",
            description: "Tam onay zinciri audit için kaydedilir.",
          },
        ],
      },
      {
        id: "service",
        label: "Servis görevi",
        steps: [
          {
            title: "Tetikleyici",
            description: "Müşteri veya yönetici servis talebi oluşturur.",
          },
          {
            title: "Sorumlu",
            description: "Sorumlu atanır, görev Telegram'a gider.",
          },
          {
            title: "Uygulama",
            description: "Sorumlu işi tamamlar, foto ve durum ekler.",
          },
          {
            title: "Telegram bildirimi",
            description: "Müşteri ve yönetici ilerleme güncellemeleri alır.",
          },
          {
            title: "Sonuç",
            description: "Talep kapatılır, geçmiş ve dosyalar kaydedilir.",
          },
        ],
      },
    ],
  },
  projects: {
    title: "Gerçek B2B operasyonlarındaki deneyim",
    subtitle:
      "B2B işletmeler için talepler, kataloglar, entegrasyonlar ve operasyonel süreçler kurduğumuz proje örnekleri.",
    cta: "Siteyi aç",
    items: [
      {
        title: "Clemar",
        website: "clemar.uz",
        url: "https://clemar.uz",
        category: "B2B temizlik ekipmanı katalogu",
        description:
          "Ürün katalogu, çok dilli yapı, SEO ve B2B satış için Telegram talep akışı.",
        badges: ["B2B katalog", "Telegram talepleri", "RU / UZ"],
      },
      {
        title: "Tozago",
        website: "tozago.uz",
        url: "https://tozago.uz",
        category: "Temizlik hizmetleri web sitesi",
        description:
          "Taşkent'te temizlik hizmetleri için Telegram talepli çok dilli site.",
        badges: ["Talepler", "Telegram", "Yerel SEO"],
      },
      {
        title: "Klinidex",
        website: "klinidex.com",
        url: "https://klinidex.com",
        category: "Klinikler için platform",
        description:
          "Hasta yönetimi, randevular ve klinik operasyonel süreçler için dijital platform.",
        badges: ["SaaS", "Süreçler", "Demo talebi"],
      },
    ],
  },
  pricing: {
    title: "Proklix paketleri",
    subtitle:
      "Kapsam ve süre süreç analizinden sonra belirlenir. Her paketin tipik içeriği:",
    plans: [
      {
        name: "İlk süreç",
        description: "Tek workflow isteyen işletmeler için: talepler, onaylar veya ticari teklifler.",
        features: [
          "1 ana süreç",
          "Telegram bildirimleri",
          "Temel dashboard",
          "Sınırlı kullanıcı sayısı",
          "Kapsam analizden sonra belirlenir",
        ],
        cta: "Teklif al",
      },
      {
        name: "Birden fazla süreç + entegrasyonlar",
        description: "2–3 süreç, raporlar ve bir veya daha fazla entegrasyon isteyen işletmeler için.",
        features: [
          "Birden fazla bağlı süreç",
          "CRM / katalog / talep akışı",
          "Raporlar ve dashboard",
          "Temel entegrasyon veya import/export",
          "Kapsam analizden sonra belirlenir",
        ],
        cta: "Teklif al",
        highlighted: true,
      },
      {
        name: "İşletmenize özel operasyon sistemi",
        description: "Özel CRM, workflow, entegrasyonlar ve raporlama isteyen işletmeler için.",
        features: [
          "Özel API entegrasyonları",
          "Roller, audit, raporlar",
          "Birden fazla departman",
          "Eğitim ve destek",
          "Kapsam analizden sonra belirlenir",
        ],
        cta: "Teklif al",
      },
    ],
  },
  faq: {
    title: "Sık sorulan sorular",
    items: [
      {
        question: "Proklix CRM, bot veya ERP mi?",
        answer:
          "Proklix her şeyi birden değiştirmez. Bu bir workflow platformudur: talepler, formlar, onaylar, görevler, bildirimler ve mevcut sistemlerle entegrasyonlar.",
      },
      {
        question: "Web sitemizi, CRM'imizi veya depomuzu bağlayabilir misiniz?",
        answer:
          "Evet, API erişimi, export/import veya başka teknik yol varsa. Entegrasyonlar süreç bazında belirlenir.",
      },
      {
        question: "Tek bir süreçle başlayabilir miyiz?",
        answer:
          "Evet. Genellikle tek süreçle başlamak en iyisidir: talepler, teklifler, satın almalar, envanter veya gider onayı.",
      },
      {
        question: "Çalışanların yeni uygulama yüklemesi gerekiyor mu?",
        answer:
          "Ana işlemler Telegram/WebApp üzerinden yapılabilir. Zaten Telegram kullanan ekipler için uygundur.",
      },
      {
        question: "Rusça ve Özbekçe destekleniyor mu?",
        answer:
          "Evet, site ve süreçler proje gereksinimlerine göre RU / UZ / EN / TR dillerinde yapılabilir.",
      },
      {
        question: "Bu sadece satış için mi?",
        answer:
          "Hayır. Proklix tekrarlanan her süreç için uygundur: talepler, onaylar, görevler, depo, servis, belgeler, satın almalar, giderler.",
      },
    ],
  },
  cta: {
    title: "Bize kaotik bir sürecinizi gösterin — Proklix'te nasıl toplanacağını gösterelim",
    description:
      "20 dakikada sürecinizi inceler ve MVP için nereden başlanacağını öneririz. Taahhüt yok.",
    ctaTelegram: "Telegram'dan Yaz",
    ctaCall: "Ara",
    phone: "+998 77 257 43 54",
    formTitle: "Veya talep bırakın",
  },
  contactForm: {
    name: "Ad",
    company: "Şirket",
    phone: "Telefon",
    process: "Hangi süreci kontrol etmek istiyorsunuz?",
    processPlaceholder: "Süreç seçin",
    processOptions: [
      "Talepler / CRM",
      "Ticari teklifler",
      "Onaylar",
      "Depo / envanter",
      "Saha görevleri",
      "Web sitesi / e-ticaret entegrasyonu",
      "Diğer",
    ],
    submit: "Talep gönder",
    submitting: "Gönderiliyor…",
    success: "Teşekkürler! En kısa sürede sizinle iletişime geçeceğiz.",
    error: "Gönderilemedi. Telegram'dan yazın.",
  },
  blog: {
    meta: {
      title: "Proklix Blog | CRM, otomasyon ve B2B",
      description:
        "Özbekistan'daki işletmeler için CRM, Telegram otomasyonu ve B2B kataloglar hakkında makaleler.",
    },
    title: "Proklix Blog",
    subtitle: "B2B için CRM, otomasyon ve dijital süreçler hakkında pratik materyaller.",
    readMore: "Oku",
    backToBlog: "Tüm makaleler",
  },
  mobileCta: {
    telegram: "Telegram",
    call: "Ara",
  },
  footer: {
    tagline:
      "Telegram-first workflow platformu: talepler, onaylar, görevler ve mevcut sistemlerle entegrasyonlar.",
    phone: "+998 77 257 43 54",
    telegram: "Telegram",
    location: "Taşkent / Özbekistan",
    blog: "Blog",
  },
  dashboard: {
    title: "Proklix — operasyon paneli",
    metricRequests: "24 talep",
    metricInProgress: "8 devam ediyor",
    metricPendingApproval: "5 onay bekliyor",
    metricCompleted: "11 tamamlandı",
    feedItems: [
      "Yeni talep",
      "Onay bekliyor",
      "Görev Telegram'a gönderildi",
      "CRM'den veri alındı",
      "Geçmiş kaydedildi",
    ],
    sidebarRequests: "Talepler",
    sidebarTasks: "Görevler",
    sidebarIntegrations: "Entegrasyonlar",
    tableHeaderProcess: "Süreç",
    tableHeaderStatus: "Durum",
    tableHeaderSource: "Kaynak",
    statusNew: "Yeni talep",
    statusPending: "Onay bekliyor",
    statusTelegram: "Telegram görevi",
    statusSynced: "CRM verisi",
    statusSaved: "Geçmiş kaydedildi",
  },
};
