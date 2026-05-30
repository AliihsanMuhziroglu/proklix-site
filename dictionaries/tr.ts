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
