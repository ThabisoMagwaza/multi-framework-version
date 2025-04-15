import { Component, OnInit, OnDestroy } from '@angular/core';
import { SharedDataService } from '../services/shared-data.service';
import { WebComponentWrapper } from '@angular-architects/module-federation-tools';

@Component({
  selector: 'app-react-wrapper',
  template: `
    <div #container>
      <ng-container *ngComponentOutlet="WebComponentWrapper"></ng-container>
    </div>
  `,
})
export class ReactWrapperComponent implements OnInit, OnDestroy {
  WebComponentWrapper = WebComponentWrapper;
  private eventHandlers: { [key: string]: (event: CustomEvent) => void } = {};

  constructor(private sharedDataService: SharedDataService) {}

  ngOnInit() {
    // Set up event listeners for React component
    this.eventHandlers.onDataRequest = (event: CustomEvent) => {
      const data = this.sharedDataService.getData();
      // Send data to React component
      const reactElement = document.querySelector('react-element');
      if (reactElement) {
        reactElement.dispatchEvent(
          new CustomEvent('shellData', { detail: data })
        );
      }
    };

    // Listen for data requests from React
    document.addEventListener('requestData', this.eventHandlers.onDataRequest);
  }

  ngOnDestroy() {
    // Clean up event listeners
    document.removeEventListener(
      'requestData',
      this.eventHandlers.onDataRequest
    );
  }
}
