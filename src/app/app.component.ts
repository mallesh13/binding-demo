import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  title = 'binding-demo';
  rating = 4.3;
  starRating= this.rating *75/5;
  starColor = "green";
  customerName="Arey";
  action():void{
    alert("welcome");
    this.title="bindind-demo-in-angular";
  }
}
