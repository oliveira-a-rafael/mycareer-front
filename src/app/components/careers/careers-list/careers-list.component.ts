import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Career } from '@app/models/career/career.model';
import { CareerService } from '@app/services/careers/career.service';

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

  constructor(private careerService: CareerService, private router: Router) { }

  ngOnInit(): void {
    this.clearLocalStorage();
    this.loading = true;
    this.retrieveCareers();
  }

  getRecord(row): void {
    this.router.navigateByUrl('/careers/edit' + row.title);
  }

  editCareer(career: Career): void {
    this.clearLocalStorage();
    window.localStorage.setItem('objCareer', JSON.stringify(career));
    this.router.navigate(['careers/edit']);
  }

  clearLocalStorage(): void{
    window.localStorage.removeItem('objCareer');
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
