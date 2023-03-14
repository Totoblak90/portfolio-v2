import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RepoListComponent } from './repo-list/repo-list.component';
import { RepoItemComponent } from './repo-item/repo-item.component';
import { CommitListComponent } from './commit-list/commit-list.component';
import { CommitComponent } from './commit/commit.component';
import { FilterComponent } from './filter/filter.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UiModule } from '../ui/ui.module';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { PipesModule } from '../pipes/pipes.module';
import { DirectivesModule } from '../directives/directives.module';
import { HeaderComponent } from './header/header.component';
import { ProyectListComponent } from './proyect-list/proyect-list.component';




@NgModule({
  declarations: [
    RepoListComponent,
    RepoItemComponent,
    CommitListComponent,
    CommitComponent,
    FilterComponent,
    HeaderComponent,
    ProyectListComponent
  ],
  exports: [
    RepoListComponent,
    RepoItemComponent,
    CommitListComponent,
    CommitComponent,
    FilterComponent,
    HeaderComponent,
    ProyectListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UiModule,
    AngularMaterialModule,
    PipesModule,
    DirectivesModule
  ]
})
export class ComponentsModule { }
