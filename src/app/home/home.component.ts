import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { SalleService } from 'src/Services/salle.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
constructor(private MS:SalleService,private dialog:MatDialog){}
dataSource=new MatTableDataSource(this.MS.tab)

}
