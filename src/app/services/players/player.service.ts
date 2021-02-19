import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Player } from '@app/models/player/player';
import { environment } from '@configs/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Player[]> {
    return this.http.get<Player[]>(`${environment.apiUrl}/players`);
  }

  create(player: Player): Observable<any> {
    return this.http.post(`${environment.apiUrl}/player`, player);
  }

  updatePoints(data: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/player/points`, data);
  }

}
