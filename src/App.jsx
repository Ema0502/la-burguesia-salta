import { BrowserRouter } from "react-router-dom";

import {
  Navbar,
  Collection,
  StarsCanvas,
  Footer,
  Map,
  Contact
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
        </div>
        <div className="relative z-0">
          <StarsCanvas />
          <Collection />
          <Map />
          <Contact />
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
