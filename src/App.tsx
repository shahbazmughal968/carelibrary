import {Route,Routes} from 'react-router-dom'
import './App.css';
import ManageShifts from './components/manageshifts/ManageShifts';
import Reports from './components/reports/Reports';
function App() {
  return (
   <>
   <Routes>
    <Route index  element={<ManageShifts/>}/>
    <Route path={'reports'} element={<Reports/>}/>

   </Routes>
   </>
  );
}

export default App;
