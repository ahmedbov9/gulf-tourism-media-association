import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './website/pages/HomePage';
import AboutPage from './website/pages/AboutPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
