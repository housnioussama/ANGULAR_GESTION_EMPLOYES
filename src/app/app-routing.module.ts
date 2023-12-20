import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjouterEtudiantComponent } from './ajouter-etudiant/ajouter-etudiant.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { UpdateEtudinantComponent } from './update-etudinant/update-etudinant.component';

const routes: Routes = [
  
  {path:"Etudiant",component : EtudiantComponent},
  {path:"AjouterEtudiant",component : AjouterEtudiantComponent},
  {path:"ModifierEtudiant/:id", component:UpdateEtudinantComponent},
  {path:'',
redirectTo:"Etudiant",
pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
