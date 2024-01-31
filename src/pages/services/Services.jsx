import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { FiTarget } from "react-icons/fi";
import { TbAnalyzeFilled } from "react-icons/tb";
import { RiAdvertisementFill } from "react-icons/ri";
import { PiShareNetworkBold } from "react-icons/pi";
import { BiSolidPhoneCall } from "react-icons/bi";
import { SiCoinmarketcap } from "react-icons/si";

import "./services.css"; // You can create a CSS file for additional styling

const ServicesPage = () => {
  const services = [
    {
      id: 1,
      title: "Hedef Belirler",
      description:
        "Gayrimenkul yatırımları için uygun seçenekleri önünüze sunar.",
      icon: <FiTarget />,
    },
    {
      id: 2,
      title: "Pazar Analizine Erişir",
      description:
        "Pazarda geniş kapsamlı ve süregelen bir analiz süreci sonunda ihtiyaca göre hizmet opsiyonları sunar.",
      icon: <TbAnalyzeFilled />,
    },
    {
      id: 3,
      title: "Maksimum Tanıtım Yapar",
      description:
        "Alım ve satım işlemleri için birçok platform üzerinden tanıtım ve reklam sürecini gerçekleştirir.",
      icon: <RiAdvertisementFill />,
    },
    {
      id: 4,
      title: "Geniş Profesyonel Ağ Sunar",
      description:
        "Çevre ve tanıtım ağı ile sürecin hızlı ilerlemesine yardımcı olur.",
      icon: <PiShareNetworkBold />,
    },
    {
      id: 5,
      title: "Muhtemel Alıcılarla Görüşür",
      description:
        "Alıcılarla görüşüp satış yapan kişi veya kurumlar için iletişim sürecini yürütür.",
      icon: <BiSolidPhoneCall />,
    },
    {
      id: 6,
      title: "Etkin Pazarlama Alanı Hazırlar",
      description:
        "Uygun pazarlama alanı hazırlayıp reklam ve tanıtım sürecini ilerletir.",
      icon: <SiCoinmarketcap />,
    },
    // Add more services as needed
  ];
  return (
    <div className="services-page-section">
      <Container>
        {services.map((service) => (
          <Row key={service.id} className="services-page-card">
            <Col md={12}>
              <Card>
                <Card.Body>
                  <div className="icon-servicepage">{service.icon}</div>{" "}
                  {/* Display icon */}
                  <Card.Title>{service.title}</Card.Title>
                  <Card.Text>{service.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        ))}
      </Container>
    </div>
  );
};

export default ServicesPage;
