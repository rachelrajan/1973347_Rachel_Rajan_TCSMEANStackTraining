import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskTrackService {
  constructor(public http:HttpClient) { }

  storeTasks(login: any) {
      this.http.post("http://localhost:3000/tasks",login).subscribe(result=>console.log(result),
      error=>console.log(error))
    }

  loadtaskDetails():Observable<Task[]> {
      return this.http.get<Task[]>("./assets/task.json");
    }

}



