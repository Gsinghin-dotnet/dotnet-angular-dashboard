import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface EmployeeTask {
  id?: number;
  title: string;
  description: string;
  status: string;
  createdDate?: Date;
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'https://localhost:7200/api/tasks';

  constructor(private http: HttpClient) { }

  getTasks(): Observable<EmployeeTask[]> {
    return this.http.get<EmployeeTask[]>(this.apiUrl);
  }
}
