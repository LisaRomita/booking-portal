import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Stanze } from '../../shared/models/stanze';
import { StanzeService } from 'src/app/shared/services/stanze.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailComponent implements OnInit {

  stanza: Stanze = {
    id: "",
    tipo: "",
    prezzo: "",
    rate: "",
    src: ""
  };

  constructor(
    private route: ActivatedRoute,
    private ss: StanzeService,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.getStanza();
  }

  getStanza(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    if(this.ss.getStanza(id))
      this.ss.getStanza(id).subscribe(s => {
        this.stanza = s;
        this.cd.markForCheck();
      });
  }


}
