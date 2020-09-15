import React, { Component } from "react";

class AboutMe extends Component {
  state = {
    lire : false
  }
  render() {
    return (
      <div id="aboutUs" style ={{textAlign:"justify"}}>
        <h3 className="titrepargrape">À propos de nous</h3>
        <p >
        Vous désirez faire ton propre jardain , a tunis ou a  ses environs? Vous aurez alors besoin d’une agence  fiable et en pleine croissance pour vous assurer de vous procurer la propriété parfaite. Ne cherchez pas plus loin que Mazertnaa Group. Spécialisés dans les  vente et la location des terres et matrielle agriculture, commerciales, à revenus et les délocalisations, nous sommes jeunes mais en croissance rapide grâce à un nombre croissant de clients satisfaits. Nous sommes fiers d'aider les familles à fermer la maison de leurs rêves, à sécuriser des actifs judicieux pour des investisseurs avisés et à aider les entreprises florissantes à realiser ton propre jardain dans des endroits manifique.
        </p>
             {this.state.lire ===false? <a  className ="colorprimaire" onClick={() => this.setState({lire : !this.state.lire})}>Lire la suite ....</a> : null}
       {this.state.lire  === true? <>
       <p>
        Mazertnaa  Group aimerait établir une relation durable avec vous et répondre à tous vos besoins , maintenant et à l'avenir. Notre mission est d'aller au-delà du grand courtage typique pour vous fournir un soutien personnalisé et individuel et vous offrir une expérience agréable. Nous reconnaissons que vendre ou acheter le bon bien agriculture peut être stressant, c'est pourquoi nous supprimons cette pression, vous permettant de vous concentrer sur d'autres aspects importants de la vie. Nous vous mettrons en contact avec un agent qui a une bonne compréhension de ce que vous voulez dans votre nouvelle maison et qui souhaite vous aider à trouver un endroit qui correspond à vos critères et qui est adapté à votre style de vie. Nous prenons très au sérieux notre responsabilité de vous trouver le condo, la maison ou la maison en rangée de vos rêves, et notre équipe dévouée de professionnels de  travaillera sans relâche pour vous aider à l'obtenir. Nous sommes également fiers de notre service rapide et recommandé de vendre votre maison rapidement. Notre plan de marketing compétitif gagnera votre cœur. Lorsque vous aurez terminé le processus d'achat ou de vente d'une maison avec nous, nous sommes convaincus que vous recommanderez avec enthousiasme Mazertnaa à vos amis, votre famille et vos collègues. Nous offrons:
        </p>
        <ul>
          <li>
          Des conseils d'experts étape par étape tout au long du processus de vente ou d'achat
          </li>
          <li>
          Conseil et accompagnement dans le choix des meilleurs notaires, inspecteurs et professionnels hypothécaires
          </li>
          <li>Analyses de marché pour les vendeurs</li>
          <li>Évaluations Agriculture  approfondies</li>
          <li>Négociation professionnelle des conditions contractuelles et des prix</li>
          <li>Connaissance détaillée du marché et de la région
    Un service professionnel, digne de confiance et attentionné</li>
        </ul>
        BLVD Realty Group est heureux de fournir un service complet à nos clients. Laissez-nous vous aider à réaliser votre jardain de rêve . Grands ou petits, nous sommes impatients de vous servir dans ces régions: Tunisie, sousse , sfax et tous les autre regions. Toutes nos propriétés sont répertoriées sur le MLS (Multiple Listing Service)
        </>  : null
       }
       <br/><br/>
      </div>
    );
  }
}

export default AboutMe;
