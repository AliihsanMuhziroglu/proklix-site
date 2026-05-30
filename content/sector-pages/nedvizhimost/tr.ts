import type { SectorPageContent } from "@/dictionaries/types";

export const nedvizhimostTr: SectorPageContent = {
  meta: {
    title: "Emlak CRM ve Workflow Sistemi | Proklix",
    description:
      "Proklix emlak ofisleri için müşteri talepleri, portföyler, gösterimler, kira süreci, görevler ve Telegram bildirimlerini tek panelde toplar.",
  },
  breadcrumb: { sectorName: "Emlak" },
  hero: {
    title:
      "Emlak işinizde talep, portföy, gösterim ve kira süreçlerini tek sistemde yönetin.",
    subtitle:
      "Proklix, emlak acenteleri ve danışmanlar için müşteri talepleri, ilanlar, gösterimler, kira sözleşmeleri, ödemeler ve iç görevleri web paneli ve Telegram bildirimleriyle düzenler.",
    mockupFeed: [
      "Yeni müşteri talebi",
      "Gösterim planlandı",
      "Sözleşme hazırlanıyor",
      "Ödeme hatırlatması gönderildi",
      "Telegram bildirimi gönderildi",
    ],
  },
  problem: {
    title: "Sorun: her şey Telegram, telefon ve notlarda dağılıyor.",
    items: [
      {
        title: "Müşteri talepleri sohbetlerde kayboluyor",
        description:
          "Talepler mesajlaşma uygulamalarına dağılıyor, sorumlu kişi ve durum belirsiz.",
      },
      {
        title: "Hangi ilanın kime gösterildiği net değil",
        description:
          "Gösterim geçmişi ayrı notlarda kalıyor, yeniden teklif zorlaşıyor.",
      },
      {
        title: "Danışmanlar görevleri elle takip ediyor",
        description:
          "Hatırlatmalar hafızada veya kişisel sohbetlerde, terminler kaçıyor.",
      },
      {
        title: "Kira sözleşmeleri ve ödemeler ayrı yürütülüyor",
        description:
          "Şartlar, depozito ve ödemeler CRM dışındaki dosyalarda tutuluyor.",
      },
      {
        title: "Yönetici gerçek durumu göremiyor",
        description:
          "Huni, iş yükü ve gecikmeler tek panelde değil, ancak sorunca öğreniliyor.",
      },
      {
        title: "Müşteriye dönüş gecikiyor",
        description:
          "Yanıt süresi takibi yok, müşteriler beklemekten vazgeçiyor.",
      },
    ],
  },
  solution: {
    title: "Proklix emlak ekibiniz için ne kurar?",
    items: [
      {
        title: "Müşteri talepleri CRM'i",
        description: "Her talep kartında: kaynak, bütçe, bölge, sorumlu danışman.",
      },
      {
        title: "İlan ve portföy yönetimi",
        description: "İlanlar, durumlar, fiyat değişiklikleri ve geçmiş tek yerde.",
      },
      {
        title: "Gösterim / randevu planlama",
        description: "Zaman, yer, katılımcılar ve sonuç kaydedilir.",
      },
      {
        title: "Sözleşme ve kira süreci",
        description: "Şart mutabakatı, evrak aşamaları ve onay akışı.",
      },
      {
        title: "Ödeme ve hatırlatma kontrolü",
        description: "Depozito, aylık ödeme ve hatırlatmalar otomatik izlenir.",
      },
      {
        title: "Telegram bildirimleri",
        description: "Yeni talep, gösterim ve sözleşme aşamalarında hızlı uyarı.",
      },
      {
        title: "Yönetici paneli ve raporlar",
        description: "Danışman yükü, dönüşüm ve süreçteki darboğazlar görünür.",
      },
      {
        title: "Görev ve sorumlu takibi",
        description: "Her aşamada sorumlu, termin ve tamamlanma durumu.",
      },
    ],
  },
  workflow: {
    title: "Örnek: müşteri talebinden kira sözleşmesine",
    steps: [
      {
        title: "Müşteri talep gönderir",
        description: "Site, Telegram veya telefon üzerinden gelen talep sisteme düşer.",
      },
      {
        title: "Danışman bütçe, bölge ve oda sayısını girer",
        description: "Talep parametreleri kartta saklanır, sorumlu atanır.",
      },
      {
        title: "Uygun ilanlar seçilir",
        description: "Portföyden filtreleme ve müşteriye uygun seçenekler eklenir.",
      },
      {
        title: "Gösterim zamanı belirlenir",
        description: "Randevu zamanı, yeri ve katılımcılar planlanır.",
      },
      {
        title: "Müşteri karar verir",
        description: "Seçim, red veya ek seçenek talebi kaydedilir.",
      },
      {
        title: "Sözleşme ve ödeme aşaması açılır",
        description: "Şartlar, depozito ve ödeme planı workflow'a bağlanır.",
      },
      {
        title: "Yönetici panelde tüm süreci görür",
        description: "Her işlem aşaması ve gecikmeler tek görünümde.",
      },
      {
        title: "Telegram bildirimleri gönderilir",
        description: "Ekip ve yönetici önemli değişikliklerden anında haberdar olur.",
      },
    ],
  },
  useCases: {
    title: "Hangi süreçler dijitalleştirilebilir?",
    items: [
      {
        title: "Kiralık daire talepleri",
        description: "Gelen talepler, filtreleme ve hızlı yanıt süreci.",
      },
      {
        title: "Satılık ilanlar",
        description: "İlanlar, fiyat ve gösterimlerle bağlı portföy.",
      },
      {
        title: "Danışman görevleri",
        description: "Günlük işler, terminler ve sorumluluk.",
      },
      {
        title: "Müşteri iletişim geçmişi",
        description: "Arama, randevu ve yazışmalar tek kartta.",
      },
      {
        title: "Gösterim takvimi",
        description: "Danışmanlar ve ilanlar için ortak takvim.",
      },
      {
        title: "Depozito ve ödeme hatırlatmaları",
        description: "Termin yaklaştığında otomatik hatırlatmalar.",
      },
      {
        title: "Belgeler ve dosyalar",
        description: "Sözleşmeler ve evraklar ilan ve müşteriye bağlı.",
      },
      {
        title: "Yönetici kontrolü",
        description: "İş yükü, dönüşüm ve süreç durumu tek panelde.",
      },
    ],
  },
  beforeAfter: {
    title: "Önce ve sonra",
    before: {
      title: "Önce",
      items: [
        "Telegram sohbetlerinde dağınık mesajlar",
        "Excel sürekli güncellenmiyor",
        "Görevler hafızada kalıyor",
        "Yönetici geç öğreniyor",
        "Müşteriye yanıt gecikiyor",
      ],
    },
    after: {
      title: "Sonra",
      items: [
        "Her talep sisteme düşer",
        "Sorumlu kişi belirlenir",
        "Her aşama izlenir",
        "Telegram bildirimi vardır",
        "Yönetici gerçek durumu görür",
      ],
    },
  },
  miniOffer: {
    title: "İlk adım: ücretsiz süreç analizi",
    description:
      "20 dakikalık görüşmede müşteri talepleri, ilanlar, gösterimler ve kira sürecinin bugün nasıl yürüdüğünü inceleriz. Sonra hangi kısmın önce otomatikleştirilebileceğini net söyleriz.",
  },
  relatedSectors: {
    title: "Diğer sektörler için de uygun",
    items: [
      { title: "B2B kataloglar", sector: "b2b-katalog" },
      { title: "Agro distribütörler", sector: "agro" },
      { title: "Temizlik ekipmanları", sector: "oborudovanie" },
      { title: "Lojistik", sector: "logistika" },
      { title: "İnşaat", sector: "stroitelstvo" },
      { title: "Servis şirketleri", sector: "b2b-katalog" },
    ],
  },
  finalCta: {
    title: "Emlak süreçlerinizi düzene sokalım.",
    description:
      "Talep, ilan, gösterim, sözleşme ve ödeme kontrolünü tek panelde yürütün. Ekip Telegram'dan hızlı haber alır, yönetici süreci net görür.",
  },
};
