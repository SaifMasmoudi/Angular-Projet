import { Component, OnInit } from '@angular/core';
import { SalleService } from 'src/Services/salle.service';
import { ClientService } from 'src/Services/client.service';
import { ReservationService } from 'src/Services/reservation.service';
import { ChartDataset } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  nb_Salles: number = 0;
  nb_clients: number = 0;
  nb_reservation: number = 0;
  nb_salle1: number = 0;
  nb_salle2: number = 0;
  nb_salle3: number = 0;
  nb_salle4: number = 0;
  nb_client1: number = 0;
  nb_client2: number = 0;

  chartDatapie: ChartDataset[] = [
    {
      label: 'Salles',
      data: []
    }
  ];
  chartLabelspie: string[] = [];

  chartDatabar: ChartDataset[] = [
    {
      label: 'Salles',
      data: [],
      backgroundColor: [
        'rgba(128, 0, 128, 0.5)', // violet foncé
        'rgba(160, 32, 240, 0.5)', // violet moyen
        'rgba(255, 105, 180, 0.5)', // rose pâle
        'rgba(255, 20, 147, 0.5)' // rose vif
      ]
    }
  ];
  chartLabelsbar: string[] = [];

  chartData: ChartDataset[] = [
    {
      label: 'Clients',
      data: []
    }
  ];
  chartLabels: string[] = ['khadija', 'saif'];

  constructor(
    private MS: SalleService,
    private ES: ClientService,
    private RS: ReservationService
  ) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.MS.getAll().subscribe((salles) => {
      this.nb_Salles = salles.length;

      this.chartLabelspie = [
        "salle 10 personnes",
        "salle 100 personnes",
        "salle 25 personnes",
        "salle 500 personnes"
      ];

      salles.forEach((salle) => {
        if (salle.description === "salle de sous commission pour 10 personnes") this.nb_salle1++;
        if (salle.description === "salle polyvalente de conférences pour 100 personnes") this.nb_salle2++;
        if (salle.description === "Une salle de commission pour 25 personnes") this.nb_salle3++;
        if (salle.description === "Une salle de commission pour 500 personnes") this.nb_salle4++;
      });

      this.chartDatapie[0].data = [this.nb_salle1, this.nb_salle2, this.nb_salle3, this.nb_salle4];
      this.chartDatabar[0].data = [this.nb_salle1, this.nb_salle2, this.nb_salle3, this.nb_salle4];
      this.chartLabelsbar = this.chartLabelspie;
    });

    this.ES.GET().subscribe((clients) => {
      this.nb_clients = clients.length;

      clients.forEach((client) => {
        if (client.name === "khadija") this.nb_client1++;
        if (client.name === "saif") this.nb_client2++;
      });

      this.chartData[0].data = [this.nb_client1, this.nb_client2];
    });

    this.RS.getAll().subscribe((reservations) => {
      this.nb_reservation = reservations.length;
    });
  }
}
