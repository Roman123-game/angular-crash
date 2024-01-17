import { Injectable } from '@angular/core';
import { TaskType } from '../objects/TaskType';
// import { Tasks } from '../objects/Tasks';
import {Observable,of} from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';


const httpOptions ={
  headers:new HttpHeaders({
    'Content-Type': 'aplication/json'
  })
}

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
  toggleTaskService(task: TaskType): Observable<TaskType> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.put<TaskType>(url,task,httpOptions);
  }
  addTask(task:TaskType):Observable<TaskType>{
    return this.http.post<TaskType>(this.apiUrl,task,httpOptions);
  }

}
