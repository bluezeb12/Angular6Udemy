import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  template: `
    <p>
      {{warning}}
    </p>
  `,
  styleUrls: ['./warning-alert.component.css']
})
export class WarningAlertComponent implements OnInit {

  @Input() warning: string;

  constructor() { }

  ngOnInit() {
  }

}
