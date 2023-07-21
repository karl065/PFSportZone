import {Routes, Route, useLocation} from 'react-router-dom';
import {NavBar} from './Components';
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
  AdminUsers,
  AdminProducts,
  AdminEmployes,
} from './Views';
import {useState} from 'react';

function App() {
  const location = useLocation();

  //estado para no mostrar la nav en la pagina 404
  const [errorPage, setErrorPage] = useState(true);

  return (
    <div className="App">
      {location.pathname !== '/' && errorPage && <NavBar />}

      <Routes>
        <Route path="/" element={<Landing />} />
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/register" element={<UserRegister />} />
        <Route path="/home" element={<Home />} />
        <Route path="/adminUsers" element={<AdminUsers />} />
        <Route path="/adminProducts" element={<AdminProducts />} />
        <Route path="/adminEmployes" element={<AdminEmployes />} />
        {/* <Route path="/favorites"/> */}
        <Route path="/product/:id" element={<Detail />} />
        <Route path="/product/create" element={<ProductCreation />} />
        <Route path="/about" element={<About />} />
        <Route path="/review" element={<Review />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="*" element={<Error setErrorPage={setErrorPage} />} />
      </Routes>
    </div>
  );
}

export default App;
