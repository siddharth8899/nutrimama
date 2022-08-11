import About from './components/About';
import './css/App.css';
import Contact from './components/Contact';
import {
  Routes,
  Route,
} from "react-router-dom";
import Products from './components/Products';
import PageNotFound from './components/PageNotFound';
import TempDrawer from './components/Drawer';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <TempDrawer /> 
      <Routes>
        <Route exact path="/about" element={<About />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/pageNotFound" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
