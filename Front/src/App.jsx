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
,AdminUsers,AdminProducts,AdminEmployes} from './Views';

function App() {
  const location = useLocation();
  return (
    <div className="App">
      {location.pathname !== '/' && <NavBar />}

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
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
