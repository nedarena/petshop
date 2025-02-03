import './App.css';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Cart from './components/Cart/Cart';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import NavTop from './components/Nav_top/NavTop';
import NavBottom from './components/Nav_bottom/NavBottom';

function App() {
  return (
    <div className="App">
        <Router>
            <NavTop/>
            <div className='line'></div>
            <NavBottom/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/cart' element={<Cart/>}/>
            </Routes>
            <Footer/>
        </Router>
    </div>
  );
}

export default App;