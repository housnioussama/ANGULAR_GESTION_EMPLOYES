import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Etudiant } from '../model/etudiant-model';
import { ServicesService } from '../services.service';


@Component({
  selector: 'app-ajouter-etudiant',
  templateUrl: './ajouter-etudiant.component.html',
  styleUrls: ['./ajouter-etudiant.component.css']
})
export class AjouterEtudiantComponent implements OnInit {
 
 alert1:boolean=false;

 
  newetudiant= new  Etudiant();

  constructor(private newetudinatservices:ServicesService) { }

  ngOnInit(): void {
    
  }
  addEtudiant(){
  //console.log(this.newetudiant);
if(this.newetudinatservices.AjouterEtudiant(this.newetudiant)){ this.alert1=true}

  }

  
 
  
  

}
