import React from "react";
import "./services.css";
import "bootstrap/dist/css/bootstrap.min.css";
export default function Services() {
  return (
    <div>
      <link
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"
        rel="stylesheet"
      />

      <section class="section services-section" id="services">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <div class="section-title">
                <h2>Akıllı ve güvenilir gayrimenkul işlemlerinin adresi</h2>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-6 col-lg-4">
              <div class="feature-box-1">
                <div class="icon">
                  <i class="fas fa-drafting-compass"></i>
                </div>
                <div class="feature-content">
                  <h5>Harita ve teknik hizmet</h5>
                  <p>
                    Harita teknikerleri ile arazi ölçümü ve tapu hizmetleri.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-sm-6 col-lg-4">
              <div class="feature-box-1">
                <div class="icon">
                  <i class="fas fa-headset"></i>
                </div>
                <div class="feature-content">
                  <h5>Kişiye özel danışmanlık</h5>
                  <p>
                    Bölgede ve Türkiye genelinde tecrübelerimize dayanarak
                    verilen kişiye ve kurumlara özel danışmanlık hizmeti.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-sm-6 col-lg-4">
              <div class="feature-box-1">
                <div class="icon">
                  <i class="fa fa-comment"></i>
                </div>
                <div class="feature-content">
                  <h5>Hızlı iletişim</h5>
                  <p>
                    Sosyal medya, telefon ve fiziksel görüşmeler ile
                    hizmetlerimizden kolayca faydalanılmakta.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-sm-6 col-lg-4">
              <div class="feature-box-1">
                <div class="icon">
                  <i class="fas fa-money-bill-wave"></i>
                </div>
                <div class="feature-content">
                  <h5>Fiyatlandırma desteği</h5>
                  <p>
                    Konut, arsa ve tarla gibi gayrimenkulleriniz ücretsiz olarak
                    fiyatlandırılma desteği.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-sm-6 col-lg-4">
              <div class="feature-box-1">
                <div class="icon">
                  <i class="fas fa-handshake"></i>
                </div>
                <div class="feature-content">
                  <h5>Alım ve satım süreç desteği</h5>
                  <p>
                    Gayrimenkul alım ve satımlarınız sırasında işlemler
                    gerçekleşirken prosedürlerin ilerlemesi ve hukuki süreçler
                    konusunda sonuna kadar yardım.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-sm-6 col-lg-4">
              <div class="feature-box-1">
                <div class="icon">
                  <i class="fas fa-warehouse"></i>
                </div>
                <div class="feature-content">
                  <h5>Yatırım uygunluğu</h5>
                  <p>
                    Geniş fiyat skalası ve çeşitliliği ile yatırım için doğru
                    adres.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
