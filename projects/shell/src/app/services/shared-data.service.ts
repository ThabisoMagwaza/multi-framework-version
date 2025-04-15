import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedDataService {
  private dataSubject = new BehaviorSubject<any>(null);
  public data$ = this.dataSubject.asObservable();

  constructor() {}

  setData(data: any) {
    this.dataSubject.next(data);
    // Also store in window object for direct access from React
    (window as any).shellData = data;
  }

  getData() {
    return this.dataSubject.value;
  }
}
