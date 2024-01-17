import { Component, OnInit } from '@angular/core';
import { TaskItemComponent } from '../task-item/task-item.component';
import { TaskType } from '../../objects/TaskType';
// import { Tasks } from '../../objects/Tasks';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TaskServiceService } from '../../services/task-service.service';
@Component({
  selector: 'app-task',
  standalone: true,
  imports: [TaskItemComponent,FormsModule,CommonModule],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TaskComponent implements OnInit {


  tasks:TaskType[] = []

  constructor(private taskService : TaskServiceService){}

  ngOnInit(): void {
   this.taskService.getTasks().subscribe((tasks) =>this.tasks = tasks)
  }

}
