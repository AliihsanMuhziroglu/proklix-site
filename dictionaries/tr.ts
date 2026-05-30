import type { DictionaryEntry } from "./types";

export const tr: DictionaryEntry = {
  meta: {
    title:
      "Proklix: CRM, workflow, talepler, onaylar ve Telegram entegrasyonları Özbekistan işletmeleri için",
    description:
      "Proklix, Özbekistan'daki işletmelerin talepleri, onayları, görevleri, Telegram bildirimlerini ve mevcut sistemlerle entegrasyonları yönetmesine yardımcı olur.",
  },
  header: {
    platform: "Platform",
    integrations: "Entegrasyonlar",
    processes: "Süreçler",
    forWhom: "Kimler\u00A0İçin",
    pricing: "Fiyatlandırma",
    faq: "SSS",
    blog: "Blog",
    contact: "İletişim",
    cta: "Telegram'dan Yaz",
    phone: "+998 77 257 43 54",
  },
  hero: {
    title: "Talepten onaya, görevden entegrasyona — operasyonunuz Telegram'da yönetilsin",
    subtitle:
      "Talepleri, formları, onayları, görevleri, dosyaları ve işlem geçmişini tek akışta toplar. Mevcut CRM, web sitesi, depo, Excel veya özel API sistemlerinize bağlanır.",
    trustTag: "Taşkent ve Özbekistan'daki işletmeler için",
    ctaTelegram: "Telegram'dan Yaz",
    ctaAnalysis: "Ücretsiz süreç analizi al",
    integrationChips: ["CRM", "Web sitesi", "Depo / stok", "Excel", "Özel API", "Telegram"],
    ctaHelper: "İlk görüşmede bir sürecinizi birlikte çıkaralım.",
    visualCards: [
      "Yeni talep",
      "Onay bekliyor",
      "Telegram görevi",
      "Geçmiş kaydedildi",
    ],
  },
  positioning: {
    title: "Sadece CRM değil. Sadece bot değil. Tam operasyon akışı.",
    subtitle:
      "Talepleri toplar, görev atar, onayları yönetir, mevcut sistemlerden veri alır ve sürecin geçmişini kaydeder.",
    flowSteps: [
      {
        title: "Veri gelir",
        description: "Kaynaklar: Web sitesi, CRM, Excel, depo, özel API",
      },
      {
        title: "Süreç başlar",
        description: "Form, talep, kayıt veya müşteri işlemi oluşturulur",
      },
      {
        title: "Görev atanır",
        description: "Sorumlu kişi Telegram'da bildirim alır",
      },
      {
        title: "Onaylanır",
        description: "Yönetici onaylar, reddeder veya revizyon ister",
      },
      {
        title: "Sonuç kaydedilir",
        description: "Durum, dosyalar, yorumlar ve geçmiş saklanır",
      },
    ],
    items: [
      {
        badge: "Form",
        title: "Talepler ve formlar",
        description: "Web, Telegram veya dahili ekranlardan gelen talepleri standart forma çevirir.",
      },
      {
        badge: "Onay",
        title: "Onay akışları",
        description: "Satın alma, teklif veya servis süreçlerinde kimin karar vereceği bellidir.",
      },
      {
        badge: "Görev",
        title: "Görev yönetimi",
        description: "Her iş sorumluya atanır; durum ve geçmiş sohbetlerde kaybolmaz.",
      },
      {
        badge: "Telegram",
        title: "Telegram bildirimleri",
        description: "Görevler ve onaylar doğrudan Telegram'da görünür; ek uygulama yükü azalır.",
      },
      {
        badge: "Entegrasyon",
        title: "Mevcut sistem bağlantısı",
        description: "CRM, web sitesi, depo, Excel veya API kaynaklarından veri alınabilir.",
      },
      {
        badge: "Geçmiş",
        title: "Kontrol ve geçmiş",
        description: "Durum, kararlar, dosyalar ve sorumluluk tek yerden izlenir.",
      },
    ],
  },
  integration: {
    title: "Mevcut sistemlerinizin üzerinde çalışır",
    subtitle:
      "CRM, web sitesi, depo veya Excel düzeninizi hemen değiştirmeniz gerekmez. Proklix veriye bağlanır, süreci çalıştırır ve sonuçları kayıt altına alır.",
    flowSteps: [
      {
        title: "Veri kaynağı",
        description: "Web sitesi, CRM, depo, Excel, API",
      },
      {
        title: "Proklix süreci",
        description: "Form, iş akışı, kurallar, sorumlular",
      },
      {
        title: "Telegram görevi",
        description: "Bildirim, görev, onay, yorum",
      },
      {
        title: "Sonuç ve geçmiş",
        description: "Durum, dosya, karar, işlem geçmişi",
      },
      {
        title: "Geri güncelleme",
        description: "API, export veya manuel kontrol",
      },
    ],
    flowHint:
      "Yani Proklix mevcut sisteminizin yerine geçmek zorunda değil; onunla birlikte çalışan operasyon ve onay katmanı olabilir.",
    items: [
      {
        title: "Web sitesi / e-ticaret",
        description:
          "Web sitenizden gelen talepler, ürünler, siparişler veya müşteri formları Proklix sürecine bağlanabilir.",
        examples: ["Talepler", "Ürünler", "Siparişler"],
      },
      {
        title: "CRM",
        description:
          "Müşteri kayıtları, satış aşamaları, sorumlu kişiler ve iletişim geçmişi süreçlerde kullanılabilir.",
        examples: ["Müşteri", "Durum", "Sorumlu"],
      },
      {
        title: "Depo / stok",
        description:
          "Stok sayımı, ürün hareketi, transfer, fotoğraflı kontrol ve envanter süreçleri Telegram üzerinden yönetilebilir.",
        examples: ["Stok", "Sayım", "Transfer"],
      },
      {
        title: "ERP / muhasebe",
        description:
          "Satın alma, masraf, fatura ve ödeme onayları mevcut muhasebe düzeninize göre akışa bağlanabilir.",
        examples: ["Satın alma", "Masraf", "Fatura"],
      },
      {
        title: "Google Sheets / Excel",
        description:
          "Tablolarda tutulan veriler için hızlı başlangıç: veri aktarımı veya kontrollü import/export.",
        examples: ["Veri aktarımı", "Import", "Export"],
      },
      {
        title: "Özel API",
        description:
          "Firmanıza özel sistemlerle entegrasyon, süreç analizi sonrası API veya özel bağlantılarla planlanır.",
        examples: ["API", "Özel kurulum", "Proje bazlı"],
      },
    ],
    example: {
      title: "Örnek: stok sayımı süreci",
      flow:
        "Depo sisteminden ürün listesi gelir → Personel Telegram'da sayım yapar → Fotoğraf ve açıklama eklenir → Yönetici sonucu onaylar → Sonuç kayıt altına alınır",
      chips: ["Satın alma onayı", "Servis görevi", "Müşteri talebi", "Teklif onayı"],
    },
  },
  useCases: {
    title: "Her departman için farklı süreçler çalıştırılabilir",
    subtitle:
      "Satıştan depoya, satın almadan saha ekiplerine — tekrar eden iş akışları form, onay, görev ve sonuç mantığıyla kurulabilir.",
    flowSteps: ["Form", "Onay", "Görev", "Sonuç"],
    featuredLabel: "Öne çıkanlar",
    categories: [
      { id: "sales", label: "Satış ve müşteri" },
      { id: "finance", label: "Satın alma ve finans" },
      { id: "warehouse", label: "Depo ve operasyon" },
      { id: "field", label: "Saha ekipleri" },
      { id: "internal", label: "İç yönetim" },
    ],
    integrationLabel: "Entegrasyon",
    items: [
      {
        categoryId: "sales",
        title: "Müşteri talebi",
        description:
          "Web sitesi, Telegram veya satış ekibinden gelen talepler tek kayda dönüşür. Sorumlu atanır, durum yönetimde görünür.",
        hasIntegration: true,
      },
      {
        categoryId: "sales",
        title: "Ticari teklif onayı",
        description:
          "Teklif hazırlanır, yönetici Telegram'da onaylar, müşteri için nihai versiyon ve geçmiş kayıt altında kalır.",
        hasIntegration: true,
      },
      {
        categoryId: "sales",
        title: "Servis talebi",
        description:
          "Servis talebi açılır, sorumlu atanır; müdahale sonucu ve dosyalar aynı kayıtta kalır.",
      },
      {
        categoryId: "finance",
        title: "Satın alma talebi",
        description:
          "Çalışan satın alma talebi oluşturur. Yönetici ve muhasebe adım adım onaylar, karar geçmişe kaydedilir.",
        hasIntegration: true,
      },
      {
        categoryId: "finance",
        title: "Belge onayı",
        description:
          "Sözleşme, fatura veya iç belge adım adım onaydan geçer; versiyonlar kaybolmaz.",
      },
      {
        categoryId: "warehouse",
        title: "Envanter sayımı",
        description:
          "Ürün listesi depo veya web sitesinden gelir. Çalışan Telegram'da sayım yapar, fotoğraf ekler, yönetici sonucu görür.",
        hasIntegration: true,
      },
      {
        categoryId: "warehouse",
        title: "Ürün / stok kontrolü",
        description:
          "Ürün listesi mevcut sistemden gelir; kontrol görevi atanır, sapma ve fotoğraflar kayda girer.",
        hasIntegration: true,
      },
      {
        categoryId: "field",
        title: "Saha görevleri ve kontrol listeleri",
        description:
          "Saha çalışanına kontrol listesi gider. Fotoğraf, açıklama ve tamamlanma durumu yönetime raporlanır.",
      },
      {
        categoryId: "field",
        title: "Bakım / arıza bildirimi",
        description:
          "Arıza veya bakım talebi açılır; sorumlu atanır, müdahale adımları geçmişe kaydedilir.",
      },
      {
        categoryId: "internal",
        title: "İK / admin talepleri",
        description:
          "İzin, erişim, belge veya iç destek talepleri belli sorumlular üzerinden takip edilir.",
      },
      {
        categoryId: "internal",
        title: "İç onay süreçleri",
        description:
          "İç politika, bütçe veya operasyon kararları adım adım onaydan geçer.",
      },
    ],
    customCard: {
      title: "Bunların dışında özel süreciniz de kurulabilir",
      description:
        "Firmanızda tekrar eden bir iş varsa Proklix'e uyarlanabilir.",
      cta: "Telegram'dan sürecimi anlat",
    },
    footerNote:
      "En iyi başlangıç: tek bir süreci seçip çalışır hale getirmek, sonra diğer departmanlara yaymak.",
  },
  beforeAfter: {
    title: "Dağınık takipten kontrollü operasyona geçin",
    subtitle:
      "Sohbetlerde kaybolan talepleri, manuel onayları ve sistemler arası kopyalamayı tek akışta toplar.",
    transformLabel: "Kaos → Kontrol",
    without: {
      title: "Proklix olmadan",
      subtitle: "İşler sohbet, Excel ve manuel takip arasında dağılır.",
      items: [
        "Talepler Telegram sohbetlerinde kaybolur",
        "Excel dosyaları geç veya eksik güncellenir",
        "Kimin sorumlu olduğu belirsiz kalır",
        "Onaylar mesajla ve manuel takip edilir",
        "Dosyalar farklı yerlerde dağılır",
      ],
    },
    with: {
      title: "Proklix ile",
      subtitle: "Her talep, görev, onay ve sonuç izlenebilir hale gelir.",
      items: [
        "Her talebin durumu ve sorumlusu bellidir",
        "Onay adımları sırayla ve kayıtlı ilerler",
        "Görevler Telegram üzerinden ilgili kişiye gider",
        "Dosya, fotoğraf ve yorumlar sürece bağlı kalır",
        "Kim, ne zaman, hangi kararı verdi görülebilir",
      ],
    },
    resultChips: [
      "Daha az kayıp talep",
      "Daha net sorumluluk",
      "Daha hızlı onay",
      "Daha görünür yönetim",
    ],
    callout: {
      title: "En büyük fark: süreç kişilerin hafızasında değil, sistemde yaşar.",
      description: "",
      cta: "Telegram'dan yaz",
    },
  },
  sectors: {
    title: "Manuel takip, onay ve saha kontrolü olan işletmeler için",
    subtitle:
      "Sektörünüz farklı olabilir; ihtiyaç genelde aynıdır: talepler kaybolmasın, sorumlu belli olsun, onaylar kayıtlı ilerlesin.",
    otherIndustriesNote:
      "Restoran, emlak, klinik ve benzeri operasyonel işletmelere de uyarlanabilir.",
    exampleLabel: "Örnek süreç",
    items: [
      {
        title: "B2B kataloglar ve ticaret",
        description:
          "Ürün talepleri, fiyat soruları, ticari teklifler, müşteri kayıtları ve onay süreçleri tek akışta yönetilebilir.",
        pills: ["Talepler", "Teklif", "CRM"],
        example: "müşteri talebi → teklif → yönetici onayı",
        sectorSlug: "b2b-katalog",
      },
      {
        title: "Temizlik ve saha hizmeti",
        description:
          "Saha görevleri, kontrol listeleri, fotoğraflı tamamlama, vardiya kontrolleri ve yönetici raporları Telegram üzerinden ilerler.",
        pills: ["Saha görevi", "Fotoğraf", "Kontrol listesi"],
        example: "görev atama → saha kontrolü → fotoğraflı sonuç",
      },
      {
        title: "Depolar ve distribütörler",
        description:
          "Stok sayımı, depo transferi, bayi talepleri, ürün hareketleri ve teslimat kontrolleri kayıt altına alınır.",
        pills: ["Stok", "Transfer", "Sayım"],
        example: "ürün listesi → sayım görevi → onaylı sonuç",
        sectorSlug: "agro",
      },
      {
        title: "Ekipman satışı",
        description:
          "Katalog talepleri, danışmanlık istekleri, teklif hazırlama, fiyat onayı ve satış sonrası servis süreçleri izlenebilir.",
        pills: ["Katalog", "Teklif", "Servis"],
        example: "talep → teklif → onay → müşteri dönüşü",
        sectorSlug: "oborudovanie",
      },
      {
        title: "Lojistik ve dış ticaret",
        description:
          "Belge takibi, teslim aşamaları, görev atamaları ve durum güncellemeleri yönetilebilir.",
        pills: ["Belge", "Teslimat", "Durum"],
        example: "belge girişi → kontrol → teslimat bildirimi",
        sectorSlug: "logistika",
      },
      {
        title: "Küçük üretim tesisleri",
        description:
          "Hammadde talepleri, üretim görevleri, kalite kontrol ve operasyon geçmişi izlenebilir.",
        pills: ["Hammadde", "Üretim", "Kalite"],
        example: "hammadde talebi → üretim görevi → kalite kontrol",
      },
    ],
    callout: {
      title: "Sektörünüz burada yoksa sorun değil",
      description:
        "Tekrar eden talep, onay, görev veya entegrasyon ihtiyacınız varsa Proklix o sürece göre uyarlanabilir.",
      cta: "Telegram'dan yaz",
    },
  },
  sectorPageLabels: {
    breadcrumbHome: "Proklix",
    breadcrumbSectors: "Sektörler",
    before: "Önce",
    after: "Sonra",
    step: "Adım",
  },
  howWeStart: {
    title: "Büyük sistemi değil, ilk gerçek süreci başlatın",
    subtitle:
      "Tüm şirketi aynı anda dönüştürmeyiz. Önce en çok zaman kaybettiren bir süreci seçer, çalışır hale getirir, sonra yayarız.",
    steps: [
      {
        label: "Analiz",
        title: "Süreci birlikte analiz ederiz",
        description: "Talepler nerede başlıyor, kim onaylıyor, nerede kayboluyor netleştiririz.",
      },
      {
        label: "Kurulum",
        title: "İlk iş akışını kurarız",
        description: "Form alanları, adımlar, sorumlular ve Telegram bildirimlerini oluştururuz.",
      },
      {
        label: "Entegrasyon",
        title: "Gerekli verileri bağlarız",
        description: "Web sitesi, CRM, depo, Excel veya API kaynakları sürece entegre edilir.",
      },
      {
        label: "Canlı kullanım",
        title: "Telegram'da kullanıma açarız",
        description: "Çalışanlar görevleri Telegram'dan alır; yöneticiler durumu panelden izler.",
      },
      {
        label: "Genişleme",
        title: "Ölçer, geliştirir ve yayarız",
        description: "İlk süreç oturduktan sonra yeni süreçler ve entegrasyonlar eklenir.",
      },
    ],
    callout: {
      title: "En iyi başlangıç: tek bir acıtan süreci seçmek",
      description:
        "Satın alma onayı, stok sayımı veya ticari teklif gibi bir süreçle başlayıp sonucu hızlıca görmek daha sağlıklıdır.",
      cta: "Telegram'dan ilk sürecimi anlat",
    },
  },
  modules: {
    title: "Proklix'in temel yapı taşları",
    subtitle: "Form, görev, onay, geçmiş ve entegrasyon aynı sürecin parçası olarak çalışır.",
    flowSteps: ["Form", "İş akışı", "Görev", "Onay", "Geçmiş", "Rapor", "Entegrasyon"],
    categories: [
      {
        id: "build",
        title: "Süreç oluşturma",
        description: "Form, adımlar ve kurallarla süreci tanımlayın.",
        items: [
          {
            title: "Dinamik formlar",
            description:
              "Süreciniz için gerekli alanları, açıklamaları, dosyaları ve doğrulamaları tanımlayın.",
          },
          {
            title: "İş akışı tasarlama",
            description:
              "Adımları, sorumluları, onay yollarını ve karar seçeneklerini süreç bazlı kurun.",
          },
          {
            title: "Özel kurallar ve adımlar",
            description:
              "Koşullu geçişler, zorunlu alanlar, onay seçenekleri ve süreç kurallarını tanımlayın.",
          },
        ],
      },
      {
        id: "daily",
        title: "Günlük kullanım",
        description: "Ekip günlük işlerini buradan yürütür.",
        items: [
          {
            title: "Görev kutusu",
            description:
              "Kullanıcılar kendilerine atanan görevleri ve bekleyen aksiyonları tek ekranda görür.",
          },
          {
            title: "Talep takibi",
            description:
              "Her talep numara, durum, sorumlu, adım ve geçmiş bilgisiyle takip edilir.",
          },
          {
            title: "Telegram bildirimleri",
            description:
              "Yeni görev, onay, iade ve sonuç bildirimleri Telegram üzerinden ilgili kişilere gider.",
          },
          {
            title: "Dosya ve fotoğraf yükleme",
            description:
              "Fotoğraflar, PDF'ler ve belgeler sohbetlerde kaybolmaz; doğrudan ilgili sürece eklenir.",
          },
        ],
      },
      {
        id: "control",
        title: "Yönetim ve kontrol",
        description: "Durum, geçmiş ve erişim tek yerden yönetilir.",
        items: [
          {
            title: "Süreç geçmişi",
            description:
              "Kim, ne zaman, hangi kararı verdi; yorumlar, dosyalar ve durum değişiklikleri kayıtlı kalır.",
          },
          {
            title: "Raporlar ve yönetim paneli",
            description: "Açık talepler, bekleyen onaylar ve ekip durumu tek panelden görülür.",
          },
          {
            title: "Kullanıcı ve rol yönetimi",
            description:
              "Kullanıcılar, roller, erişimler ve şirket/ekip bazlı yapı kontrollü şekilde yönetilir.",
          },
        ],
      },
      {
        id: "integration",
        title: "Entegrasyon",
        description: "Mevcut sistemler sürece proje ihtiyacına göre bağlanır.",
        items: [
          {
            title: "Web sitesi / CRM / depo / Excel bağlantıları",
            description:
              "Mevcut kaynaklardan veri alınır veya sonuç geri aktarılır; bağlantı kapsamı birlikte planlanır.",
          },
          {
            title: "Özel API entegrasyonları",
            description:
              "Firmanıza özel sistemler API veya özel bağlantılarla sürece entegre edilebilir.",
          },
          {
            title: "Veri aktarımı",
            description: "Excel ve tablo verileri import, export veya kontrollü aktarımla bağlanabilir.",
          },
        ],
      },
    ],
    callout: {
      title: "Modüller ayrı ayrı değil, tek süreçte birleşir",
      description:
        "Örneğin satın alma talebinde form doldurulur, yönetici onaylar, dosyalar eklenir ve kararlar geçmişe kaydedilir.",
      cta: "Telegram'dan yaz",
    },
  },
  workflow: {
    title: "Örnek iş akışı",
    subtitle: "Bir talep geldiğinde veri alınır, görev atanır, onay yönetilir ve geçmiş saklanır.",
    tabs: [
      {
        id: "proposal",
        label: "Ticari teklif",
        steps: [
          {
            badge: "Form",
            title: "Tetikleyici",
            description:
              "Müşteri web sitesi, Telegram veya form üzerinden talep bırakır.",
          },
          {
            badge: "CRM",
            title: "Veri kaynağı",
            description:
              "Müşteri, ürün ve fiyat bilgileri CRM, katalog veya mevcut sistemden çekilebilir.",
          },
          {
            badge: "Görev",
            title: "Sorumlu",
            description:
              "Satış sorumlusu görevi alır, detayları netleştirir ve teklifi hazırlar.",
          },
          {
            badge: "Onay",
            title: "Onay",
            description:
              "Yönetici fiyatı, koşulları ve iskonto bilgisini kontrol eder; onaylar veya revizyon ister.",
          },
          {
            badge: "Telegram",
            title: "Telegram bildirimi",
            description:
              "Katılımcılar kritik aşamalarda Telegram üzerinden bilgilendirilir.",
          },
          {
            badge: "Sonuç",
            title: "Sonuç",
            description:
              "Müşteriye nihai teklif iletilir, durum güncellenir ve süreç kapanır.",
          },
          {
            badge: "Geçmiş",
            title: "Geçmiş",
            description: "Versiyonlar, kararlar ve dosyalar işlem geçmişinde saklanır.",
          },
        ],
      },
      {
        id: "stock",
        label: "Envanter sayımı",
        steps: [
          {
            badge: "Plan",
            title: "Tetikleyici",
            description:
              "Sayım süreci yönetici veya planlı kontrol üzerinden başlatılır.",
          },
          {
            badge: "Depo",
            title: "Veri kaynağı",
            description:
              "Ürün listesi depo sistemi, web sitesi, Excel veya API üzerinden alınabilir.",
          },
          {
            badge: "Görev",
            title: "Sorumlu",
            description:
              "Depo personeline Telegram üzerinden sayım görevi atanır.",
          },
          {
            badge: "Onay",
            title: "Onay",
            description:
              "Yönetici sayım sonucunu, farkları ve eklenen fotoğrafları kontrol eder.",
          },
          {
            badge: "Telegram",
            title: "Telegram bildirimi",
            description:
              "Görev atama, iade ve onay bildirimleri Telegram'dan gider.",
          },
          {
            badge: "Sonuç",
            title: "Sonuç",
            description:
              "Onaylanan sayım sonucu kayıt altına alınır ve gerekirse mevcut sisteme geri aktarılır.",
          },
          {
            badge: "Geçmiş",
            title: "Geçmiş",
            description:
              "Kim saydı, kim onayladı, hangi farklar çıktı ve hangi fotoğraflar eklendi saklanır.",
          },
        ],
      },
      {
        id: "purchase",
        label: "Satın alma onayı",
        steps: [
          {
            badge: "Talep",
            title: "Tetikleyici",
            description: "Çalışan satın alma ihtiyacı için talep oluşturur.",
          },
          {
            badge: "ERP",
            title: "Veri kaynağı",
            description:
              "Tedarikçi, ürün, bütçe veya geçmiş satın alma verileri sürece bağlanabilir.",
          },
          {
            badge: "Görev",
            title: "Sorumlu",
            description: "Talep ilgili yöneticiye veya departman sorumlusuna atanır.",
          },
          {
            badge: "Onay",
            title: "Onay",
            description: "Yönetici, muhasebe veya direktör adım adım onay verir.",
          },
          {
            badge: "Telegram",
            title: "Telegram bildirimi",
            description: "Bekleyen onaylar ve revizyon talepleri Telegram'da görünür.",
          },
          {
            badge: "Sonuç",
            title: "Sonuç",
            description:
              "Onaylanan satın alma talebi muhasebe veya operasyon tarafına aktarılır.",
          },
          {
            badge: "Geçmiş",
            title: "Geçmiş",
            description: "Tüm karar zinciri, yorumlar ve belgeler kayıtlı kalır.",
          },
        ],
      },
      {
        id: "service",
        label: "Servis görevi",
        steps: [
          {
            badge: "Talep",
            title: "Tetikleyici",
            description:
              "Müşteri, yönetici veya saha ekibi servis talebi oluşturur.",
          },
          {
            badge: "CRM",
            title: "Veri kaynağı",
            description:
              "Müşteri, cihaz, lokasyon veya önceki servis bilgileri mevcut sistemden alınabilir.",
          },
          {
            badge: "Görev",
            title: "Sorumlu",
            description: "Teknisyen veya saha personeline görev atanır.",
          },
          {
            badge: "Onay",
            title: "Onay",
            description:
              "Gerekirse yönetici müdahale sonucunu, fotoğrafları ve açıklamaları kontrol eder.",
          },
          {
            badge: "Telegram",
            title: "Telegram bildirimi",
            description:
              "Sorumlu kişi görevi Telegram'dan alır, güncellemeleri aynı akışta görür.",
          },
          {
            badge: "Sonuç",
            title: "Sonuç",
            description:
              "Servis tamamlanır, durum kapanır ve müşteri/ekip bilgilendirilebilir.",
          },
          {
            badge: "Geçmiş",
            title: "Geçmiş",
            description:
              "Yapılan işlem, eklenen fotoğraflar, yorumlar ve süre bilgisi saklanır.",
          },
        ],
      },
    ],
    summary: {
      title: "Bu sadece örnek bir akış",
      description:
        "Aynı mantık müşteri talepleri, stok sayımı, satın alma, saha görevleri ve firmaya özel süreçlere uyarlanabilir.",
      cta: "Telegram'dan benzer sürecimi anlat",
    },
  },
  projects: {
    title: "Proklix gerçek B2B ihtiyaçlarından doğdu",
    subtitle:
      "B2B kataloglar, Telegram talepleri ve operasyon süreçlerinde edindiğimiz deneyimi Proklix'e taşıyoruz.",
    trustStrip: [
      "B2B katalog",
      "Telegram talepleri",
      "Yerel SEO",
      "Operasyon süreçleri",
      "Entegrasyon mantığı",
    ],
    problemLabel: "Problem",
    insightLabel: "Proklix'e taşınan deneyim",
    items: [
      {
        title: "Clemar",
        website: "clemar.uz",
        url: "https://clemar.uz",
        category: "B2B temizlik ekipmanı kataloğu",
        problem:
          "Çok dilli ürün kataloğu, SEO, B2B satış talepleri ve Telegram üzerinden müşteri iletişimi.",
        insight:
          "Ürün/katalog verisi, teklif talepleri, müşteri başvuruları ve operasyonel takip süreçleri.",
        badges: ["B2B katalog", "RU / UZ", "Telegram talepleri", "SEO", "Ürün verisi"],
      },
      {
        title: "Tozago",
        website: "tozago.uz",
        url: "https://tozago.uz",
        category: "Temizlik hizmetleri web sitesi",
        problem:
          "Taşkent'te temizlik hizmetleri için talep toplama, yerel görünürlük ve Telegram odaklı başvuru akışı.",
        insight:
          "Hizmet talebi, saha görevi, kontrol listesi ve müşteri başvurusunu sürece çevirme mantığı.",
        badges: ["Telegram", "Yerel SEO", "Hizmet talebi", "Saha görevi"],
      },
      {
        title: "Klinidex",
        website: "klinidex.com",
        url: "https://klinidex.com",
        category: "Klinikler için operasyon platformu",
        problem:
          "Hasta, randevu, klinik içi görevler ve operasyonel süreçleri daha düzenli yönetme ihtiyacı.",
        insight:
          "SaaS mantığı, görev akışları, kullanıcı rolleri, süreç takibi ve sektör bazlı operasyon modeli.",
        badges: ["SaaS", "Süreçler", "Demo talebi", "Klinik operasyon"],
      },
    ],
    callout: {
      title: "Bu projelerden çıkan ortak ihtiyaç aynıydı",
      description:
        "Talepler sohbetlerde kayboluyor, onaylar manuel ilerliyor ve yönetici sürecin tamamını göremiyordu. Proklix bu problemi çözmek için tasarlandı.",
      cta: "Telegram'dan yaz",
    },
  },
  pricing: {
    title: "İhtiyaca göre başlayan Proklix paketleri",
    subtitle:
      "Her işletmenin süreci, entegrasyon ihtiyacı ve kullanıcı yapısı farklıdır. Bu yüzden net kapsam ve teklif, kısa bir süreç analizinden sonra belirlenir.",
    startNote: "Başlangıç noktası: tek bir gerçek süreci seçip çalışır hale getirmek.",
    bestForLabel: "Kimler için",
    plans: [
      {
        name: "İlk süreç",
        subtitle: "Tek bir iş akışını hızlıca düzenlemek isteyen işletmeler için.",
        bestFor:
          "Satın alma, teklif, müşteri talebi, stok sayımı veya servis görevi gibi tek bir ana süreç.",
        features: [
          "1 ana süreç kurulumu",
          "Dinamik form ve durum takibi",
          "Telegram bildirimleri",
          "Temel görev ve onay akışı",
          "Yönetim paneli görünümü",
          "Kapsam analizden sonra belirlenir",
        ],
        cta: "Telegram'dan ilk sürecimi anlat",
        highlighted: true,
        badge: "En düşük riskli başlangıç",
      },
      {
        name: "Birden fazla süreç + entegrasyon",
        subtitle:
          "2–3 bağlı süreci, raporları ve mevcut sistemlerle veri akışını isteyen işletmeler için.",
        bestFor:
          "CRM/katalog/talep akışı, satın alma, stok veya teklif süreçlerini birlikte yönetmek isteyen ekipler.",
        features: [
          "Birden fazla bağlı süreç",
          "CRM / katalog / talep akışı",
          "Raporlar ve yönetim paneli",
          "Temel entegrasyon veya veri aktarımı",
          "Telegram görev ve onay bildirimleri",
          "Kapsam analizden sonra belirlenir",
        ],
        cta: "Telegram'dan teklif al",
        badge: "Büyüyen ekipler için",
      },
      {
        name: "İşletmenize özel operasyon sistemi",
        subtitle:
          "Özel iş akışı, entegrasyon, rol yapısı ve raporlama isteyen işletmeler için.",
        bestFor:
          "Birden fazla departman, özel API bağlantıları ve kapsamlı operasyon kontrolü isteyen şirketler.",
        features: [
          "Özel API entegrasyonları",
          "Roller, erişimler, işlem geçmişi ve raporlar",
          "Birden fazla departman ve süreç",
          "Özel yönetim paneli ve operasyon ekranları",
          "Eğitim ve destek",
          "Kapsam analizden sonra belirlenir",
        ],
        cta: "Telegram'dan özel proje görüşmesi al",
        badge: "Özel operasyon yapısı",
      },
    ],
    explanation: {
      title: "Fiyat neden analizden sonra belirleniyor?",
      description:
        "Çünkü Proklix'te maliyeti belirleyen şey sadece kullanıcı sayısı değildir. Süreç sayısı, onay adımları, dosya kullanımı, rapor ihtiyacı, Telegram akışı ve mevcut sistemlerle entegrasyon kapsamı fiyatı değiştirir.",
      factors: [
        "Süreç sayısı",
        "Entegrasyon ihtiyacı",
        "Kullanıcı / rol yapısı",
        "Raporlama ve destek kapsamı",
      ],
    },
    finalCta: "Bir süreci anlatın, yaklaşık kapsamı birlikte çıkaralım.",
  },
  faq: {
    title: "Sık sorulan sorular",
    subtitle:
      "Proklix'in CRM, Telegram, entegrasyon, fiyatlandırma ve kurulum modeliyle ilgili en çok sorulan sorular.",
    categories: {
      system: "Sistem",
      integration: "Entegrasyon",
      setup: "Kurulum",
      pricing: "Fiyat",
      usage: "Dil ve kullanım",
    },
    intro: {
      title: "Cevabınız yoksa sürecinizi anlatın",
      description:
        "Proklix genelde tek bir gerçek süreç üzerinden değerlendirilir: talep nereden geliyor, kim onaylıyor, hangi sistemlere bağlanıyor ve sonuç nerede tutuluyor?",
      cta: "Telegram'dan yaz",
      phone: "+998 77 257 43 54",
    },
    items: [
      {
        category: "system",
        question: "Proklix CRM, bot veya ERP mi?",
        answer:
          "Proklix bunların yerine geçen tek bir klasik sistem değildir. Talepler, formlar, onaylar, görevler, Telegram bildirimleri, işlem geçmişi ve entegrasyonları bir araya getiren Telegram odaklı operasyon platformudur. Mevcut CRM, web sitesi, depo veya Excel düzeninizle birlikte çalışabilir.",
      },
      {
        category: "integration",
        question: "Web sitemizi, CRM'imizi veya depomuzu bağlayabilir misiniz?",
        answer:
          "Evet, teknik erişim uygunsa bağlanabilir. Entegrasyon API, import/export, dosya aktarımı veya projeye özel bağlantılarla planlanabilir. Hangi yöntemin doğru olduğu süreç analizinden sonra netleşir.",
      },
      {
        category: "setup",
        question: "Tek bir süreçle başlayabilir miyiz?",
        answer:
          "Evet. Hatta en sağlıklı başlangıç budur. Önce satın alma onayı, müşteri talebi, stok sayımı, ticari teklif veya saha görevi gibi tek bir süreci çalışır hale getiririz. Sonra ihtiyaç olursa yeni süreçler ve entegrasyonlar eklenir.",
      },
      {
        category: "usage",
        question: "Çalışanların yeni uygulama yüklemesi gerekiyor mu?",
        answer:
          "Temel kullanım Telegram üzerinden ilerler. Çalışanlar görevleri, onayları ve bildirimleri Telegram'da görebilir. Böylece özellikle sahada çalışan veya bilgisayar kullanmayan ekipler için öğrenme yükü azalır.",
      },
      {
        category: "usage",
        question: "Rusça ve Özbekçe destekleniyor mu?",
        answer:
          "Evet. Proklix süreçleri ve ekranları Rusça, Özbekçe, Türkçe ve İngilizce yapıya uygun hazırlanabilir. Özbekistan'daki ekipler için RU/UZ öncelikli kullanım desteklenir.",
      },
      {
        category: "system",
        question: "Bu sadece satış için mi?",
        answer:
          "Hayır. Proklix satış dışında satın alma, gider onayı, stok sayımı, depo transferi, servis görevi, saha kontrolü, belge onayı, İK/admin talepleri ve firmaya özel operasyon süreçleri için de kullanılabilir.",
      },
      {
        category: "pricing",
        question: "Fiyat neden sitede sabit yazmıyor?",
        answer:
          "Çünkü Proklix'te fiyatı belirleyen şey sadece kullanıcı sayısı değildir. Süreç sayısı, onay adımları, entegrasyon ihtiyacı, raporlar, dosya kullanımı, kullanıcı rolleri ve destek kapsamı fiyatı değiştirir. Bu yüzden önce kısa bir süreç analizi yapılır.",
      },
      {
        category: "integration",
        question: "Proklix mevcut sistemimizin yerine mi geçer?",
        answer:
          "Her zaman gerekmez. Çoğu durumda Proklix mevcut sistemin üzerinde çalışan bir operasyon ve onay katmanı olur. Web sitesi, CRM, depo, Excel veya özel API verileri Proklix süreçlerine bağlanabilir.",
      },
      {
        category: "setup",
        question: "Kurulum ne kadar sürer?",
        answer:
          "Bu seçilen sürece ve entegrasyon ihtiyacına bağlıdır. Basit bir süreç daha hızlı başlatılabilir; özel entegrasyon, raporlama ve rol yapısı olan projelerde süre analizden sonra netleşir.",
      },
      {
        category: "system",
        question: "Telegram kullanmak güvenli mi?",
        answer:
          "Telegram burada çalışanların görev ve bildirim kanalıdır. Kritik kontroller, süreç kayıtları, dosyalar, geçmiş ve yetkilendirme Proklix tarafında kurgulanır. Yetki ve erişim modeli proje ihtiyacına göre belirlenir.",
      },
    ],
    callout: {
      title: "Cevap yeterli değilse, bir sürecinizi birlikte inceleyelim.",
      description:
        "Talep nereden geliyor, kim onaylıyor, hangi sistemlere bağlanıyor ve sonuç nerede tutuluyor birlikte çıkaralım.",
      cta: "Telegram'dan yaz",
    },
  },
  cta: {
    title: "Kaotik bir sürecinizi gösterin, Proklix'te nasıl toparlanacağını anlatalım",
    description:
      "Kısa bir görüşmede sürecinizi dinleyelim; talep nereden geliyor, kim onaylıyor ve nereden başlanır birlikte çıkaralım.",
    ctaTelegram: "Telegram'dan yaz",
    ctaCall: "Ara",
    phone: "+998 77 257 43 54",
    helperLine: "En hızlı dönüş Telegram üzerinden yapılır.",
    helper: {
      title: "Mesaja şunları yazmanız yeterli:",
      checklist: [
        "Hangi süreci kontrol etmek istiyorsunuz?",
        "Süreç şu an Telegram, Excel, CRM veya başka sistemde mi ilerliyor?",
        "Kim onaylıyor, kim görev alıyor?",
        "En çok nerede zaman veya bilgi kaybı oluyor?",
      ],
      example:
        "Örnek: Satın alma taleplerimiz Telegram'da geliyor, müdür onaylıyor, muhasebe Excel'e geçiriyor. Bunu Proklix'e taşımak istiyoruz.",
    },
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
      "Telegram üzerinden talepler, onaylar, görevler ve mevcut sistem entegrasyonlarını yöneten operasyon platformu.",
    location: "Taşkent / Özbekistan",
    platformTitle: "Platform",
    platformLinks: [
      { href: "#platform", label: "Platform" },
      { href: "#integrations", label: "Entegrasyonlar" },
      { href: "#processes", label: "Süreçler" },
      { href: "#pricing", label: "Paketler" },
      { href: "#faq", label: "SSS" },
    ],
    solutionsTitle: "Çözümler",
    solutionsLinks: [
      { href: "#use-cases", label: "Müşteri talepleri" },
      { href: "#processes", label: "Satın alma onayı" },
      { href: "#integrations", label: "Stok / depo süreçleri" },
      { href: "#use-cases", label: "Saha görevleri" },
      { href: "#integrations", label: "Özel entegrasyonlar" },
    ],
    contactTitle: "İletişim",
    phone: "+998 77 257 43 54",
    telegramCta: "Telegram'dan yaz",
    telegramHelper: "En hızlı dönüş Telegram üzerinden yapılır.",
    copyright: "© {year} Proklix. Tüm hakları saklıdır.",
    bottomTagline: "Telegram-first workflow platform · Taşkent / Özbekistan",
  },
  phoneMockup: {
    notifHeader: "Yeni bildirimler",
    chatHeader: "Telegram sohbet",
    botLabel: "Proklix Bot",
    statusTime: "14:32",
    notifications: [
      {
        color: "amber",
        title: "Satın alma onayı bekliyor",
        subtitle: "₸ 4 200 000 — Aziz M.",
        actionPrimary: "Onayla",
        actionSecondary: "Reddet",
      },
      {
        color: "green",
        title: "Yeni sipariş #2847",
        subtitle: "Clemar — siteden geldi",
        actionPrimary: "Kabul et",
        actionSecondary: "Görüntüle",
      },
    ],
    messages: [
      {
        from: "bot",
        text: "Yeni görev atandı: Envanter #112 ✓",
        time: "14:30",
        variant: "default",
      },
      {
        from: "user",
        text: "Tamamlandı, fotoğraf yükledim",
        time: "14:31 ✓✓",
      },
      {
        from: "bot",
        text: "Görev kapatıldı. Geçmiş kaydedildi ✓",
        time: "14:32",
        variant: "success",
      },
    ],
  },
  dashboard: {
    title: "Proklix operasyon paneli",
    flowLabels: [
      "CRM / Web / Excel",
      "Proklix süreci",
      "Telegram görevi",
      "Onay",
      "Sonuç kaydedildi",
    ],
    sourceLabel: "Kaynak",
    metricRequests: "24 aktif talep",
    metricInProgress: "8 devam eden görev",
    metricPendingApproval: "5 onay bekliyor",
    metricCompleted: "11 tamamlandı",
    cards: [
      { title: "Yeni müşteri talebi", source: "Web sitesi", statusKey: "new" },
      { title: "Stok sayımı", source: "Depo sistemi", statusKey: "telegram" },
      { title: "Satın alma onayı", source: "Excel / API", statusKey: "pending" },
      { title: "Servis görevi", source: "CRM", statusKey: "completed" },
    ],
    statusNew: "Yeni talep",
    statusPending: "Onay bekliyor",
    statusTelegram: "Telegram görevi",
    statusCompleted: "Tamamlandı",
    statusIntegrated: "Entegre veri",
  },
};
