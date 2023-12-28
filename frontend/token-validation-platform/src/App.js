import {  Route, Routes } from 'react-router-dom';
import Home from './components/home';
import MyForm from './components/token-form';
import VerificationForm from "./components/verification-form"
const App = () => {
    return (
        <div className="app">
          <Routes> 
            <Route path="/" element={<Home />} />
            <Route path="/record" element={<MyForm />} />
            <Route path="/record/:id" element={<VerificationForm />} />
          </Routes>
        </div>
    );
  };

export default App