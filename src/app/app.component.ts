import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgSortTableComponent } from './ng-sort-table/ng-sort-table.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgSortTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'bootstrap-check';
}
