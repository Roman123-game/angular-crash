import { Component } from '@angular/core';
import { TaskItemComponent } from '../task-item/task-item.component';
import { TaskType } from '../../objects/TaskType';
import { Tasks } from '../../objects/Tasks';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [TaskItemComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TaskComponent {

  tasks:TaskType[] = Tasks

}
