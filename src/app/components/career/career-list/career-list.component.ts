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
    this.clearLocalStorage();
    this.loading = true;
    this.retrieveCareers();
  }

  getRecord(row): void {
    this.router.navigateByUrl('/career/edit' + row.title);
  }

  editCareer(career: Career): void {
    this.clearLocalStorage();
    window.localStorage.setItem('objCareer', JSON.stringify(career));
    this.router.navigate(['career/edit']);
  }

  detailCareer(career: Career): void{
    this.clearLocalStorage();
    window.localStorage.setItem('objCareer', JSON.stringify(career));
    this.router.navigate(['career/detail']);
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
