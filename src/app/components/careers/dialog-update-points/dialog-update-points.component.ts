import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PlayerService } from '@app/services/players/player.service';

@Component({
  selector: 'app-dialog-update-points',
  templateUrl: './dialog-update-points.component.html',
  styleUrls: ['./dialog-update-points.component.css']
})

export class DialogUpdatePointsComponent implements OnInit {

  form: FormGroup;
  idPlayer: number;
  currentPoints: number;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private playerService: PlayerService,
              private dialogRef: MatDialogRef<DialogUpdatePointsComponent>,
              @Inject(MAT_DIALOG_DATA) data)
               {
    this.idPlayer = data.id;
    this.currentPoints = data.points;
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      newPoints: this.currentPoints,
    });
  }

  close(): void {
    this.dialogRef.close();
  }

  submitForm(): void {
    if (this.form.valid) {

      const updatePoints = {
        player_id: this.idPlayer,
        points: Number(this.form.value.newPoints)
      };

      console.log(updatePoints);

      this.playerService.updatePoints(updatePoints).subscribe (() => {
        console.log('maybe put a toast with updated!');
      });

      this.dialogRef.close(this.form.value);
    }
  }

}
