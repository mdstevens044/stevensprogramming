import { Component, Input } from '@angular/core';

@Component({
  selector: 'footer-generic',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})

export class FooterComponent {
  @Input() today: number = Date.now();
}
