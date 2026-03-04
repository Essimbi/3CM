import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroCpuChip } from '@ng-icons/heroicons/outline';

@Component({
    selector: 'app-tech-floating-button',
    standalone: true,
    imports: [CommonModule, NgIconComponent],
    providers: [
        provideIcons({ heroCpuChip })
    ],
    template: `
    <a href="https://tech.3-c-m.com" 
       target="_blank" 
       class="tech-side-button" 
       title="Visiter 3CM Technologie">
      <div class="button-content">
        <ng-icon name="heroCpuChip" size="18"></ng-icon>
        <span>3CM TECHNOLOGIE</span>
      </div>
    </a>
  `,
    styles: [`
    @use '../../../../styles/variables' as vars;

    .tech-side-button {
      position: fixed;
      right: 0;
      top: 50%;
      transform: translateY(-50%) rotate(-180deg);
      writing-mode: vertical-rl;
      z-index: vars.$z-index-sticky + 10;
      background: #05141d;
      color: white;
      padding: 16px 8px;
      border-radius: 4px 0 0 4px;
      text-decoration: none;
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 0.15em;
      box-shadow: -2px 0 15px rgba(0,0,0,0.15);
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid rgba(49, 163, 221, 0.3);
      border-right: none;

      .button-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 12px;
        
        // Icon needs to be rotated back to be upright if desired, 
        // but often vertical text feels better with rotated icon
        ng-icon {
          transform: rotate(90deg);
        }
      }

      &:hover {
        background: #0d5c86;
        padding-right: 12px;
        color: #31a3dd;
        box-shadow: -4px 0 20px rgba(49, 163, 221, 0.3);
      }

      @media (max-width: 768px) {
        display: none; // Hide on mobile to avoid cluttering
      }
    }
  `]
})
export class TechFloatingButtonComponent { }
