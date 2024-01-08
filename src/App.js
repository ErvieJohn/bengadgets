import './App.css';

//Router
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import AppLayout from './Layout/AppLayout';
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import About from './components/About/About';
import Contacts from './components/Contacts/Contacts';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<AppLayout />} >
          <Route exact path="/" element={<Home />} />
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contacts" element={<Contacts />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
