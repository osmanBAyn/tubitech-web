import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'tubi-our-team',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './our-team.component.html',
  styleUrl: './our-team.component.css'
})
export class OurTeamComponent {
  k : Array<number> = [1,2,3,4,5,6,7,8,9];
}
