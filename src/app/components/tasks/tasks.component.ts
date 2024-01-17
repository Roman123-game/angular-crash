import { Component, OnInit } from '@angular/core';
import { TaskItemComponent } from '../task-item/task-item.component';
import { TaskType } from '../../objects/TaskType';
// import { Tasks } from '../../objects/Tasks';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TaskServiceService } from '../../services/task-service.service';
import { AddTodoComponent } from '../add-todo/add-todo.component';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [TaskItemComponent,FormsModule,CommonModule, AddTodoComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TaskComponent implements OnInit {


  tasks:TaskType[] = []

  constructor(private taskService : TaskServiceService){}

  ngOnInit(): void {
   this.taskService.getTasks().subscribe((tasks) =>this.tasks = tasks)
  }


  deleteTask(task: TaskType) {
    this.taskService
      .deleteTask(task)
      .subscribe(
        () => (this.tasks = this.tasks.filter((t) => t.id !== task.id))
      );
  }

  toggleTask(task:TaskType){
    task.reminder = !task.reminder
    this.taskService.toggleTaskService(task).subscribe()
  }

  addTask(task:TaskType){
    console.log(task)

  }
}
