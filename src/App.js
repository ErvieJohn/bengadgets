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
import { BASE_URL } from './config/config';


function App() {
  return (
    <Router>
      <Routes>
        <Route element={<AppLayout />} >
          <Route exact path={BASE_URL + "/"} element={<Home />} />
          <Route exact path={BASE_URL + "/products"} element={<Products />} />
          <Route exact path={BASE_URL + "/about"} element={<About />} />
          <Route exact path={BASE_URL + "/contacts"} element={<Contacts />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
