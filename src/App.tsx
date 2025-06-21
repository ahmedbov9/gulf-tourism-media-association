import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './website/pages/HomePage';
import AboutPage from './website/pages/AboutPage';
import ContactPage from './website/pages/ContactPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutPage />} />
        <Route path="/contact-us" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
