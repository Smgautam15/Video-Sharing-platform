import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Upload from './pages/Upload';
import ValidUserLandingPage from './pages/ValidUserLandingPage';
import {Routes, Route} from 'react-router-dom';

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/user/:id" element={<ValidUserLandingPage />} />
      </Routes>
    </div>
  )
}

export default App
