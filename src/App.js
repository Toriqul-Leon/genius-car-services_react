import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./pages/About/About";
import Home from "./pages/Home/Home/Home";
import Login from "./pages/Login/Login/Login";
import Register from "./pages/Login/Register/Register";
import ServiceDetail from "./pages/ServiceDetail/ServiceDetail";
import Footer from "./pages/Shared/Footer/Footer";
import Header from "./pages/Shared/Header/Header";
import NotFound from "./pages/Shared/NotFound/NotFound";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route
          path="/service/:serviceId"
          element={<ServiceDetail></ServiceDetail>}
        />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
