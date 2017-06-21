/**
 * Created by jphet on 05/05/2017.
 */
import EventEmitter from "events";

class AccueilStore extends EventEmitter {
    constructor() {
        super();
        this.image       = "moi.png";
        this.description = [
            {
                titre      : "Jean-Philippe ETRILLARD : 27 ans Cadre dans le numérique",
                sousTitre  : "Diplômé en ingénierie informatique",
                paragraphes: [
                    "Après mon DUT et ma première année de cycle d'ingénieur à l'ISEN Brest, j'ai acquis des bases en développement " +
                    "ainsi qu'en organisation et méthodologie de travail.",
                    "Mes deux dernières années de cycle Ingénieur m'ont permis de développer des compétences de management, " +
                    "de méthodologie et de gestion de projets ainsi que d'approfondir mes connaissances en développement.",
                    "Pendant mes études, j'ai réalisé des stages au sein de la TAN et de la société JES durant lesquels j'ai produit " +
                    "des applications de gestion de temps. J'ai terminé mes études par de l'alternance chez Dassault Data Service, filiale de Dassault Système. " +
                    "Où j'ai pu acquérir des compétences en administration système."

                ]
            },
            {
                titre      : "À propos de moi",
                paragraphes: [
                    "J'aime apprendre de nouvelles choses ce qui se traduit par de la recherche sur internet et de la mise en pratique de ces nouvelles connaissances. " +
                    "J'apprécie également discuter afin d’échanger des points de vue et apprendre des autres."

                ]
            }
        ]

    }

    getImage() {
        return this.image;
    }

    getDescription() {
        return this.description;
    }

}
const accueilStore = new AccueilStore();

export default accueilStore;