import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  divIds: string[] = ['Contacts','My Projects','My Background', 'About', 'Home']; // IDs of the divs to scroll to

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  scrollToElement(id: string): void {
    const element = this.el.nativeElement.querySelector(`#${id}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    }
  }

}
