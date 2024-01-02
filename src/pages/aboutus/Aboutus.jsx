import React from "react";
import avatarImage from "./../../styles/photos/mustafa.PNG";
import "./aboutus.css";

const Aboutus = () => {
  return (
    <div className="about-container">
      <div class="row align-items-center flex-row-reverse">
        <div class="col-lg-6">
          <div class="about-text go-to">
            <h3 class="dark-color">Mustafa Zorpuzan</h3>
            <h6 class="theme-color lead">Gayrimenkul Danışmanı</h6>
            <p>
              01/10/1971 eşme doğumluyum ilkokulu Dumlupınar okulunda,
              ortaöğretimi eşme lisesinde ve Liseyi eşme endüstri meslek
              lisesinde bitirdim. 1988 yılında İzmir’de Şampiyon dershanesinde
              bilgisayar programcığı diplomamı aldım(basic-pascal-si). 1992
              yılında askerden geldikten sonra 1993 yılında tapu kadastroda 1
              yıl çalıştıktan sonra 1994 yılın sonlarında Eşme Belediyesi'nde
              çalışmaya başladım. Eşme Belediyesi'nde imar işleri, fen işleri,
              işyeri ruhsatı ve emlak servisinde görev yaptım. 28 sene
              belediyede hizmet ettikten sonra Mart 2023 tarihinde emekli oldum.
              Paşam Emlak-Gayrimenkul danışmanlık olarak emlak ofisimiz açılıp
              hizmetinize başlamıştır.
            </p>
            <div class="row about-list">
              <div class="col-md-6">
                <div class="media">
                  <label>Doğum Tarihi</label>
                  <p>1 Ekim 1971</p>
                </div>
                <div class="media">
                  <label>İkamet</label>
                  <p>UŞAK/EŞME</p>
                </div>
                <div class="media">
                  <label>Adres</label>
                  <p>Şehitalibey Mahallesi, Arap Doktor Caddesi NO:77/A</p>
                </div>
              </div>
              <div class="col-md-6">
                <div class="media">
                  <label>E-mail</label>
                  <p>kurumsal@pasamgayrimenkul.com</p>
                </div>
                <div class="media">
                  <label>Telefon</label>
                  <p>544 277 64 79</p>
                </div>
                <div class="media">
                  <label>Danışmanlık ve emlak hizmetleri</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="about-avatar">
            <img src={avatarImage} alt="Avatar" title="Avatar" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Aboutus;
