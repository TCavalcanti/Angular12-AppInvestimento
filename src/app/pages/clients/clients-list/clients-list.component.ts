import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Client } from '../shared/client.model';
import { ClientsService } from '../shared/clients.service';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.css']
})
export class ClientsListComponent implements OnInit {

  public listClients:Array<Client> = [];

  constructor(private clientService:ClientsService, private toastr:ToastrService) { }

  ngOnInit(): void {

    this.clientService.listAll().subscribe(
      res=>{this.listClients = res}
    )

  }


  public removerClient(clientId:any){

    if(!window.confirm(`Deseja excluir o cliente de id: ${clientId}`)){
      return;
    }

    this.clientService.delete(clientId).subscribe(
      res => {
        this.toastr.success(`Cliente de ID ${clientId} excluído com sucesso!`)
        this.listClients = this.listClients.filter( e => e.id !== clientId);
      },
      err =>{
        this.toastr.error(`Falha ao excluir cliente de ID ${clientId}!`)
      }
    )

  }




  updateList($event:Client){

    this.listClients.push($event)

  }

}
