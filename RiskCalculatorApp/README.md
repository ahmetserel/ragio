# Risk Hesaplayıcı Uygulaması (Risk Calculator App)

Bu proje, React Native ve Expo kullanılarak geliştirilmiş bir risk hesaplama uygulamasıdır.

## Kurulum ve Çalıştırma (Geliştirme Modu)

Bu projeyi kendi bilgisayarınızda veya telefonunuzda test etmek için şu adımları izleyin:

1.  **Gereksinimler:**
    *   Bilgisayarınızda [Node.js](https://nodejs.org/) kurulu olmalıdır.
    *   Telefonunuza "Expo Go" uygulamasını indirin (App Store veya Google Play Store'dan).

2.  **Bağımlılıkları Yükleme:**
    Terminali açın ve proje klasörüne gidip şu komutu çalıştırın:
    ```bash
    npm install
    ```

3.  **Uygulamayı Başlatma:**
    ```bash
    npm start
    ```
    Bu komut bir QR kod oluşturacaktır. Telefonunuzdaki Expo Go uygulaması ile bu QR kodu taratarak uygulamayı canlı olarak test edebilirsiniz.

## APK (Android) veya IPA (iOS) Olarak Çıktı Alma (Build)

Uygulamayı mağazalara yüklemek veya bağımsız bir dosya olarak paylaşmak için "EAS Build" servisini kullanmanız önerilir.

1.  **EAS CLI Yükleme:**
    ```bash
    npm install -g eas-cli
    ```

2.  **Expo Hesabına Giriş Yapma:**
    (Eğer hesabınız yoksa expo.dev adresinden ücretsiz oluşturabilirsiniz)
    ```bash
    eas login
    ```

3.  **Projeyi Yapılandırma:**
    ```bash
    eas build:configure
    ```

4.  **Android (APK/AAB) Oluşturma:**
    ```bash
    eas build --platform android --profile preview
    ```
    *Not: `--profile preview` komutu test amaçlı APK üretir. Mağaza için `production` profilini kullanmalısınız.*

5.  **iOS (IPA) Oluşturma:**
    (Apple Developer Hesabı gerektirir)
    ```bash
    eas build --platform ios
    ```

## Proje Yapısı

*   `App.js`: Uygulamanın ana kodları, arayüz ve hesaplama mantığı buradadır.
*   `app.json` / `app.config.js`: Uygulama ayarları (isim, versiyon vb.).
*   `package.json`: Proje bağımlılıkları.
