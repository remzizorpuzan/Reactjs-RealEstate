import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Topbar from "./components/topbar/Topbar";
import Homepage from "./pages/homepage/Homepage";
import Contact from "./pages/contact/Contact";
import Footer from "./components/footer/footer";
import Aboutus from "./pages/aboutus/Aboutus";
import PropertyListPage from "./pages/propertypage/PropertyListPage";
import PropertyDetailsPage from "./pages/propertypage/PropertyDetailsPage";
import Services from "./pages/services/Services";

function App() {
  return (
    <Router>
      <Topbar />
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route exact path="/hizmetlerimiz">
          <Services />
        </Route>
        <Route exact path="/iletisim">
          <Contact />
        </Route>
        <Route exact path="/hakkimizda">
          <Aboutus />
        </Route>
        <Route exact path="/ilanlar" component={PropertyListPage} />
        <Route path="/ilanlar/:id" component={PropertyDetailsPage} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
