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
    floor: -1,
    ceil: 1,
    step: .5,
    translate: (value: number, label: LabelType): string => '',
  };
  onUserChange(changeContext: ChangeContext): void {
    const { value } = changeContext;
    this.emojindicator = value;
    this.valueChange.next(value);
  }

  @Output() valueChange = new EventEmitter<number>();
}
