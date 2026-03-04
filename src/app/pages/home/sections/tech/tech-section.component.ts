import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollAnimationDirective } from '../../../../core/directives/scroll-animation.directive';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  heroCpuChip,
  heroQueueList,
  heroCommandLine,
  heroRocketLaunch,
  heroArrowRight
} from '@ng-icons/heroicons/outline';

@Component({
  selector: 'app-tech-section',
  standalone: true,
  imports: [CommonModule, ScrollAnimationDirective, NgIconComponent],
  providers: [
    provideIcons({
      heroCpuChip,
      heroQueueList,
      heroCommandLine,
      heroRocketLaunch,
      heroArrowRight
    })
  ],
  template: `
    <section class="tech-section" id="technology">
      <div class="tech-container">
        <div class="tech-grid">
          <div class="tech-content" appScrollAnimation [animationType]="'fade-up'" [duration]="800">
            <span class="tech-tag">Innovation & Digital</span>
            <h2 class="tech-title">3CM Technologie : Innovations Matérielles & Logicielles</h2>
            <p class="tech-description">
              Pionnier de la souveraineté technologique, 3CM Technologie conçoit et assemble 
              des équipements informatiques (PC, Tablettes) et assure leur maintenance. 
              Nous orchestrons également l'ingénierie logicielle de pointe et l'intégration de l'IA.
            </p>
            
            <div class="tech-features">
              <div class="feature-item">
                <div class="feature-icon">
                  <ng-icon name="heroCpuChip" size="24"></ng-icon>
                </div>
                <div class="feature-text">
                  <h3>Hardware & Maintenance</h3>
                  <p>Conception d'équipements (PC, Tablettes) et support technique expert.</p>
                </div>
              </div>
              
              <div class="feature-item">
                <div class="feature-icon">
                  <ng-icon name="heroCommandLine" size="24"></ng-icon>
                </div>
                <div class="feature-text">
                  <h3>Ingénierie & IA</h3>
                  <p>Développement de solutions logicielles et intégration d'IA générative.</p>
                </div>
              </div>
            </div>

            <div class="tech-actions">
              <a href="https://tech.3-c-m.com" target="_blank" class="btn-tech">
                Explorer 3CM Technologie
                <ng-icon name="heroArrowRight"></ng-icon>
              </a>
            </div>
          </div>

          <div class="tech-visual" appScrollAnimation [animationType]="'zoom-in'" [duration]="1000">
            <div class="visual-container">
              <div class="glow-sphere"></div>
              <div class="tech-card glass">
                <div class="card-header">
                  <div class="dot red"></div>
                  <div class="dot yellow"></div>
                  <div class="dot green"></div>
                </div>
                <div class="card-body">
                  <pre><code>
<span class="code-comment">// Orchestrating Innovation</span>
<span class="code-keyword">const</span> <span class="code-variable">technology</span> = <span class="code-keyword">new</span> <span class="code-class">3CMTech</span>();

<span class="code-variable">technology</span>.<span class="code-method">transform</span>({{ '{' }}
  strategy: <span class="code-string">'Agile'</span>,
  vision: <span class="code-string">'Future-proof'</span>,
  impact: <span class="code-keyword">true</span>
{{ '}' }});
                  </code></pre>
                </div>
              </div>
              
              <div class="floating-chips">
                <div class="chip float-1"><ng-icon name="heroRocketLaunch"></ng-icon> Deployment</div>
                <div class="chip float-2"><ng-icon name="heroQueueList"></ng-icon> Scalability</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrl: './tech-section.component.scss'
})
export class TechSectionComponent { }
