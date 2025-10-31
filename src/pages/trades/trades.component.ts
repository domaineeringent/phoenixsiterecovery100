import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CtaSectionComponent } from '../../components/shared/cta-section/cta-section.component';

@Component({
  selector: 'app-trades',
  templateUrl: './trades.component.html',
  imports: [CommonModule, CtaSectionComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TradesComponent {
    tradesList = signal([
        'Appliance Repair', 'Arborist', 'Asphalt Paving', 'Cabinetry', 'Carpentry', 'Carpet Cleaning',
        'Chimney Sweep', 'Concrete', 'Countertops', 'Deck Builder', 'Demolition', 'Drywall',
        'Duct Cleaning', 'Electrician', 'Excavation', 'Fencing', 'Flooring', 'Foundation Repair',
        'Garage Doors', 'General Contractor', 'Gutter Cleaning', 'Handyman', 'Home Builder', 'Home Inspector',
        'HVAC', 'Insulation', 'Junk Removal', 'Landscaping', 'Lawn Care', 'Locksmith', 'Masonry',
        'Mover', 'Painter', 'Pest Control', 'Plumber', 'Pool Services', 'Pressure Washing', 'Remodeler',
        'Roofer', 'Septic Services', 'Siding', 'Solar', 'Stump Grinding', 'Tree Service', 'Welding',
        'Well Drilling', 'Window Cleaning', 'Window Installation'
    ].sort());
}
