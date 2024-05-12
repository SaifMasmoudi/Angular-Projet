import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDatepicker } from '@angular/material/datepicker';
import { ActivatedRoute, Router } from '@angular/router';
import { Reservation } from 'src/Modeles/reservation';
import { ReservationService } from 'src/Services/reservation.service';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.css']
})
export class ReservationFormComponent {
  @ViewChild('picker') picker!: MatDatepicker<Date>; // Ajout de la référence picker

 
  constructor(private MS:ReservationService, private router:Router, private activatedRoute:ActivatedRoute){}
  form!:FormGroup
  idcourant!:string
  onsub():void{
    if(!!this.idcourant)
    { 
      this.MS.updateReservation(this.idcourant,this.form.value).subscribe(()=>{
        this.router.navigate(['/reservation'])
    })
  }
      else{
    
    //recuperation des données entres par user
    console.log(this.form.value);
    //appeler la fonction onSave(this.form.values)
    //du service MemberService
    const reservationToSave=this.form.value;
    this.MS.ONSAVE(reservationToSave).subscribe(()=>{
      this.router.navigate(['/reservation'])
     })

  }}
  ngOnInit():void{
    //1.recupérer id de l'url
    this.idcourant=this.activatedRoute.snapshot.params['id']
    //2. tester sur id
    if(!!this.idcourant)
    {
          this.MS.getReservationById(this.idcourant).subscribe((x)=>{
            this.initForm2(x);
          })
    }
    else this.initForm();
    //3. si id existe => {je suis dans edit }
                              // getMemberById(id)
                              //initForm2(m)
    //4. si non je suis dans create => initForm()


  }
  initForm():void
  {
    this.form=new FormGroup({
      dateDebut:new FormControl(null,[Validators.required]) ,
      dateFin: new FormControl(null,[Validators.required]) ,
      clientId: new FormControl(null,[Validators.required]) ,
      salleId: new FormControl(null,[Validators.required]) ,
    })
  }
  initForm2(m:Reservation):void
  {
    this.form=new FormGroup({
      dateDebut:new FormControl(m.dateDebut,[Validators.required]) ,
      dateFin: new FormControl(m.dateFin,[Validators.required]) ,
      clientId: new FormControl(m.clientId,[Validators.required]) ,
      salleId: new FormControl(m.salleId,[Validators.required]) ,
    })
  }

}
