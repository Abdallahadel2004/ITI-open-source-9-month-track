import { Injectable } from '@nestjs/common';
import { Cohort } from './models/cohort.model';

@Injectable()
export class CohortService {
  private cohorts: Cohort[] = [
    {
      id: "1",
      trackName: "Open Source 9-Month Track",
      startDate: new Date().toISOString(),
      students: []
    }
  ];

  findAll(): Cohort[] {
    return this.cohorts;
  }
}
