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
                titre      : "Jean-Philippe ETRILLARD",
                sousTitre  : "Référent technique Java/JS. Bac+5, 6 ans d'xp",
                paragraphes: [
                    "Lors de mon apprentissage au sein de Dassault Data Service, filiale de Dassault System j'ai acquis des compétences en administration système.",
                    "En 2013 j'ai intégré Cap Gemini pour m'orienter vers le développement. Grâce à plusieurs missions pour des clients grands comptes, j'ai pu monter en compétence et forger mon rôle de référent technique."
                    +" Ma double compétence système / developpement me permet d'appliquer les bonnes pratiques DEVOPS sur les projets sur lesquels je suis référent.",
                    "J'aime apprendre et échanger avec mes pairs. Ce qui se traduit par une participation à des projets open source, de la veille technologique et du e-learning."

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