import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { CareerService } from '@app/services/careers/career.service';
import { Career } from '@app/models/career/career.model';

@Component({
  selector: 'app-careers-add',
  templateUrl: './careers-add.component.html',
  styleUrls: ['./careers-add.component.css']
})
export class CareersAddComponent implements OnInit {

  screenTtile = 'Add Career';
  careerForm: FormGroup;
  currentCareer: Career;
  loading: boolean;

  constructor(
    public formBuilder: FormBuilder,
    private careerService: CareerService,
    private router: Router) {
  }

  ngOnInit(): void {
    this.loading = true;
    this.retrieveCareerStorage();
    this.reactiveCareerForm();
    this.loading = false;
  }

  clearLocalStorage(): void {
    window.localStorage.removeItem('objCareer');
  }

  retrieveCareerStorage(): void {
    const objCareer = localStorage.getItem('objCareer');
    if (!objCareer) {
      console.log('error on load object career!');
      return;
    }
    this.currentCareer = JSON.parse(objCareer);
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
