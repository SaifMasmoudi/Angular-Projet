import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { SalleService } from 'src/Services/salle.service';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-salle',
  templateUrl: './salle.component.html',
  styleUrls: ['./salle.component.css']
})
export class SalleComponent {
  displayedColumns: string[] = ['1', '2', '3', '4','5','6','7'];
constructor(private MS:SalleService,private dialog:MatDialog){}
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

}