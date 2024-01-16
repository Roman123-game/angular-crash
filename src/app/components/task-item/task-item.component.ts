import { Component,Input, OnInit } from '@angular/core';
import { TaskType } from '../../objects/TaskType';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent implements OnInit {


  @Input() task:any;

  ngOnInit(): void {


  }
}
