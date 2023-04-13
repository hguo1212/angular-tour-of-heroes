import { Component } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent {
  // Angular 只会绑定到组件的公共属性。因为在html需要绑定massageService, 所以此处必须是公用方法
  constructor(public messageService:MessageService) {

  }
}
