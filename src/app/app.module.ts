import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { MatTabsModule } from '@angular/material/tabs';
import { from } from 'rxjs';
import { MedcinComponent } from './medcin/medcin.component';
import { AjoutComponent } from './ajout/ajout.component';
import { AsmaComponent } from './asma/asma.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MedcinComponent,
    AjoutComponent,
    AsmaComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
