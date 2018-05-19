import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  shouldShowSecret: boolean = false;
  buttonClicks: any[] = [];
  count: number = 1;

  doDisplayDetails(){
    this.shouldShowSecret = !this.shouldShowSecret;
    this.buttonClicks.push({
      time: new Date(),
      clickNumber: this.count++,
      isSecretShowing: this.shouldShowSecret
    });
  }

  getColor(number){
    return number >= 5 ? 'blue' : 'transparent';
  }
}
