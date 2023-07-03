import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CompanyInfoPage from './Components/CompanyInfo/CompanyInfoPage';
import CompanyTablePage from './Components/CompanyTable/CompanyTablePage';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/Company/:ID' element={<CompanyInfoPage/>} />
      <Route path='' element={<CompanyTablePage/>} />
    </Routes>
   </BrowserRouter>
  );
}

export default App;
