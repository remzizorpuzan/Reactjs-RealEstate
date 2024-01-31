import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import "./topbar.css";

export default function Topbar() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (isMobile) {
    return (
      <div className="wrapper">
        <div className="top">
          <Dropdown className="topCenter">
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Menü
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item>
                <Link className="link" to="/">
                  ANASAYFA
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link className="link" to="/hakkimizda">
                  HAKKIMIZDA
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link className="link" to="/hizmetlerimiz">
                  HİZMETLERİMİZ
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link className="link" to="/iletisim">
                  İLETİŞİM
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link className="link" to="/ilanlar">
                  İLANLAR
                </Link>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    );
  }

  return (
    <div className="wrapper">
      <div className="top">
        <div className="topCenter">
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/">
                ANASAYFA
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/hakkimizda">
                HAKKIMIZDA
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/hizmetlerimiz">
                HİZMETLERİMİZ
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/iletisim">
                İLETİŞİM
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/ilanlar">
                İLANLAR
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
