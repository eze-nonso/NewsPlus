import { Component } from '@angular/core';
import {DataService} from "./services/data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public data: DataService) {
    this.data.getNews(1);
  }
  title = 'newsplus';
  newsList: {
    src: string,
    description: string,
    alt: string,
    date: string,
  }[] = [{
    src: 'https://images0.persgroep.net/rcs/dFueTW2Q891rNOApL0jzMetDWKo/diocontent/179758739/_focus/0.5/0.5/_fill/280/280?appId=93a17a8fd81db0de025c8abd1cca1279&quality=0.85',
    description: 'Tijdens lockdowns gingen dieren juist méér bewegen',
    alt: '',
    date: '9-6-2023',
  }, {
    description: 'Live: ‘Kerncentrale Zaporizja nog wel gekoeld met water stuwmeer’ • Dnipro ‘lange tijd’ onbegaanbaar voor vrachtschepen',
    date: '23:30 uur',
    alt: '',
    src: 'https://images0.persgroep.net/rcs/_SYEzMGx6T0jmGzLhBEhY2kVjwI/diocontent/232079025/_focus/0.5/0.5/_fill/280/280?appId=93a17a8fd81db0de025c8abd1cca1279&quality=0.85',
  }, {
    src: 'https://images0.persgroep.net/rcs/PQzXYg2n9Al0HzYysZ2a2IUqHxs/diocontent/232073752/_focus/0.5/0.5/_fill/280/280?appId=93a17a8fd81db0de025c8abd1cca1279&quality=0.85',
    description: '‘Houd je koest, net als Edward Snowden’, adviseert politie na dreigementen tegen dissident',
    alt: '',
    date: '23:06 uur',
  }, {
    src: 'https://images0.persgroep.net/rcs/D5Vua8vL5L_8q5na7kNO46E85-Q/diocontent/225448894/_focus/0.5/0.5/_fill/280/280?appId=93a17a8fd81db0de025c8abd1cca1279&quality=0.85',
    description: 'Ook provincie Zuid-Holland biedt excuses aan voor slavernijverleden: ‘We zien een afschuwelijk en verwerpelijk systeem’',
    alt: '',
    date: '21:39 uur',
  }, {
    src: 'https://images0.persgroep.net/rcs/r8xd4CLLsZTB4GZxRr1wMqPRRbw/diocontent/232071633/_focus/0.5/0.5/_fill/280/280?appId=93a17a8fd81db0de025c8abd1cca1279&quality=0.85',
    description: 'Belgische Hoge Raad overweegt onderzoek naar klassenjustitie in zaak-Sanda Dia',
    alt: '',
    date: '19:42 uur',
  }];
}
