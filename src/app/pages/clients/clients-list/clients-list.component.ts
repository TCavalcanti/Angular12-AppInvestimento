import { Component, OnInit } from '@angular/core';
import { Client } from '../shared/client.model';
import { ClientsService } from '../shared/clients.service';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.css']
})
export class ClientsListComponent implements OnInit {

  public listClients:Array<Client> = [];

  constructor(private clientService:ClientsService) { }

  ngOnInit(): void {

    this.clientService.listAll().subscribe(
      res=>{this.listClients = res}
    )

  }


  public removerClient(clienId:any){

    console.log("Remover client de id: ", clienId)

  }

}
