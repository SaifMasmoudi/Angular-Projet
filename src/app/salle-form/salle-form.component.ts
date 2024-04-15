import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Salle } from 'src/Modeles/Salle';
import { SalleService } from 'src/Services/salle.service';

@Component({
  selector: 'app-salle-form',
  templateUrl: './salle-form.component.html',
  styleUrls: ['./salle-form.component.css']
})
export class SalleFormComponent {
  //injection de dependances
  constructor(private MS:SalleService, private router:Router, private activatedRoute:ActivatedRoute){}
  form!:FormGroup
  idcourant!:string
  onsub():void{
    if(!!this.idcourant)
    { 
      this.MS.updateSalle(this.idcourant,this.form.value).subscribe(()=>{
        this.router.navigate(['/salle'])
    })
  }
      else{
    
    //recuperation des données entres par user
    console.log(this.form.value);
    //appeler la fonction onSave(this.form.values)
    //du service MemberService
    const salleToSave=this.form.value;
    this.MS.ONSAVE(salleToSave).subscribe(()=>{
      this.router.navigate(['/salle'])
     })

  }}
  ngOnInit():void{
    //1.recupérer id de l'url
    this.idcourant=this.activatedRoute.snapshot.params['id']
    //2. tester sur id
    if(!!this.idcourant)
    {
          this.MS.getSalleById(this.idcourant).subscribe((x)=>{
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
      name: new FormControl(null,[Validators.required]) ,
      capacite: new FormControl(null,[Validators.required]) ,
      prix: new FormControl(null,[Validators.required]) ,
      description: new FormControl(null,[Validators.required]) ,
      image: new FormControl(null,[Validators.required]) ,
    })
  }
  initForm2(m:Salle):void
  {
    this.form=new FormGroup({
      name:new FormControl(m.name,[Validators.required]) ,
      capacite: new FormControl(m.capacite,[Validators.required]) ,
      prix: new FormControl(m.prix,[Validators.required]) ,
      description: new FormControl(m.description,[Validators.required]) ,
      image: new FormControl(m.image,[Validators.required]) ,


    })
  }

}
