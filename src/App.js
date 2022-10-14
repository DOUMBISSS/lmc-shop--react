import './App.css';
import {Routes,Route} from 'react-router-dom';
import Home from './Pages/Home';
import Articles from './Pages/Articles';
import Commandes from './Pages/Commandes';
import Profil from './Pages/Profil';
import Password from './Pages/Password';
import Paiement from './Pages/Paiement';
import Details from './Pages/Details';
import Accessoires from './Pages/Accessoires';



function App() {
  return (
    <div>
    <Routes>
    <Route path="/" element={<Home/>}/>
    {/* <Route path='/details/:id' element={<MovieDetails movies ={movies} setSearchFilter={setSearchFilter}/>} /> */}
    <Route path='/articles' element={<Articles/>} />
    <Route path='/commandes' element={<Commandes/>} />
    <Route path='/details' element={<Details/>} />
    <Route path='/profil' element={<Profil/>} />
    <Route path='/password' element={<Password/>} />
    <Route path='/paiement' element={<Paiement/>} />
    <Route path='/accessoires' element={<Accessoires/>} />
    
  </Routes>
    </div>
  );
}

export default App;
