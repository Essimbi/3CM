import { Injectable } from '@angular/core';

export interface Project {
    id: number;
    title: string;
    category: string;
    description: string;
    image: string;
    tags: string[];
    client?: string;
    location?: string;
    year?: string;
    context?: string;
    objectives?: string[];
    approach?: string[];
    results?: string[];
    gallery?: string[];
}

@Injectable({
    providedIn: 'root'
})
export class ProjectsService {
    private readonly projects: Project[] = [
        {
            id: 1,
            title: 'Salon International de l’Artisanat du Cameroun (SIARC 2021)',
            category: 'Campagne globale de communication',
            description: 'Identité Visuelle – Charte Graphique Editions Papiers, Campagne de publicité',
            image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop&q=80',
            tags: ['Communication', 'Identité Visuelle', 'Publicité'],
            year: '2021',
            context: 'Le SIARC est un événement majeur visant à promouvoir le génie créatif des artisans camerounais. La mission était de redynamiser l’image globale de l’événement pour sa 7e édition.',
            objectives: ['Moderniser l’image de marque de l’événement', 'Attirer un public plus large et diversifié', 'Assurer une visibilité nationale et internationale'],
            approach: ['Refonte complète de l’identité visuelle et création d’une charte graphique', 'Création et édition de supports papiers (brochures, affiches, flyers)', 'Déploiement d’une campagne publicitaire 360° (affichage, presse, digital)'],
            results: ['Forte affluence lors du salon', 'Image de l’artisanat camerounais modernisée', 'Cohérence visuelle sur l’ensemble des points de contact']
        },
        {
            id: 2,
            title: 'JNPME 2021',
            category: 'Campagne globale de communication',
            description: 'Identité Visuelle – Charte Graphique Editions Papiers, Campagne de publicité',
            image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop&q=80',
            tags: ['Communication', 'Identité Visuelle', 'Publicité'],
            year: '2021',
            context: 'Les Journées Nationales des PME constituent le principal rendez-vous annuel de l’entrepreneuriat au Cameroun. L’objectif était d’améliorer la visibilité de cet événement institutionnel.',
            objectives: ['Fédérer les acteurs de l’écosystème PME', 'Mettre en lumière les opportunités de financement', 'Créer un espace d’échange professionnel dynamique'],
            approach: ['Conception d’une identité visuelle marquante et institutionnelle', 'Production des supports d’édition (badges, programmes, signalétique)', 'Campagne de publicité ciblée B2B'],
            results: ['Participation record des PME et acteurs institutionnels', 'Supports de communication esthétiques et fonctionnels', 'Couverture médiatique optimisée et valorisante']
        },
        {
            id: 3,
            title: 'MINPMESSA',
            category: 'Édition',
            description: 'Bulletin d’informations',
            image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=600&fit=crop&q=80',
            tags: ['Bulletin', 'Information'],
            year: '2022',
            context: 'Le Ministère des PME, de l’Économie Sociale et de l’Artisanat avait besoin d’un support périodique pour valoriser ses actions.',
            objectives: ['Diffuser l’information institutionnelle', 'Valoriser les réalisations du ministère', 'Harmoniser la communication interne et externe'],
            approach: ['Conception éditoriale et graphique d’un bulletin périodique', 'Mise en page épurée facilitant la lecture', 'Impression qualitative pour distribution officielle'],
            results: ['Meilleure visibilité des actions gouvernementales', 'Support de référence pour les partenaires', 'Format attractif encourageant la lecture']
        },
        {
            id: 4,
            title: 'CENTRE DE FORMALITES DE CREATION D’ENTREPRISES',
            category: 'Campagne globale de communication',
            description: 'Identité Visuelle – Charte Graphique Editions Papiers, Campagne de publicité',
            image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop&q=80',
            tags: ['Communication', 'Identité Visuelle', 'Publicité'],
            year: '2020',
            context: 'Le CFCE avait pour mission d’encourager la formalisation des entreprises au Cameroun à travers des procédures simplifiées.',
            objectives: ['Sensibiliser le public cible à la formalisation', 'Clarifier les démarches de création d’entreprise', 'Créer un climat de confiance avec les usagers'],
            approach: ['Création d’une charte graphique rassurante et accessible', 'Édition de guides pratiques et supports papiers', 'Campagne de proximité et affichage urbain'],
            results: ['Hausse significative des immatriculations', 'Démarches mieux comprises par les entrepreneurs', 'Image institutionnelle rajeunie']
        },
        {
            id: 5,
            title: 'SYNERGIES AFRICAINES',
            category: 'Design',
            description: 'Conception de dépliants',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&q=80',
            tags: ['Dépliants', 'Design'],
            year: '2019',
            context: 'Cette ONG panafricaine nécessitait des supports directs pour ses campagnes de sensibilisation en santé publique.',
            objectives: ['Vulgariser le message scientifique et préventif', 'Fournir un support maniable et informatif', 'Toucher les communautés urbaines et rurales'],
            approach: ['Travail d’illustration et de schématisation des concepts', 'Conception graphique percutante et pédagogique', 'Structure en plis pour structurer l’information'],
            results: ['Millions de foyers sensibilisés efficacement', 'Lisibilité du message améliorée', 'Support reconnu et utilisé par les partenaires terrains']
        },
        {
            id: 6,
            title: 'MINISTÈRE DU COMMERCE',
            category: 'Design',
            description: 'Conception graphique de Brochures',
            image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&h=600&fit=crop&q=80',
            tags: ['Brochures', 'Design'],
            year: '2021',
            context: 'Le ministère souhaitait éditer des documents de référence pour les investisseurs et commerçants internationaux.',
            objectives: ['Présenter le potentiel commercial du pays', 'Offrir un document premium aux officiels', 'Renforcer la diplomatie économique'],
            approach: ['Design élégant et institutionnel', 'Mise en avant iconographique de haute qualité', 'Mise en page aérée et bilingue'],
            results: ['Brochures distribuées lors des forums internationaux', 'Amélioration de la perception du climat des affaires', 'Supports considérés comme une référence technique']
        },
        {
            id: 7,
            title: 'MINISTERE DE L’ECONOMIE ET DE LA PLANIFICATION',
            category: 'Communication',
            description: 'Idée, conception et production de supports de communication',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
            tags: ['Supports de communication', 'Idéation'],
            year: '2023',
            context: 'Le MINEPAT pilotait d’importants projets structurants nécessitant l’adhésion populaire et institutionnelle.',
            objectives: ['Traduire la stratégie macroéconomique en messages simples', 'Produire des supports durables', 'Alimenter les campagnes de plaidoyer'],
            approach: ['Organisation d’ateliers d’idéation avec les équipes du ministère', 'Conception et impression de Kakémonos, flyers et rapports de synthèse', 'Suivi intégral de la chaîne de production'],
            results: ['Communication transparente sur les projets étatiques', 'Supports salués pour leur clarté', 'Visibilité institutionnelle accrue lors d’événements phares']
        },
        {
            id: 8,
            title: 'FEDERATION CAMEROUNAISE DE GOLF (FECAGOLF)',
            category: 'Édition',
            description: 'Conception et production des agendas 2012 -2013',
            image: 'https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?auto=format&fit=crop&q=80&w=800',
            tags: ['Agendas', 'Production'],
            year: '2012',
            context: 'La fédération désirait un agenda annuel pour ses membres, partenaires et sponsors, servant à la fois d’organiseur et de vitrine.',
            objectives: ['Valoriser les activités de la fédération', 'Fournir un outil pratique aux membres', 'Attirer et fidéliser les sponsors'],
            approach: ['Design luxueux adapté au positionnement du sport', 'Intégration d’un annuaire, du calendrier sportif et d’encarts publicitaires', 'Finition premium (couverture rigide, dorure)'],
            results: ['Fierté d’appartenance renforcée chez les golfeurs', 'Retour sur investissement grâce aux sponsors', 'Objet conservé bien après l’année civile']
        },
        {
            id: 9,
            title: 'SOCIETE NATIONALE DES HYDROCARBURES (SNH)',
            category: 'Communication',
            description: 'Production de supports de communication / fournitures scolaires personnalisées, Conception et réalisation agenda',
            image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800',
            tags: ['Supports de communication', 'Agendas'],
            year: '2022',
            context: 'Dans le cadre de sa démarche RSE, la SNH distribuait des fournitures scolaires, en plus de ses traditionnels agendas d’entreprise.',
            objectives: ['Soigner l’image de l’entreprise en interne et en externe', 'Mener une action RSE concrète et visible', 'Assurer une cohérence sur une grande variété de goodies'],
            approach: ['Création du design des sacs, cahiers et stylos aux couleurs SNH', 'Conception d’un agenda Corporate de très haute qualité', 'Logistique et contrôle rigoureux de la production massive'],
            results: ['Succès de la campagne RSE de rentrée scolaire', 'Excellente réception de l’agenda par les partenaires stratégiques', 'Renforcement de l’attachement à la marque SNH']
        },
        {
            id: 10,
            title: 'TOTAL SA FRANCE',
            category: 'Édition',
            description: 'Conception, édition et impression',
            image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=800',
            tags: ['Édition', 'Impression'],
            year: '2018',
            context: 'Le géant de l’énergie nécessitait la création de guides techniques et de sécurité pour ses implantations régionales.',
            objectives: ['Garantir la stricte conformité au branding global', 'Vulgariser des consignes techniques complexes', 'Fournir des supports extrêmement durables et de haute qualité'],
            approach: ['Mise en page technique respectant les normes internationales de Total', 'Relecture et contrôle qualité drastique', 'Processus d’impression de bout en bout avec finitions spécifiques'],
            results: ['Supports validés sans réserve par le siège', 'Utilisation au quotidien par les équipes opérationnelles', 'Aucun compromis sur la qualité d’édition']
        },
        {
            id: 11,
            title: 'DIAGEO – GUINNESS CAMEROON S.A.',
            category: 'Aménagement',
            description: 'Office furnitures designed and branded',
            image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=800',
            tags: ['Office', 'Branding'],
            year: '2021',
            context: 'Guinness Cameroun a lancé un projet de rénovation de ses bureaux pour refléter sa culture d’entreprise dynamique.',
            objectives: ['Créer un espace de travail inspirant', 'Intégrer l’identité visuelle de Guinness dans les locaux', 'Allier design esthétique et ergonomie de travail'],
            approach: ['Design sur mesure du mobilier et des cloisons', 'Intégration du branding (couleurs, citations, logos) en décoration intérieure', 'Pilotage des prestataires et réalisation des travaux'],
            results: ['Aménagement applaudi par les employés', 'Augmentation ressentie du bien-être au travail', 'Locaux transformés en véritable vitrine de la marque']
        },
        {
            id: 12,
            title: 'SIAC',
            category: 'Site Web',
            description: 'Création de site web',
            image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&q=80&w=800',
            tags: ['Web', 'Digital'],
            year: '2023',
            context: 'Le SIAC requérait une vitrine numérique pour centraliser les inscriptions et informer les participants et exposants.',
            objectives: ['Digitaliser le processus de réservation des stands', 'Informer les visiteurs en temps réel', 'Avoir une plateforme multilingue et responsive'],
            approach: ['Développement d’une architecture web robuste', 'Création d’un parcours utilisateur (UX/UI) fluide et moderne', 'Intégration d’un module de réservation et d’une galerie photo'],
            results: ['Gestion des exposants grandement simplifiée', 'Augmentation du trafic web pendant l’événement', 'Accessibilité mondiale garantie']
        },
        {
            id: 13,
            title: 'CFCE',
            category: 'Site Web',
            description: 'Création de site web',
            image: 'https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?auto=format&fit=crop&q=80&w=800',
            tags: ['Web', 'Digital'],
            year: '2022',
            context: 'La digitalisation du Centre de Formalités imposait un portail capable de guider les usagers en ligne.',
            objectives: ['Fournir des ressources dématérialisées (formulaires, guides)', 'Réduire le temps d’attente physique', 'Projeter une image d’administration moderne'],
            approach: ['Web design orienté service au citoyen', 'Hiérarchisation claire des informations par profil d’entreprise', 'Déploiement technique sécurisé'],
            results: ['Plateforme devenue le premier canal d’information des usagers', 'Réduction remarquable des déplacements inutiles aux guichets', 'Haut niveau de satisfaction utilisateur']
        },
        {
            id: 14,
            title: 'WARFIRA',
            category: 'Site Web',
            description: 'Création de site web',
            image: 'https://images.unsplash.com/photo-1481481600673-bc8e22894f26?auto=format&fit=crop&q=80&w=800',
            tags: ['Web', 'Digital'],
            year: '2024',
            context: 'Lancement d’une plateforme pour structurer la présence en ligne de la marque Warfira.',
            objectives: ['Refléter l’identité innovante de Warfira', 'Générer des leads qualifiés via le web', 'Présenter le catalogue de services de manière interactive'],
            approach: ['Développement web full-stack avec animations fluides', 'Stratégie de référencement SEO incluse', 'Design adaptatif (mobile-first)'],
            results: ['Taux de conversion digital en nette hausse', 'Interface rapide et élégante', 'Autonomie totale du client sur la mise à jour via CMS']
        },
        {
            id: 15,
            title: 'Fondation Alphonse BIBEHE',
            category: 'Site Web',
            description: 'Création de site web',
            image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800',
            tags: ['Web', 'Digital'],
            year: '2023',
            context: 'La fondation nécessitait un site pour présenter ses projets philanthropiques, recruter des bénévoles et collecter des dons.',
            objectives: ['Construire un vecteur de transparence et de crédibilité', 'Faciliter les donations en ligne', 'Créer une base de ressources pour les bénéficiaires'],
            approach: ['Design empreint d’empathie et de sérieux institutionnel', 'Mise en place d’un système de dons sécurisé', 'Création d’un blog d’actualités pour raconter les succès'],
            results: ['Gain de crédibilité immédiat auprès des mécènes', 'Centralisation réussie des campagnes de dons', 'Hausse du recrutement de bénévoles en ligne']
        },
        {
            id: 16,
            title: 'BENEFICIAL LIFE',
            category: 'Branding',
            description: 'Shopping bags',
            image: 'https://images.unsplash.com/photo-1513116476489-7635e79feb27?auto=format&fit=crop&q=80&w=800',
            tags: ['Bags', 'Branding'],
            year: '2020',
            context: 'L’assureur Beneficial Life souhaitait marquer les esprits lors de la remise de ses contrats et documents à ses clients VIP.',
            objectives: ['Créer un objet de prestige utile au client', 'Faire de l’assuré un ambassadeur de la marque', 'Remplacer l’usage de pochettes ordinaires par un support premium'],
            approach: ['Conception de sacs de shopping grand format en matière résistante', 'Design sobre, élégant avec logo en dorure à chaud', 'Suivi de la production de masse'],
            results: ['Clients très satisfaits de cette attention de qualité', 'Excellente visibilité urbaine de la marque après les remises de contrats', 'Perception haut de gamme renforcée']
        },
        {
            id: 17,
            title: 'NFC BANK',
            category: 'Aménagement',
            description: 'Projet de rénovation',
            image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800',
            tags: ['Rénovation', 'Aménagement'],
            year: '2022',
            context: 'NFC Bank a entamé la modernisation de son réseau d’agences pour offrir une expérience client « Next Gen ».',
            objectives: ['Standardiser le concept architectural du réseau', 'Optimiser les flux clients au sein des agences', 'Concevoir un espace reflétant confiance et modernité'],
            approach: ['Étude des flux et distribution spatiale', 'Aménagement du mobilier bancaire, éclairage et signalétique', 'Coordination des corps d’état pour minimiser les jours de fermeture'],
            results: ['Agences lumineuses, ergonomiques et accueillantes', 'Diminution de la perception de l’attente grâce à l’agencement', 'Modernisation spectaculaire de l’image de NFC Bank']
        },
        {
            id: 18,
            title: 'NAIL AND BODY',
            category: 'Aménagement',
            description: 'Projet d’aménagement',
            image: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=800',
            tags: ['Aménagement'],
            year: '2023',
            context: 'Cet institut de beauté haut de gamme avait besoin d’un espace de soins propice à la relaxation totale de sa clientèle.',
            objectives: ['Créer un écrin de luxe et de bien-être', 'Maximiser la superficie exploitée', 'Respecter des normes strictes d’hygiène et d’ergonomie de travail'],
            approach: ['Design d’intérieur basé sur des matériaux nobles et des couleurs apaisantes', 'Aménagement de cabines privées optimisant la discrétion', 'Conception des postes de manucure sur mesure'],
            results: ['Ambiance "Spa de luxe" parfaitement réussie', 'Capacité d’accueil optimisée', 'Retour extrêmement positif des clients sur le confort des lieux']
        },
        {
            id: 19,
            title: 'MRS SHOP',
            category: 'Aménagement',
            description: 'NEW CONCEPT PROJECT',
            image: 'https://images.unsplash.com/photo-1582298642398-e76e1f0e42d7?auto=format&fit=crop&q=80&w=800',
            tags: ['Concept', 'Aménagement'],
            year: '2021',
            context: 'MRS a décidé de repenser totalement l’expérience en boutique station-service pour se démarquer de la concurrence.',
            objectives: ['Concevoir un concept retail inédit et duplicable', 'Booster le parcours d’achat des zones clés', 'Offrir une atmosphère chaleureuse et premium'],
            approach: ['Design conceptuel du parcours d’achat (merchandising)', 'Création de présentoirs spécifiques en bois et métal', 'Signalétique in-store impactante et claire'],
            results: ['Le "New Concept" est devenu la nouvelle norme du réseau', 'Augmentation significative du panier moyen en boutique', 'Flux de circulation fluidifié aux heures de pointe']
        },
        {
            id: 20,
            title: 'COLGATE PALMOLIVE CAMEROUN',
            category: 'Aménagement',
            description: 'PROJET AMENAGEMENT BUREAUX',
            image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=800',
            tags: ['Bureaux', 'Aménagement'],
            year: '2020',
            context: 'Refonte complète de l’open-space et des bureaux de la direction pour favoriser la collaboration.',
            objectives: ['Transition vers un environnement de travail collaboratif', 'Isoler phoniquement les zones de réunion', 'Incarner les valeurs de la marque (santé, propreté, dynamisme) au sein des locaux'],
            approach: ['Agencement "Activity Based Working" avec zones silencieuses et zones d’échange', 'Mobilier ergonomique et touches végétales', 'Branding discret mais omniprésent'],
            results: ['Dynamique d’équipe relancée grâce aux nouveaux espaces', 'Réduction des nuisances sonores en open-space', 'Sensation d’espace et de clarté maximisée']
        }
    ];

    getAllProjects(): Project[] {
        return this.projects;
    }

    getProjectById(id: number): Project | undefined {
        return this.projects.find((project) => project.id === id);
    }

    getFeaturedProjects(limit: number = 6): Project[] {
        return this.projects.slice(0, limit);
    }

    getCategories(): string[] {
        return Array.from(new Set(this.projects.map((project) => project.category))).sort((a, b) =>
            a.localeCompare(b, 'fr')
        );
    }

    filterByCategory(category: string): Project[] {
        if (category === 'Tous') {
            return this.getAllProjects();
        }

        return this.projects.filter((project) => project.category === category);
    }

    getSimilarProjects(project: Project, limit: number = 3): Project[] {
        return this.projects
            .filter((candidate) => candidate.category === project.category && candidate.id !== project.id)
            .slice(0, limit);
    }
}
