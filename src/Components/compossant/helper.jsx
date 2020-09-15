import React, { Component } from 'react'
import Sidebar from './Slidebar'
export default class Helper extends Component {
    render() {
        return (
            < div className="flexflex">
            <Sidebar/>
            <div className="container">
            <br/><br/><br/>
                <h1 align="center" style={{color:"green", letterSpacing:"3px"}} >Astuces  Mazretnaa</h1>
                <br/><br/><br/>
            <div className="padding-allannonce">
             <div class="how-section1">
                    <div class="row">
                        <div class="col-md-4 how-img">
                            <img src="image/iconcart/help1.jpg" class="rounded-circle img-fluid" alt=""/>
                        </div>
                        <div class="col-md-6">
                            <h4>Trouvez des projets enrichissants</h4>
                                        <h5 class="subheading">Mazretnnaa  est un endroit idéal pour faire votre propre jardain et  pour gérer et développer votre propre entreprise indépendante.</h5>
                        <p class="text-muted">Liberté de travailler sur des projets idéaux.Chez Mazetnaa, vous dirigez votre propre entreprise et choisissez vos propres clients et projets. Complétez simplement votre profil et nous mettrons en évidence les emplois idéaux. Recherchez également des projets et répondez aux invitations des clients.
                                             Trouvez votre milleur terre en un prix chokant , .
                                             De plus en plus de succès. Plus vous réussissez sur les projets, plus vous avez de chances d'être embauché par des clients qui utilisent GetLance.</p>
                        </div>
                    </div>
                    <br/><br/><br/>
                    <div class="row">
                        <div class="col-md-6">
                            <h4>Soyez Productive rapidement</h4>
                                        <h5 class="subheading">Mazrtnna  facilite la connexion avec les clients  et vous permez les meilleur produit et les meilleur prix.</h5>
                                        <p class="text-muted">Streamlined hiring. GetLance’s sophisticated algorithms highlight projects you’re a great fit for.
                                            Top Rated and Rising Talent programs. Enjoy higher visibility with the added status of prestigious programs.
                                            Do substantial work with top clients. GetLance pricing encourages freelancers to use GetLance for repeat relationships with their clients.</p>
                        </div>
                        <div class="col-md-4 how-img">
                            <img src="image/iconcart/help2.jpg" class="rounded-circle img-fluid" alt=""/>
                        </div>
                    </div>
                    <br/><br/><br/>
                    <div class="row">
                        <div class="col-md-4 how-img">
                             <img src="image/iconcart/help3.jpg" class="rounded-circle img-fluid" alt=""/>
                        </div>
                        <div class="col-md-6">
                            <h4>Travaillez efficacement et efficacement.</h4>
                                        <h5 class="subheading">With GetLance, you have the freedom and flexibility to control when, where, and how you work. Each project includes an online workspace shared by you and your client, allowing you to:</h5>
                                        <p class="text-muted">Send and receive files. Deliver digital assets in a secure environment.
                                            Share feedback in real time. Use GetLance Messages to communicate via text, chat, or video.
                                            Use our mobile app. Many features can be accessed on your mobile phone when on the go.</p>
                        </div>
                    </div>
                    <br/><br/><br/>
                    <div class="row">
                        <div class="col-md-6">
                            <h4>Sois heureux, sois brillant</h4>
                                        <h5 class="subheading">All projects include GetLance Payment Protection — helping ensure that you get paid for all work successfully completed through the freelancing website.</h5>
                                        <p class="text-muted">All invoices and payments happen through GetLance. Count on a simple and streamlined process.
                                            Hourly and fixed-price projects. For hourly work, submit timesheets through GetLance. For fixed-price jobs, set milestones and funds are released via GetLance escrow features.
                                            Multiple payment options. Choose a payment method that works best for you, from direct deposit or PayPal to wire transfer and more.</p>
                        </div>
                        <div class="col-md-4 how-img">
                            <img src="image/iconcart/help4.jpg" class="rounded-circle img-fluid" alt=""/>
                        </div>
                    </div>
                </div>   
            </div>
            </div>
            </div>
        )
    }
}
