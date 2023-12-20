import { Component, OnInit } from '@angular/core';
import { Etudiant } from '../model/etudiant-model';
import { ActivatedRoute } from '@angular/router';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-update-etudinant',
  templateUrl: './update-etudinant.component.html',
  styleUrls: ['./update-etudinant.component.css']
})
export class UpdateEtudinantComponent implements OnInit {
 currentEtudiant= new Etudiant();
 alert:boolean=false;
  constructor( private service:ServicesService ,
               private activted:ActivatedRoute) 
               {


                }

  ngOnInit(): void 
  {
    this.currentEtudiant=this.service.consulerEtudiant(this.activted.snapshot.params['id'])
    console.log(this.currentEtudiant);
  }
  updateEtudiant(){
    this.service.uppdateEtudiant(this.currentEtudiant);
    this.alert=true;
  }

}
