import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Player } from '@app/models/player/player.model';
import { PlayerService } from '@app/services/players/player.service';

@Component({
  selector: 'app-dialog-update-points',
  templateUrl: './dialog-update-points.component.html',
  styleUrls: ['./dialog-update-points.component.css']
})

export class DialogUpdatePointsComponent implements OnInit {

  updateForm: FormGroup;
  player: Player;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private playerService: PlayerService,
              private dialogRef: MatDialogRef<DialogUpdatePointsComponent>,
              @Inject(MAT_DIALOG_DATA) data) {
    this.player = data;
  }

  ngOnInit(): void {
    this.reactiveUpdateForm();
  }

  reactiveUpdateForm(): void {
    this.updateForm = this.formBuilder.group(
      {
        newPoints: [this.player.points_current,
        [Validators.required, Validators.min(0), Validators.max(99), Validators.maxLength(2)]]
      });
  }

  close(): void {
    this.dialogRef.close();
  }

  submitForm(): void {
    if (this.updateForm.valid) {

      const updatePoints = {
        player_id: this.player.ID,
        points: Number(this.updateForm.value.newPoints)
      };

      this.playerService.updatePoints(updatePoints).subscribe(() => {
        console.log('aplicar loading e fechar aqui');
      });

      this.dialogRef.close(this.updateForm.value);
    }
  }

}
