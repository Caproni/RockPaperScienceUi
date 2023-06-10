import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { MetaComponent } from './meta/meta.component';
import { BiologyComponent } from './biology/biology.component';
import { ChemistryComponent } from './chemistry/chemistry.component';
import { ClimateComponent } from './climate/climate.component';
import { ComputingCodeComponent } from './computing-code/computing-code.component';
import { DataScienceComponent } from './data-science/data-science.component';
import { MathematicsComponent } from './mathematics/mathematics.component';
import { PhysicsComponent } from './physics/physics.component';
import { PoetryProseComponent } from './poetry-prose/poetry-prose.component';
import { NoPageComponent } from './no-page/no-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'meta', component: MetaComponent },
  { path: 'biology', component: BiologyComponent },
  { path: 'chemistry', component: ChemistryComponent },
  { path: 'climate', component: ClimateComponent },
  { path: 'computing-and-code', component: ComputingCodeComponent },
  { path: 'data-science', component: DataScienceComponent },
  { path: 'mathematics', component: MathematicsComponent },
  { path: 'physics', component: PhysicsComponent },
  { path: 'poetry-prose', component: PoetryProseComponent },
  { path: '**', component: NoPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
