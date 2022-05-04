import { Component, Input, OnInit } from '@angular/core';
import { Client } from '../../clients/shared/client.model';

@Component({
  selector: 'app-investments-list-by-client',
  templateUrl: './investments-list-by-client.component.html',
  styleUrls: ['./investments-list-by-client.component.css']
})
export class InvestmentsListByClientComponent implements OnInit {


  @Input() client:Client | any = null;
  
  constructor() { }

  ngOnInit(): void {
  }

}
