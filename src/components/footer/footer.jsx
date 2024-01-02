import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./footer.css";

const footer = () => {
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/css/all.min.css"
        integrity="sha256-2XFplPlrFClt0bIdPgpz8H7ojnk10H69xRqd9+uTShA="
        crossorigin="anonymous"
      />
      <section class="deneb_cta">
        <div class="container">
          <div class="cta_wrapper">
            <div class="row align-items-center">
              <div class="col-lg-7">
                <div class="cta_content">
                  <h3>Emlakta güvenli hizmetin adresi</h3>
                  <p>
                    Dürüst, samimi ve uzman bir çalışmayla gayrimenkulleriniz
                    emin ellerde.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer class="deneb_footer">
        <div
          class="widget_wrapper"
          style={
            {
              /*background-image: url(http://demo.tortoizthemes.com/deneb-html/deneb-ltr/assets/images/footer_bg.png);*/
            }
          }
        >
          <div class="container">
            <div class="row">
              <div class="col-lg-4 col-md-6 col-12">
                <div class="widget widegt_about">
                  <div class="widget_title">
                    <img
                      src="assets/images/logo_1.png"
                      class="img-fluid"
                      alt=""
                    />
                  </div>
                  <p>Siz hayal edin biz gerçekleştirelim.</p>
                  <p>Sosyal medya hesaplarımız.</p>
                  <ul class="social">
                    <li>
                      <a href="#/">
                        <i class="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#/">
                        <i class="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#/">
                        <i class="fab fa-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 col-sm-12">
                <div class="widget widget_link">
                  <div class="widget_title">
                    <h4>Bağlantılar</h4>
                  </div>
                  <ul>
                    <li>
                      <a href="#/">Hakkımızda</a>
                    </li>
                    <li>
                      <a href="#/">Hizmetler</a>
                    </li>
                    <li>
                      <a href="#/">Portfolyo</a>
                    </li>
                    <li>
                      <a href="#/">İletişim</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 col-sm-12">
                <div class="widget widget_contact">
                  <div class="widget_title">
                    <h4>İletişim</h4>
                  </div>
                  <div class="contact_info">
                    <div class="single_info">
                      <div class="icon">
                        <i class="fas fa-phone-alt"></i>
                      </div>
                      <div class="info">
                        <p>
                          <a href="tel:+905442776479"> 0 544 277 64 79</a>
                        </p>
                      </div>
                    </div>
                    <div class="single_info">
                      <div class="icon">
                        <i class="fas fa-envelope"></i>
                      </div>
                      <div class="info">
                        <p>
                          <a href="kurumsal@pasamgayrimenkul.com">
                            kurumsal@pasamgayrimenkul.com
                          </a>
                        </p>
                      </div>
                    </div>
                    <div class="single_info">
                      <div class="icon">
                        <i class="fas fa-map-marker-alt"></i>
                      </div>
                      <div class="info">
                        <p>
                          Şehitalibey Mahallesi, Arap Doktor Caddesi NO:77/A
                          <span>EŞME/UŞAK</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="copyright_area">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="copyright_text">
                  <p>Remzi ZORPUZAN &copy; 2024 All rights reserved.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default footer;
