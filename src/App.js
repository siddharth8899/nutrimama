import About from './About';
import './App.css';
import Contact from './Contact';
import Header from './Header';
import {
  Routes,
  Route,
} from "react-router-dom";
import Products from './Products';
import PageNotFound from './PageNotFound';
import TempDrawer from './Drawer';

function App() {
  return (
    <div className="App">
      <TempDrawer /> 
      <About />
      <Products />
      <Contact />

      {/* <Routes>
        <Route exact path="/" element={<App />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/pageNotFound" element={<PageNotFound />} />
      </Routes> */}
    </div>
  );
}

export default App;
