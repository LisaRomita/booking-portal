import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { RestService } from '../rest.service';
import { Stanze } from '../stanze';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  stanza: Stanze = new Stanze(0, "", 0, 0, "");

  constructor(
    private route: ActivatedRoute,
    private rs: RestService,
    private location: Location,
  ) { }

  ngOnInit(): void {
    this.getStanza();
  }

  getStanza(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.rs.getStanza(id).subscribe(s => this.stanza = s);
  }


}
