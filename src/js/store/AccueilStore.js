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
                titre      : "Jean-Philippe ETRILLARD : 29 ans Référent technique",
                sousTitre  : "Diplômé en ingénierie informatique",
                paragraphes: [
                    "Après mon apprentissage au sein de Dassault Data Service, filiale de Dassault System, où j'ai acquis les bases de la vie en entreprise ainsi que des compétences en administration système." 
                    +" J'ai été embauché chez Capgemini sur l'entité FSSBU.",
                    "Depuis maintenant cinq ans chez Capgemini, au travers des différentes missions hétérogènes j'ai pu acquérir de nombreuses compétences techniques ainsi que forger mon rôle de référent technique.",
                    "Je reste à l'écoute du marché en appliquant sur des projets personnelles ou professionnelles ce que j'ai appris en auto-formation."

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