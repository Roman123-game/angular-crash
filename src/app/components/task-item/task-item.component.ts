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
  @Output() onDeleteTaskEmitter: EventEmitter<TaskType>= new EventEmitter
  @Output() onToggleTaskEmitter: EventEmitter<TaskType>= new EventEmitter

  faTimes = faTimes




  ngOnInit(): void { }

  onDeleteItem(task:TaskType){
    this.onDeleteTaskEmitter.emit(task)
  }
  onToggleItem(task:TaskType){
    this.onToggleTaskEmitter.emit(task)
  }
}
