import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import MainHero from './components/MainHero/MainHero';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Header />
          <Routes>
            <Route path='/' element={<MainHero />} />
            <Route path='/login' element={<Login />} />
            <Route path='*' element={<h1>NotFound</h1>} />
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
