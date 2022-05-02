import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Client } from '../shared/client.model';
import { ClientsService } from '../shared/clients.service';

@Component({
  selector: 'app-clients-edit',
  templateUrl: './clients-edit.component.html',
  styleUrls: ['./clients-edit.component.css']
})
export class ClientsEditComponent implements OnInit {

  public formClient:FormGroup;

  constructor(private fb:FormBuilder,
                 private clientsService:ClientsService, 
                 private toastr:ToastrService,
                 private router:Router,
                private activedRoute:ActivatedRoute) { 

    this.formClient = this.buildFormClient();

  }

  ngOnInit(): void {

    const clientId = Number(this.activedRoute.snapshot.paramMap.get('id'));

    console.log('Client ID: ',clientId)

    this.clientsService.listById(clientId).subscribe(
      res =>{
        // console.log(res)
        this.formClient.patchValue(res)
      },
      err =>{
        this.toastr.error(err)
      }
    )
  }


  private buildFormClient():FormGroup{
    return this.fb.group({
     id: [null, Validators.required],
     name: [null, Validators.required],
     email: [null, [Validators.required, Validators.email]] 
    })
  }

  public isFormControlInvalid(controlName:string):boolean{
    return !!(this.formClient.get(controlName)?.invalid && this.formClient.get(controlName)?.touched)
  }


  public updateClient(){
    const client:Client = this.formClient.value as Client;

    this.clientsService.update(client).subscribe(
      res =>{
        this.formClient.reset();
        this.toastr.success(`Client ${client.name} atualizado.`)
        this.router.navigate(['clients'])
      },
      err=>{
        this.toastr.error(`Falha ao atualziar ${client.name}.`)
      }
    )

  }

}
