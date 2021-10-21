import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Career } from '@app/models/career/career.model';
import { Player } from '@app/models/player/player.model';
import { Position } from '@app/models/player/position.model';
import { CareerService } from '@app/services/careers/career.service';
import { PlayerService } from '@app/services/players/player.service';


@Component({
  selector: 'app-player-add',
  templateUrl: './player-add.component.html',
  styleUrls: ['./player-add.component.css']
})
export class PlayerAddComponent implements OnInit {

  careerId: number;
  career?: Career;
  loading: boolean;
  player: Player;
  playerForm: FormGroup;
  positions: Position[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private careerService: CareerService,
    private playerService: PlayerService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.loading = true;
    this.careerId = this.route.snapshot.params['id'];
    this.retrieveCareer();
  }

  retrieveCareer(): void {
    this.careerService.get(this.careerId).subscribe(data => {
      this.career = data;
      this.reactivePlayerForm();
      this.loading = false;
    }, err => {
      console.log('error on retreive: ' + err);
    });
  }

  reactivePlayerForm(): void {

    this.getPositions();

    this.playerForm = this.formBuilder.group(
      {
        name:
        ['',
          [
            Validators.required
          ]
        ],
        position:
        ['',
          [
            Validators.required
          ]
        ],
        age_initial:
        ['',
          [
            Validators.required,
            Validators.min(14),
            Validators.max(99)
          ]
        ],
        strong_foot:
        ['L',
          [
            Validators.required
          ]
        ],
        points_initial:
        ['',
          [
            Validators.required,
            Validators.min(0),
            Validators.max(99)
          ]
        ],
        potential_initial:
        ['',
          [
            Validators.required,
            Validators.min(0),
            Validators.max(99)
          ]
        ],
        potential_final:
        ['',
          [
            Validators.required,
            Validators.min(0),
            Validators.max(99)
          ]
        ]
      });

    // for editing player
    // if (this.currentCareer) {
    //   this.careerForm.setValue(
    //     {
    //       title: this.currentCareer.title,
    //       team_name: this.currentCareer.team_name
    //     }
    //   );
    // }
  }

  submitPlayerForm(): void {
    this.loading = true;
    if (this.playerForm.valid) {
      // if (this.currentCareer && this.currentCareer.ID) {
      // this.updateCareer();
      // } else {
      this.createPlayer();
      // }
    }
  }

  createPlayer(): void {
    if (this.playerForm.valid) {
      this.player = this.playerForm.value;
      this.player.career_id = Number(this.careerId);
      this.playerService.create(this.player).subscribe(() => {
        this.router.navigateByUrl(`/careers`);
      }, err => {
        console.log('error on create player', err);
      });
    }
    this.loading = false;
  }

  getPositions(): void {
    this.playerService.getPositions().subscribe(data => {
      this.positions = data;
    }, err => {
      console.log('error on retreive: ' + err);
    });
  }

}
