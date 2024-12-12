import { Route } from 'react-router-dom';
import { BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import StronaGlowna from './components/StronaGlowna';
import Todolist from './components/Todolist';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<StronaGlowna />}>
          <Route path='/todolist' element={<Todolist/>}/>
        </Route>
      </Routes>        
    </BrowserRouter>
  );
}

export default App;
