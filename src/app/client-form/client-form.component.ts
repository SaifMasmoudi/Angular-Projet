import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from 'src/Modeles/Client';
import { ClientService } from 'src/Services/client.service';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css']
})
export class ClientFormComponent implements OnInit{
  //injection de dependances
  constructor(private MS:ClientService, private router:Router, private activatedRoute:ActivatedRoute){}
  form!:FormGroup
  idcourant!:string
  onsub():void{
    if(!!this.idcourant)
    { 
      this.MS.updateClient(this.idcourant,this.form.value).subscribe(()=>{
        this.router.navigate(['/client'])
    })
  }
      else{
    
    //recuperation des données entres par user
    console.log(this.form.value);
    //appeler la fonction onSave(this.form.values)
    //du service MemberService
    const clienToSave=this.form.value;
    this.MS.ONSAVE(clienToSave).subscribe(()=>{
      this.router.navigate(['/client'])
     })

  }}
  ngOnInit():void{
    //1.recupérer id de l'url
    this.idcourant=this.activatedRoute.snapshot.params['id']
    //2. tester sur id
    if(!!this.idcourant)
    {
          this.MS.getClientById(this.idcourant).subscribe((x)=>{
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
      name:new FormControl(null,[Validators.required]) ,
      email: new FormControl(null,[Validators.required]) ,
      password: new FormControl(null,[Validators.required]) ,
      createdDate: new FormControl(null,[Validators.required]) ,
    })
  }
  initForm2(m:Client):void
  {
    this.form=new FormGroup({
      name:new FormControl(m.name,[Validators.required]) ,
      email: new FormControl(m.email,[Validators.required]) ,
      password: new FormControl(m.password,[Validators.required]) ,
      createdDate: new FormControl(m.createdDate,[Validators.required]) ,
    })
  }

}
