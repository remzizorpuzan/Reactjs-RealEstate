import { Link } from "react-router-dom";
import "./topbar.css";

export default function Topbar() {
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
            <li className="topListItem">HİZMETLERİMİZ</li>
            <li className="topListItem">
              <Link className="link" to="/iletisim">
                İLETİŞİM
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/write">
                İLANLAR
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
