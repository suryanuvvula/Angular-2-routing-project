import {Component} from '@angular/core';

@Component ({
    selector :'app-showTimings',
    templateUrl : './showTimings.component.html'
})

export class ShowTimingsComponent{
  servers  = [
      {id:1,name :"Hello"},
      {id : 2 ,name : "Hi"}
      ];

  numbers : Number[] = [10,30,50,70];
  
}