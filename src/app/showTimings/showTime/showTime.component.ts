import {Component} from '@angular/core';
import {OnInit,OnDestroy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Params} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';

@Component({
    selector : 'app-showTime',
    templateUrl : './showTime.component.html'
})

export class ShowTimeComponent implements OnInit , OnDestroy{

    showTimes : {id :string,name : string};

     paramsSubscription : Subscription;

    constructor(private route : ActivatedRoute){

    }

    ngOnInit(){
        this.showTimes = {
                id : this.route.snapshot.params["id"],
                name : this.route.snapshot.params["name"]

        };

        this.paramsSubscription = this.route.params.subscribe((params : Params) => {
                this.showTimes.id = params["id"];
                this.showTimes.name = params["name"];
        });

    }

    ngOnDestroy(){
            this.paramsSubscription.unsubscribe();
    }

}



