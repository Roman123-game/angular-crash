import { Component,Output,EventEmitter } from '@angular/core';
import { TaskType } from '../../objects/TaskType';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { UiService } from '../../services/ui.service';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [ FormsModule,CommonModule,FontAwesomeModule],
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css'
})
export class AddTodoComponent {
  @Output() onAddTask: EventEmitter<TaskType> = new EventEmitter();
  faBell = faBell
  text: string ='';
  day: string= '';
  reminder: boolean = false;
  showAddTask: boolean= false;
  subscription: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddTask = value));
  }

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
