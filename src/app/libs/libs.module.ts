import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { NgMaterialModule } from './ng-materials/ng-material/ng-material.module';


const components: any[] = [
  ButtonComponent
];

const modules: any[] = [
  NgMaterialModule
];

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    CommonModule,
    ...modules
  ],
  exports: [
    ...components,
    ...modules
  ]
})
export class LibsModule { }
