import { Component, Input } from '@angular/core';
import { Options, LabelType, NgxSliderModule } from 'ngx-slider-v2';

@Component({
  selector: 'happy-slider',
  standalone: true,
  templateUrl: './happy-slider.html',
  styleUrls: ['./happy-slider.scss'],
  imports: [ NgxSliderModule ],
})

export class HappySliderComponent {
  @Input() emojindicator: string = 'Hello';
    options: Options = {
    floor: 0,
    ceil: 500,
    step: 100,
    translate: (value: number, label: LabelType): string => ''
  };
}
