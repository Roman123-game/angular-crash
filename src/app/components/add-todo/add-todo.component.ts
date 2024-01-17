import { Component,Output,EventEmitter } from '@angular/core';
import { TaskType } from '../../objects/TaskType';

@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [],
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css'
})
export class AddTodoComponent {
  @Output() onAddTask: EventEmitter<TaskType> = new EventEmitter();
  text: string ='';
  day: string= '';
  reminder: boolean = false;
  showAddTask: boolean= false;
}
