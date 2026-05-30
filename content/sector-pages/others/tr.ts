import type { SectorPageContent } from "@/dictionaries/types";
import type { SectorSlug } from "@/lib/sectors";
import {
  createSectorPage,
  defaultRelatedTr,
  makeBeforeAfter,
  makeUseCases,
  makeWorkflowSteps,
  relatedExcept,
} from "../templates";

const beforeItems = [
  "Telegram sohbetlerinde dağınık mesajlar",
  "Excel düzenli güncellenmiyor",
  "Görevler hafızada kalıyor",
  "Yönetici durumu geç öğreniyor",
  "Müşteriye dönüş gecikiyor",
];

const afterItems = [
  "Her talep sisteme düşüyor",
  "Sorumlu kişi atanıyor",
  "Her aşama izleniyor",
  "Telegram bildirimleri var",
  "Yönetici gerçek durumu görüyor",
];

export const otherSectorsTr: Record<
  Exclude<SectorSlug, "nedvizhimost">,
  SectorPageContent
> = {
  "b2b-katalog": createSectorPage({
    meta: {
      title: "B2B kataloglar için CRM ve workflow | Proklix",
      description:
        "Proklix ticaret şirketleri için katalog, müşteri talepleri, teklif süreçleri ve onayları tek panelde yönetmeyi sağlar.",
    },
    breadcrumb: { sectorName: "B2B katalog" },
    hero: {
      title: "B2B katalog, talepler ve teklif süreçlerini tek sistemde yönetin.",
      subtitle:
        "Proklix; satış ekipleri için ürün kataloğunu, müşteri taleplerini, fiyat onaylarını ve Telegram bildirimlerini birleştirir.",
      mockupFeed: [
        "Yeni katalog talebi",
        "Ticari teklif hazırlanıyor",
        "Yönetici onayı bekleniyor",
        "Teklif müşteriye gönderildi",
        "Telegram bildirimi gönderildi",
      ],
    },
    problem: {
      title: "Sorun: katalog, talep ve teklifler ayrı araçlarda kalıyor.",
      items: [
        { title: "Katalog CRM'den kopuk", description: "Yöneticiler fiyatı farklı dosyalarda arıyor." },
        { title: "Teklifler onaysız gönderiliyor", description: "İndirimler yönetici onayı olmadan müşteriye gidiyor." },
        { title: "Müşteri geçmişi eksik", description: "Hangi teklifin hangi aşamada olduğu net değil." },
        { title: "Talepler sohbetlerde kayboluyor", description: "Site ve Telegram talepleri dağınık toplanıyor." },
        { title: "Yönetici süreci geç görüyor", description: "Onay adımları tek panelde izlenmiyor." },
        { title: "Müşteriye dönüş yavaş", description: "Sorumlu ve termin net atanmadığı için gecikmeler oluşuyor." },
      ],
    },
    solution: {
      title: "Proklix B2B satış ekipleri için ne kurar?",
      items: [
        { title: "Katalog ve web talepleri", description: "Ürün seçimi ve talep doğrudan CRM'e düşer." },
        { title: "Müşteri veri tabanı", description: "Kişiler, teklifler ve fırsat geçmişi tek yerde." },
        { title: "Teklif onay workflow'u", description: "Yönetici → lider → müşteri akışı kayıt altındadır." },
        { title: "Fiyat ve indirim kontrolü", description: "Onaysız indirim gönderimi engellenir." },
        { title: "Telegram bildirimleri", description: "Yeni talep ve onay adımlarında hızlı uyarı." },
        { title: "Yönetici paneli", description: "Teklifler, dönüşüm ve gecikmeler görünür." },
        { title: "Görev ve sorumluluk", description: "Her talep için sorumlu ve termin atanır." },
        { title: "Satış raporları", description: "Huni performansı ve ekip yükü ölçülür." },
      ],
    },
    workflow: makeWorkflowSteps("Örnek: katalog talebinden teklife", [
      ["Müşteri katalogdan talep gönderir", "Talep site veya Telegram üzerinden sisteme gelir."],
      ["Satış yöneticisi detayları girer", "Ürün, miktar, fiyat ve koşullar kaydedilir."],
      ["Teklif hazırlanır", "Standart şablon ve fiyat yapısı kullanılır."],
      ["Yönetici onayı alınır", "İndirim ve şartlar workflow üzerinden onaylanır."],
      ["Teklif müşteriye gönderilir", "Versiyon ve gönderim zamanı kayda alınır."],
      ["Müşteri geri bildirim verir", "Kabul, ret veya ek soru sisteme işlenir."],
      ["Yönetici panelde süreci görür", "Tüm aşamalar ve gecikmeler tek ekranda izlenir."],
      ["Telegram bildirimleri gönderilir", "Ekip kritik değişikliklerden anında haberdar olur."],
    ]),
    useCases: makeUseCases("Hangi süreçler dijitalleştirilebilir?", [
      ["Katalog talepleri", "Web ve mesajlaşma kanallarından gelen başvurular."],
      ["Ticari teklifler", "Versiyon, onay ve gönderim geçmişi."],
      ["Fiyat onayı", "İndirim ve şartların onay rotası."],
      ["Müşteri iletişim geçmişi", "Arama, mesaj ve teklif hareketleri."],
      ["Satış görevleri", "Günlük işler ve termin takibi."],
      ["Yönetici kararları", "Bekleyen onayların merkezi listesi."],
      ["Belgeler ve dosyalar", "Teklif, sözleşme ve ek dokümanlar."],
      ["Satış raporları", "Huni ve dönüşüm analizleri."],
    ]),
    beforeAfter: makeBeforeAfter("Önce ve sonra", "Önce", "Sonra", beforeItems, afterItems),
    miniOffer: {
      title: "İlk adım: ücretsiz süreç analizi",
      description:
        "20 dakikada katalog talebinden teklife kadar mevcut akışınızı inceler ve önce neyi otomatikleştirmeniz gerektiğini netleştiririz.",
    },
    relatedSectors: {
      title: "Diğer sektörler için de uygun",
      items: relatedExcept("b2b-katalog", defaultRelatedTr).slice(0, 6),
    },
    finalCta: {
      title: "B2B satış süreçlerinizi düzene sokalım.",
      description:
        "Katalog, talep, teklif ve onayları tek panelde yönetin. Ekip Telegram ile hızla bilgilensin.",
    },
  }),
  agro: createSectorPage({
    meta: {
      title: "Agro dağıtım için CRM ve workflow | Proklix",
      description:
        "Proklix agro şirketlerinde bayi siparişleri, depo adımları, bölge ekipleri ve Telegram bildirimlerini tek sistemde toplar.",
    },
    breadcrumb: { sectorName: "Agro dağıtım" },
    hero: {
      title: "Bayi siparişleri, depo ve bölgesel operasyonları tek sistemde yönetin.",
      subtitle:
        "Proklix; agro distribütörleri için siparişleri, depo durumlarını, bölgesel iş akışlarını ve ekip görevlerini web panel ve Telegram üzerinden düzenler.",
      mockupFeed: [
        "Yeni bayi siparişi",
        "Depoda hazırlık başladı",
        "Sevkiyat planlandı",
        "Durum güncellendi",
        "Telegram bildirimi gönderildi",
      ],
    },
    problem: {
      title: "Sorun: siparişler sohbetlerde, depo ayrı çalışıyor.",
      items: [
        { title: "Siparişler mesajlaşma uygulamalarında", description: "Bayi yazar, depo geç haberdar olur." },
        { title: "Bölgelerde görünürlük düşük", description: "Yönetici, ekip yükü ve hacimleri göremez." },
        { title: "Durumlar manuel güncelleniyor", description: "Müşteriler sürekli sipariş durumu sorar." },
        { title: "Depo ve satış kopuk", description: "Excel ve sohbet kayıtları senkron değildir." },
        { title: "Yönetici sorunları geç görür", description: "Gecikme nedenleri anlık görünmez." },
        { title: "Görevler dağınık", description: "Sorumlu ve termin net tanımlanmaz." },
      ],
    },
    solution: {
      title: "Proklix agro ekipleri için ne kurar?",
      items: [
        { title: "Bayi sipariş portalı", description: "Web form veya Telegram ile siparişler CRM'e akar." },
        { title: "Depo ve durum takibi", description: "Alındı → hazırlanıyor → gönderildi aşamaları." },
        { title: "Bölge yönetici paneli", description: "Bölge bazlı yük ve hacim görünürlüğü." },
        { title: "Telegram bildirimleri", description: "Yeni sipariş ve durum değişimlerinde hızlı uyarı." },
        { title: "Bayi geçmişi", description: "Kartta tüm sipariş ve iletişim geçmişi." },
        { title: "Görev kontrolü", description: "Sorumlu, termin ve ilerleme tek yerde." },
        { title: "Yönetici raporları", description: "Bölgesel performans ve darboğaz analizi." },
        { title: "Sipariş belgeleri", description: "Evraklar ilgili siparişe bağlı tutulur." },
      ],
    },
    workflow: makeWorkflowSteps("Örnek: bayi siparişinden teslimata", [
      ["Bayi sipariş gönderir", "Sipariş portal veya Telegram'dan sisteme girer."],
      ["Yönetici siparişi doğrular", "Miktar, fiyat ve teslim koşulları kayıt edilir."],
      ["Depoya görev açılır", "Hazırlık ve paketleme adımı başlatılır."],
      ["Durumlar güncellenir", "Her adımda sorumlu ve zaman işlenir."],
      ["Teslimat planlanır", "Rota ve tarih belirlenir."],
      ["Bayi bilgilendirilir", "Telegram üzerinden otomatik durum bildirimi gider."],
      ["Yönetici panelde izler", "Bölge bazlı sipariş ve gecikmeler görünür."],
      ["Raporlama yapılır", "Hacim, süre ve gecikme noktaları analiz edilir."],
    ]),
    useCases: makeUseCases("Hangi süreçler dijitalleştirilebilir?", [
      ["Bayi siparişleri", "Gelen talep ve onay süreçleri."],
      ["Depo durumları", "Hazırlık, paketleme, sevkiyat adımları."],
      ["Bölgesel satış", "Ekip yükü ve bölge hacimleri."],
      ["Teslimat planlama", "Rota ve tarih kontrolü."],
      ["Müşteri geçmişi", "Bayi kartları ve sipariş geçmişi."],
      ["İç koordinasyon", "Satış ve depo arasındaki görev akışı."],
      ["Yönetici denetimi", "Gecikmeler ve kritik darboğazlar."],
      ["Telegram bildirimleri", "Anlık durum güncellemeleri."],
    ]),
    beforeAfter: makeBeforeAfter("Önce ve sonra", "Önce", "Sonra", beforeItems, afterItems),
    miniOffer: {
      title: "İlk adım: ücretsiz süreç analizi",
      description:
        "Bayi → yönetici → depo → teslimat zincirinizi 20 dakikada analiz eder, otomasyon için öncelik sırasını çıkarırız.",
    },
    relatedSectors: {
      title: "Diğer sektörler için de uygun",
      items: relatedExcept("agro", defaultRelatedTr).slice(0, 6),
    },
    finalCta: {
      title: "Agro dağıtım süreçlerinizi düzenleyelim.",
      description: "Sipariş, depo ve teslimatı tek panelde görünür ve kontrollü hale getirin.",
    },
  }),
  oborudovanie: createSectorPage({
    meta: {
      title: "Ekipman satışı için CRM ve workflow | Proklix",
      description:
        "Proklix ekipman tedarikçileri için teknik talepler, hesaplamalar, teklif onayları ve Telegram bildirimlerini tek panelde yönetir.",
    },
    breadcrumb: { sectorName: "Ekipman satışı" },
    hero: {
      title: "Teknik ekipman satışında danışmanlık, hesaplama ve teklif süreçlerini tek sistemde yönetin.",
      subtitle:
        "Proklix katalog, teknik değerlendirme, paketleme, teklif versiyonları ve onay akışını tek bir workflow'da birleştirir.",
      mockupFeed: [
        "Yeni teknik talep",
        "Mühendis incelemesi",
        "Teklif hesaplanıyor",
        "Yönetici onayı bekleniyor",
        "Telegram bildirimi gönderildi",
      ],
    },
    problem: {
      title: "Sorun: danışmanlık, hesap ve teklif ayrı ilerliyor.",
      items: [
        { title: "Uzun teknik danışmanlık döngüsü", description: "Sorular mühendis ve satış arasında kayboluyor." },
        { title: "Paketler manuel hesaplanıyor", description: "Excel kaynaklı spesifikasyon hataları oluşuyor." },
        { title: "Marj kontrolü zayıf", description: "İndirimler sözlü onaylarla ilerliyor." },
        { title: "Teklif versiyonları karışıyor", description: "Müşteriye hangi versiyonun gittiği belirsiz." },
        { title: "Yönetici geç görür", description: "Onay ve marj durumları tek panelde değil." },
        { title: "Müşteri dönüşü gecikir", description: "Teknik doğrulama ve hesaplama süreleri uzuyor." },
      ],
    },
    solution: {
      title: "Proklix ekipman satış ekipleri için ne kurar?",
      items: [
        { title: "Paketli ürün kataloğu", description: "Ürünler, uyumluluk ve standart setler tek yerde." },
        { title: "Talep → hesap → onay akışı", description: "Mühendis, satış ve yönetici ortak workflow'da çalışır." },
        { title: "Teknik kartlar", description: "Spesifikasyon ve danışmanlık geçmişi kaydedilir." },
        { title: "Teklif versiyon yönetimi", description: "Her versiyon ve değişiklik izi tutulur." },
        { title: "Telegram bildirimleri", description: "Kontrol ve onay adımlarında hızlı bilgi." },
        { title: "Marj kontrolü", description: "Onaysız indirim veya koşul gönderimi engellenir." },
        { title: "Yönetici paneli", description: "Marj, gecikme ve teklif performansı görünür." },
        { title: "Proje geçmişi", description: "Müşteri bazında tüm teklif ve iletişim geçmişi." },
      ],
    },
    workflow: makeWorkflowSteps("Örnek: teknik talepten teklife", [
      ["Müşteri teknik talep gönderir", "Talep katalog veya web üzerinden sisteme düşer."],
      ["Mühendis uygunluğu kontrol eder", "Teknik gereksinim ve paket doğrulanır."],
      ["Satış yöneticisi fiyatlandırır", "Marj, koşul ve teslim bilgisi eklenir."],
      ["Yönetici onaylar", "İndirim ve son teklif şartları netleştirilir."],
      ["Teklif müşteriye gönderilir", "Versiyon ve gönderim zamanı kaydedilir."],
      ["Müşteri geri dönüş yapar", "Kabul, ret veya ek soru işlenir."],
      ["Yönetici panelden izler", "Tüm projeler ve adımlar tek ekranda görünür."],
      ["Telegram bildirimleri gider", "Ekip önemli değişiklikleri anında alır."],
    ]),
    useCases: makeUseCases("Hangi süreçler dijitalleştirilebilir?", [
      ["Teknik danışmanlık", "Soru, cevap ve teknik değerlendirme kayıtları."],
      ["Paket hesaplamaları", "Standart ve özel set fiyatlandırmaları."],
      ["Ticari teklifler", "Versiyon, onay ve gönderim yönetimi."],
      ["Marj onayı", "İndirim ve şart kontrol akışı."],
      ["Müşteri proje geçmişi", "Tüm teklif ve iletişim arşivi."],
      ["Mühendis görevleri", "İnceleme adımları ve terminler."],
      ["Yönetici denetimi", "Marj ve dönüşüm raporları."],
      ["Belge yönetimi", "Spesifikasyon ve teklif dosyaları."],
    ]),
    beforeAfter: makeBeforeAfter("Önce ve sonra", "Önce", "Sonra", beforeItems, afterItems),
    miniOffer: {
      title: "İlk adım: ücretsiz süreç analizi",
      description:
        "Danışmanlık, hesaplama ve teklif onay adımlarınızı analiz edip nerede en hızlı kazanım alabileceğinizi birlikte belirleriz.",
    },
    relatedSectors: {
      title: "Diğer sektörler için de uygun",
      items: relatedExcept("oborudovanie", defaultRelatedTr).slice(0, 6),
    },
    finalCta: {
      title: "Ekipman satış süreçlerinizi netleştirelim.",
      description: "Danışmanlık, hesaplama, teklif ve onayları tek panelde toplayın.",
    },
  }),
  logistika: createSectorPage({
    meta: {
      title: "Lojistik için CRM ve workflow | Proklix",
      description:
        "Proklix lojistik şirketlerinde taşıma talepleri, belgeler, teslimat aşamaları ve müşteri bildirimlerini tek sistemde yönetir.",
    },
    breadcrumb: { sectorName: "Lojistik" },
    hero: {
      title: "Taşıma taleplerini, evrakları ve teslimat adımlarını tek sistemde yönetin.",
      subtitle:
        "Proklix, lojistik ve dış ticaret ekipleri için talepleri, belge akışını, durum takibini ve müşteri bildirimlerini web panel + Telegram ile düzenler.",
      mockupFeed: [
        "Yeni taşıma talebi",
        "Belgeler yüklendi",
        "Durum: gümrükte",
        "Durum: teslimatta",
        "Telegram bildirimi gönderildi",
      ],
    },
    problem: {
      title: "Sorun: belgeler ve durum bilgileri dağınık kalıyor.",
      items: [
        { title: "Belgeler farklı yerlerde", description: "Evraklar ilgili sevkiyata bağlı tutulmuyor." },
        { title: "Müşteri güncel durumu göremiyor", description: "Yöneticiler aynı soruları tekrar yanıtlıyor." },
        { title: "Aşamalar kayıt altına alınmıyor", description: "Gecikmenin hangi noktada olduğu belirsiz." },
        { title: "Ekipler arası koordinasyon zor", description: "Depo, gümrük ve teslimat ayrık çalışıyor." },
        { title: "Yönetici geç haberdar oluyor", description: "Tüm sevkiyatları izleyen tek panel yok." },
        { title: "Görev atamaları düzensiz", description: "Sorumlu ve termin adım bazında netleşmiyor." },
      ],
    },
    solution: {
      title: "Proklix lojistik ekipleri için ne kurar?",
      items: [
        { title: "Aşama bazlı takip", description: "Her adım için sorumlu, termin ve durum kaydı." },
        { title: "Sevkiyat bazlı belge yönetimi", description: "Dosyalar doğru sevkiyat kartına bağlı." },
        { title: "Müşteri durum portalı", description: "Müşteri aramadan süreci takip eder." },
        { title: "Telegram bildirimleri", description: "Durum değişimleri otomatik aktarılır." },
        { title: "İç görev akışı", description: "Satış, operasyon ve depo koordinasyonu tek yerde." },
        { title: "Yönetici paneli", description: "Gecikmeler ve riskli sevkiyatlar görünür." },
        { title: "Talep geçmişi", description: "Müşteri bazlı tüm taşımalar arşivlenir." },
        { title: "Performans raporları", description: "Süre, aşama ve gecikme nedenleri ölçülür." },
      ],
    },
    workflow: makeWorkflowSteps("Örnek: talepten teslimata", [
      ["Müşteri taşıma talebi gönderir", "Talep web veya Telegram üzerinden sisteme alınır."],
      ["Yönetici şartları kaydeder", "Rota, hacim ve teslim tarihi tanımlanır."],
      ["Belgeler yüklenir", "Tüm dosyalar ilgili sevkiyata eklenir."],
      ["Aşamalar güncellenir", "Depo, gümrük ve teslimat statüleri işlenir."],
      ["Müşteri bilgilendirilir", "Telegram ile otomatik durum mesajı gider."],
      ["Gecikme olursa uyarı üretilir", "Sorumlu ve yöneticiye anlık bildirim gider."],
      ["Yönetici panelden izler", "Tüm sevkiyatlar tek görünümde kontrol edilir."],
      ["Sonuç raporu alınır", "Süreç performansı ve darboğazlar analiz edilir."],
    ]),
    useCases: makeUseCases("Hangi süreçler dijitalleştirilebilir?", [
      ["Taşıma talepleri", "Talep alma, doğrulama ve açılış."],
      ["Belge yönetimi", "İrsaliye, beyanname ve dosya takibi."],
      ["Teslimat durumları", "Aşama ve termin yönetimi."],
      ["Müşteri bildirimleri", "Telegram ile anlık durum iletimi."],
      ["İç koordinasyon", "Depo, gümrük, teslimat ekipleri."],
      ["Görev atamaları", "Sorumlu ve deadline netliği."],
      ["Yönetici kontrolü", "Riskli adımlar ve gecikmeler."],
      ["Müşteri geçmişi", "Tüm sevkiyatların tek noktada kaydı."],
    ]),
    beforeAfter: makeBeforeAfter("Önce ve sonra", "Önce", "Sonra", beforeItems, afterItems),
    miniOffer: {
      title: "İlk adım: ücretsiz süreç analizi",
      description:
        "Talepten teslimata kadar mevcut lojistik zincirinizi inceler, yüksek etkili otomasyon noktalarını belirleriz.",
    },
    relatedSectors: {
      title: "Diğer sektörler için de uygun",
      items: relatedExcept("logistika", defaultRelatedTr).slice(0, 6),
    },
    finalCta: {
      title: "Lojistik süreçlerinizi düzene alalım.",
      description: "Talep, belge ve teslimat kontrolünü tek panelde yönetin.",
    },
  }),
  stroitelstvo: createSectorPage({
    meta: {
      title: "İnşaat için CRM ve workflow | Proklix",
      description:
        "Proklix inşaat ekiplerinde saha görevleri, onay süreçleri, foto raporlar ve Telegram bildirimlerini tek panelde yönetir.",
    },
    breadcrumb: { sectorName: "İnşaat" },
    hero: {
      title: "Sahadaki görevleri, onayları ve raporlamayı tek sistemde yönetin.",
      subtitle:
        "Proklix; inşaat şirketleri için görev yönetimi, değişiklik onayları, foto raporları ve ekip koordinasyonunu web panel + Telegram ile birleştirir.",
      mockupFeed: [
        "Yeni saha görevi",
        "Foto rapor yüklendi",
        "Değişiklik onayı bekleniyor",
        "Yönetici adımı onayladı",
        "Telegram bildirimi gönderildi",
      ],
    },
    problem: {
      title: "Sorun: görevler sohbetlerde, onaylar kağıtta kalıyor.",
      items: [
        { title: "Görevler mesajlaşma uygulamalarında", description: "İş emirleri kayboluyor, takip zorlaşıyor." },
        { title: "Değişiklik onayları yavaş", description: "İmza ve evrak süreci işin akışını durduruyor." },
        { title: "Foto raporlar dağınık", description: "Saha görselleri proje aşamalarına bağlı değil." },
        { title: "Yönetici riskleri geç görüyor", description: "Şantiyelerin güncel durumu tek panelde toplanmıyor." },
        { title: "Sorumlular net değil", description: "Kim neyi ne zaman yapacak açık değil." },
        { title: "Terminler kaçıyor", description: "Hatırlatma ve görünür statü sistemi yok." },
      ],
    },
    solution: {
      title: "Proklix inşaat ekipleri için ne kurar?",
      items: [
        { title: "Sorumluluğu belirli görevler", description: "Görev, termin ve foto kanıt tek akışta." },
        { title: "Dijital onay süreçleri", description: "Foreman → mühendis → yönetici onay rotası." },
        { title: "Aşama bazlı foto rapor", description: "Her görsel obje ve iş adımına bağlıdır." },
        { title: "Telegram bildirimleri", description: "Yeni görev ve onay adımlarında anlık bilgi." },
        { title: "Proje geçmişi", description: "Tüm görev ve değişiklikler tek kartta saklanır." },
        { title: "Yönetici paneli", description: "Şantiye yükü, gecikmeler ve riskler görünür." },
        { title: "Mobil erişim", description: "Saha ekipleri telefondan durum günceller." },
        { title: "Termin kontrolü", description: "Hatırlatmalar ve uyarılar otomatik çalışır." },
      ],
    },
    workflow: makeWorkflowSteps("Örnek: görevden değişiklik onayına", [
      ["Yönetici veya mühendis görev açar", "Şantiye, sorumlu ve termin belirlenir."],
      ["Saha ekibi görevi alır", "Görev bildirimi Telegram ile iletilir."],
      ["İş tamamlanır ve foto yüklenir", "Foto rapor ilgili aşamaya bağlanır."],
      ["Gerekirse değişiklik süreci başlar", "Yeni koşullar onay workflow'una girer."],
      ["Mühendis kontrol yapar", "Çıktı ve kalite doğrulanır."],
      ["Yönetici nihai karar verir", "Aşama kapanır veya revizyona döner."],
      ["Yönetici panelde tüm şantiyeleri görür", "Durumlar ve riskler tek ekranda izlenir."],
      ["Telegram bildirimleri gönderilir", "Tüm kritik değişiklikler anında paylaşılır."],
    ]),
    useCases: makeUseCases("Hangi süreçler dijitalleştirilebilir?", [
      ["Saha görevleri", "Atama, termin ve takip."],
      ["Değişiklik onayları", "Dijital karar akışı."],
      ["Foto raporlar", "Obje ve aşama bazlı kayıt."],
      ["İç onay süreçleri", "Mühendislik ve yönetici kararları."],
      ["Şantiye geçmişi", "Görev ve değişiklik arşivi."],
      ["Ekip görevleri", "Öncelik ve sorumluluk yönetimi."],
      ["Yönetici kontrolü", "Gecikme ve yük görünürlüğü."],
      ["Telegram bildirimleri", "Anlık uyarı ve bilgilendirme."],
    ]),
    beforeAfter: makeBeforeAfter("Önce ve sonra", "Önce", "Sonra", beforeItems, afterItems),
    miniOffer: {
      title: "İlk adım: ücretsiz süreç analizi",
      description:
        "20 dakikalık görüşmede görev, onay ve raporlama sürecinizi analiz eder; sahada en hızlı etki yaratacak otomasyon planını çıkarırız.",
    },
    relatedSectors: {
      title: "Diğer sektörler için de uygun",
      items: relatedExcept("stroitelstvo", defaultRelatedTr).slice(0, 6),
    },
    finalCta: {
      title: "İnşaat süreçlerinizi düzenleyelim.",
      description: "Görev, onay ve raporlamayı tek panelde yönetilebilir hale getirin.",
    },
  }),
};
