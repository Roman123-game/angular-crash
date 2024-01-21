import { Component } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';
import { ButtonComponent } from '../button/button.component';
import { Router } from '@angular/router';
// import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ ButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  title: string = 'Angular Tasks';
  showAddTask: boolean = false;
  subscription: Subscription ;

  constructor(private uiService: UiService,private router: Router) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddTask = value));
  }

  toggleAddTask() {
    this.uiService.toggleAddTask();
  }
  hasRoute(route: string) {
    return this.router.url === route;
  }
}
