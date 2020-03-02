import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable, interval } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  private firstObsSubscription: Subscription;

  constructor() { }

  ngOnInit() {
   this.firstObsSubscription = interval(1000).subscribe(count => {
      console.log(count);
    });

  // const customIntervalObservable = new Observable(observer => {
  //     let count = 0;
  //     setInterval(handler: () => {
  //       observer.next(count);
  //       count++;
  //     }, timeout: 1000);
  //   });
  }

  ngOnDestroy() {
    this.firstObsSubscription.unsubscribe();
  }

}
