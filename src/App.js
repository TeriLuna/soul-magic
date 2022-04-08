import "./App.scss";
import "./assets/scss/style.scss";
import ItemListContainer from "./Components/Items/ItemListContainer";
import ItemDetailContainer from "./Components/Items/ItemDetailContainer";
import HomeHero from "./Components/Home/HomeHero";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/footer/Footer";

export default function App() {
  return (
    <BrowserRouter>

    <NavBar />

      <Routes>
        <Route exact path="/" element={<HomeHero />} />
        <Route exact path="/productDetail" element={<ItemDetailContainer />} />
        <Route exact path="/productList" element={<ItemListContainer />} />
        {/* <Route exact path="/categories/enviroment" element={<ItemListContainer />} /> */}
      </Routes>

      <Footer />

    </BrowserRouter>
  );
}