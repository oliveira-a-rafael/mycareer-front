import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Player } from '@app/models/player/player.model';
import { CareerService } from '@app/services/careers/career.service';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css'],
})
export class PlayerListComponent implements OnInit {
  loading = false;
  players?: Player[];
  careerId: any;
  displayedColumns: string[] = [
    'name',
    'position',
    'age_current',
    'age_initial',
    'points_current',
    'points_initial',
    'potential_final',
    'potential_initial',
    'strong_foot',
  ];
  dataSource = new MatTableDataSource<Player>();
  @ViewChild(MatSort, { static: false }) set sort(val: MatSort) {
    if (val) {
      this.dataSource.sort = val;
    }
  }

  constructor(
    private careerService: CareerService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loading = true;
    this.careerId = this.route.snapshot.params['id'];
    this.retrievePlayers();
  }

  buildData(data: any) {
    if (data) {
      this.players = data;
      this.dataSource.data = this.players;
      this.dataSource.sort = this.sort;
    }
  }

  retrievePlayers(): void {
    this.careerService.getPlayers(this.careerId).subscribe(
      (data) => {
        this.buildData(data);
        this.loading = false;
      },
      (err) => {
        console.log(err);
        this.loading = false;
      }
    );
  }
}
