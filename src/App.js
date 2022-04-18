import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./Components/Items/ItemListContainer";
import ItemDetailContainer from "./Components/Items/ItemDetailContainer";
import HomeHero from "./Components/Home/HomeHero";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/footer/Footer";
import Contact from "./Components/contact/Contact";
import NotFound from "./Components/404/NotFound";
import About from "./Components/about/About";
import AddToCart from "./Components/AddToCart/AddToCart";

export default function App() {

  return (

    <BrowserRouter>

    <NavBar/>

      <Routes>
        <Route exact path="/" element={<HomeHero />} />
        <Route exact path="/item/:id" element={<ItemDetailContainer />} />
        <Route exact path="/allProducts" element={<ItemListContainer />} />
        <Route exact path="/category/:id" element={<ItemListContainer />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/cart" element={<AddToCart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />

    </BrowserRouter>

  );
}