import { Component, OnInit } from '@angular/core';
import { Career } from '@app/models/career/career.model';
import { CareerService } from '@app/services/career.service';

@Component({
  selector: 'app-careers-list',
  templateUrl: './careers-list.component.html',
  styleUrls: ['./careers-list.component.css']
})
export class CareersListComponent implements OnInit {

  displayedColumns: string[] = ['title', 'team_name', 'total_players'];

  loading = false;
  screenTtile = 'My Careers';
  careers?: Career[];

  constructor(private careerService: CareerService) { }

  ngOnInit(): void {
    this.loading = true;
    this.retrieveCareers();
  }

  getRecord(row): void {
    console.log(row);
  }

  retrieveCareers(): void {
    this.careerService.getAll()
    .subscribe(
      data => {
        this.loading = false;
        this.careers = data;
        console.log(this.careers);
      },
      err => {
        this.loading = false;
        console.log(err);
      }
      );
  }

}
