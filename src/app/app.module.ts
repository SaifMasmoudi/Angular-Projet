import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import { LayoutComponent } from './layout/layout.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';

import { DashboardComponent } from './dashboard/dashboard.component';
import { FirebaseModule } from './Firebase.module (2)';
import { LoginComponent } from './login/login.component';
import {MatCardModule} from '@angular/material/card';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ClientComponent } from './client/client.component';
import { HomeComponent } from './home/home.component';
import { ReservationComponent } from './reservation/reservation.component';
import { SalleComponent } from './salle/salle.component';
import { ContactComponent } from './contact/contact.component';
import { ClientFormComponent } from './client-form/client-form.component';
import { SalleFormComponent } from './salle-form/salle-form.component';
import { ReservationFormComponent } from './reservation-form/reservation-form.component';
import{NgChartsModule} from'ng2-charts';
import { HomeFromComponent } from './home-from/home-from.component';
import { BoiteReceptionComponent } from './boite-reception/boite-reception.component';



@NgModule({
  declarations: [
    AppComponent,
    ConfirmDialogComponent,
    LayoutComponent,
 
    LoginComponent,

    DashboardComponent,
     ClientComponent,
     HomeComponent,
     ReservationComponent,
     SalleComponent,
     ContactComponent,
     ClientFormComponent,
     SalleFormComponent,
     ReservationFormComponent,
     HomeFromComponent,
     BoiteReceptionComponent,
  
    
  ],
  imports: [ MatTableModule,
    MatButtonModule,
    FlexLayoutModule,
    MatIconModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule,
    MatSidenavModule,
     MatToolbarModule,
     MatListModule,
     MatMenuModule,
     FirebaseModule,
     
     MatCardModule,
     MatPaginatorModule,
     MatDatepickerModule,
     MatNativeDateModule,
     HttpClientModule,
     NgChartsModule,
     MatDatepickerModule,
 
    
     
  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
