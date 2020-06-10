import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../message';
import { RestService } from '../rest.service';

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

  onSubmit() {
    this.submitted = true;
    this.counter++;
    this.rs.saveMes(new Message(this.counter, this.mail, this.text)).subscribe(msg => {this.messaggi.push(msg)});
  }

  constructor(private rs: RestService) { }

  ngOnInit(): void {
    if(this.rs.currentUser && this.rs.currentUser.id != null)  this.mail = this.rs.currentUser.email;
  }

}
