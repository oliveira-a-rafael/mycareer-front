import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Career } from '@app/models/career/career.model';
import { Observable } from 'rxjs';
import { environment } from '@configs/environments/environment';
import { Player } from '@app/models/player/player.model';

@Injectable({
  providedIn: 'root'
})
export class CareerService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Career[]> {
    return this.http.get<Career[]>(`${environment.apiUrl}/careers`);
  }

  get(id: number): Observable<Career> {
    return this.http.get<Career>(`${environment.apiUrl}/career/${id}`);
  }

  create(career: Career): Observable<any> {
    return this.http.post(`${environment.apiUrl}/career/new`, career);
  }

  update(id: number, career: Career): Observable<any> {
    return this.http.put(`${environment.apiUrl}/career/${id}`, career);
  }

  getPlayers(id: number): Observable<Player[]> {
    return this.http.get<Player[]>(`${environment.apiUrl}/career/${id}/players`);
  }

}
