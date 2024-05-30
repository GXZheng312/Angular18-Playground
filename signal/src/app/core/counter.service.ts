import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  private _counter = 0;

  constructor() {
    this.startCounter();
  }

  get counter() : number {
    return this._counter;
  }

  increment() {
    this._counter++;
  }

  startCounter() {
    setInterval(() => {
      this.increment();
    }, 1000);
  }
}
