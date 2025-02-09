import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
export interface MenuItem {
  title: string;
  icon: string;
  tooltip: string;
  link?: string; // Optional, in case the menu item is a link
  subMenu?: SubMenuItem[]; // Nested sub-menu
  isActive: boolean
}

export interface SubMenuItem {
  title: string;
  icon: string;
  tooltip: string;
  link?: string; // Optional, in case the menu item is a link
  isActive: boolean
}

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  getMenuItems(): Observable<MenuItem[]> {
    // Replace this with an actual API call if necessary
    const menuItems: MenuItem[] = [
      {
        title: 'Dashboard',
        icon: 'fa-solid fa-house',
        tooltip: 'Dashboard',
        link: '/admin/dashboard',
        isActive: false,
        subMenu: []
      },
      {
        title: 'Order',
        icon: 'fa-solid fa-user',
        tooltip: 'Order',
        link: '#',
        isActive: false,
        subMenu: []
      },
      {
        title: 'Products',
        icon: 'fa-solid fa-file',
        tooltip: 'Products',
        isActive: false,
        subMenu: [
          {
            title: 'Add Products',
            icon: 'fa-solid fa-plus',
            tooltip: 'Add Products',
            isActive: false,
            link: '/admin/products/add',
          },
          {
            title: 'List Products',
            icon: 'fa-solid fa-list',
            tooltip: 'List Products',
            isActive: false,
            link: '/admin/products/list',
          },
        ],
      },
      {
        title: 'Categories',
        icon: 'fa-solid fa-calendar',
        tooltip: 'Categories',
        link: '#',
        isActive: false,
        subMenu: []
      },
    ];

    return of(menuItems); // Simulate an observable API response
  }
}
