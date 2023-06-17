import './App.css';
import MainNavigation from './components/MainNavigation';
import { BrowserRouter } from 'react-router-dom';

function App() {
 
  return (
    <>
   <BrowserRouter>
    <MainNavigation />
    </BrowserRouter>
  </>
  );
}

export default App;
