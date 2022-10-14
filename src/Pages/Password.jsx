import Navbar from "./Navbar";
import Footer from "./Footer";



export default function Password (){
    return (
            <div>
                <Navbar/>
                 <div className="main--orders">
                    <div className="main--orders--container">
                <div className="main--orders--container--left">
                    <ul>
                        <a href="profil.html"><li>Profil</li></a>
                        <a href="password.html"><li>Changer de mot de passe</li></a>
                        <a href="Commande.html"><li>Mes commandes</li></a>
                    </ul>

                </div>

                <div className="main--orders--container--right">
                    <div className="main--password--container--right--content">
                       <div className="main--password--container--right--content--box">
                        <form action="">
                            <input type="text" name="" id="" placeholder="Ancien mot de passe"/>
                            <input type="text" name="" id="" placeholder="Nouveau mot de passe"/>
                            <input type="text" name="" id="" placeholder="Confirmer nouveau mot de passe"/>
                            <button id="btn--paiement">Valider </button>
                        </form>
                       </div>
                    </div>
                </div>
                </div>              
                </div>
                <Footer/>
            </div>
    )
}