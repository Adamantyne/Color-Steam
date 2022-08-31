import { BrowserRouter, Routes, Route } from "react-router-dom";

import "../../assets/css/reset.css";
import "../../assets/css/index.css";
import "../../assets/css/query.css";

import { Provider } from "../../hooks/UserContext";
import SignIn from "../routes/SignIn";
import Green from "../routes/Green";

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/green" element={<Green />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
