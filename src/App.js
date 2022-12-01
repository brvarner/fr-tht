import "./App.css";
import { Home, Hero, Footer } from "./containers";
import "@fontsource/lato";

function App() {
  return (
    <div className="App" style={{ backgroundColor: "#4f7a9a" }}>
      <Hero />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
