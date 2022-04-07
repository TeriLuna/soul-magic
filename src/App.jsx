import "./App.scss";
import "./assets/scss/style.scss";
import ItemListContainer from "./Components/Items/ItemListContainer";
import ItemDetailContainer from "./Components/Items/ItemDetailContainer";
import HomeHero from "./Components/Home/HomeHero";

function App() {
  return (
    <div className="App">
      {/* <HomeHero /> */}
      <ItemListContainer />
      {/* <ItemDetailContainer /> */}
    </div>
  );
}

export default App;
