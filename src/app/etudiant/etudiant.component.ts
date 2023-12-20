import { Component, OnInit } from '@angular/core';
import { Etudiant } from '../model/etudiant-model';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent implements OnInit {
 
  etudiants:Etudiant[];
  constructor( private etudiantservice: ServicesService) { 





   this.etudiants= etudiantservice.ListEtudiants();
  


      
    }
  ngOnInit(): void {
   
  }
  DeleEtudiant(etud:Etudiant){
    this.etudiantservice.DeleteEtudiant(etud);
  
  }  

  }


  


