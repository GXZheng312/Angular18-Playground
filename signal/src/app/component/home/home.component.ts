import {Component} from '@angular/core';
import {CounterService} from "../../core/counter.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(public counterService: CounterService) {
  }

  increment(): void {
    this.counterService.increment();
  }

  get count(): number {
    return this.counterService.counter;
  }
}
