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
    title: "Talepler, onaylar, görevler ve entegrasyonlar tek Telegram odaklı sistemde",
    subtitle:
      "Proklix; talepleri, formları, onayları, görevleri, dosyaları ve işlem geçmişini tek bir akışta toplar. Mevcut CRM, web sitesi, depo, Excel veya özel API sistemlerinize bağlanarak operasyonu Telegram üzerinden yönetilebilir hale getirir.",
    trustTag: "Taşkent ve Özbekistan'daki işletmeler için",
    ctaTelegram: "Telegram'dan Yaz",
    ctaAnalysis: "Ücretsiz süreç analizi al",
    integrationChips: ["CRM", "Web sitesi", "Depo / stok", "Excel", "Özel API", "Telegram"],
    ctaHelper: "İlk görüşmede bir sürecinizi birlikte çıkaralım.",
  },
  positioning: {
    title: "Sadece CRM değil. Sadece bot değil. Tam operasyon akışı.",
    subtitle:
      "Proklix; talepleri toplar, sorumlulara görev atar, onayları yönetir, mevcut sistemlerden veri alır ve tüm sürecin geçmişini kaydeder.",
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
        description:
          "Web sitesi, Telegram veya dahili ekranlardan gelen talepleri standart forma çevirin. Alanlar, dosyalar ve açıklamalar kaybolmaz.",
      },
      {
        badge: "Approval",
        title: "Onay akışları",
        description:
          "Satın alma, teklif, masraf veya servis gibi süreçleri adım adım yönetin. Her aşamada kimin karar vereceği bellidir.",
      },
      {
        badge: "Task",
        title: "Görev yönetimi",
        description:
          "Her iş bir sorumluya atanır. Görevler özel sohbetlerde kaybolmaz; durum, süre ve geçmiş takip edilir.",
      },
      {
        badge: "Telegram",
        title: "Telegram bildirimleri",
        description:
          "Çalışanlar yeni görevleri, onayları ve geri dönüşleri doğrudan Telegram'da görür. Ek uygulama öğrenme yükü azalır.",
      },
      {
        badge: "Integration",
        title: "Mevcut sistem entegrasyonu",
        description:
          "CRM, web sitesi, depo, Excel veya özel API kaynaklarından veri alıp süreçlerin içine bağlayın.",
      },
      {
        badge: "Audit",
        title: "Kontrol ve geçmiş",
        description:
          "Her talebin durumu, kimde olduğu, hangi kararların alındığı ve hangi dosyaların eklendiği tek yerden izlenir.",
      },
    ],
  },
  integration: {
    title: "Mevcut sistemlerinizin üzerinde çalışır",
    subtitle:
      "Web sitenizi, CRM'inizi, depo yazılımınızı veya Excel tablolarınızı hemen değiştirmeniz gerekmez. Proklix mevcut verilerinize bağlanır, süreçleri çalıştırır, görevleri Telegram'a taşır ve sonuçları tekrar kayıt altına alır.",
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
          "Verileri hâlâ tablolarda tutan işletmeler için hızlı başlangıç: import, export veya kontrollü veri aktarımı.",
        examples: ["Import", "Export", "Hızlı başlangıç"],
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
      "Proklix tek bir hazır kalıba sıkışmaz. Satıştan depoya, satın almadan saha ekiplerine kadar tekrar eden iş akışları form, onay, görev ve sonuç mantığıyla kurulabilir.",
    flowSteps: ["Form", "Onay", "Görev", "Sonuç"],
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
          "Müşteri veya yönetici servis talebi oluşturur. Sorumlu atanır, müdahale sonucu ve dosyalar aynı kayıtta tutulur.",
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
        title: "Gider onayı",
        description:
          "Masraf fişi, açıklama ve dosyalar eklenir. Onay zinciri tamamlanınca sonuç rapora düşer.",
      },
      {
        categoryId: "finance",
        title: "Belge onayı",
        description:
          "Sözleşme, fatura veya iç belge adım adım onaydan geçer. Versiyonlar ve kararlar kaybolmaz.",
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
        title: "Depo transferi",
        description:
          "Depolar arası transfer talebi açılır. Depo sorumlusu görev alır, işlem ve geçmiş kayıt altına alınır.",
        hasIntegration: true,
      },
      {
        categoryId: "warehouse",
        title: "Ürün / stok kontrolü",
        description:
          "Ürün listesi mevcut sistemden veya tablodan gelir. Kontrol görevi atanır, sapma ve fotoğraflar aynı kayıtta toplanır.",
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
        title: "Fotoğraflı görev tamamlama",
        description:
          "Saha çalışanı görevi Telegram'da alır. Fotoğraf, açıklama ve tamamlanma durumu yönetime raporlanır.",
      },
      {
        categoryId: "field",
        title: "Bakım / arıza bildirimi",
        description:
          "Arıza veya bakım talebi açılır. Sorumlu atanır, müdahale adımları ve sonuç geçmişe kaydedilir.",
      },
      {
        categoryId: "internal",
        title: "İK / admin talepleri",
        description:
          "İzin, erişim, belge veya iç destek talepleri belli sorumlular üzerinden takip edilir.",
      },
      {
        categoryId: "internal",
        title: "Erişim / yetki talepleri",
        description:
          "Yeni erişim veya yetki talebi form üzerinden gider. Onay zinciri tamamlanınca karar ve geçmiş saklanır.",
      },
      {
        categoryId: "internal",
        title: "İç onay süreçleri",
        description:
          "İç politika, bütçe veya operasyon kararları adım adım onaydan geçer. Kim ne zaman onayladı görünür.",
      },
    ],
    customCard: {
      title: "Bunların dışında özel süreciniz de kurulabilir",
      description:
        "Firmanızda tekrar eden bir iş varsa; form, onay, görev, dosya, bildirim, rapor ve entegrasyon adımlarıyla Proklix'e uyarlanabilir.",
      cta: "Bir sürecimi analiz et",
    },
    footerNote:
      "En iyi başlangıç: önce tek bir süreci seçip Proklix'te çalışır hale getirmek. Sonra diğer departmanlara yaymak.",
  },
  beforeAfter: {
    title: "Dağınık takipten kontrollü operasyona geçin",
    subtitle:
      "Proklix; sohbetlerde kaybolan talepleri, manuel onayları, dağınık dosyaları ve sistemler arası kopyalama işini tek akışta toplar.",
    transformLabel: "Kaos → Kontrol",
    without: {
      title: "Proklix olmadan",
      subtitle: "İşler sohbet, Excel ve manuel takip arasında dağılır.",
      items: [
        "Talepler Telegram sohbetlerinde kaybolur",
        "Excel dosyaları geç veya eksik güncellenir",
        "Kimin sorumlu olduğu belirsiz kalır",
        "Onaylar mesajla ve manuel takip edilir",
        "Dosyalar, fotoğraflar ve yorumlar farklı yerlerde kalır",
        "İşlem geçmişi ve karar zinciri net görünmez",
        "Veriler sistemler arasında elle kopyalanır",
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
        "Yönetici tek ekrandan genel durumu takip eder",
        "Mevcut CRM, web sitesi, depo veya Excel verileri sürece bağlanabilir",
      ],
    },
    resultChips: [
      "Daha az kayıp talep",
      "Daha net sorumluluk",
      "Daha hızlı onay",
      "Daha görünür yönetim",
      "Daha temiz geçmiş",
    ],
    callout: {
      title: "En büyük fark: süreç kişilerin hafızasında değil, sistemde yaşar.",
      description:
        "Bir talep açıldığında kimin sorumlu olduğu, hangi aşamada beklediği, hangi dosyaların eklendiği ve hangi kararların alındığı Proklix içinde kayıtlı kalır.",
      cta: "Bir sürecimi analiz et",
    },
  },
  sectors: {
    title: "Manuel takip, onay ve saha kontrolü olan işletmeler için",
    subtitle:
      "Sektörünüz farklı olabilir; ihtiyaç genelde aynıdır: talepler kaybolmasın, sorumlu belli olsun, onaylar kayıtlı ilerlesin, dosyalar sürece bağlı kalsın ve yönetici genel durumu görebilsin.",
    positioningLine:
      "Proklix en çok; Telegram, Excel, web sitesi, CRM veya depo sistemi arasında iş takip eden ekiplerde değer üretir.",
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
        title: "İnşaat ve saha ekipleri",
        description:
          "Saha işleri, malzeme talepleri, fotoğraflı raporlar, iş tamamlama ve yönetici onayları tek süreçte toplanır.",
        pills: ["Saha", "Malzeme", "Rapor"],
        example: "malzeme talebi → saha görevi → fotoğraflı rapor",
        sectorSlug: "stroitelstvo",
      },
      {
        title: "Lojistik ve dış ticaret",
        description:
          "Belge takibi, teslim aşamaları, müşteri bildirimleri, görev atamaları ve durum güncellemeleri yönetilebilir.",
        pills: ["Belge", "Teslimat", "Durum"],
        example: "belge girişi → kontrol → teslimat bildirimi",
        sectorSlug: "logistika",
      },
      {
        title: "Emlak ve kiralama",
        description:
          "Mülk talepleri, gösterim randevuları, sözleşme adımları, müşteri notları ve onay geçmişi düzenli tutulur.",
        pills: ["Talep", "Randevu", "Sözleşme"],
        example: "müşteri talebi → gösterim → sözleşme onayı",
        sectorSlug: "nedvizhimost",
      },
      {
        title: "Klinikler ve hizmet işletmeleri",
        description:
          "Randevu sonrası iç görevler, personel talepleri, belge onayları, bakım işleri ve raporlar takip edilebilir.",
        pills: ["Randevu", "İç görev", "Rapor"],
        example: "iç talep → sorumlu atama → tamamlandı",
      },
      {
        title: "Restoranlar ve kafeler",
        description:
          "Satın alma talepleri, vardiya kontrolleri, arıza bildirimleri, personel görevleri ve yönetici onayları kayıtlı ilerler.",
        pills: ["Satın alma", "Vardiya", "Arıza"],
        example: "ihtiyaç bildirimi → onay → görev tamamlama",
      },
      {
        title: "Küçük üretim tesisleri",
        description:
          "Hammadde talepleri, üretim görevleri, kalite kontrol, ekip işleri ve operasyon geçmişi tek ekrandan izlenebilir.",
        pills: ["Hammadde", "Üretim", "Kalite"],
        example: "hammadde talebi → üretim görevi → kalite kontrol",
      },
    ],
    callout: {
      title: "Sektörünüz burada yoksa sorun değil",
      description:
        "Firmanızda tekrar eden talep, onay, görev, dosya, rapor veya entegrasyon ihtiyacı varsa Proklix o sürece göre uyarlanabilir.",
      cta: "Bir sürecimi analiz et",
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
      "Proklix'i kurmaya tüm şirketi aynı anda dönüştürerek başlamayız. Önce en çok zaman kaybettiren bir süreci seçer, çalışır hale getirir, sonra diğer süreçlere yayarız.",
    steps: [
      {
        label: "Analiz",
        title: "Süreci birlikte analiz ederiz",
        description:
          "Talepler nerede başlıyor, kim onaylıyor, hangi dosyalar ekleniyor ve nerede kayboluyor netleştiririz.",
      },
      {
        label: "Kurulum",
        title: "İlk workflow'u kurarız",
        description:
          "Form alanlarını, adımları, sorumluları, durumları ve Telegram bildirimlerini oluştururuz.",
      },
      {
        label: "Entegrasyon",
        title: "Gerekli verileri bağlarız",
        description:
          "Web sitesi, CRM, depo, Excel veya özel API gibi kaynaklar gerekiyorsa sürece entegre edilir.",
      },
      {
        label: "Canlı kullanım",
        title: "Telegram'da kullanıma açarız",
        description:
          "Çalışanlar görevleri ve onayları Telegram üzerinden alır; yöneticiler durumu sistemden izler.",
      },
      {
        label: "Genişleme",
        title: "Ölçer, geliştirir ve yayarız",
        description:
          "İlk süreç oturduktan sonra raporlar, roller, yeni süreçler ve ek entegrasyonlar eklenir.",
      },
    ],
    callout: {
      title: "En iyi başlangıç: tek bir acıtan süreci seçmek",
      description:
        "Satın alma onayı, müşteri talebi, stok sayımı, ticari teklif veya saha görevi gibi bir süreçle başlayıp sonucu hızlıca görmek daha sağlıklıdır.",
      cta: "İlk sürecimi analiz et",
    },
  },
  modules: {
    title: "Proklix'in temel yapı taşları",
    subtitle:
      "Her modül tek başına değil, aynı sürecin parçası olarak çalışır: veri toplanır, görev atanır, onay ilerler, dosyalar eklenir, geçmiş kaydedilir ve yönetim sonucu görür.",
    flowSteps: ["Form", "Workflow", "Görev", "Onay", "Geçmiş", "Rapor", "Entegrasyon"],
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
            title: "Raporlar ve dashboard",
            description:
              "Yönetim açık talepleri, bekleyen onayları, tamamlanan işleri ve ekip durumunu görebilir.",
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
            title: "Import / export süreçleri",
            description:
              "Excel ve tablo tabanlı veriler import, export veya kontrollü aktarım ile bağlanabilir.",
          },
        ],
      },
    ],
    callout: {
      title: "Modüller ayrı ayrı değil, tek süreçte birleşir",
      description:
        "Örneğin bir satın alma talebinde form doldurulur, yönetici onaylar, muhasebeye görev gider, dosyalar eklenir, tüm kararlar geçmişe kaydedilir ve gerekirse sonuç mevcut sisteme aktarılır.",
      cta: "Bir sürecimi analiz et",
    },
  },
  workflow: {
    title: "Örnek iş akışı",
    subtitle:
      "Bir talep geldiğinde Proklix onu sadece kaydetmez; veriyi alır, sorumluya görev verir, onayı yönetir, Telegram bildirimlerini gönderir ve tüm geçmişi saklar.",
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
            badge: "Audit",
            title: "Geçmiş",
            description:
              "Tüm versiyonlar, kararlar, yorumlar ve dosyalar audit/rapor için saklanır.",
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
            badge: "Audit",
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
            badge: "Audit",
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
            badge: "Audit",
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
        "Aynı mantık müşteri talepleri, stok sayımı, satın alma, saha görevleri, belge onayı ve firmaya özel süreçlere uyarlanabilir.",
      cta: "Benzer sürecimi analiz et",
    },
  },
  projects: {
    title: "Proklix gerçek B2B ihtiyaçlarından doğdu",
    subtitle:
      "B2B kataloglar, müşteri talepleri, Telegram üzerinden başvurular, yerel SEO, operasyon takibi ve sektöre özel süreçlerde edindiğimiz deneyimi Proklix'e taşıyoruz.",
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
        "Talepler sohbetlerde kayboluyor, bilgiler farklı sistemlerde duruyor, onaylar manuel ilerliyor ve yönetici sürecin tamamını tek yerden göremiyor. Proklix bu problemi çözmek için tasarlandı.",
      cta: "Benzer sürecimi analiz et",
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
          "Basit dashboard görünümü",
          "Kapsam analizden sonra belirlenir",
        ],
        cta: "İlk sürecimi analiz et",
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
          "Raporlar ve dashboard",
          "Temel entegrasyon veya import/export",
          "Telegram görev ve onay bildirimleri",
          "Kapsam analizden sonra belirlenir",
        ],
        cta: "Teklif al",
        highlighted: true,
        badge: "En mantıklı başlangıç",
      },
      {
        name: "İşletmenize özel operasyon sistemi",
        subtitle:
          "Özel CRM, workflow, entegrasyon, rol yapısı ve raporlama isteyen işletmeler için.",
        bestFor:
          "Birden fazla departman, özel API bağlantıları ve kapsamlı operasyon kontrolü isteyen şirketler.",
        features: [
          "Özel API entegrasyonları",
          "Roller, erişimler, audit ve raporlar",
          "Birden fazla departman ve süreç",
          "Özel dashboard ve operasyon ekranları",
          "Eğitim ve destek",
          "Kapsam analizden sonra belirlenir",
        ],
        cta: "Özel proje görüşmesi al",
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
    title: "Bize kaotik bir sürecinizi gösterin, Proklix'te nasıl toplanacağını gösterelim",
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
