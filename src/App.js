
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Contacts from './pages/Contacts';
import Home from './pages/Home';
import Projects from './pages/Projects';
import SeparateProject from './pages/SeparateProject';
import './styles/main.css';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <Router>

      <Navbar/>

      <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/contacts' element={<Contacts/>}/>
        <Route path='/project' element={<SeparateProject/>}/>


      </Routes>
    
     
   
    <Footer/>


        
      </Router>



     
    </div>
  );
}

export default App;
