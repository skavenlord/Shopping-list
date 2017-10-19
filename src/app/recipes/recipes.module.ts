import { SharedModule } from '../shared/shared.module';
import { RecipesRoutingModule } from './recipes-routing.module';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { RecipeItemComponent } from './recipes-list/recipe-item/recipe-item.component';
import { RecipesDetailComponent } from './recipes-detail/recipes-detail.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipesComponent } from './recipes.component';

@NgModule({
    declarations: [
        RecipesComponent,
        RecipeStartComponent,
        RecipesListComponent,
        RecipeEditComponent,
        RecipesDetailComponent,
        RecipeItemComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RecipesRoutingModule,
        SharedModule
    ]
})

export class RecipesModule {

}
