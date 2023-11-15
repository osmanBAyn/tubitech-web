import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import {OnDestroy} from '@angular/core';
@Component({
  selector: 'tubi-navbar',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnDestroy {
  constructor(private router:Router){}
  onClick(link:String){
    console.log('a');
    this.router.navigate([link])
  }
  ngOnDestroy(){
    
  }
}
