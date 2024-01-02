import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Topbar from "./components/topbar/Topbar";
import Homepage from "./pages/homepage/Homepage";
import Contact from "./pages/contact/Contact";
import Footer from "./components/footer/footer";
import Aboutus from "./pages/aboutus/Aboutus";

function App() {
  return (
    <Router>
      <Topbar />
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route exact path="/iletisim">
          <Contact />
        </Route>
        <Route exact path="/hakkimizda">
          <Aboutus />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;