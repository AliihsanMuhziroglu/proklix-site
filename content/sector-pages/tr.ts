import type { SectorPageContent } from "@/dictionaries/types";
import type { SectorSlug } from "@/lib/sectors";

export const sectorPagesTr: Record<SectorSlug, SectorPageContent> = {
  nedvizhimost: {
    meta: {
      title: "Proklix Emlak için | Kiralama ve Satış CRM ve Workflow",
      description:
        "Taşkent ve Özbekistan'daki emlak ajansları için başvuru, gösterim, sözleşme ve ödeme otomasyonu.",
    },
    hero: {
      title: "Kayıp lead ve sohbet kaosu olmadan emlak",
      subtitle:
        "Proklix; müşteri başvurularını, ilanları, gösterimleri, onayları ve ödemeleri Telegram bildirimleriyle tek panelde birleştirir.",
    },
    problem: {
      title: "Emlak sektöründe sık görülen sorunlar",
      items: [
        {
          title: "Lead'ler danışmanlar arasında kayboluyor",
          description: "Müşteri Telegram'dan yazıyor, danışman izne çıkıyor — başvuru unutuluyor.",
        },
        {
          title: "Gösterimler takip edilmiyor",
          description: "Ortak takvim veya statü yok: kim neyi gördü, müşteri ne karar verdi.",
        },
        {
          title: "Sözleşmeler haftalarca onay bekliyor",
          description: "Kira şartları ve indirimler kontrolsüz özel mesajlara dağılıyor.",
        },
      ],
    },
    solution: {
      title: "Proklix'in otomatikleştirdikleri",
      items: [
        {
          title: "İlan ve müşteri CRM'i",
          description: "Müşteri kartları, ilanlar, deal aşamaları ve gösterim geçmişi.",
        },
        {
          title: "Başvuru → gösterim → sözleşme akışı",
          description: "Her adımda sorumlu, deadline ve Telegram bildirimi.",
        },
        {
          title: "Yönetici paneli",
          description: "Danışman yükü, gösterim dönüşümü ve süreçteki darboğazlar.",
        },
      ],
    },
    caseStudy: {
      title: "Vaka: Taşkent'te kiralama ajansı",
      company: "Kiralama şirketi, 12 danışman",
      challenge:
        "Başvurular 4 Telegram grubuna geliyordu, Excel haftada bir güncelleniyordu, yönetim huniyi göremiyordu.",
      solution:
        "3 haftada MVP: web sitesi ve Telegram başvuruları → CRM → şart onayı → bildirimler.",
      result: "Başvurudan gösterime süre 2 günden 4 saate indi. Haftada 6+ saat manuel takipten tasarruf.",
    },
    cta: {
      title: "Ajans sürecinizi birlikte inceleyelim",
      description: "Ücretsiz 20 dakikalık analiz: başvurular, gösterimler ve sözleşmeler bugün nasıl işliyor.",
    },
  },
  "b2b-katalog": {
    meta: {
      title: "Proklix B2B Katalog için | Başvuru, Fiyatlandırma ve Teklifler",
      description:
        "Ticaret şirketleri için CRM ve workflow: katalog, başvurular, ticari teklifler ve onaylar.",
    },
    hero: {
      title: "Başvuru ve teklif kontrolü olan B2B katalog",
      subtitle:
        "Ürünler, fiyatlar, müşteri başvuruları ve teklif onayı — Excel ve sohbetler yerine tek sistemde.",
    },
    problem: {
      title: "Ticaret şirketlerinin kontrolü kaybettiği noktalar",
      items: [
        {
          title: "Katalog CRM'den ayrı yaşıyor",
          description: "Müşteri beklerken yöneticiler fiyatları farklı dosyalarda arıyor.",
        },
        {
          title: "Teklifler onaysız gidiyor",
          description: "İndirimler ve şartlar yönetici imzasından önce müşteriye ulaşıyor.",
        },
        {
          title: "Müşteri geçmişi yok",
          description: "Hangi teklifler gönderildi, deal hangi aşamada — belirsiz.",
        },
      ],
    },
    solution: {
      title: "B2B satış için çözüm",
      items: [
        {
          title: "Katalog + site başvuruları",
          description: "Müşteri ürün seçer, yönetici başvuruyu panelde ve Telegram'da alır.",
        },
        {
          title: "Teklif onay workflow'u",
          description: "Yönetici → lider → müşteri, her adım kayıt altında.",
        },
        {
          title: "Müşteri tabanı ve statüler",
          description: "Tüm kontaklar, teklifler ve deal aşamaları tek yerde.",
        },
      ],
    },
    caseStudy: {
      title: "Vaka: toptan ticaret şirketi",
      company: "B2B distribütör, 800+ SKU",
      challenge:
        "8 yönetici Excel ve WhatsApp'ta çalışıyordu, teklif onayı 2–3 gün sürüyordu, bazı başvurular kayboluyordu.",
      solution:
        "Başvurulu katalog sitesi, CRM, fiyat onay rotası ve yönetim için Telegram uyarıları.",
      result: "Teklif onayı birkaç saate indi. Ekip haftada 8 saat kazanıyor.",
    },
    cta: {
      title: "Katalogunuz için nasıl çalıştığını gösterelim",
      description: "Satış sürecinizi haritalayıp ürün yelpazenize uygun bir MVP önerelim.",
    },
  },
  agro: {
    meta: {
      title: "Proklix Tarım ve Dağıtım için | Bayi Siparişleri ve Fulfillment",
      description:
        "Bayi başvuruları, siparişler, depo statüleri ve bölge yöneticilerini otomatikleştirin.",
    },
    hero: {
      title: "Tarım ve dağıtım: siparişler kontrol altında",
      subtitle:
        "Bayi başvuruları, siparişler, depo, bölgeler ve hesap yöneticileri — tek panelde.",
    },
    problem: {
      title: "Tarım dağıtımında zorluklar",
      items: [
        {
          title: "Bayi siparişleri mesajlaşma uygulamalarında",
          description: "Siparişler sohbetlere geliyor, depo geç haberdar oluyor.",
        },
        {
          title: "Bölgelerde görünürlük yok",
          description: "Yönetim bölge bazında yönetici yükünü göremiyor.",
        },
        {
          title: "Sipariş statüleri manuel güncelleniyor",
          description: "Müşteriler siparişin nerede olduğunu sormak için arıyor — tek sistem yok.",
        },
      ],
    },
    solution: {
      title: "Tarım işi için Proklix",
      items: [
        {
          title: "Bayi portalı",
          description: "Web formu veya Telegram botu ile siparişler, CRM'e kaydedilir.",
        },
        {
          title: "Depo ve statüler",
          description: "Aşamalar: alındı → hazırlanıyor → gönderildi — bildirimlerle.",
        },
        {
          title: "Bölgesel raporlar",
          description: "Yönetici yükü, bölge hacimleri ve darboğazlar.",
        },
      ],
    },
    caseStudy: {
      title: "Vaka: tarım kimyasalları distribütörü",
      company: "Tarım şirketi, 5 bölge",
      challenge:
        "40+ bayi siparişleri Telegram'dan yazıyordu, depo Excel'de çalışıyordu, gecikmeler 2 güne kadar çıkıyordu.",
      solution:
        "Birleşik sipariş sistemi, statü takibi, bayi bildirimleri ve bölge yöneticisi paneli.",
      result: "Sipariş işleme süresi %60 azaldı. Koordinasyonda haftada 10 saat tasarruf.",
    },
    cta: {
      title: "Tarım sürecinizi otomatikleştirelim",
      description: "Zinciri birlikte çıkaralım: bayi → yönetici → depo → teslimat.",
    },
  },
  oborudovanie: {
    meta: {
      title: "Proklix Ekipman için | Katalog, Danışmanlık ve Teklifler",
      description:
        "Ekipman satışı için CRM: katalog, paketler, başvurular ve ticari teklifler.",
    },
    hero: {
      title: "Teknik ekipman: başvurudan teklife",
      subtitle:
        "Katalog, danışmanlık, paketler, başvurular ve teklif onayı — sohbet kaosu olmadan.",
    },
    problem: {
      title: "Ekipman satışının karmaşıklığı",
      items: [
        {
          title: "Uzun danışmanlık döngüleri",
          description: "Teknik sorular mühendis ile satış yöneticisi arasında kayboluyor.",
        },
        {
          title: "Paketler manuel hesaplanıyor",
          description: "Teklif spesifikasyonları Excel'de hazırlanıyor, hatalar oluşuyor.",
        },
        {
          title: "Marj kontrolsüz teklifler",
          description: "İndirimler sözlü anlaşılıyor, yönetim sonradan öğreniyor.",
        },
      ],
    },
    solution: {
      title: "Teknik satış için sistem",
      items: [
        {
          title: "Paketli katalog",
          description: "Ürünler, uyumluluk, standart paketler ve hızlı teklifler.",
        },
        {
          title: "Başvuru → hesaplama → onay",
          description: "Mühendis netleştirir, yönetici hesaplar, lider onaylar.",
        },
        {
          title: "Proje geçmişi",
          description: "Müşteri başına tüm teklif versiyonları ve iletişim.",
        },
      ],
    },
    caseStudy: {
      title: "Vaka: endüstriyel ekipman tedarikçisi",
      company: "B2B, 15 mühendis ve yönetici",
      challenge:
        "Danışmanlıklar Telegram'da, teklifler Word'de, marj onayı 3–5 gün sürüyordu.",
      solution:
        "Teknik kartlı CRM, teklif workflow'u ve her adımda Telegram uyarıları.",
      result: "Teklif döngüsü 1 güne indi. Ekip haftada 7 saat kazanıyor.",
    },
    cta: {
      title: "Ekipmanınıza göre süreci yapılandıralım",
      description: "Danışmanlık, hesaplama ve onayların bugün nasıl işlediğini inceleyelim.",
    },
  },
  logistika: {
    meta: {
      title: "Proklix Lojistik için | Başvurular, Belgeler ve Teslimat Statüsü",
      description:
        "Lojistik ve dış ticaret workflow'u: başvurular, belgeler, teslimat aşamaları ve müşteri bildirimleri.",
    },
    hero: {
      title: "Lojistik ve ticaret: her aşama kontrol altında",
      subtitle:
        "Başvurular, belgeler, teslimat aşamaları, statüler ve müşteri bildirimleri — tek sistemde.",
    },
    problem: {
      title: "Lojistik süreçlerin kırıldığı noktalar",
      items: [
        {
          title: "Belgeler her yerde",
          description: "İrsaliyeler, beyannameler ve mesajlar başvuruyla bağlantılı değil.",
        },
        {
          title: "Müşteri statüyü bilmiyor",
          description: "Yöneticiler aynı kargo konumu sorularını tekrar tekrar yanıtlıyor.",
        },
        {
          title: "Aşamalar kayıt altında değil",
          description: "Gecikme nerede belirsiz: gümrük, depo mu yoksa teslimat mı.",
        },
      ],
    },
    solution: {
      title: "Lojistik için Proklix",
      items: [
        {
          title: "Aşama takibi",
          description: "Her aşamada sorumlu, deadline ve otomatik bildirim.",
        },
        {
          title: "Sevkiyat başına belgeler",
          description: "Tüm dosyalar ve statüler belirli bir sevkiyata bağlı.",
        },
        {
          title: "Müşteri portalı",
          description: "Müşteri yöneticiyi aramadan statüyü görür.",
        },
      ],
    },
    caseStudy: {
      title: "Vaka: lojistik şirketi",
      company: "Uluslararası nakliye, 20 yönetici",
      challenge:
        "Statüler Excel'de güncelleniyordu, müşteriler sevkiyat başına 3–4 kez arıyordu.",
      solution:
        "Teslimat aşamalı CRM, belge yükleme ve müşterilere Telegram/SMS bildirimleri.",
      result: "'Kargom nerede' talepleri %70 azaldı. İletişimde haftada 12 saat tasarruf.",
    },
    cta: {
      title: "Lojistik sürecinizi dijitalleştirelim",
      description: "Başvurudan teslimata zinciri ve otomasyon noktalarını birlikte çıkaralım.",
    },
  },
  stroitelstvo: {
    meta: {
      title: "Proklix İnşaat için | Görevler, Onaylar ve Saha Raporları",
      description:
        "İnşaat sahalarında görev yönetimi, onaylar, fotoğraf raporları ve başvurular.",
    },
    hero: {
      title: "İnşaat: sahada görevler ve onaylar",
      subtitle:
        "Görevler, onaylar, fotoğraf raporları, başvurular ve icra kontrolü — ofis olmadan bile.",
    },
    problem: {
      title: "İnşaat projelerinde zorluklar",
      items: [
        {
          title: "Görevler WhatsApp'ta",
          description: "Formen sohbette atıyor — kimse tamamlanmayı takip etmiyor.",
        },
        {
          title: "Kağıt onaylar",
          description: "Proje değişiklikleri günlerce imza bekliyor, iş duruyor.",
        },
        {
          title: "Fotoğraf raporları kayboluyor",
          description: "Saha fotoğrafları sohbetlere dağılmış, birleşik geçmiş yok.",
        },
      ],
    },
    solution: {
      title: "İnşaat için Proklix",
      items: [
        {
          title: "Sorumluluğu olan görevler",
          description: "Atama, deadline, fotoğraf kanıtı ve Telegram bildirimi.",
        },
        {
          title: "Dijital onaylar",
          description: "Rota: formen → mühendis → lider — karar geçmişiyle.",
        },
        {
          title: "Saha bazlı fotoğraf raporları",
          description: "Tüm fotoğraflar sahaya, aşamaya ve tarihe bağlı.",
        },
      ],
    },
    caseStudy: {
      title: "Vaka: ana yüklenici",
      company: "İnşaat şirketi, 6 saha",
      challenge:
        "Görevler 5 sohbette, değişiklik onayları bir haftaya kadar sürüyordu, lider her sahayı ziyaret ediyordu.",
      solution:
        "Mobil görev paneli, onay workflow'u ve Telegram uyarılı fotoğraf raporları.",
      result: "Değişiklik onayı 5 gün yerine 1 gün. Denetimde haftada 9 saat tasarruf.",
    },
    cta: {
      title: "Sahalarınızda düzen kuralım",
      description: "Görevler, onaylar ve raporlamanın bugün nasıl işlediğini inceleyelim.",
    },
  },
};
