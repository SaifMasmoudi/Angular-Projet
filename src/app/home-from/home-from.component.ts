import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDatepicker } from '@angular/material/datepicker';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from 'src/Modeles/Client';
import { Salle } from 'src/Modeles/Salle';
import { Reservation } from 'src/Modeles/reservation';
import { ClientService } from 'src/Services/client.service';
import { ReservationService } from 'src/Services/reservation.service';
import { SalleService } from 'src/Services/salle.service';

@Component({
  selector: 'app-home-from',
  templateUrl: './home-from.component.html',
  styleUrls: ['./home-from.component.css']
})
export class HomeFromComponent {
  reservation: Reservation | null = null;
  form!: FormGroup;
  idcourant!: string;

  clients: Client[] = [];
  salles: Salle[] = [];

  constructor(
    private reservationService: ReservationService,
    private clientService: ClientService,
    private salleService: SalleService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.idcourant = this.activatedRoute.snapshot.params['id'];
    this.loadClients();
    this.loadSalles();
    this.initForm();
    
  }

  onsub(): void {
    
      const reservationToSave = this.form.value;
      this.reservationService.ONSAVE(reservationToSave).subscribe(() => {
        this.router.navigate(['/']);
      });
    
  }

  initForm(): void {
    this.form = new FormGroup({
      dateDebut: new FormControl(null, [Validators.required]),
      dateFin: new FormControl(null, [Validators.required]),
      clientId: new FormControl(null, [Validators.required]),
      salleId: new FormControl(null, [Validators.required])
    });
  }


  loadClients() {
    this.clientService.GET().subscribe((clients) => {
      this.clients = clients;
    });
  }

  loadSalles() {
    this.salleService.getAll().subscribe((salles) => {
      this.salles = salles;
    });
  }
}
