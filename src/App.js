import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { About } from "./pages/about";
import { Contact } from "./component/contact";
import { Footer } from "./component/footer/footer";
import { Home } from "./pages/Home";
import { Services } from "./pages/services";
import { Topnav } from "./component/topnav";
import { Authenticated } from "./pages/login_register/authenticate";
import "./App.css";
import NotFound from "./pages/notfound/notfound";
import { Company } from "./pages/product/company";
import { Food } from "./pages/food/food";
import { Tested } from "./pages/food/test";
import { CartProvider } from "./component/context/companycontext";
import { CompanyCart } from "./pages/cart/companycart";

function App() {
  return (
    <div className="App">
      <CartProvider>
        <Router>
          <Topnav />
          <main>
            <Company />
            <Tested />
            <Food />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
              <Route
                path="/login"
                element={<Authenticated formtype="login" />}
              />
              <Route
                path="/register"
                element={<Authenticated formtype="register" />}
              />
              {/* Fallback route for 404 - Page Not Found */}
              <Route path="*" element={<NotFound />} />
              <Route path="/companycart" element={<CompanyCart />} />
            </Routes>
          </main>
          <Footer />
        </Router>
      </CartProvider>
    </div>
  );
}

export default App;
