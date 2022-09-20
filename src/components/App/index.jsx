import { BrowserRouter, Routes, Route } from "react-router-dom";

import "../../assets/css/reset.css";
import "../../assets/css/index.css";
import "../../assets/css/query.css";

import { Provider } from "../../hooks/UserContext";
import SignIn from "../routes/SignIn";
import Green from "../routes/Green";
import Yellow from "../routes/Yellow";
import Game from "../routes/Game";
import Indications from "../routes/Indications";

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/green" element={<Green />} />
          <Route path="/yellow" element={<Yellow />} />
          <Route path="/game/:id" element={<Game />} />
          <Route path="/indications" element={<Indications />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
