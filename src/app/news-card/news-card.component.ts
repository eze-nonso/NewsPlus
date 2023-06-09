import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss']
})
export class NewsCardComponent {
  @Input() src: string = '';
  @Input() alt: string = '';
  @Input() date: string = '';
  @Input() description: string = '';
}
