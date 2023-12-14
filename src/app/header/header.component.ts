import { Component, ElementRef, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() id:string = ""

  constructor(private el:ElementRef) {}

  ngOnInit(): void {
      
  }

  

  scrollToElement(id: string): void {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    }
  }

  menuopen = false;
  toggleMenu(){
    this.menuopen = !this.menuopen;
  }

}
