# Op. Dr. Abdulhalim Tavil — Kişisel Web Sitesi

Beyin ve omurilik cerrahisi alanında çalışan Op. Dr. Abdulhalim Tavil için hazırlanmış, mobil uyumlu ve üç dil destekli kişisel web sitesi.

## Teknolojiler

- Next.js App Router ve React
- TypeScript
- Tailwind CSS v4
- Radix UI tabanlı shadcn/ui tarzı arayüz bileşenleri
- Framer Motion

## Gereksinimler

Node.js 20.9 veya üzeri ve npm gerekir.

## Yerel geliştirme

Windows PowerShell'de `npm` komutu çalıştırma politikası nedeniyle engellenirse `npm.cmd` kullanın:

```powershell
npm.cmd install
npm.cmd run dev
```

Ardından [http://localhost:3000](http://localhost:3000) adresini açın. Geliştirme sunucusunu durdurmak için `Ctrl+C` tuşlarına basın.

Diğer sistemlerde:

```sh
npm install
npm run dev
```

## Komutlar

```sh
npm run dev    # Yerel geliştirme sunucusu
npm run lint   # ESLint kontrolü
npm run build  # Yayına hazırlık derlemesi
npm run start  # Derlenmiş uygulamayı çalıştırma
```

## Proje yapısı

```text
src/
  app/
    globals.css       # Tema değişkenleri ve global stiller
    layout.tsx        # Ana layout ve SEO metaverileri
    page.tsx          # Ana sayfa ve içerik bölümleri
  components/
    contact-form.tsx  # WhatsApp mesajı oluşturan iletişim formu
    language-provider.tsx
    language-select.tsx
    reveal.tsx        # Görünür olma animasyonları
    site-header.tsx
    specialties.tsx   # Uzmanlık alanları ve detay penceresi
    theme-provider.tsx
    theme-toggle.tsx
    ui/               # Arayüz bileşenleri
  lib/
    messages.ts       # Türkçe, İngilizce ve Arapça metinler
    utils.ts
public/
  images/              # Sitede kullanılan görseller
```

## Özellikler

- Türkçe, İngilizce ve Arapça dil seçenekleri; Arapça için sağdan sola görünüm
- Açık/koyu tema
- Mobil uyumlu gezinme ve sayfa düzeni
- Uzmanlık alanı detay pencereleri ve sık sorulan sorular
- İletişim formu bilgileri WhatsApp'ta gönderime hazır mesaj olarak açar

## Yayına almadan önce

- Hekim özgeçmişi, kurum, telefon, görseller ve bütün çevirileri doğrulayın.
- Form WhatsApp'ta mesaj taslağı açar; mesajı kullanıcı WhatsApp üzerinden kendisi gönderir. Dosya yükleme ve dosya gönderimi desteklenmez.
- Gizlilik, açık rıza ve sağlık iletişimi metinlerini yayından önce yetkili danışmanlarla gözden geçirin.
- Gerçek alan adı belirlendiğinde metadata, Open Graph, canonical URL, sitemap ve robots ayarlarını tamamlayın.
- Yayın öncesi `npm run lint` ve `npm run build` komutlarını çalıştırın.

## GitHub Pages yayını

Depo adı `hospital` olduğu için yayın adresi `https://wafatavil.github.io/hospital/` olacaktır. `.github/workflows/deploy.yml`, `main` dalına push edildiğinde siteyi statik olarak derleyip GitHub Pages'e dağıtır.

İlk yayın için GitHub deposunda **Settings → Pages → Build and deployment → Source** alanından **GitHub Actions** seçin. Ardından Actions sekmesindeki `Deploy Next.js to GitHub Pages` iş akışının tamamlanmasını bekleyin. Yayın adresi Settings → Pages bölümünde görünür.
