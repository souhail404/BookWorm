import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Layout from './pages/Layout';

function App() {
  return (
    <div className="container app-container">
      <BrowserRouter>
        <Routes>
            <Route path="" element={<Layout/>} >
              <Route index element={<Home />} />
              <Route path="/product" element={<ProductDetails/>} />
            </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
