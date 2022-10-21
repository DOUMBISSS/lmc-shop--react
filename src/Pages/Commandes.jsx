// import Navbar from "./Navbar";
// import Footer from "./Footer";
import {Link} from 'react-router-dom';


export default function Commande (){
    return (
        <div>
            <div className="main--orders">
            <div className="main--orders--container">
                <div className="main--orders--container--left">
                        <ul>

                            <Link className = "liste" to="/profil"><li>Profil</li></Link>
                            <Link className = "liste" to="/password"><li>Changer de mot de passe</li></Link>
                            <Link className = "liste" to="/commandes"><li>Mes commandes</li></Link>
                        </ul>

                </div>

                <div className="main--orders--container--right">
                        <div className="main--orders--container--right--block">
                            <div className="main--orders--container--right--block--right">
                                <div className="main--orders--container--right--block--right--content">
                                    <div className="main--orders--container--right--block--right--content--box">
                                        <p className="box--header">Commande #10</p>
                                        <div className="date-delivery">
                                            <p>Date de la livraison</p>
                                            <p>le 24 Octobre  2022</p>
                                        </div>
                                        <div className="date-delivery">
                                            <p>Date de la livraison</p>
                                            <p>le 24 Octobre  2022</p>
                                        </div>
                                        <div className="box--article--value">
                                            <p>Montant:</p>
                                            <p> 2000 frs</p>
                                        </div>
    
                                        <div className="box--article--value">
                                            <p>Prix total:</p>
                                            <p> 20000 frs</p>
                                        </div>
    
                                    </div>

                                </div>

                                <div className="main--orders--container--right--block--right--content">
                                    <div className="main--orders--container--right--block--right--content--box">
                                    <p className="box--header">Commande #11</p>
                                    <div className="date-delivery">
                                        <p>Date de la livraison</p>
                                        <p>le 24 Octobre  2022</p>
                                    </div>
                                    <div className="date-delivery">
                                        <p>Date de la livraison</p>
                                        <p>le 24 Octobre  2022</p>
                                    </div>
                                    <div className="box--article--value">
                                        <p>Montant:</p>
                                        <p> 2000 frs</p>
                                    </div>

                                    <div className="box--article--value">
                                        <p>Prix total:</p>
                                        <p> 20000 frs</p>
                                    </div>
                                    </div>

                                </div>

                            </div>

                            <div className="main--orders--container--right--block--left">
                                <p>Commande numero #10</p>
                                <div className="tab">
                                    <div className="tab--adresse">
                                        <p><strong>Méthode de paiement</strong></p>
                                        <p>949 Avenue du Professeur Louis Ravas, hérault, Montpellier, 34080, France</p>
                                        <p><strong>Details du paiement</strong></p>
                                        <p>adasd, asd, dasd, asdasdasd, asdas</p>
                                    </div>
                                    <div className="tab--details">
                                    <div className="sub-total">
                                        <p>Sub-total:</p>
                                        <p>4000 frs</p>
                                    </div>
                                    <div className="sub-total">
                                        <p>Sub-total:</p>
                                        <p>4000 frs</p>
                                    </div>
                                    <div className="sub-total">
                                        <p>Sub-total:</p>
                                        <p>4000 frs</p>
                                    </div>
                                    <div className="sub-total">
                                        <p>Sub-total:</p>
                                        <p>4000 frs</p>
                                    </div>
                                    </div>

                                </div>

                                <div className="step--of--livraison">

                                </div>

                            </div>

                        </div>
            </div>

        </div>       
            </div>

        </div>
    );
}