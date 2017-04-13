import {Component,OnInit,OnDestroy} from '@angular/core';

import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
import {Subscription} from 'rxjs/Subscription';
import 'rxjs/Rx';

@Component({
    selector : 'app-showList',
    templateUrl : './showList.component.html'
})

export class ShowListComponent implements OnInit,OnDestroy{

    numbersSubscription : Subscription;
    myObsSubscription : Subscription;

      constructor(){

      }

      ngOnInit(){
        const myNumbers = Observable.interval(1000);
         this.numbersSubscription = myNumbers.subscribe(
         (number : number) => {
              console.log(number);
          }
      );

      const myObs = Observable.create((observer : Observer<string>) => {
              setTimeout(() => {
                     observer.next('first package');
              },2000);
              setTimeout(()=>{
                  observer.next('second package');
              },4000);
              setTimeout(()=>{
                  observer.next('third package');
              },6000);
               setTimeout(()=>{
                  observer.complete();
              },8000);
               setTimeout(()=>{
                  observer.next('fourth package');
              },9000);

      });

      this.myObsSubscription = myObs.subscribe(
          (data : string) => {
           console.log(data);
      },
      (error : string) => {
          console.log(error);
      },
      () => {console.log("Completed");}

      )

      }

      ngOnDestroy (){
          this.myObsSubscription.unsubscribe();
          this.numbersSubscription.unsubscribe();
      }

     
}