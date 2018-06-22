import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MobilePlan } from './mobile-plan';
import { Observable } from 'rxjs';

@Injectable(
  )
export class PlanService {

  constructor(private service: HttpClient) { }

  getAllMobilePlans(): Observable<MobilePlan[]> {
    return this.service.get<MobilePlan[]>('http://localhost:3000/mobilePlans');
  }
  getMobilePlanById(id: number): Observable<MobilePlan> {

    return this.service.get<MobilePlan>('http://localhost:3000/mobilePlans/' + id);
  }
}
