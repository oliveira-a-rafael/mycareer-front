import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Career } from '@app/models/career/career.model';
import { CareerService } from '@app/services/careers/career.service';

@Component({
  selector: 'app-career-list',
  templateUrl: './career-list.component.html',
  styleUrls: ['./career-list.component.css']
})
export class CareerListComponent implements OnInit {

  displayedColumns: string[] = ['title', 'team_name', 'total_players', 'edit'];

  loading = false;
  screenTtile = 'My Careers';
  careers?: Career[];

  constructor(private careerService: CareerService, private router: Router) { }

  ngOnInit(): void {
    this.loading = true;
    this.retrieveCareers();
  }

  editCareer(careerId: any): void {
    this.router.navigate(['career/edit', careerId]);
  }

  detailCareer(careerId: any): void{
    // this.router.navigate(['career/show', careerId]);
    this.router.navigate(['career/players', careerId]);
  }

  retrieveCareers(): void {
    this.careerService.getAll()
      .subscribe(
        data => {
          this.loading = false;
          this.careers = data;
        },
        err => {
          this.loading = false;
        }
      );
  }

}
