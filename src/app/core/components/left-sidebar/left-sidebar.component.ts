import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, Input, OnChanges, OnInit, SimpleChanges, ViewChild, ViewEncapsulation } from '@angular/core';
import { LibsModule } from '../../../libs/libs.module';
import { MatDrawer } from '@angular/material/sidenav';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { MenuItem, MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-left-sidebar',
  standalone: true,
  imports: [LibsModule, CommonModule, RouterModule],
  templateUrl: './left-sidebar.component.html',
  styleUrl: './left-sidebar.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class LeftSidebarComponent implements OnInit{
  public menuItems: any =[];

  private __menuService = inject(MenuService);

 // Variable to control dropdown visibility
 isDropdownOpen: boolean = false;


 ngOnInit() {
  this.__menuService.getMenuItems().subscribe((items:any) => {
    this.menuItems = items;
    console.log('this.menuItems',this.menuItems)
  });
}
toggleSubMenu(index: number): void {
  this.menuItems[index].isActive = !this.menuItems[index].isActive;
}

}
