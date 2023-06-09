import {Component, EventEmitter, Output} from '@angular/core';
import { ChangeContext, Options, LabelType, NgxSliderModule } from 'ngx-slider-v2';

@Component({
  selector: 'happy-slider',
  standalone: true,
  templateUrl: './happy-slider.html',
  styleUrls: ['./happy-slider.scss'],
  imports: [ NgxSliderModule ],
})

export class HappySliderComponent {
    emojindicator: number = 0;
    options: Options = {
    floor: 0,
    ceil: 400,
    step: 100,
    translate: (value: number, label: LabelType): string => '',
  };
  onUserChange(changeContext: ChangeContext): void {
    const { value } = changeContext;
    this.emojindicator = value;
    console.log((value / 400) - 0.5);//__RP
    this.valueChange.next((value / 400) - 0.5);
  }

  @Output() valueChange = new EventEmitter<number>();
}
