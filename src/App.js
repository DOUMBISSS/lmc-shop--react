import './App.css';
import {Routes,Route} from 'react-router-dom';
import Home from './Pages/Home';
import ArticleCategory from './Pages/ArticleCategory';
import Commandes from './Pages/Commandes';
import Profil from './Pages/Profil';
import Password from './Pages/Password';
import Paiement from './Pages/Paiement';
import Details from './Pages/Details';



function App() {
  return (
    <div>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path='/commandes' element={<Commandes/>} />
    <Route path='/details/:id' element={<Details/>} />
    <Route path='/profil' element={<Profil/>} />
    <Route path='/password' element={<Password/>} />
    <Route path='/paiement' element={<Paiement/>} />
    <Route path='/category/:slug' element={<ArticleCategory/>} />
  </Routes>
    </div>
  );
}

export default App;
