import { Component } from '@angular/core';
import { SharedDataService } from '../services/shared-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  template: `
    <div class="p-4">
      <h1 class="text-2xl mb-4">Welcome to the Shell App</h1>

      <div class="mb-4">
        <input
          type="text"
          [(ngModel)]="message"
          placeholder="Enter message for React app"
          class="border p-2 rounded mr-2"
        />
        <button
          (click)="sendDataAndNavigate()"
          class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Send to React App
        </button>
      </div>

      <div *ngIf="currentData$ | async as data" class="mt-4">
        <h2 class="text-lg font-semibold">Current Shared Data:</h2>
        <pre class="bg-gray-100 p-2 rounded mt-2">{{ data | json }}</pre>
      </div>
    </div>
  `,
})
export class HomeComponent {
  message = '';
  currentData$ = this.sharedDataService.data$;

  constructor(
    private sharedDataService: SharedDataService,
    private router: Router
  ) {}

  sendDataAndNavigate() {
    if (this.message) {
      this.sharedDataService.setData({
        message: this.message,
        timestamp: new Date(),
        source: 'HomeComponent',
      });
      this.router.navigate(['/react']);
    }
  }
}
