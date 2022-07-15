import {Route,Routes} from 'react-router-dom'
import './App.css';
import ManageShifts from './components/manageshifts/ManageShifts';
import Reports from './components/reports/Reports';
import InitialEnquiries from './components/InitialEnquiries/InitialEnquiries';
function App() {
  return (
   <>
   <Routes>
    <Route index  element={<ManageShifts/>}/>
    <Route path={'reports'} element={<Reports/>}/>
    <Route path={'initial'} element={<InitialEnquiries/>}/>


   </Routes>
   </>
  );
}

export default App;
