import Clients from "./components/Clients";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

import "./sass/index.scss";
import Trending from "./components/Trending";
import Artist from "./components/Artist";
import TopArtworks from "./components/TopArtworks";
import Footer from "./components/Footer";

function App() {
  
  return (

    <>
    <div className="app-container">
      <Navbar/>
      <Home/>
      
      <Clients/>
      <Trending />
      <TopArtworks/>
      <Artist/>
      <Footer/>
      </div>
    </>
  );
}

export default App;
