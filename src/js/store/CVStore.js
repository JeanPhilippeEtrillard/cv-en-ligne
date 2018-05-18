/**
 * Created by jphet on 15/05/2017.
 */
import EventEmitter from "events";

class CVStore extends EventEmitter {
    constructor() {
        super();
        this.cvSection = [
            {
                icon   : "graduation-cap",
                titre  : "Formations",
                couleur: "#e64a19",
                items  : [
                    {
                        anneeDebut : 2010,
                        anneeFin   : 2013,
                        titre      : "Obtention du diplôme d’Ingénieur en  Informatique et Réseaux ",
                        description: "ISEN Brest"
                    },
                    {
                        anneeDebut : 2009,
                        anneeFin   : 2010,
                        titre      : "Licence 3 en Informatique",
                        description: "Faculté de Nantes"
                    },
                    {
                        anneeDebut : 2008,
                        anneeFin   : 2009,
                        titre      : "Obtention du DUT Informatique",
                        description: "IUT de Nantes"
                    },
                    {
                        anneeDebut : 2006,
                        anneeFin   : 2007,
                        titre      : "Baccalauréat Scientifique option Sciences de l'Ingénieur",
                        description: "Lycée Eugène Livet, Nantes "
                    },
                    {
                        anneeDebut : 2005,
                        anneeFin   : 2006,
                        titre      : "Obtention du Brevet d’Initiation à l’Aéronautique",
                        description: "Aéroclub Loire Atlantique"
                    }
                ]
            },
            {
                icon   : "briefcase",
                titre  : "Expériences",
                couleur: "#388e3c",
                items  : [
                    {
                        anneeDebut : 2016,
                        titre      : "Cadre Ingénieur chez Capgemini",
                        description: "Référent technique sur une mission de TMA/Projet pour la BNPP. Cette mission allie assistance clients/collaborateurs, management, développement web (Java J2EE / HTML / CSS) et développement batch (Spring Batch, Hibernate)."
                    },
                    {
                        anneeDebut : 2015,
                        anneeFin   : 2016,
                        titre      : "Cadre Ingénieur chez Capgemini",
                        description: "Référent technique sur une mission BI de transfert du socle technique SQL Server vers Teradata pour le Crédit Agricole Téchnologies & Services. J’ai eu pour mission le développement et les tests de composants Mainframe, l’écriture de scénarios de mise en production et le suivi de ceux-ci ainsi que la prise en compte des processus client pour nos livraisons."
                    },
                    {
                        anneeDebut : 2013,
                        anneeFin   : 2015,
                        titre      : "Cadre Ingénieur chez Capgemini",
                        description: "Référant technique  sur une mission de gestion d’environnement pour le Crédit Agricole Card and Payment. J’ai pour objectif de " +
                        "normaliser le socle technique des VM dans mon périmètre selon les règles du client. J’assure également le support technique sur celles-ci. Je participe à la gestion de la matière ainsi qu’à l’installation des applications clientes. Ainsi qu’à la formation de mes collègues."
                    },
                    {
                        anneeDebut : 2010,
                        anneeFin   : 2013,
                        titre      : "Apprentissage chez Dassault Systèmes",
                        description: "Apprentis pendant 3 ans au poste d’administrateur systèmes et réseaux, en charge du MCO de l’infrastructure de l’agence ainsi que le déploiement de solution infra et du produit  ENOVIA. Développement et déploiement de solutions Java / J2E pour la gestion de base SVN."

                    },
                    {
                        anneeDebut : 2009,
                        anneeFin   : 2010,
                        titre      : "Stage de fin d'année de L3",
                        description: "Création d'un portail web de gestion de temps pour le service informatique de JES (Jacquet Electronique System).Développé en C# et ASP.Net    avec  Visual Sudio."

                    },
                    {
                        anneeDebut : 2008,
                        anneeFin   : 2009,
                        titre      : "Stage de fin d'année de DUT",
                        description: " Création d'une application de gestion de planning    et d'activité pour le service informatique de la TAN."

                    }
                ]
            }, {
                icon   : "cogs",
                titre  : "Compétences",
                couleur: "#3f51b5",
                skills : [
                    {
                        titre : "Langages de programmation",
                        skills: [
                            {
                                degCon     : 4,
                                description: "Java"
                            },
                            {
                                degCon     : 3,
                                description: "C#"
                            },
                            {
                                degCon     : 3,
                                description: "C++"
                            },
                            {
                                degCon     : 3,
                                description: "C"
                            }
                        ]
                    },
                    {
                        titre : "Technologies Internet",
                        skills: [
                            {
                                degCon     : 3,
                                description: "HTML"
                            },
                            {
                                degCon     : 3,
                                description: "CSS"
                            },
                            {
                                degCon     : 3,
                                description: "PHP"
                            },
                            {
                                degCon     : 2,
                                description: "Javascript"
                            },
                            {
                                degCon     : 2,
                                description: "React"
                            },
                            {
                                degCon     : 2,
                                description: "ASP.Net"
                            },
                            {
                                degCon     : 1,
                                description: "AngularJS"
                            },
                            {
                                degCon     : 1,
                                description: "ExpressJS"
                            }
                        ]
                    },
                    {
                        titre : "Spécification et Conception",
                        skills: [
                            {
                                degCon     : 3,
                                description: "Moore"
                            },
                            {
                                degCon     : 3,
                                description: "Merise"
                            },
                            {
                                degCon     : 3,
                                description: "UML"
                            }
                        ]
                    },
                    {
                        titre : "Base de données",
                        skills: [
                            {
                                degCon     : 4,
                                description: "Oracle"
                            },
                            {
                                degCon     : 4,
                                description: "MySQL"
                            },
                            {
                                degCon     : 3,
                                description: "Access"
                            },
                            {
                                degCon     : 2,
                                description: "SQLite"
                            },
                            {
                                degCon     : 2,
                                description: "MongoDB"
                            },
                            {
                                degCon     : 1,
                                description: "HyperFile"
                            }
                        ]
                    },
                    {
                        titre : "Système d'exploitation",
                        skills: [
                            {
                                degCon     : 4,
                                description: "AIX"
                            },
                            {
                                degCon     : 4,
                                description: "Linux"
                            },
                            {
                                degCon     : 4,
                                description: "Win (XP, 7, 8, 10)"
                            },
                            {
                                degCon     : 2,
                                description: "Red Hat"
                            }
                        ]
                    },
                    {
                        titre : "Logiciels",
                        skills: [
                            {
                                degCon     : 4,
                                description: "WAS"
                            },
                            {
                                degCon     : 3,
                                description: "VMWare ESX"
                            },
                            {
                                degCon     : 3,
                                description: "Dollar Universe"
                            },
                            {
                                degCon     : 3,
                                description: "Eclipse"
                            },
                            {
                                degCon     : 2,
                                description: "InteliJ"
                            },
                            {
                                degCon     : 2,
                                description: "MQ Series"
                            },
                            {
                                degCon     : 1,
                                description: "ClearCase"
                            },
                            {
                                degCon     : 1,
                                description: "Veeam"
                            }
                        ]
                    },
                ],
                infos  : [
                    "Anglais : Capable de lire un texte en Anglais, tenir une conversation. TOEIC 785"
                ]

            },
            {
                icon   : "project-diagram",
                titre  : "Projets Open",
                couleur: "#03a9f4",
                items  : [
                    {
                        titre: 'CV-En-Ligne',
                        url  : 'https://github.com/Filou911/cv-en-ligne',
                        description: "Projet perso opensource de CV réalisé faisant intervenir du ReactJS, du MaterializeCSS et du webpack."
                    },
                    {
                        titre: 'FoodStorm-Front',
                        url  : 'https://github.com/sleray/Foodstorm-front',
                        description: "Description Front"
                    },
                    {
                        titre: 'FoodStorm-Back',
                        url  : 'https://github.com/sleray/Foodstorm-back',
                        description: "Description Back"
                    }]
            },
             {
                icon   : "info",
                titre  : "Centres d'intérêts",
                couleur: "#263238",
                infos  : [
                    "Pratique du piano pendant 6 ans", "Pratique du chant pendant plus de 10 ans actuellement chez Tinore y bassi à la MDA de Saint-herblain",
                    "Aviation", "Jeux vidéos"
                ]

            }
        ]

    }

    getCvSections() {
        return this.cvSection;
    }

}
const cvStore = new CVStore();

export default cvStore;