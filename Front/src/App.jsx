import { Routes, Route, useLocation } from "react-router-dom";
import { NavBar } from "./Components";
import {
  Landing,
  Home,
  Detail,
  Review,
  Faq,
  Error,
  About,
  UserRegister,
  ProductCreation,
  UserLogin,
} from "./Views";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      {location.pathname !== "/" && <NavBar />}

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/register" element={<UserRegister />} />
        <Route path="/home" element={<Home />} />
        {/* <Route path="/favorites"/> */}
        <Route path="/product/:id" element={<Detail />} />
        <Route path="/product/create" element={<ProductCreation />} />
        <Route path="/about" element={<About />} />
        <Route path="/review" element={<Review />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
