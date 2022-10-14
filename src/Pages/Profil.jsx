


export default function Profil (){
    return (
        <div>
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
                        <div className="box--one">
                            <div className="box--file">
                                <p><i className="fa-solid fa-cloud-arrow-up"></i>Drag your files here or click in this area</p>
                            </div>
                              <label className="form-label">Votre nom</label>
                                <input type="text" placeholder="votre nom"/>
                              <div class="mb-3">
                                <label>Bio</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                              </div>
                              <button className="btn--check">Valider</button>
                        </div>

                        <div className="box--two">
                            <div className="main--orders--container--right--box2">
                                <div className="user--info">
                                    <h3>Numero de telephone</h3>
                                <p className="add--adresse">Ajouter une adressse</p>
                                </div>
                              <div className="contact">
                                <p>07 77 88 00 82</p>
                              </div>
                            </div>
                        </div>
                        <div className="box--three">
                        <div className="user--info">
                            <h3>Differentes adresses</h3>
                            <p className="add--adresse">Ajouter une adressse</p>
                        </div>
                        <div className="row">
                            <div className="row--content">
                                <div className="row--content--box">
                                    <div className="col--content">
                                        <p className="place">Maison</p>
                                        <p className="adrresse--description">Non loin de la pharmacie Akadjoba</p>
                                    </div>
                                </div>
                                <div className="row--content--box">
                                    <div className="col--content">
                                        <p className="place">Maison</p>
                                        <p className="adrresse--description">Riviera Bonoumin non loin de Abidjan Mall</p>
                                    </div>
                                </div>
                                <div className="row--content--box">
                                    <div className="col--content">
                                        <p className="place">Maison</p>
                                        <p className="adrresse--description">Riviera Bonoumin non loin de Abidjan Mall</p>
                                    </div>
                                </div>
                            </div>
                            
                            
                        </div>
                      
                        </div>
                    </div>
                </div>

                 {/* <div class="main--paiement--container--content--box1">
                    </div>  */}
                </div>
        </div>
    )
}