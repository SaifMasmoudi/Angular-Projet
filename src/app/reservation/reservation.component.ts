import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Reservation } from 'src/Modeles/reservation';
import { ClientService } from 'src/Services/client.service';
import { ReservationService } from 'src/Services/reservation.service';
import { SalleService } from 'src/Services/salle.service';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { Observable } from 'rxjs';
import { Salle } from 'src/Modeles/Salle';
import { HttpClient } from '@angular/common/http';
import { Client } from 'src/Modeles/Client';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit{
  
  displayedColumns: string[] = ['1', '2', '3', '4','5','6'];
  clients!: Client[];
salles!: Salle[];
constructor(   private MS: ReservationService,
  private clientService: ClientService,
  private salleService: SalleService,
  private dialog: MatDialog){}
    ngOnInit() {
    this.getReservations();
    this.getClients();
    this.getSalles();
  }
dataSource=new MatTableDataSource(this.MS.tab)

delete(id:string):void
{
  //1.lancer la boite 
  let dialogRef = this.dialog.open(ConfirmDialogComponent, {
    height: '200px',
    width: '300px',
  });
  //2. attendre le resultat de l'utilisateur
  dialogRef.afterClosed().subscribe(result => {
    if(result)
    this.MS.ONDELETE(id).subscribe(()=>{this.dataSource.data=this.MS.tab})
  });

 

 
}
applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();
} 

getClients() {
  this.clientService.GET().subscribe(clients => {
    this.clients = clients;
  });
}

getSalles() {
  this.salleService.getAll().subscribe(salles => {
    this.salles = salles;
  });
} 
getReservations() {
  this.MS.getAll().subscribe(reservations => {
    this.dataSource = new MatTableDataSource(reservations);
  });
}

}
