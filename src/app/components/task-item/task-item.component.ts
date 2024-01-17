import { Component,Input, OnInit,Output,EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TaskType } from '../../objects/TaskType';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [ FormsModule,CommonModule,FontAwesomeModule],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent implements OnInit {
  @Input() task:any;
  @Output() onDeleteTask: EventEmitter<TaskType>= new EventEmitter

  faTimes = faTimes


  ngOnInit(): void { }

  onDelete(task:TaskType){
    this.onDeleteTask.emit(task)
  }
}
