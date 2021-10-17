import { MatSnackBar } from '@angular/material/snack-bar';
import { DialogUpdatePointsComponent } from '@app/components/career/dialog-update-points/dialog-update-points.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { Component, OnInit } from '@angular/core';
import { Career } from '@app/models/career/career.model';
import { Player } from '@app/models/player/player.model';
import { CareerService } from '@app/services/careers/career.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-career-detail',
  templateUrl: './career-detail.component.html',
  styleUrls: ['./career-detail.component.css']
})
export class CareerDetailComponent implements OnInit {

  private careerId: any;

  career: Career;
  players: Player[];
  loading: boolean;

  constructor(
    private route: ActivatedRoute,
    private careerService: CareerService,
    private router: Router,
    private dialog: MatDialog,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.loading = true;
    this.careerId = this.route.snapshot.params['id'];
    this.retrieveCareer();
  }

  retrievePlayers(): void {
    if (this.career && this.career.ID) {
      this.careerService.getPlayers(this.career.ID)
        .subscribe(
          data => {
            this.loading = false;
            this.players = data;
          },
          err => {
            console.log('erros on retrieve players from career: ' + err);
            this.loading = false;
          }
        );
    }
  }

  retrieveCareer(): void {    
    this.careerService.get(this.careerId)
    .subscribe(
      data => {
        this.loading = false;
        this.career = data;
        this.retrievePlayers();
      },
      err => {
        console.log('erros on retrieve carrer detail: ' + err);
        this.loading = false;
      }
    );
  }

  openDialogUpdateCurrentPoints(player: Player): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.data = player;
    this.dialog.open(DialogUpdatePointsComponent, dialogConfig).afterClosed().subscribe(() => this.afterUpdatePlayer(player));
  }

  afterUpdatePlayer(player: Player): void {
    this.retrievePlayers();
    this.openSnackBar(player);
  }

  openSnackBar(player: Player): void {
    this.snackBar.open(`Player ${player.name} updated!`, 'ok', {
      duration: 3000,
    });
  }

  addPlayer(careerId): void{
    this.router.navigate(['career/add-player/', careerId]);
  }

}

