import { Component,Output,EventEmitter } from '@angular/core';
import { TaskType } from '../../objects/TaskType';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [ FormsModule],
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css'
})
export class AddTodoComponent {
  @Output() onAddTask: EventEmitter<TaskType> = new EventEmitter();
  text: string ='';
  day: string= '';
  reminder: boolean = false;
  showAddTask: boolean= false;

  onSubmit(){
    if(!this.text){
      alert("Please ad TodoText");
      return;
    }

  const newTask: TaskType = {
    text: this.text,
    day: this.day,
    reminder: this.reminder,
  };

  this.onAddTask.emit(newTask)


  this.text = '';
  this.day = '';
  this.reminder = false;
}
}