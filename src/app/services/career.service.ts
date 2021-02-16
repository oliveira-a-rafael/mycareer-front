import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Career } from '@app/models/career/career.model';
import { Observable } from 'rxjs';
import { environment } from '@configs/environments/environment';

const baseUrl = 'http://localhost:8080/careersTest';

@Injectable({
  providedIn: 'root'
})
export class CareerService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Career[]> {
    return this.http.get<Career[]>(`${environment.apiUrl}/careers`);
  }

}