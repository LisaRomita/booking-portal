import { Component, OnInit, Input } from '@angular/core';
import { Message } from './models/message';
import { UserService } from 'src/app/shared/services/user.service';
import { MessageService } from 'src/app/pages/contact-us/services/message.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
  exportAs: "ngForm"
})
export class ContactUsComponent implements OnInit {

  @Input() mail: string;
  @Input() text: string;
  messaggi: Message[];

  counter: number = 0;

  submitted = false;
  m: Message = {
    id: this.counter,
    email: this.mail,
    txt: this.text
  }

  onSubmit() {
    this.submitted = true;
    this.counter++;
    
    this.ms.saveMes(this.m).subscribe(msg => {this.messaggi.push(msg)});
  }

  constructor(private us: UserService, private ms: MessageService) { }

  ngOnInit(): void {
    if(this.us.currentUser && this.us.currentUser.id != null)  this.mail = this.us.currentUser.email;
  }

}
