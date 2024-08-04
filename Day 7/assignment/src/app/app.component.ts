import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'assignment';
  oddNumbers:number[] = [];
  evenNumbers:number[] = [];

  OnIntervalFired(firedNumber:number){
    if(firedNumber % 2 !==0){
      this.oddNumbers.push(firedNumber);
    }else{
      this.evenNumbers.push(firedNumber);
    }
  }
}
