
import { Injectable } from '@angular/core';

import { Etudiant } from './model/etudiant-model';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  etudiants:Etudiant[];
  
  constructor() {
    this.etudiants=[
      {
        "IdEtudiant": 1,
        "NomEtudiant": "Sweet",
        "PrenomEtudiant": "Edan",
        "CinEtudiant": "943493",
        "AgeEtudiant": 28
      },
      {
        "IdEtudiant": 2,
        "NomEtudiant": "Bauer",
        "PrenomEtudiant": "Theodore",
        "CinEtudiant": "850768",
        "AgeEtudiant": 24
      },
      {
        "IdEtudiant": 3,
        "NomEtudiant": "Ball",
        "PrenomEtudiant": "Lance",
        "CinEtudiant": "66703",
        "AgeEtudiant": 30
      },
      {
        "IdEtudiant": 4,
        "NomEtudiant": "Gill",
        "PrenomEtudiant": "Tiger",
        "CinEtudiant": "6422",
        "AgeEtudiant": 21
      },
      {
        "IdEtudiant": 5,
        "NomEtudiant": "Harrington",
        "PrenomEtudiant": "Zachery",
        "CinEtudiant": "3747",
        "AgeEtudiant": 24
      },
      {
        "IdEtudiant": 6,
        "NomEtudiant": "Morris",
        "PrenomEtudiant": "Hop",
        "CinEtudiant": "47051",
        "AgeEtudiant": 26
      },
      {
        "IdEtudiant": 7,
        "NomEtudiant": "Knapp",
        "PrenomEtudiant": "Cadman",
        "CinEtudiant": "929458",
        "AgeEtudiant": 23
      },
      {
        "IdEtudiant": 8,
        "NomEtudiant": "Vasquez",
        "PrenomEtudiant": "Ian",
        "CinEtudiant": "54232",
        "AgeEtudiant": 22
      },
      {
        "IdEtudiant": 9,
        "NomEtudiant": "Nielsen",
        "PrenomEtudiant": "Uriah",
        "CinEtudiant": "JE8 8FD",
        "AgeEtudiant": 19
      },
      {
        "IdEtudiant": 10,
        "NomEtudiant": "Carpenter",
        "PrenomEtudiant": "Steel",
        "CinEtudiant": "416666",
        "AgeEtudiant": 26
      },
      {
        "IdEtudiant": 11,
        "NomEtudiant": "Armstrong",
        "PrenomEtudiant": "Xenos",
        "CinEtudiant": "20617",
        "AgeEtudiant": 30
      },
      {
        "IdEtudiant": 12,
        "NomEtudiant": "Nicholson",
        "PrenomEtudiant": "Lucas",
        "CinEtudiant": "CJ3 9CJ",
        "AgeEtudiant": 30
      },
      {
        "IdEtudiant": 13,
        "NomEtudiant": "Tyson",
        "PrenomEtudiant": "Alden",
        "CinEtudiant": "2414",
        "AgeEtudiant": 21
      },
      {
        "IdEtudiant": 14,
        "NomEtudiant": "Frye",
        "PrenomEtudiant": "Phillip",
        "CinEtudiant": "2457-1707",
        "AgeEtudiant": 25
      },
      {
        "IdEtudiant": 15,
        "NomEtudiant": "Mullen",
        "PrenomEtudiant": "Troy",
        "CinEtudiant": "38752",
        "AgeEtudiant": 20
      },
      {
        "IdEtudiant": 16,
        "NomEtudiant": "Sharp",
        "PrenomEtudiant": "Norman",
        "CinEtudiant": "486926",
        "AgeEtudiant": 21
      },
      {
        "IdEtudiant": 17,
        "NomEtudiant": "Thomas",
        "PrenomEtudiant": "Gavin",
        "CinEtudiant": "71770",
        "AgeEtudiant": 20
      },
      {
        "IdEtudiant": 18,
        "NomEtudiant": "Parrish",
        "PrenomEtudiant": "Vincent",
        "CinEtudiant": "68772",
        "AgeEtudiant": 23
      },
      {
        "IdEtudiant": 19,
        "NomEtudiant": "Cortez",
        "PrenomEtudiant": "Kirk",
        "CinEtudiant": "88-860",
        "AgeEtudiant": 20
      },
      {
        "IdEtudiant": 20,
        "NomEtudiant": "Wilson",
        "PrenomEtudiant": "Alec",
        "CinEtudiant": "T3C 6S8",
        "AgeEtudiant": 23
      }
    ]
   }
   ListEtudiants(): Etudiant[]{
     return this.etudiants;
   }
   
  AjouterEtudiant(etud: Etudiant):boolean{
              this.etudiants.push(etud);

              return true;
            }

     ////////////////////////

     DeleteEtudiant(etud1:Etudiant){
       if(this.etudiants.includes(etud1)){
         var index =this.etudiants.indexOf(etud1,0);
         if(confirm("Etes-vous sur ?"))
         this.etudiants.splice(index,1);
         

       }
       else{
         alert("Etudiant n'est pas existe");
       }
     }
     
     consulerEtudiant(id:number):Etudiant{
      
       const newLocal = this.etudiants.find(p => p.IdEtudiant == id) as Etudiant;
       return  newLocal;
     }

     uppdateEtudiant(E:Etudiant){
       this.DeleteEtudiant(E);
       this.AjouterEtudiant(E);

     }
    
}
