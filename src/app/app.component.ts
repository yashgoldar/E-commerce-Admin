import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { LibsModule } from './libs/libs.module';
import { LeftSidebarComponent } from "./core/components/left-sidebar/left-sidebar.component";
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { FooterComponent } from './core/components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LibsModule, LeftSidebarComponent, NavbarComponent, FooterComponent, RouterModule,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ng-E-commerce';

  isDrawerOpen: boolean = true;

  // This method will be triggered when the navbar emits the toggle event
  onDrawerStateChange(state: boolean) {
    console.log('onDrawerStateChange', state);
    this.isDrawerOpen = state;
  }

}
