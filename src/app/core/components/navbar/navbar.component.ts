import { Component, EventEmitter, Output } from '@angular/core';
import { LibsModule } from '../../../libs/libs.module';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [LibsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  @Output() drawerStateChanged: EventEmitter<boolean> = new EventEmitter<boolean>();
  public drawerState: boolean  = true;
  toggleDrawer(e?:any): void {
    this.drawerState =!this.drawerState;
    console.log('toggle drawer', this.drawerState);
    this.drawerStateChanged.emit(this.drawerState);
  }
}
