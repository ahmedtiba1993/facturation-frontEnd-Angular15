import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alert-model',
  templateUrl: './alert-model.component.html',
  styleUrls: ['./alert-model.component.css']
})
export class AlertModelComponent {

  @Input() message: string = "";
  @Input() show = true;
  @Input() type = "";
}
