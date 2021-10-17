import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { CareerService } from '@app/services/careers/career.service';
import { Career } from '@app/models/career/career.model';

@Component({
  selector: 'app-career-add',
  templateUrl: './career-add.component.html',
  styleUrls: ['./career-add.component.css']
})
export class CareerAddComponent implements OnInit {

  screenTtile = 'Add Career';
  careerForm: FormGroup;
  currentCareer: Career;
  loading: boolean;
  privatecareerId: any;
  private careerId: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public formBuilder: FormBuilder,
    private careerService: CareerService) {
  }

  ngOnInit(): void {
    this.loading = true;
    this.careerId = this.route.snapshot.params['id'];
    this.retrieveCareer();
    this.reactiveCareerForm();
    this.loading = false;
  }

  retrieveCareer(): void {    
    this.careerService.get(this.careerId)
    .subscribe(
      data => {
        this.loading = false;
        this.currentCareer = data;
      },
      err => {
        console.log('erros on retrieve carrer detail: ' + err);
        this.loading = false;
      }
    );
  }

  reactiveCareerForm(): void {
    this.careerForm = this.formBuilder.group(
      {
        title: ['', [Validators.required]],
        team_name: ['', [Validators.required]]
      });

    if (this.currentCareer) {
      this.careerForm.setValue(
        {
          title: this.currentCareer.title,
          team_name: this.currentCareer.team_name
        }
      );
    }
  }

  submitCareerForm(): void {
    if (this.careerForm.valid) {
      if (this.currentCareer && this.currentCareer.ID) {
        this.updateCareer();
      } else {
        this.createCareer();
      }
    }
  }

  createCareer(): void {
    if (this.careerForm.valid) {
      this.careerService.create(this.careerForm.value).subscribe(() => {
        this.loading = false;
        this.router.navigateByUrl('/careers');
      });
    }
  }

  updateCareer(): void {
    if (this.careerForm.valid) {
      this.careerService.update(this.currentCareer.ID, this.careerForm.value).subscribe(() => {
        this.loading = false;
        this.router.navigateByUrl('/careers');
      });
    }
  }

  openDeleteDialog(): void {
    console.log('not implemented yeat!');
  }

}
