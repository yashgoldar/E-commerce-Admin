import { Component } from '@angular/core';
import { LibsModule } from '../../../libs/libs.module';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [LibsModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
