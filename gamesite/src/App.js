import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ChristmasPage from './ChristmasPage';
import HomePage from './HomePage';


function App() {
  return (
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/christmas" element={<ChristmasPage />} />
      </Routes> 
  );
}

export default App;

