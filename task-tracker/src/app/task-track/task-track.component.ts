import { Component, OnInit } from '@angular/core';
import { TaskTrackService } from '../task-track.service';
import { Task } from '../task.model';


@Component({
  selector: 'app-task-track',
  templateUrl: './task-track.component.html',
  styleUrls: ['./task-track.component.css']
})
export class TaskTrackComponent implements OnInit {
  tasks:Array<Task> = [];
  constructor(public taskSer:TaskTrackService) { }

  ngOnInit(): void {
    this.taskSer.loadtaskDetails().subscribe(result=>this.tasks=result,
      error=>console.log(error))
  }

  storeTasks(taskRef:any){
    console.log(taskRef);
    this.taskSer.storeTasks(taskRef)
  }
}
