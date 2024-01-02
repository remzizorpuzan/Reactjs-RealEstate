import { useLocation } from "react-router";
import Header from "../../components/header/Header";
import Services from "../../components/services/Services";
import "./homepage.css";

export default function Homepage() {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <div>
        <Header />
        <div className="home">
          <Services />
        </div>
      </div>
    </>
  );
}
