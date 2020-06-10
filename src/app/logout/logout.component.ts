import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { Utenti } from '../utenti';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private rs: RestService) { }

  ngOnInit(): void {
    delete this.rs.currentUser;
  }
}
