import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private rs: UserService) { }

  ngOnInit(): void {
    delete this.rs.currentUser;
  }
}
