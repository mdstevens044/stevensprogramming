import { Component, Input } from '@angular/core';

@Component({
  selector: 'footer-generic',
  templateUrl: './footer.template.html'
})

export class FooterComponent {
  @Input() today: number = Date.now();
}
