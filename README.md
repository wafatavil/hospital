# Nöroşirürji kişisel web sitesi

Next.js App Router, TypeScript, Tailwind CSS v4, shadcn/ui kalıpları (Radix UI) ve Framer Motion ile hazırlanmış Türkçe, mobil uyumlu web sitesi başlangıç projesi.

## Başlangıç

1. Node.js 20.9 veya üzerini kurun.
2. PowerShell'de proje klasöründe npm.cmd install çalıştırın. Windows PowerShell npm.ps1 dosyasını engellerse npm.cmd kullanın.
3. Geliştirme sunucusunu npm.cmd run dev komutuyla başlatın.
4. http://localhost:3000 adresini açın.

Yayın derlemesi için `npm.cmd run build`, üretim sunucusu için `npm.cmd start` komutlarını kullanın.

## Proje yapısı

```text
src/
  app/
    globals.css          # Tailwind v4, açık/koyu tema değişkenleri
    layout.tsx           # Türkçe belge, SEO metaverisi ve tema sağlayıcısı
    page.tsx             # Ana sayfa bölümleri
  components/
    contact-form.tsx     # İletişim/randevu formu ve dosya alanı
    language-provider.tsx # TR/EN/AR metinleri, dil tercihi ve RTL yönü
    language-select.tsx   # Erişilebilir dil seçici
    reveal.tsx           # Kaydırma görünüm animasyonları (Framer Motion)
    site-header.tsx      # Responsive gezinme
    specialties.tsx      # Uzmanlık kartları ve detay penceresi
    theme-provider.tsx
    theme-toggle.tsx
    ui/                  # shadcn/ui düzeninde erişilebilir bileşenler
  lib/
    utils.ts             # cn yardımcı fonksiyonu
```

## Kod biçimi

- Girintiler iki boşluk ve dosya sonları LF kullanır; bu kurallar `.editorconfig` içinde tanımlıdır.
- Bileşenleri kısa paragraflar halinde yazın. Uzun JSX yapılarında her öğeyi ayrı satırda tutun.
- Dosya ve bileşen adlarını yaptıkları işe göre açıkça seçin.
- Site dili üst menüden Türkçe, English veya العربية olarak değiştirilebilir. Seçim tarayıcıda hatırlanır; Arapça görünüm sağdan sola akar.

## Gerçek siteye uyarlama

- `src/app/page.tsx` içindeki klinik adresi ve randevu saatlerini kesin bilgilerle güncelleyin.
- Hero fotoğrafını izinli, hekimin gerçek portresiyle değiştirin. Görselin alt metnini de güncelleyin.
- Harita arama bağlantısını kesin klinik adresiyle eşleşen bir konum bağlantısına dönüştürün.
- İletişim formu WhatsApp'ta gönderime hazır bir mesaj açar; form verisini sunucuda saklamaz ve dosya ekini iletmez. Canlı kullanım öncesinde KVKK metinlerini, kullanıcı rızasını ve veri işleme akışını gözden geçirin.
- İçerikler genel bilgilendirmedir, kişisel tanı/tedavi önerisi değildir. Yayına almadan önce hekim ve mevzuat danışmanı tarafından gözden geçirilmelidir.

## SEO ve erişilebilirlik

Sayfa Türkçe dil işareti, açıklayıcı başlık/açıklama, Open Graph metaverisi ve bölüm hiyerarşisi içerir. Klavye odak stilleri, skip link, semantik bölüm etiketleri, form etiketleri ve mobil menü durumu eklenmiştir. Gerçek alan adı eklendikten sonra canonical, Open Graph görseli, sitemap, robots ve yapılandırılmış veri doğrulanmış klinik bilgileriyle tamamlanmalıdır.
