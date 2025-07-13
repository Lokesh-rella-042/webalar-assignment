import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../src/home/Home';
import Features from './pages/Features';
import Contact from './pages/Contact';
import Login from './components/Login';
import Register from './components/Register';
import NotFound from "./pages/NotFound"
import ProtectedRoute from '../src/router/ProtectedRoute ';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* 🔐 Protected Routes */}
        <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/features" element={<ProtectedRoute><Features /></ProtectedRoute>} />
        <Route path="/contact" element={<ProtectedRoute><Contact /></ProtectedRoute>} />
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </Router>
  );
};

export default App;
