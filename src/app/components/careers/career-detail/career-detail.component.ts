import { MatSnackBar } from '@angular/material/snack-bar';
import { DialogUpdatePointsComponent } from '@app/components/careers/dialog-update-points/dialog-update-points.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { Component, OnInit } from '@angular/core';
import { Career } from '@app/models/career/career.model';
import { Player } from '@app/models/player/player.model';
import { CareerService } from '@app/services/careers/career.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-career-detail',
  templateUrl: './career-detail.component.html',
  styleUrls: ['./career-detail.component.css']
})
export class CareerDetailComponent implements OnInit {

  public car: Career;

  career: Career;
  players: Player[];
  loading: boolean;

  constructor(
    private careerService: CareerService,
    private router: Router,
    private dialog: MatDialog,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.loading = true;
    this.retrieveCareerStorage();
    this.retrievePlayers();
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

  clearLocalStorage(): void {
    window.localStorage.removeItem('objCareer');
  }

  retrieveCareerStorage(): void {
    const objCareer = localStorage.getItem('objCareer');
    if (!objCareer) {
      console.log('error on load object career!');
      return;
    }
    this.career = JSON.parse(objCareer);
  }

  openDialog(player: Player): void {
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

  addPlayer(careerID): void{
    this.router.navigateByUrl(`career/${careerID}/add-player`);
  }

}

