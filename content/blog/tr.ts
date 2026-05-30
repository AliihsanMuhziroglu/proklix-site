import type { BlogArticle } from "@/dictionaries/types";
import type { BlogSlug } from "@/lib/blog";

export const blogArticlesTr: Record<BlogSlug, BlogArticle> = {
  "crm-nedir": {
    meta: {
      title: "CRM nedir? | Proklix Blog",
      description:
        "CRM nedir, Özbekistan'daki B2B şirketler neden ihtiyaç duyar ve karmaşık ERP olmadan nasıl başlanır.",
    },
    title: "CRM nedir? B2B işletmeler için basit açıklama",
    excerpt:
      "CRM soyut bir 'büyük sistem' değil, müşterilerin, başvuruların ve deal geçmişinin yaşadığı yerdir.",
    date: "2026-05-15",
    readTime: "5 dk",
    sections: [
      {
        paragraphs: [
          "CRM (Customer Relationship Management), müşteri ilişkilerini yönetmek için bir sistemdir. B2B'de bu öncelikle şu sorulara cevap verir: müşteri kim, hangi başvuruları yaptı, deal hangi aşamada ve hangi yönetici sorumlu.",
          "Özbekistan'daki birçok şirket müşterileri Excel ve Telegram'da takip ediyor. Başvuru sayısı azken bu işe yarar. Günde 20–30 başvuruya ulaşıldığında kontrol kaybolur: başvurular kaybolur, yönetim huniyi göremez, geçmiş sohbetlere dağılır.",
        ],
      },
      {
        heading: "CRM Excel'den nasıl farklıdır",
        paragraphs: [
          "Excel bir tablodur. CRM bir süreçtir: başvuru → sorumlu → aşama → bildirim → geçmiş. CRM'de her eylem kaydedilir, hücreye yazılıp üzerine yazılmaz.",
          "Yerel B2B için iyi bir CRM bir yıllık devreye alma gerektirmez. Tek bir süreçle başlayın, örneğin web sitesinden gelen başvurular, ve büyüdükçe genişletin.",
        ],
      },
      {
        heading: "Nereden başlamalı",
        paragraphs: [
          "1. Bir süreç seçin: başvurular, teklifler veya onaylar.",
          "2. Sohbetlerden Telegram bildirimli bir sisteme taşıyın.",
          "3. Rolleri ekleyin: yönetici, lider, raporlar.",
          "Proklix tam bu tür sistemleri kurar, 'bir yıllık platform projesi' yerine MVP ile başlayarak.",
        ],
      },
    ],
  },
  "telegram-avtomatizasyon": {
    meta: {
      title: "Telegram ile iş otomasyonu | Proklix Blog",
      description:
        "Telegram'ı iş otomasyonu için nasıl kullanırsınız: bildirimler, başvurular ve süreç kontrolü.",
    },
    title: "Telegram ile iş otomasyonu: pratik yaklaşım",
    excerpt:
      "Telegram, Özbekistan'da iş dünyasının ana mesajlaşma aracıdır. Sadece sohbet için değil, süreçleri otomatikleştirmek için de kullanın.",
    date: "2026-05-20",
    readTime: "6 dk",
    sections: [
      {
        paragraphs: [
          "Özbekistan'da B2B iletişimin büyük bölümü Telegram üzerinden yürür. Yöneticiler başvuruları grup sohbetlerinde alır, liderler fiyatları özel mesajlarda onaylar, depo siparişlerden geç haberdar olur.",
          "Sorun Telegram değil, sorun sürecin yalnızca mesajlaşmada yaşamasıdır. Çözüm: Telegram bildirim kanalı + web paneli tek doğruluk kaynağı olarak.",
        ],
      },
      {
        heading: "Telegram üzerinden neleri otomatikleştirmeli",
        paragraphs: [
          "• Yeni başvuru → sorumlu yöneticiye bildirim",
          "• Teklif onay bekliyor → lidere sinyal",
          "• Sipariş statüsü değişti → müşteriye veya bayiye mesaj",
          "• Görev gecikti → atanan kişiye hatırlatma",
        ],
      },
      {
        heading: "Telegram + CRM: doğru kombinasyon",
        paragraphs: [
          "Telegram CRM'in yerini almaz, onu tamamlar. Tüm veriler, geçmiş ve raporlar panelde yaşar. Telegram hızlı sinyaller ve aksiyonlar içindir.",
          "Proklix Telegram-first sistemler kurar: ekip alışık olduğu aracı kullanır, yönetim panel üzerinden kontrol kazanır.",
        ],
      },
    ],
  },
  "b2b-katalog": {
    meta: {
      title: "B2B katalog nasıl kurulur? | Proklix Blog",
      description:
        "Başvurular, fiyatlandırma ve CRM ile B2B katalog nasıl oluşturulur, ticaret şirketleri için adım adım rehber.",
    },
    title: "B2B katalog nasıl kurulur? Adım adım plan",
    excerpt:
      "B2B katalog sadece sitedeki bir ürün listesi değildir. Başvurular, fiyatlandırma ve ticari teklifler için giriş noktasıdır.",
    date: "2026-05-25",
    readTime: "7 dk",
    sections: [
      {
        paragraphs: [
          "Ticaret şirketleri genelde PDF fiyat listesi veya Excel tablosuyla başlar. Müşteri arar, yönetici fiyat arar, Word'de teklif hazırlar, süreç saatler sürer.",
          "Modern B2B katalog üç işi çözer: ürün yelpazesini göstermek, başvuru almak ve bunları CRM ile onay sürecine bağlamak.",
        ],
      },
      {
        heading: "B2B katalog yapısı",
        paragraphs: [
          "1. Kategoriler ve filtreler, müşteri ihtiyacını hızla bulur",
          "2. Ürün sayfası, açıklama, özellikler, stok durumu",
          "3. Başvuru formu veya 'fiyat iste', telefon araması gerekmez",
          "4. Müşteri portalı (isteğe bağlı), başvuru geçmişi ve statüler",
        ],
      },
      {
        heading: "CRM ve workflow ile bağlantı",
        paragraphs: [
          "Katalog başvuruları otomatik olarak CRM'e düşmeli: sorumlu, statü, deadline. Fiyat onayı gerekiyorsa rota yönetici → lider → müşteri.",
          "Proklix tam entegrasyonlu kataloglar kurar: site + CRM + Telegram + onaylar. MVP birkaç haftada devreye alınabilir.",
        ],
      },
    ],
  },
};
