import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Email } from 'src/Modeles/Email';
import { BoiteReceptionService } from 'src/Services/boite-reception.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent  {
  email: Email | null = null;
  emailForm!: FormGroup;
  idcourant!: string;

  constructor(
    private emailService: BoiteReceptionService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.idcourant = this.activatedRoute.snapshot.params['id'];
      this.initForm();
  }


  onSubmit(): void {
      const emailToSave = this.emailForm.value;
      this.emailService.sendEmail(emailToSave).subscribe(() => {
        this.resetForm();
          alert('Votre message a été envoyé avec succès !');
        });
  }



  resetForm() {
    this.emailForm.reset();
  }


  
  initForm(): void {
    this.emailForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      objet: new FormControl(null, [Validators.required]),
      message: new FormControl(null, [Validators.required])
    });
  }


  
}
