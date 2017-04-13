import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {Routes,RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import {HomeComponent} from './home/home.component';
import {ShowListComponent} from './showList/showList.component';
import {ShowTimingsComponent} from './showTimings/showTimings.component';
import {ShowTimeComponent} from './showTimings/showTime/showTime.component';
import {EditShowTimingsComponent} from './showTimings/editShowTimings/editShowTimings.component';



const appRoute: Routes = [
 {path :'',component : HomeComponent},
 {path :'showList',component :ShowListComponent},
 {path :'showList/:id/:name',component :ShowListComponent},
 {path : 'showTimings',component : ShowTimingsComponent},
 {path : 'editShowTimings',component : EditShowTimingsComponent},
 {path : 'showTimings/:id',component : ShowTimeComponent},
 {path : 'showTimings/:id/:name',component : EditShowTimingsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShowListComponent,
    ShowTimingsComponent,
    ShowTimeComponent,
    EditShowTimingsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
