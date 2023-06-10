import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AlertWindowComponent } from './alert/alert.component';
import { NoPageComponent } from './no-page/no-page.component';
import { AppRoutingModule } from './app-routing.module';
import { PhysicsComponent } from './physics/physics.component';
import { BiologyComponent } from './biology/biology.component';
import { MetaComponent } from './meta/meta.component';
import { ChemistryComponent } from './chemistry/chemistry.component';
import { ComputingCodeComponent } from './computing-code/computing-code.component';
import { MathematicsComponent } from './mathematics/mathematics.component';
import { DataScienceComponent } from './data-science/data-science.component';
import { ClimateComponent } from './climate/climate.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AlertWindowComponent,
    NoPageComponent,
    PhysicsComponent,
    BiologyComponent,
    MetaComponent,
    ChemistryComponent,
    ComputingCodeComponent,
    MathematicsComponent,
    DataScienceComponent,
    ClimateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
