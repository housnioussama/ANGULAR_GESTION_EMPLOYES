import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { AjouterEtudiantComponent } from './ajouter-etudiant/ajouter-etudiant.component';
import { FormsModule } from '@angular/forms';
import { UpdateEtudinantComponent } from './update-etudinant/update-etudinant.component';

@NgModule({
  declarations: [
    AppComponent,
    EtudiantComponent,
    AjouterEtudiantComponent,
    UpdateEtudinantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
