import { Injectable } from '@angular/core';
import { TaskType } from '../objects/TaskType';
// import { Tasks } from '../objects/Tasks';
import {Observable,of} from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {
  private apiUrl = "http://localhost:5000/tasks"

  constructor(private http:HttpClient) {}

  getTasks ():Observable <TaskType[]>{
    return this.http.get<TaskType[]>(this.apiUrl);
  }
  deleteTask(task: TaskType): Observable<TaskType> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.delete<TaskType>(url);
  }

}
