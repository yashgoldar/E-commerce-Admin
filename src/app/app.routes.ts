import { Routes } from '@angular/router';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { ListProductsComponent } from './modules/products/list-products/list-products.component';
import { AddProductComponent } from './modules/products/add-product/add-product.component';
import { AddCategoriesComponent } from './modules/categories/add-categories/add-categories.component';
import { ListCategoriesComponent } from './modules/categories/list-categories/list-categories.component';

export const adminRoutes: Routes = [
    {
        path: '',
        redirectTo: 'admin/dashboard',  // Root redirects to admin/dashboard
        pathMatch: 'full',
    },
    {
        path: 'admin',
        children: [
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full',
            },
            {
                path: 'dashboard',
                component: DashboardComponent,
            },
            {
                path: 'products',
                children: [
                    {
                        path: 'list',
                        component: ListProductsComponent,  // List all products
                    },
                    {
                        path: 'add',
                        component: AddProductComponent,  // Add a new product
                    }
                ]

            },
            {
                path: 'categories',
                children: [
                    {
                        path: 'add',
                        component: AddCategoriesComponent,
                    },
                    {
                        path: 'list',
                        component: ListCategoriesComponent,
                    }
                ]
            }
        ]
    }
];