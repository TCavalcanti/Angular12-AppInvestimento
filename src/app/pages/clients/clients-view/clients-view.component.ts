import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Client } from '../shared/client.model';
import { ClientsService } from '../shared/clients.service';

@Component({
  selector: 'app-clients-view',
  templateUrl: './clients-view.component.html',
  styleUrls: ['./clients-view.component.css']
})
export class ClientsViewComponent implements OnInit {

  public client:Client | any = null;

  constructor(private clientsService:ClientsService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {

    const clientId:number = Number(this.activatedRoute.snapshot.paramMap.get('id'))

    this.clientsService.listById(clientId).subscribe(
      res=>this.client=res
    )

  }

}
