import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ResponsiveAppBar from './components/Header';
import Footer from './components/Footer';
import ProductCard from './components/ProductCard';
import ProductDetailPage from './components/ProductDetailPage';

function App() {
  return (
    <Router>
      <div>
        <ResponsiveAppBar />
        <Routes>
          <Route path="/" element={<ProductCard />} />
          <Route path="/product/:productId" element={<ProductDetailPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
