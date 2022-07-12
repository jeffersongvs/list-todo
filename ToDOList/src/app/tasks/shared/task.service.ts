import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from './task';


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tasks: Task[] = [

  ];
  constructor( private http: HttpClient) { }

  getAll() {
    return this.http.get<Task[]>(`${environment.api}/tasks`);
  }

  getById(id: string) {
    return this.http.get<Task>(`${environment.api}/tasks/${id}`);
  }

  save(task: Task) {
    const taskBody = {
      description: task.description,
      completed: task.completed
    };

    if(task._id) {
      return this.http.put<Task>(`${environment.api}/tasks/${task._id}`, taskBody);
    } else {
      return this.http.post<Task>(`${environment.api}/tasks`, taskBody);
    }
  }

  delete(id: string) {
    return this.http.delete<Task>(`${environment.api}/tasks/${id}`);
  }

}
