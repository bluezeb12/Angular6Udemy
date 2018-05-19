import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  styleUrls: ['./success-alert.component.css']
})
export class SuccessAlertComponent implements OnInit {

  @Input() success: string = "";
  
  constructor() { }

  ngOnInit() {
  }

}
