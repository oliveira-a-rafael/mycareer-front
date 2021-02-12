import { Component, OnInit } from '@angular/core';

import { Career } from '@app/models/career.model';
import { CareerService } from '@app/services/career.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  loading = false;
  title = 'My Careers';
  careers?: Career[];

  constructor(private careerService: CareerService) { }

  ngOnInit(): void {

    this.loading = true;
    this.retrieveCareers();

  }

  retrieveCareers(): void {
    this.loading = false;
    this.careerService.getAll()
      .subscribe(
        data => {
          this.careers = data;
          console.log(data);
        },
        err => {
          console.log(err);
        }
      );
  }

}
