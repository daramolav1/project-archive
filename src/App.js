import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import TermsOfService from "./pages/terms-of-service";
import NoMatch from "./pages/404";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <Header />
              <Portfolio />
              <Footer />
            </>
          }
        ></Route>
        <Route
          path="/terms-of-service"
          element={
            <>
              <TermsOfService />
              <Footer />
            </>
          }
        ></Route>
        <Route path="*" element={<NoMatch />}></Route>
      </Routes>
    </div>
  );
}

export default App;
