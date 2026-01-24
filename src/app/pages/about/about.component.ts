import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../core/directives/scroll-reveal.directive';
import { ScrollAnimationDirective } from '../../core/directives/scroll-animation.directive';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  heroSparkles,
  heroRocketLaunch,
  heroUsers,
  heroGlobeAlt,
  heroLightBulb,
  heroCheckCircle,
  heroArrowTrendingUp,
  heroBriefcase,
  heroHeart
} from '@ng-icons/heroicons/outline';

interface Value {
  title: string;
  description: string;
  icon: string;
}

interface ApproachStep {
  title: string;
  description: string;
  details: string[];
}

interface TeamMember {
  name: string;
  role: string;
  expertise: string;
  icon: string;
}

interface Milestone {
  year: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective, ScrollAnimationDirective, NgIconComponent],
  providers: [
    provideIcons({
      heroSparkles,
      heroRocketLaunch,
      heroUsers,
      heroGlobeAlt,
      heroLightBulb,
      heroCheckCircle,
      heroArrowTrendingUp,
      heroBriefcase,
      heroHeart
    })
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  values: Value[] = [
    {
      title: 'Excellence Stratégique',
      description: 'Nous pensons les moyens avant les finalités. Chaque projet commence par une vision d\'ensemble et des objectifs clairs.',
      icon: 'heroLightBulb'
    },
    {
      title: 'Intégration Totale',
      description: 'Pas de silos. Notre équipe pluridisciplinaire travaille en harmonie pour orchestrer des solutions cohérentes.',
      icon: 'heroUsers'
    },
    {
      title: 'Impact Mesurable',
      description: 'Nous ne parlons que de résultats. ROI, engagement, notoriété : chaque métrique est suivie et optimisée.',
      icon: 'heroArrowTrendingUp'
    },
    {
      title: 'Innovation Continue',
      description: 'De l\'IA générative aux formats immersifs, nous explorons les frontières de la communication moderne.',
      icon: 'heroSparkles'
    },
    {
      title: 'Authenticité',
      description: 'Nous écoutons, nous comprenons, nous créons. Votre marque mérite une voix authentique et distinctive.',
      icon: 'heroHeart'
    },
    {
      title: 'Rayonnement Global',
      description: 'Ancrés au Cameroun, actifs sur 12 territoires. Nous pensons local, agissons global.',
      icon: 'heroGlobeAlt'
    }
  ];

  approachSteps: ApproachStep[] = [
    {
      title: 'Diagnostic & Stratégie',
      description: 'Nous analysons votre contexte, vos publics et vos objectifs pour poser une vision d\'ensemble.',
      details: ['Audit de l\'existant', 'Benchmark concurrentiel', 'Étude de positionnement', 'Planification stratégique']
    },
    {
      title: 'Création & Conception',
      description: 'Notre équipe créative transforme la stratégie en concepts visuels et narratifs percutants.',
      details: ['Concept créatif', 'Design & branding', 'Production de contenus', 'Scénarisation']
    },
    {
      title: 'Production & Activation',
      description: 'Nous orchestrons la réalisation technique et l\'activation sur tous les canaux.',
      details: ['Production multimédia', 'Événements & expériences', 'Déploiement digital', 'Activation terrain']
    },
    {
      title: 'Mesure & Optimisation',
      description: 'Nous suivons les résultats et optimisons continuellement pour maximiser votre ROI.',
      details: ['Suivi des KPIs', 'Reporting détaillé', 'Optimisation continue', 'Recommandations']
    }
  ];

  teamMembers: TeamMember[] = [
    {
      name: 'Stratégie & Conseil',
      role: 'Stratégistes',
      expertise: 'Vision d\'ensemble, planification et intelligence économique',
      icon: 'heroBriefcase'
    },
    {
      name: 'Création & Design',
      role: 'Créatifs',
      expertise: 'Identité visuelle, branding et concepts innovants',
      icon: 'heroLightBulb'
    },
    {
      name: 'Digital & Technologie',
      role: 'Experts Digital',
      expertise: 'Web, SEO, e-commerce et transformation numérique',
      icon: 'heroGlobeAlt'
    },
    {
      name: 'Événements & Production',
      role: 'Producteurs',
      expertise: 'Événements, expériences immersives et production technique',
      icon: 'heroSparkles'
    },
    {
      name: 'Relations Médias',
      role: 'Influenceurs',
      expertise: 'Relations presse, influence et gestion de réputation',
      icon: 'heroUsers'
    },
    {
      name: 'IA & Innovation',
      role: 'Innovateurs',
      expertise: 'Adrénaline - IA générative, automation et futures technologies',
      icon: 'heroRocketLaunch'
    }
  ];

  milestones: Milestone[] = [
    {
      year: '2016',
      title: 'Fondation de 3CM',
      description: 'Naissance de l\'agence au Cameroun avec une vision claire : orchestrer la communication de demain.'
    },
    {
      year: '2018',
      title: 'Expansion Régionale',
      description: 'Ouverture de bureaux dans 5 territoires d\'Afrique centrale et de l\'Ouest.'
    },
    {
      year: '2020',
      title: 'Transformation Digitale',
      description: 'Lancement de nos services digitaux et adaptation aux nouveaux modes de communication hybrides.'
    },
    {
      year: '2022',
      title: 'Adrénaline - IA',
      description: 'Création de notre division IA générative pour explorer les frontières de la créativité assistée.'
    },
    {
      year: '2024',
      title: 'Leadership Reconnu',
      description: '100+ clients, 50+ projets orchestrés, 92% de taux de recommandation. 3CM devient une référence.'
    }
  ];
}
